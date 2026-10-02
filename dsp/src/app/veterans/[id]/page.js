import { notFound } from "next/navigation";
import { getVeteran, getVeterans } from "@lib/sanity";
import VeteranDetailContent from "@/components/veterans/VeteranDetailContent";

// Pre-build every veteran published at build time. Veterans published later
// are rendered on their first visit and then cached.
export async function generateStaticParams() {
  const veterans = await getVeterans();
  return veterans.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const veteran = await getVeteran(id);

  if (!veteran) {
    return { title: "Veteran Not Found" };
  }

  return {
    title: `${veteran.name} | Gamma Iota Veteran Stories`,
    description:
      veteran.short_bio ||
      `${veteran.name}, ${veteran.branches?.join(" / ") || "military"} veteran and brother of the Gamma Iota chapter.`,
  };
}

export default async function VeteranDetailPage({ params }) {
  const { id } = await params;
  const veteran = await getVeteran(id);

  if (!veteran) {
    notFound();
  }

  return <VeteranDetailContent veteran={veteran} />;
}
