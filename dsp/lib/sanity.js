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

// Revalidated on publish via the Sanity webhook (/api/revalidate). The hourly
// fallback covers a missed webhook.
export const VETERAN_TAG = "veteran";
const REVALIDATE_SECONDS = 3600;

function sanityFetch(query, params = {}) {
  return client.fetch(query, params, {
    next: { revalidate: REVALIDATE_SECONDS, tags: [VETERAN_TAG] },
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
  return sanityFetch(`*[${VETERAN_FILTER}] | order(name asc) { ${CARD_FIELDS} }`);
}

export function getVeteran(id) {
  return sanityFetch(`*[${VETERAN_FILTER} && slug.current == $id][0] { ${DETAIL_FIELDS} }`, {
    id,
  });
}

export function getVeteranSitemapEntries() {
  return sanityFetch(`*[${VETERAN_FILTER}] { "id": slug.current, "updated_at": _updatedAt }`);
}
