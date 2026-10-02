import { getTimeline } from "@lib/sanity";
import HistoryTimelineContent from "@/components/history/HistoryTimelineContent";

export const metadata = {
  title: "Our History | ΔΣΦ Gamma Iota",
  description:
    "The history of the Gamma Iota chapter of Delta Sigma Phi at the University of Idaho, from its founding in 1950 to today.",
};

export default async function HistoryTimelinePage() {
  const events = await getTimeline();
  return <HistoryTimelineContent events={events} />;
}
