/**
 * Imports one scrapbook (a folder of scanned pages, e.g. an unzipped Google
 * Photos "Download all") into Sanity, followed by a verification pass.
 *
 *   npx sanity exec scripts/import-scrapbook.js --with-user-token -- --dir "<folder>" --title "<title>"
 *       Dry run: lists the pages in import order, with sizes and dimensions
 *   ... -- --dir "<folder>" --title "<title>" --apply    Upload + create, then verify
 *   ... -- --dir "<folder>" --title "<title>" --verify   Verify only
 *
 * Options:
 *   --years "1965–1972"   --description "..."   --display-order 1
 *   --slug <slug>         Page address (default: generated from the title)
 *   --order auto|name|year|modified
 *       name      File name, numbers compared as numbers (Scan 2 before Scan 10).
 *       year      Cover, intro and title pages first, then by the year in each file
 *                 name ("1954 DG …", "87-88 Composite", "PC 98 …"), then
 *                 undated pages grouped by name, with "Missing …" pages last.
 *       modified  File modified time (not useful for unzipped downloads,
 *                 which all get the time they were unzipped).
 *       auto      (default) name for numbered sequences from a scanner or
 *                 camera (every name the same apart from its number),
 *                 otherwise year.
 *   --max-edge 4000       Shrink scans larger than this many pixels on their
 *                         long edge before upload (JPEG, quality 90).
 *
 * HEIC photos (iPhone) are converted to JPEG, since browsers other than
 * Safari can't show them.
 *
 * The document uses a fixed ID (scrapbook-<slug>). If it already exists the
 * script stops, so re-running never overwrites reordering or captions done in
 * the Studio; Sanity de-duplicates identical uploads.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import convertHeic from "heic-convert";
import sharp from "sharp";
import { getCliClient } from "sanity/cli";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".tif", ".tiff", ".heic", ".heif"]);
const HEIC_EXTENSIONS = new Set([".heic", ".heif"]);
const ORDERS = ["auto", "name", "year", "modified"];
const UPLOAD_CONCURRENCY = 4;
const UPLOAD_ATTEMPTS = 3;

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const option = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : undefined;
};

const dir = option("dir");
const title = option("title");
const years = option("years");
const description = option("description");
const displayOrder = option("display-order") ? Number(option("display-order")) : undefined;
const order = option("order") ?? "auto";
const maxEdge = option("max-edge") ? Number(option("max-edge")) : undefined;
const apply = flag("apply");
const verifyOnly = flag("verify");

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);

const mb = (bytes) => `${(bytes / 1e6).toFixed(1)} MB`;
const sha1 = (buffer) => crypto.createHash("sha1").update(buffer).digest("hex");
const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

// Ends by setting the exit code rather than calling process.exit(): exiting
// while sharp's worker threads are shutting down crashes Node on Windows.
process.exitCode = await main();

async function main() {
  const usageErrors = [
    !dir && "--dir is required",
    dir && !fs.existsSync(dir) && `folder not found: ${dir}`,
    !title && "--title is required",
    !ORDERS.includes(order) && `--order must be one of ${ORDERS.join(", ")}`,
    maxEdge !== undefined && !(maxEdge >= 1000) && "--max-edge must be a number of pixels, at least 1000",
    displayOrder !== undefined &&
      !(Number.isInteger(displayOrder) && displayOrder >= 1) &&
      "--display-order must be a whole number from 1",
  ].filter(Boolean);
  if (usageErrors.length) {
    console.error(`${usageErrors.join("\n")}\n\nSee the comment at the top of scripts/import-scrapbook.js for usage.`);
    return 1;
  }

  const slug = option("slug") ?? slugify(title);
  const docId = `scrapbook-${slug}`;
  const client = getCliClient({ apiVersion: "2025-01-01" });
  const { files, skipped, sortBy } = await collectPages();

  if (verifyOnly) return (await verify(client, docId, files)) ? 0 : 1;

  // --- Dry run report -------------------------------------------------------

  const seen = new Map();
  const duplicates = [];
  for (const f of files) {
    if (seen.has(f.sha1)) duplicates.push(`${f.name} is identical to ${seen.get(f.sha1)}`);
    else seen.set(f.sha1, f.name);
  }
  const problems = [
    files.length === 0 && "no images found",
    ...files.filter((f) => f.error).map((f) => `${f.name}: unreadable image (${f.error})`),
  ].filter(Boolean);

  const sortLabels = { name: "file name", year: "year in file name", modified: "file modified time" };
  console.log(`${apply ? "APPLY" : "DRY RUN"}: "${title}" → ${docId} (/history/scrapbooks/${slug})`);
  console.log(`Order: by ${sortLabels[sortBy]}${order === "auto" ? " (auto)" : ""}\n`);
  for (const [i, f] of files.entries()) {
    const dims = f.width ? `${f.width}×${f.height}` : "?";
    const year = sortBy === "year" ? `${f.orderKey.label.padEnd(7)} ` : "";
    const notes = [
      f.converted && "HEIC → JPEG",
      maxEdge && Math.max(f.width ?? 0, f.height ?? 0) > maxEdge && `shrink to ${maxEdge}px`,
    ].filter(Boolean);
    console.log(
      `  ${String(i + 1).padStart(3)}  ${year}${f.name.padEnd(60)} ${dims.padStart(11)}  ${mb(f.size).padStart(8)}${notes.length ? `  (${notes.join(", ")})` : ""}`,
    );
  }
  console.log(`\n${files.length} pages, ${mb(files.reduce((n, f) => n + f.size, 0))} in total.`);
  if (skipped.length) console.log(`Skipped (not images): ${skipped.join(", ")}`);
  if (duplicates.length) console.log(`Warning, duplicate files (both will be imported):\n  ${duplicates.join("\n  ")}`);
  if (problems.length) {
    console.error(`\n${problems.length} problem(s), nothing written:\n  ${problems.join("\n  ")}`);
    return 1;
  }

  const existing = await client.fetch(`*[_id in [$id, "drafts." + $id]][0]._id`, { id: docId });
  if (existing) {
    console.error(`\n${existing} already exists, nothing written. Edit it in the Studio, or delete it there first to re-import.`);
    return 1;
  }
  if (!apply) {
    console.log("\nDry run OK. Re-run with --apply to write.");
    return 0;
  }

  // --- Upload and create ----------------------------------------------------

  async function upload(f) {
    const tooBig = maxEdge && Math.max(f.width, f.height) > maxEdge;
    const body = tooBig
      ? await sharp(f.converted ?? f.filePath)
          .rotate()
          .resize({ width: maxEdge, height: maxEdge, fit: "inside", withoutEnlargement: true })
          .jpeg({ quality: 90, mozjpeg: true })
          .toBuffer()
      : (f.converted ?? fs.readFileSync(f.filePath));
    for (let attempt = 1; ; attempt++) {
      try {
        return await client.assets.upload("image", body, { filename: f.uploadName });
      } catch (err) {
        if (attempt >= UPLOAD_ATTEMPTS) throw new Error(`${f.name}: ${err.message}`);
        await new Promise((r) => setTimeout(r, 2000 * attempt));
      }
    }
  }

  const assets = new Array(files.length);
  let next = 0;
  let done = 0;
  await Promise.all(
    Array.from({ length: UPLOAD_CONCURRENCY }, async () => {
      while (next < files.length) {
        const i = next++;
        assets[i] = await upload(files[i]);
        done++;
        process.stdout.write(`\rUploaded ${done}/${files.length}`);
      }
    }),
  );
  console.log();

  await client.createIfNotExists({
    _id: docId,
    _type: "scrapbook",
    title,
    slug: { _type: "slug", current: slug },
    ...(years ? { years } : {}),
    ...(description ? { description } : {}),
    ...(displayOrder ? { displayOrder } : {}),
    pages: assets.map((asset, i) => ({
      _type: "image",
      _key: `page-${String(i + 1).padStart(3, "0")}`,
      asset: { _type: "reference", _ref: asset._id },
    })),
  });
  console.log(`✔ Created ${docId}`);
  return (await verify(client, docId, files)) ? 0 : 1;
}

// --- Collect and order the pages ---------------------------------------------

async function collectPages() {
  const entries = fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isFile() && !e.name.startsWith("."));
  const isImage = (e) => IMAGE_EXTENSIONS.has(path.extname(e.name).toLowerCase());
  const skipped = entries.filter((e) => !isImage(e)).map((e) => e.name);

  const files = entries.filter(isImage).map((e) => {
    const filePath = path.join(dir, e.name);
    const stat = fs.statSync(filePath);
    return { name: e.name, uploadName: e.name, filePath, size: stat.size, modified: stat.mtimeMs, orderKey: orderKey(e.name) };
  });
  // Without a page named "Cover", the shortest title page ("Dream Girl
  // Scrapbook" rather than "Dream Girl History Scrapbook") is the cover.
  if (!files.some((f) => f.orderKey.group === 0)) {
    const [cover] = files.filter((f) => f.orderKey.group === 2).sort((a, b) => a.name.length - b.name.length);
    if (cover) Object.assign(cover.orderKey, { group: 0, label: "cover" });
  }

  // Numbered sequences ("Scan 1", "IMG_0042") sort by name; descriptive
  // names sort by the year they mention.
  const sequence = files.length > 0 && new Set(files.map((f) => f.name.toLowerCase().replace(/\d+/g, "#"))).size === 1;
  const sortBy = order === "auto" ? (sequence ? "name" : "year") : order;
  const byName = (a, b) => collator.compare(a.name, b.name);
  const compare = {
    name: byName,
    modified: (a, b) => a.modified - b.modified || byName(a, b),
    year: (a, b) =>
      a.orderKey.group - b.orderKey.group ||
      a.orderKey.year - b.orderKey.year ||
      collator.compare(a.orderKey.text, b.orderKey.text) ||
      byName(a, b),
  }[sortBy];
  files.sort(compare);

  for (const f of files) {
    const original = fs.readFileSync(f.filePath);
    f.sha1 = sha1(original);
    try {
      if (HEIC_EXTENSIONS.has(path.extname(f.name).toLowerCase())) {
        f.converted = Buffer.from(await convertHeic({ buffer: original, format: "JPEG", quality: 0.92 }));
        f.uploadName = f.name.replace(/\.[^.]+$/, ".jpg");
      }
      const { width, height } = await sharp(f.converted ?? original).metadata();
      Object.assign(f, { width, height });
    } catch (err) {
      f.error = err.message;
    }
    f.uploadSha1 = f.converted ? sha1(f.converted) : f.sha1;
  }
  return { files, skipped, sortBy };
}

/**
 * Sort key for --order year. Groups: 0 cover, 1 intro, 2 other undated title
 * pages ("… Scrapbook", "… Album"; the shortest becomes the cover when no
 * page is named "Cover"), 3 dated pages by year, 4 other undated
 * pages, 5 "Missing …" pages. Within a group, pages sort by name with common
 * abbreviations expanded, so "All Yrs Athletics Pg 3" follows "All Years
 * Athletics Pg. 2".
 */
