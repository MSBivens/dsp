import { getDonatePage, getSiteSettings } from "@lib/sanity";
import DonateContent from "@/components/donate/DonateContent";

export const metadata = {
  title: "Donate | ΔΣΦ Gamma Iota",
  description:
    "Support the Gamma Iota chapter of Delta Sigma Phi: give directly to the chapter, through the University of Idaho Foundation, or to national programs.",
};

export default async function DonatePage() {
  const [donatePage, settings] = await Promise.all([
    getDonatePage(),
    getSiteSettings(),
  ]);

  return (
    <DonateContent
      givingOptions={donatePage?.giving_options ?? []}
      impactStats={donatePage?.impact_stats ?? []}
      contactEmail={settings?.contact_email}
    />
  );
}
