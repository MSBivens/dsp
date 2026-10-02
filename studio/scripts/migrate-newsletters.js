/**
 * One-time migration of Gamma Eye editions from the website's data file and
 * public/files/GammaEye/ into Sanity, followed by a verification pass.
 *
 *   npx sanity exec scripts/migrate-newsletters.js --with-user-token              Dry run
 *   npx sanity exec scripts/migrate-newsletters.js --with-user-token -- --apply   Upload + create, then verify
 *   npx sanity exec scripts/migrate-newsletters.js --with-user-token -- --verify  Verify only
 *
 * Documents use fixed IDs (newsletter-ed<edition>) and createIfNotExists, so
 * re-running never overwrites edits made in the Studio; Sanity de-duplicates
 * identical file uploads.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { getCliClient } from "sanity/cli";

const here = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(here, "../../dsp");
const dataFile = path.join(siteDir, "src/app/components/data/newsletters.js");
const apply = process.argv.includes("--apply");
const verifyOnly = process.argv.includes("--verify");
const client = getCliClient({ apiVersion: "2025-01-01" });

// The 12th edition ("Fall 2021", masthead January 2022) was listed as
// November 2022. Dated December 2021 like the other fall editions.
const DATE_FIXES = { 12: "2021-12-01" };

const { default: newsletters } = await import(pathToFileURL(dataFile).href);

const items = newsletters.map((n) => {
  const edition = Number(n.pdf_url.match(/ED(\d+)\.pdf$/)?.[1]);
  return {
    edition,
    oldPath: n.pdf_url,
    filePath: path.join(siteDir, "public", n.pdf_url),
    doc: {
      _id: `newsletter-ed${edition}`,
      _type: "newsletter",
      edition,
      title: n.title,
      issueDate: DATE_FIXES[edition] ?? n.issue_date,
      ...(n.description ? { description: n.description } : {}),
    },
  };
});

async function verify() {
  const docs = await client.fetch(
    `*[_type == "newsletter" && !(_id in path("drafts.**"))]{
      _id, edition, title, issueDate, description,
      "url": pdf.asset->url, "size": pdf.asset->size
    }`,
  );
  const failures = [];
  for (const { doc, filePath, oldPath } of items) {
    const d = docs.find((x) => x._id === doc._id);
    if (!d) {
      failures.push(`${doc._id}: missing`);
      continue;
    }
    for (const field of ["edition", "title", "issueDate", "description"]) {
      if ((d[field] ?? null) !== (doc[field] ?? null)) failures.push(`${doc._id}.${field}: ${d[field]} != ${doc[field]}`);
    }
    const localSize = fs.statSync(filePath).size;
    if (d.size !== localSize) failures.push(`${doc._id}: file size ${d.size} != local ${localSize}`);
    const res = d.url && (await fetch(d.url, { method: "HEAD" }));
    if (!res?.ok || !res.headers.get("content-type")?.includes("pdf")) failures.push(`${doc._id}: PDF not served (${res?.status})`);
    console.log(`  ${oldPath.padEnd(32)} -> ${d.url}`);
  }
  console.log(`\nSanity: ${docs.length} editions; data file: ${items.length}`);
  console.log(failures.length ? `FAILURES:\n  ${failures.join("\n  ")}` : "All fields match; every PDF matches the local file size and is served as a PDF.");
  return failures.length === 0;
}

if (verifyOnly) {
  process.exit((await verify()) ? 0 : 1);
}

const problems = items.filter((i) => !i.edition || !fs.existsSync(i.filePath)).map((i) => `${i.oldPath}: bad edition or missing file`);
console.log(`${apply ? "APPLY" : "DRY RUN"}: ${items.length} editions`);
for (const { doc, filePath } of items) {
  const size = fs.existsSync(filePath) ? `${(fs.statSync(filePath).size / 1e6).toFixed(1)} MB` : "MISSING";
  console.log(`  ${doc._id.padEnd(16)} ${doc.issueDate}  ${doc.title.padEnd(24)} ${path.basename(filePath)} (${size})`);
}
if (problems.length) {
  console.error(`\n${problems.length} problem(s), nothing written:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
if (!apply) {
  console.log("\nDry run OK. Re-run with -- --apply to write.");
  process.exit(0);
}

for (const { doc, filePath } of items) {
  const asset = await client.assets.upload("file", fs.createReadStream(filePath), {
    filename: path.basename(filePath),
    contentType: "application/pdf",
  });
  await client.createIfNotExists({
    ...doc,
    pdf: { _type: "file", asset: { _type: "reference", _ref: asset._id } },
  });
  console.log(`✔ ${doc.title}`);
}
console.log("\nVerifying (old path -> new URL, for the cleanup redirects):");
process.exit((await verify()) ? 0 : 1);