function orderKey(fileName) {
  const base = fileName.replace(/\.[^.]+$/, "");
  const lower = base.toLowerCase();
  const text = lower
    .replace(/\b(yrs?|year)\b/g, "years")
    .replace(/\bpage\b/g, "pg")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
  const year = yearFromName(base);
  const key = (group) => ({ group, year: group === 3 ? year : 0, text, label: group === 3 ? String(year) : ["cover", "intro", "title", "", "undated", "last"][group] });
  if (/\bcover\b/.test(lower)) return key(0);
  if (/\bintro(duction)?\b/.test(lower)) return key(1);
  if (/\bmissing\b/.test(lower)) return key(5);
  if (year) return key(3);
  if (/\b(scrapbook|album)$/.test(lower)) return key(2);
  return key(4);
}

/** First year mentioned in a file name: 1954, "1951 - 52", "87-88", "PC 98", "60_s", "Yearbook 59". */
function yearFromName(base) {
  const full = base.match(/(?<!\d)(19[0-9]\d|20[0-4]\d)(?!\d)/);
  if (full) return Number(full[1]);
  // Two-digit years: pledge classes, school years, or a lone number that
  // isn't an ordinal ("30th") or a copy number ("(2)").
  const short =
    base.match(/\bPC\s*(\d{2})(?!\d)/i) ??
    base.match(/(?<!\d)(\d{2})\s*-\s*\d{2}(?!\d)/) ??
    base.match(/(?<![\d(])(\d{2})(?!\d|\)|st|nd|rd|th)/i);
  if (!short) return null;
  const yy = Number(short[1]);
  return yy >= 40 ? 1900 + yy : 2000 + yy;
}

