import { notFound } from "next/navigation";
import { getScrapbook, getScrapbooks } from "@lib/sanity";
import ScrapbookViewer from "@/components/history/ScrapbookViewer";

// Pre-build every scrapbook published at build time. Scrapbooks published
// later are rendered on their first visit and then cached.
export async function generateStaticParams() {
  const scrapbooks = await getScrapbooks();
  return scrapbooks.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const scrapbook = await getScrapbook(id);

  if (!scrapbook) {
    return { title: "Scrapbook Not Found" };
  }

  const title = [scrapbook.title, scrapbook.years].filter(Boolean).join(", ");
  return {
    title: `${title} | Gamma Iota Scrapbooks`,
    description:
      scrapbook.description ||
      `Page through ${scrapbook.title}, a ${scrapbook.page_count}-page scrapbook from the Gamma Iota chapter of Delta Sigma Phi.`,
  };
}

export default async function ScrapbookPage({ params }) {
  const { id } = await params;
  const scrapbook = await getScrapbook(id);

  if (!scrapbook) {
    notFound();
  }

  return <ScrapbookViewer scrapbook={scrapbook} />;
}
