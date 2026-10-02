/**
 * One-time conversion of the single `branch` field to the `branches` list.
 * Patches only those two fields, so other edits made in the Studio are kept.
 * Covers published documents and any unpublished drafts.
 *
 *   npx sanity exec scripts/branch-to-branches.js --with-user-token            Dry run
 *   npx sanity exec scripts/branch-to-branches.js --with-user-token -- --apply Write
 */
import { getCliClient } from "sanity/cli";

const apply = process.argv.includes("--apply");
const client = getCliClient({ apiVersion: "2025-01-01" });

const docs = await client.fetch(
  `*[_type == "veteran" && defined(branch)]{_id, name, branch, branches}`,
);

console.log(`${apply ? "APPLY" : "DRY RUN"}: ${docs.length} document(s) with a single branch`);
const tx = client.transaction();
for (const d of docs) {
  const branches = [...new Set([...(d.branches ?? []), d.branch])];
  console.log(`  ${d._id.padEnd(36)} "${d.branch}" -> ${JSON.stringify(branches)}`);
  tx.patch(d._id, (p) => p.set({ branches }).unset(["branch"]));
}

if (!apply || docs.length === 0) {
  console.log(docs.length ? "\nDry run only. Re-run with -- --apply to write." : "Nothing to convert.");
} else {
  await tx.commit();
  console.log(`\nConverted ${docs.length} document(s).`);
}
