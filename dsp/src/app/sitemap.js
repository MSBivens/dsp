import { getVeteranSitemapEntries } from "@lib/sanity";

const SITE_URL = "https://www.deltasigvandals.org";

export default async function sitemap() {
  const staticPages = [
    "",
    "/history-timeline",
    "/veteran-stories",
    "/donate",
    "/newsletter-archive",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const veteranPages = (await getVeteranSitemapEntries()).map(
    ({ id, updated_at }) => ({
      url: `${SITE_URL}/veterans/${id}`,
      lastModified: new Date(updated_at),
    }),
  );

  return [...staticPages, ...veteranPages];
}
