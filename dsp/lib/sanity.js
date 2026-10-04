/**
 * Server-side Sanity access for the site.
 * Queries alias Sanity's camelCase fields to the snake_case names the
 * components already use.
 */
import { createClient } from "@sanity/client";
import {
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_PROJECT_ID,
} from "./sanity-config";

const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  // Bypass the API CDN so a webhook-triggered revalidation never re-caches
  // stale content. Requests only happen at build/revalidation time.
  useCdn: false,
  perspective: "published",
});

// Every query is cache-tagged with the Sanity document type it reads. On
// publish, the Sanity webhook (/api/revalidate) refreshes that type's tag; the
// hourly fallback covers a missed webhook.
export const CONTENT_TYPES = [
  "veteran",
  "event",
  "newsletter",
  "timelineEntry",
  "scrapbook",
  "siteSettings",
  "donatePage",
];
const REVALIDATE_SECONDS = 3600;

function sanityFetch(query, params, type) {
  return client.fetch(query, params, {
    next: { revalidate: REVALIDATE_SECONDS, tags: [type] },
  });
}

const PHOTO = `photo{
  asset, crop, hotspot,
  "dimensions": asset->metadata.dimensions{width, height}
}`;

const CARD_FIELDS = `
  "id": slug.current,
  name,
  branches,
  conflicts,
  rank,
  "years_of_service": yearsOfService,
  "short_bio": shortBio,
  ${PHOTO}
`;

const DETAIL_FIELDS = `
  ${CARD_FIELDS},
  "pledge_class": pledgeClass,
  "full_story": fullStory,
  decorations
`;

const VETERAN_FILTER = `_type == "veteran" && defined(slug.current)`;

export function getVeterans() {
  return sanityFetch(
    `*[${VETERAN_FILTER}] | order(name asc) { ${CARD_FIELDS} }`,
    {},
    "veteran",
  );
}

export function getVeteran(id) {
  return sanityFetch(
    `*[${VETERAN_FILTER} && slug.current == $id][0] { ${DETAIL_FIELDS} }`,
    { id },
    "veteran",
  );
}

/** Events that haven't ended as of `today` ("YYYY-MM-DD"), soonest first. */
export function getUpcomingEvents(today) {
  return sanityFetch(
    `*[_type == "event" && defined(date) && coalesce(endDate, date) >= $today]
      | order(date asc, title asc) {
        "id": _id, title, date, "end_date": endDate, time, location,
        description, type, link
      }`,
    { today },
    "event",
  );
}

/** Gamma Eye editions with a PDF, newest first. */
export function getNewsletters() {
  return sanityFetch(
    `*[_type == "newsletter" && defined(pdf.asset)]
      | order(issueDate desc, edition desc) {
        "id": _id, edition, title, "issue_date": issueDate, description,
        "pdf_url": pdf.asset->url
      }`,
    {},
    "newsletter",
  );
}

/** All history timeline entries, oldest first. */
export function getTimeline() {
  return sanityFetch(
    `*[_type == "timelineEntry"] | order(year asc, title asc) {
      "id": _id, year, title, description, era,
      "image": image{ asset, crop, hotspot, alt,
        "dimensions": asset->metadata.dimensions{width, height} }
    }`,
    {},
    "timelineEntry",
  );
}

/** Timeline entries chosen for the home page "Our Legacy" section. */
export function getHomeMilestones() {
  return sanityFetch(
    `*[_type == "timelineEntry" && showOnHomePage == true]
      | order(year asc, title asc) {
        "id": _id, year, title,
        "description": coalesce(homeSummary, description)
      }`,
    {},
    "timelineEntry",
  );
}

// Pages still uploading in the Studio have no asset yet; skip them.
const SCRAPBOOK_FILTER = `_type == "scrapbook" && defined(slug.current) && count(pages[defined(asset)]) > 0`;

const SCRAPBOOK_SUMMARY = `
  "id": slug.current, title, years, description,
  "page_count": count(pages[defined(asset)]),
  "cover": coalesce(select(defined(cover.asset) => cover), pages[defined(asset)][0]){ asset, crop, hotspot,
    "dimensions": asset->metadata.dimensions{width, height} }
`;

/** Scrapbooks for the History page, in display order. */
export function getScrapbooks() {
  return sanityFetch(
    `*[${SCRAPBOOK_FILTER}] | order(coalesce(displayOrder, 9999) asc, title asc) {
      ${SCRAPBOOK_SUMMARY}
    }`,
    {},
    "scrapbook",
  );
}

/** One scrapbook with all its pages, in book order. */
export function getScrapbook(id) {
  return sanityFetch(
    `*[${SCRAPBOOK_FILTER} && slug.current == $id][0] {
      ${SCRAPBOOK_SUMMARY},
      "pages": pages[defined(asset)]{ "key": _key, asset, crop, caption, alt,
        "dimensions": asset->metadata.dimensions{width, height} }
    }`,
    { id },
    "scrapbook",
  );
}

export function getScrapbookSitemapEntries() {
  return sanityFetch(
    `*[${SCRAPBOOK_FILTER}] { "id": slug.current, "updated_at": _updatedAt }`,
    {},
    "scrapbook",
  );
}

/** The Site Settings singleton (null if it hasn't been created). */
export function getSiteSettings() {
  return sanityFetch(
    `*[_id == "siteSettings"][0] {
      "contact_email": contactEmail,
      "mailing_address": mailingAddress,
      "facebook_url": facebookUrl,
      "instagram_url": instagramUrl,
      "linkedin_url": linkedinUrl,
      "chapter_gpa": chapterGpa,
      "active_members": activeMembers,
      "known_veterans_pdf_url": knownVeteransPdf.asset->url
    }`,
    {},
    "siteSettings",
  );
}

/** The Donate Page singleton (null if it hasn't been created). */
export function getDonatePage() {
  return sanityFetch(
    `*[_id == "donatePage"][0] {
      "giving_options": givingOptions[] {
        "key": _key, title, subtitle, description, benefits,
        "button_text": buttonText, "button_link": buttonLink,
        icon, color, featured
      },
      "impact_stats": impactStats[] { "key": _key, value, label }
    }`,
    {},
    "donatePage",
  );
}

export function getVeteranSitemapEntries() {
  return sanityFetch(
    `*[${VETERAN_FILTER}] { "id": slug.current, "updated_at": _updatedAt }`,
    {},
    "veteran",
  );
}
