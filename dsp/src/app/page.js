import React from "react";
import { getUpcomingEvents } from "@lib/sanity";
import { pacificToday } from "@lib/dates";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import LegacySection from "@/components/home/LegacySection";
import AlumniEngagementSection from "@/components/home/AlumniEngagementSection";
import UndergraduateSection from "@/components/home/UndergraduateSection";
import EventsSection from "@/components/home/EventsSection";
import SupportSection from "@/components/home/SupportSection";
import ContactSection from "@/components/home/ContactSection";

export default async function Home() {
  const today = pacificToday();
  const events = await getUpcomingEvents(today);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <LegacySection />
      <AlumniEngagementSection />
      <UndergraduateSection />
      <EventsSection events={events} generatedOn={today} />
      <SupportSection />
      <ContactSection />
    </div>
  );
}
