import veteransData from "@/components/data/veterans";

const SITE_URL = "https://www.deltasigvandals.org";

export default function sitemap() {
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

  const veteranPages = veteransData.map(({ id }) => ({
    url: `${SITE_URL}/veterans/${id}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...veteranPages];
}