// --- Verification -------------------------------------------------------------

async function verify(client, docId, files) {
  const doc = await client.fetch(
    `*[_id == $id][0]{ title, "slug": slug.current,
      "pages": pages[]{ "url": asset->url, "filename": asset->originalFilename, "sha1": asset->sha1hash } }`,
    { id: docId },
  );
  if (!doc) {
    console.log(`\nFAILURE: ${docId} not found.`);
    return false;
  }
  const failures = [];
  const pages = doc.pages ?? [];
  if (pages.length !== files.length) failures.push(`${pages.length} pages in Sanity, ${files.length} files in the folder`);
  // Sanity stores identical files once, under the name first uploaded, so a
  // page also matches when its content does (or its shrunk copy's name does).
  const firstNameBySha1 = new Map();
  for (const f of files) if (!firstNameBySha1.has(f.sha1)) firstNameBySha1.set(f.sha1, f.uploadName);
  const matches = (p, f) =>
    f && (p.sha1 === f.uploadSha1 || p.filename === f.uploadName || p.filename === firstNameBySha1.get(f.sha1));
  const outOfOrder = pages.filter((p, i) => !matches(p, files[i])).length;
  if (outOfOrder) failures.push(`${outOfOrder} page(s) differ from the folder order (expected if pages were reordered in the Studio)`);
  for (const [i, p] of pages.entries()) {
    const res = p.url && (await fetch(`${p.url}?w=200`, { method: "HEAD" }).catch(() => null));
    if (!res?.ok || !res.headers.get("content-type")?.startsWith("image/")) failures.push(`page ${i + 1}: image not served (${res?.status})`);
  }
  console.log(`\nSanity: "${doc.title}" (/history/scrapbooks/${doc.slug}), ${pages.length} pages`);
  console.log(failures.length ? `FAILURES:\n  ${failures.join("\n  ")}` : "Page count and order match the folder; every page is served as an image.");
  return failures.length === 0;
}
