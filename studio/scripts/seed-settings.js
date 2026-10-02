/**
 * One-time seed of the Site Settings and Donate Page documents with the
 * values the website hard-coded before moving to Sanity.
 *
 *   npx sanity exec scripts/seed-settings.js --with-user-token             Dry run
 *   npx sanity exec scripts/seed-settings.js --with-user-token -- --apply  Write
 *
 * Uses createIfNotExists, so it never overwrites edits made in the Studio.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getCliClient } from "sanity/cli";

const here = path.dirname(fileURLToPath(import.meta.url));
const knownVeteransPdf = path.resolve(here, "../../dsp/public/files/KnownVeterans.pdf");
const apply = process.argv.includes("--apply");
const client = getCliClient({ apiVersion: "2025-01-01" });

let keyCounter = 0;
const key = () => `seed${(keyCounter++).toString(36)}`;

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  contactEmail: "deltasigvandalalumni@gmail.com",
  mailingAddress: "503 University Avenue\nP.O. Box #3087\nMoscow, Idaho 83843",
  facebookUrl: "https://www.facebook.com/deltasigvandals",
  instagramUrl: "https://www.instagram.com/deltasig_idaho",
  linkedinUrl: "https://www.linkedin.com/groups/13505181/",
  chapterGpa: "2.9+",
  activeMembers: "30+",
};

const donatePage = {
  _id: "donatePage",
  _type: "donatePage",
  givingOptions: [
    {
      _key: key(),
      _type: "givingOption",
      title: "Direct to Chapter",
      subtitle: "Internal Funds",
      description:
        "Support chapter operations, facility improvements, and immediate needs directly. These funds provide the flexibility to address urgent priorities and enhance the undergraduate experience.",
      benefits: [
        "Alumni Events",
        "House maintenance & improvements",
        "Recruitment activities",
        "Emergency chapter needs",
      ],
      buttonText: "Donate to Chapter",
      buttonLink: "https://www.paypal.com/donate/?hosted_button_id=EX2WT66DDXQRL",
      icon: "building",
      color: "green",
      featured: false,
    },
    {
      _key: key(),
      _type: "givingOption",
      title: "University of Idaho Foundation",
      subtitle: "Tax-Deductible • Academic Focus",
      description:
        "Make a tax-deductible contribution through the University of Idaho Foundation. These gifts support scholarships and academic initiatives for deserving members.",
      benefits: [
        "Tax-deductible donation",
        "Academic scholarships",
        "Leadership development grants",
        "Educational programming",
      ],
      buttonText: "Give Through UI Foundation",
      buttonLink: "https://uidaho.edu/giving",
      icon: "graduation",
      color: "purple",
      featured: true,
    },
    {
      _key: key(),
      _type: "givingOption",
      title: "National Headquarters",
      subtitle: "National Initiatives",
      description:
        "Contribute to Delta Sigma Phi's national programs and initiatives. Your gift supports leadership academies, educational resources, and fraternity-wide excellence.",
      benefits: [
        "National leadership programs",
        "Educational resources",
        "Chapter support services",
        "Fraternity-wide initiatives",
      ],
      buttonText: "Give Nationally",
      buttonLink: "https://deltasig.org/give",
      icon: "globe",
      color: "gray",
      featured: false,
    },
  ],
  impactStats: [
    { _key: key(), _type: "impactStat", value: "$25K+", label: "Raised Last 5 Years" },
    { _key: key(), _type: "impactStat", value: "5", label: "Scholarships Awarded" },
    { _key: key(), _type: "impactStat", value: "100%", label: "Goes to Brotherhood" },
  ],
};

const existing = await client.fetch(`*[_id in ["siteSettings", "donatePage"]]._id`);
console.log(`${apply ? "APPLY" : "DRY RUN"}: already in Sanity: ${existing.length ? existing.join(", ") : "none"}`);
console.log(`siteSettings: ${Object.keys(siteSettings).filter((k) => !k.startsWith("_")).join(", ")}, knownVeteransPdf (${path.basename(knownVeteransPdf)}, exists: ${fs.existsSync(knownVeteransPdf)})`);
console.log(`donatePage: ${donatePage.givingOptions.length} giving options, ${donatePage.impactStats.length} impact stats`);

if (!apply) {
  console.log("\nDry run only. Re-run with -- --apply to write.");
} else {
  if (!existing.includes("siteSettings")) {
    const asset = await client.assets.upload("file", fs.createReadStream(knownVeteransPdf), {
      filename: path.basename(knownVeteransPdf),
    });
    siteSettings.knownVeteransPdf = { _type: "file", asset: { _type: "reference", _ref: asset._id } };
  }
  await client.transaction().createIfNotExists(siteSettings).createIfNotExists(donatePage).commit();
  console.log("\nCreated whichever documents didn't exist yet; existing ones were left unchanged.");
}
