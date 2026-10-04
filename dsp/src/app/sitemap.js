import {
  getScrapbookSitemapEntries,
  getVeteranSitemapEntries,
} from "@lib/sanity";

const SITE_URL = "https://www.deltasigvandals.org";

export default async function sitemap() {
  const staticPages = [
    "",
    "/history",
    "/veteran-stories",
    "/donate",
    "/newsletter-archive",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const [veterans, scrapbooks] = await Promise.all([
    getVeteranSitemapEntries(),
    getScrapbookSitemapEntries(),
  ]);

  const veteranPages = veterans.map(({ id, updated_at }) => ({
    url: `${SITE_URL}/veterans/${id}`,
    lastModified: new Date(updated_at),
  }));

  const scrapbookPages = scrapbooks.map(({ id, updated_at }) => ({
    url: `${SITE_URL}/history/scrapbooks/${id}`,
    lastModified: new Date(updated_at),
  }));

  return [...staticPages, ...veteranPages, ...scrapbookPages];
}
