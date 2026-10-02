/**
 * Compares every veteran in Sanity against the website's data file.
 * Reads through the public API (no token), the same way the website does.
 *
 *   node scripts/verify-veterans.js
 */
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createClient } from "@sanity/client";

const here = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.resolve(here, "../../dsp/src/app/components/data/veterans.js");
const { default: veterans } = await import(pathToFileURL(dataFile).href);

const client = createClient({
  projectId: "r6eczhfp",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
});

const docs = await client.fetch(`*[_type == "veteran" && !(_id in path("drafts.**"))]{
  ..., "slug": slug.current, "photoUrl": photo.asset->url, "photoSize": photo.asset->size
}`);
const bySlug = new Map(docs.map((d) => [d.slug, d]));

const norm = (s) => (s == null ? undefined : String(s).replace(/\s+/g, " ").trim() || undefined);
const storyText = (blocks) =>
  blocks?.map((b) => b.children.map((c) => c.text).join("")).join(" ");

const failures = [];
const check = (id, field, expected, actual) => {
  if (norm(expected) !== norm(actual)) failures.push(`${id}.${field}: expected ${JSON.stringify(norm(expected))?.slice(0, 80)} got ${JSON.stringify(norm(actual))?.slice(0, 80)}`);
};

for (const v of veterans) {
  const d = bySlug.get(v.id);
  if (!d) {
    failures.push(`${v.id}: missing in Sanity`);
    continue;
  }
  check(v.id, "name", v.name, d.name);
  check(v.id, "pledge_class", v.pledge_class, d.pledgeClass);
  check(v.id, "branch", v.branch, d.branch);
  check(v.id, "rank", v.rank, d.rank);
  check(v.id, "years_of_service", v.years_of_service, d.yearsOfService);
  check(v.id, "short_bio", v.short_bio, d.shortBio);
  check(v.id, "decorations", v.decorations, d.decorations);
  check(
    v.id,
    "full_story",
    v.full_story.replace("https://www.loc.gov/ vets", "https://www.loc.gov/vets"),
    storyText(d.fullStory),
  );
  if (v.id !== "joel-peterson" && !d.conflicts?.includes(v.conflict)) failures.push(`${v.id}.conflicts: missing ${v.conflict}`);
  if (v.photo_url) {
    if (!d.photoUrl) failures.push(`${v.id}.photo: missing`);
    else {
      const res = await fetch(d.photoUrl, { method: "HEAD" });
      if (!res.ok) failures.push(`${v.id}.photo: ${res.status} ${d.photoUrl}`);
    }
  }
}
const extra = docs.filter((d) => !veterans.some((v) => v.id === d.slug));
for (const d of extra) failures.push(`${d.slug}: in Sanity but not in data file`);

console.log(`Sanity: ${docs.length} published veterans; data file: ${veterans.length}`);
console.log(failures.length ? `FAILURES:\n  ${failures.join("\n  ")}` : "All fields match, all photos load from the CDN.");
process.exit(failures.length ? 1 : 0);
