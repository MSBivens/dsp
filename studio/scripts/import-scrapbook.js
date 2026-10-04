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
 *   --order auto|name|modified
 *                         auto (default) sorts by file name when every name
 *                         contains a number (scan2 before scan10), otherwise
 *                         by file modified time.
 *   --max-edge 4000       Shrink scans larger than this many pixels on their
 *                         long edge before upload (JPEG, quality 90).
 *
 * The document uses a fixed ID (scrapbook-<slug>). If it already exists the
 * script stops, so re-running never overwrites reordering or captions done in
 * the Studio; Sanity de-duplicates identical uploads.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { getCliClient } from "sanity/cli";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".tif", ".tiff"]);
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

// Ends by setting the exit code rather than calling process.exit(): exiting
// while sharp's worker threads are shutting down crashes Node on Windows.
process.exitCode = await main();

async function main() {
  const usageErrors = [
    !dir && "--dir is required",
    dir && !fs.existsSync(dir) && `folder not found: ${dir}`,
    !title && "--title is required",
    !["auto", "name", "modified"].includes(order) && "--order must be auto, name or modified",
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

  console.log(`${apply ? "APPLY" : "DRY RUN"}: "${title}" → ${docId} (/history/scrapbooks/${slug})`);
  console.log(`Order: by ${sortBy === "name" ? "file name" : "file modified time"}${order === "auto" ? " (auto)" : ""}\n`);
  for (const [i, f] of files.entries()) {
    const dims = f.width ? `${f.width}×${f.height}` : "?";
    const shrink = maxEdge && Math.max(f.width ?? 0, f.height ?? 0) > maxEdge ? `  → shrink to ${maxEdge}px` : "";
    console.log(`  ${String(i + 1).padStart(3)}  ${f.name.padEnd(36)} ${dims.padStart(11)}  ${mb(f.size).padStart(8)}${shrink}`);
  }
  console.log(`\n${files.length} pages, ${mb(files.reduce((n, f) => n + f.size, 0))} in total.`);
  if (order === "auto" && sortBy === "modified") {
    console.log("Note: not every file name has a number, so pages are in file modified-time order. Check it against the album.");
  }
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
      ? await sharp(f.filePath)
          .rotate()
          .resize({ width: maxEdge, height: maxEdge, fit: "inside", withoutEnlargement: true })
          .jpeg({ quality: 90, mozjpeg: true })
          .toBuffer()
      : fs.readFileSync(f.filePath);
    for (let attempt = 1; ; attempt++) {
      try {
        return await client.assets.upload("image", body, { filename: f.name });
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
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

  const files = entries.filter(isImage).map((e) => {
    const filePath = path.join(dir, e.name);
    const stat = fs.statSync(filePath);
    return { name: e.name, filePath, size: stat.size, modified: stat.mtimeMs };
  });

  const allNumbered = files.length > 0 && files.every((f) => /\d/.test(f.name));
  const sortBy = order === "auto" ? (allNumbered ? "name" : "modified") : order;
  files.sort((a, b) =>
    sortBy === "name" ? collator.compare(a.name, b.name) : a.modified - b.modified || collator.compare(a.name, b.name),
  );

  for (const f of files) {
    f.sha1 = crypto.createHash("sha1").update(fs.readFileSync(f.filePath)).digest("hex");
    try {
      const { width, height } = await sharp(f.filePath).metadata();
      Object.assign(f, { width, height });
    } catch (err) {
      f.error = err.message;
    }
  }
  return { files, skipped, sortBy };
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
  for (const f of files) if (!firstNameBySha1.has(f.sha1)) firstNameBySha1.set(f.sha1, f.name);
  const matches = (p, f) => f && (p.sha1 === f.sha1 || p.filename === f.name || p.filename === firstNameBySha1.get(f.sha1));
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
