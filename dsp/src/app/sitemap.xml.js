import veteransData from "@/components/data/veterans";

const SITE_URL = "https://www.deltasigvandals.org";

function generateSiteMap(veterans) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     {/* Static Pages */}
     <url>
       <loc>${SITE_URL}</loc>
     </url>
     <url>
       <loc>${SITE_URL}/history-timeline</loc>
     </url>
     <url>
       <loc>${SITE_URL}/veteran-stories</loc>
     </url>
     <url>
       <loc>${SITE_URL}/donate</loc>
     </url>
     <url>
       <loc>${SITE_URL}/newsletter-archive</loc>
     </url>
     
     {/* Dynamic Veteran Pages */}
     ${veterans
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${SITE_URL}/veteran-detail?id=${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export default function SiteMap() {}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap(veteransData);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
