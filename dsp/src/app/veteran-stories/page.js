import { getVeterans } from "@lib/sanity";
import {
  combinedYearsOfService,
  countBranches,
  roundedDownLabel,
} from "@lib/veteran-stats";
import VeteranStoriesContent from "@/components/veterans/VeteranStoriesContent";

export const metadata = {
  title: "Veteran Stories | ΔΣΦ Gamma Iota",
  description:
    "Celebrating the brothers of the Gamma Iota chapter of Delta Sigma Phi who have served our nation with honor and distinction.",
};

export default async function VeteranStoriesPage() {
  const veterans = (await getVeterans()).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const stats = {
    branches: countBranches(veterans),
    combinedYears: roundedDownLabel(combinedYearsOfService(veterans)),
  };

  return <VeteranStoriesContent veterans={veterans} stats={stats} />;
}
