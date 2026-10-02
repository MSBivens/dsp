/**
 * One-time migration of the history timeline from the website's data file
 * into Sanity, followed by a verification pass.
 *
 *   npx sanity exec scripts/migrate-timeline.js --with-user-token              Dry run
 *   npx sanity exec scripts/migrate-timeline.js --with-user-token -- --apply   Create, then verify
 *   npx sanity exec scripts/migrate-timeline.js --with-user-token -- --verify  Verify only
 *
 * Documents use fixed IDs (timeline-<id>) and createIfNotExists, so re-running
 * never overwrites edits made in the Studio.
 */
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { getCliClient } from "sanity/cli";
import { ERAS } from "../schemaTypes/timelineEntry.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.resolve(here, "../../dsp/src/app/components/data/timeline.js");
const apply = process.argv.includes("--apply");
const verifyOnly = process.argv.includes("--verify");
const client = getCliClient({ apiVersion: "2025-01-01" });

// The home page "Our Legacy" section showed these entries; Bike 2 Boise used
// a shorter description there.
const HOME_PAGE = {
  1: {},
  7: {
    homeSummary:
      "Our primary philanthropy was established and called Bike to Boise which involved riding a tandem bicycle from Moscow, ID. to the steps of the capitol in Boise and continues to this day.",
  },
  13: {},
};

const { default: timeline } = await import(pathToFileURL(dataFile).href);

const docs = timeline.map((t) => ({
  _id: `timeline-${t.id}`,
  _type: "timelineEntry",
  year: t.year,
  title: t.title,
  description: t.description,
  era: t.era,
  showOnHomePage: t.id in HOME_PAGE,
  ...(HOME_PAGE[t.id] ?? {}),
}));

async function verify() {
  const inSanity = await client.fetch(`*[_type == "timelineEntry" && !(_id in path("drafts.**"))]`);
  const failures = [];
  for (const doc of docs) {
    const d = inSanity.find((x) => x._id === doc._id);
    if (!d) {
      failures.push(`${doc._id}: missing`);
      continue;
    }
    for (const field of ["year", "title", "description", "era", "showOnHomePage", "homeSummary"]) {
      if ((d[field] ?? null) !== (doc[field] ?? null)) failures.push(`${doc._id}.${field} differs`);
    }
  }
  console.log(`\nSanity: ${inSanity.length} entries; data file: ${docs.length}`);
  console.log(failures.length ? `FAILURES:\n  ${failures.join("\n  ")}` : "All fields match.");
  return failures.length === 0;
}

if (verifyOnly) process.exit((await verify()) ? 0 : 1);

const problems = docs
  .filter((d) => !ERAS.includes(d.era) || !Number.isInteger(d.year) || !d.title || !d.description)
  .map((d) => `${d._id}: invalid era/year/title/description`);
console.log(`${apply ? "APPLY" : "DRY RUN"}: ${docs.length} entries`);
for (const d of docs) {
  console.log(`  ${d._id.padEnd(12)} ${d.year}  ${d.era.padEnd(13)} ${d.showOnHomePage ? "HOME " : "     "}${d.title}`);
}
if (problems.length) {
  console.error(`\n${problems.length} problem(s), nothing written:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
if (!apply) {
  console.log("\nDry run OK. Re-run with -- --apply to write.");
  process.exit(0);
}

const tx = client.transaction();
docs.forEach((d) => tx.createIfNotExists(d));
await tx.commit();
console.log(`\nCreated whichever of the ${docs.length} entries didn't exist yet.`);
process.exit((await verify()) ? 0 : 1);
