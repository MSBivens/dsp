import { notFound } from "next/navigation";
import veteransData from "@/components/data/veterans";
import VeteranDetailContent from "@/components/veterans/VeteranDetailContent";

export function generateStaticParams() {
  return veteransData.map((veteran) => ({ id: veteran.id }));
}

export function generateMetadata({ params }) {
  const veteran = veteransData.find(
    (v) => String(v.id) === String(params.id),
  );

  if (!veteran) {
    return { title: "Veteran Not Found" };
  }

  return {
    title: `${veteran.name} | Gamma Iota Veteran Stories`,
    description:
      veteran.short_bio ||
      `${veteran.name}, ${veteran.branch} veteran and brother of the Gamma Iota chapter.`,
  };
}

export default function VeteranDetailPage({ params }) {
  const veteran = veteransData.find(
    (v) => String(v.id) === String(params.id),
  );

  if (!veteran) {
    notFound();
  }

  return <VeteranDetailContent veteran={veteran} />;
}
