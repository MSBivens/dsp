/**
 * One-time migration of veterans from the website's data file into Sanity.
 *
 *   node scripts/migrate-veterans.js           Dry run: validate and print, write nothing
 *   node scripts/migrate-veterans.js --apply   Upload photos and create/replace documents
 *
 * --apply needs SANITY_WRITE_TOKEN in studio/.env (see .env.example).
 * Re-running REPLACES each document, discarding edits made in the Studio.
 * Documents use fixed IDs (veteran-<slug>) and Sanity
 * de-duplicates identical image uploads.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createClient } from "@sanity/client";
import { BRANCHES, CONFLICTS } from "../schemaTypes/veteran.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(here, "../../dsp");
const dataFile = path.join(siteDir, "src/app/components/data/veterans.js");
const apply = process.argv.includes("--apply");

// The data file declares Joel Peterson's `conflict` twice, so only the last
// value survives import. Restore both here.
const CONFLICT_OVERRIDES = {
  "joel-peterson": ["Operation Iraqi Freedom", "Operation Enduring Freedom"],
};

// Default crop focus on the site today is "center 25%".
const DEFAULT_FOCUS_Y = 0.25;

let keyCounter = 0;
const key = () => `k${(keyCounter++).toString(36)}`;

const LOC_URL_TYPO = "https://www.loc.gov/ vets";
const LOC_URL = "https://www.loc.gov/vets";

function toBlocks(story) {
  return story
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((text) => {
      const block = { _type: "block", _key: key(), style: "normal", markDefs: [], children: [] };
      // Ken Agenbroad's story links the Veterans History Project with a stray
      // space in the URL; turn it into a working link.
      const i = text.indexOf(LOC_URL_TYPO);
      if (i === -1) {
        block.children.push({ _type: "span", _key: key(), text, marks: [] });
      } else {
        const linkKey = key();
        block.markDefs.push({ _type: "link", _key: linkKey, href: LOC_URL });
        block.children.push(
          { _type: "span", _key: key(), text: text.slice(0, i), marks: [] },
          { _type: "span", _key: key(), text: LOC_URL, marks: [linkKey] },
          { _type: "span", _key: key(), text: text.slice(i + LOC_URL_TYPO.length), marks: [] },
        );
      }
      return block;
    });
}

function focusY(photoPosition) {
  const match = photoPosition?.match(/(\d+(?:\.\d+)?)%\s*$/);
  return match ? Number(match[1]) / 100 : DEFAULT_FOCUS_Y;
}

const blank = (v) => v == null || String(v).trim() === "";

const { default: veterans } = await import(pathToFileURL(dataFile).href);

const problems = [];
const docs = veterans.map((v) => {
  const conflicts = CONFLICT_OVERRIDES[v.id] ?? (blank(v.conflict) ? [] : [v.conflict]);
  const photoPath = v.photo_url ? path.join(siteDir, "public", v.photo_url) : null;

  if (!blank(v.branch) && !BRANCHES.includes(v.branch)) problems.push(`${v.id}: unknown branch "${v.branch}"`);
  for (const c of conflicts) if (!CONFLICTS.includes(c)) problems.push(`${v.id}: unknown conflict "${c}"`);
  if (photoPath && !fs.existsSync(photoPath)) problems.push(`${v.id}: photo not found ${photoPath}`);

  const doc = {
    _id: `veteran-${v.id}`,
    _type: "veteran",
    name: v.name,
    slug: { _type: "slug", current: v.id },
  };
  // Blank stays absent so the site shows "Not yet documented".
  if (!blank(v.pledge_class)) doc.pledgeClass = Number(v.pledge_class);
  if (!blank(v.branch)) doc.branches = [v.branch];
  if (conflicts.length) doc.conflicts = conflicts;
  if (!blank(v.rank)) doc.rank = v.rank;
  if (!blank(v.years_of_service)) doc.yearsOfService = v.years_of_service;
  if (!blank(v.short_bio)) doc.shortBio = v.short_bio.trim();
  if (!blank(v.full_story)) doc.fullStory = toBlocks(v.full_story);
  if (!blank(v.decorations)) doc.decorations = v.decorations.trim();

  return { doc, photoPath, focus: focusY(v.photo_position) };
});

console.log(`${apply ? "APPLY" : "DRY RUN"}: ${docs.length} veterans\n`);
for (const { doc, photoPath, focus } of docs) {
  const missing = ["pledgeClass", "branches", "conflicts", "rank", "yearsOfService", "decorations"].filter((f) => !(f in doc));
  console.log(
    `${doc._id.padEnd(30)} paragraphs=${String(doc.fullStory?.length ?? 0).padEnd(3)} ` +
      `conflicts=${JSON.stringify(doc.conflicts ?? [])} photo=${photoPath ? path.basename(photoPath) : "none"} ` +
      `focusY=${focus}${missing.length ? `  blank: ${missing.join(", ")}` : ""}`,
  );
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s), nothing written:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
if (!apply) {
  console.log("\nDry run OK. Re-run with --apply to write to Sanity.");
  process.exit(0);
}

try {
  process.loadEnvFile(path.join(here, "../.env"));
} catch {
  // Fall through to the check below.
}
if (!process.env.SANITY_WRITE_TOKEN) {
  console.error("SANITY_WRITE_TOKEN is not set in studio/.env");
  process.exit(1);
}

const client = createClient({
  projectId: "r6eczhfp",
  dataset: "production",
  apiVersion: "2025-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

for (const { doc, photoPath, focus } of docs) {
  if (photoPath) {
    const asset = await client.assets.upload("image", fs.createReadStream(photoPath), {
      filename: path.basename(photoPath),
    });
    doc.photo = {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
      hotspot: { _type: "sanity.imageHotspot", x: 0.5, y: focus, width: 0.6, height: 0.4 },
      crop: { _type: "sanity.imageCrop", top: 0, bottom: 0, left: 0, right: 0 },
    };
  }
  await client.createOrReplace(doc);
  console.log(`✔ ${doc.name}`);
}
console.log(`\nDone: ${docs.length} veterans written to production.`);
