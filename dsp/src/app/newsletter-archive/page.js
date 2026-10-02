import { getNewsletters } from "@lib/sanity";
import NewsletterArchiveContent from "@/components/newsletters/NewsletterArchiveContent";

export const metadata = {
  title: "The Gamma Eye | ΔΣΦ Gamma Iota",
  description:
    "Archive of The Gamma Eye, the alumni newsletter of the Gamma Iota chapter of Delta Sigma Phi.",
};

export default async function NewsletterArchivePage() {
  const newsletters = await getNewsletters();
  return <NewsletterArchiveContent newsletters={newsletters} />;
}
