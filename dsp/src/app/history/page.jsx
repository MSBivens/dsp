import { getScrapbooks, getTimeline } from "@lib/sanity";
import HistoryContent from "@/components/history/HistoryContent";

export const metadata = {
  title: "Our History | ΔΣΦ Gamma Iota",
  description:
    "The history of the Gamma Iota chapter of Delta Sigma Phi at the University of Idaho, from its founding in 1950 to today: chapter scrapbooks and timeline.",
};

export default async function HistoryPage() {
  const [events, scrapbooks] = await Promise.all([
    getTimeline(),
    getScrapbooks(),
  ]);
  return <HistoryContent events={events} scrapbooks={scrapbooks} />;
}
