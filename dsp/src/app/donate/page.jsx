"use client";
import React from "react";
import { motion } from "motion/react";
import { Heart, Building2, GraduationCap, Globe } from "lucide-react";
import DonationCard from "@/components/donate/DonationCard";
import ImpactSection from "@/components/donate/ImpactSection";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-nile-green to-nile-green-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/donate-cover.jpg')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Support Gamma Iota
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Your generosity helps build better men and ensures our chapter
              continues to thrive for generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Three Ways to Give
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the giving pathway that aligns with your philanthropic
              goals. Each option supports our mission in meaningful ways.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <DonationCard
              icon={Building2}
              title="Direct to Chapter"
              subtitle="Internal Funds"
              color="bg-nile-green"
              description="Support chapter operations, facility improvements, and immediate needs directly. These funds provide the flexibility to address urgent priorities and enhance the undergraduate experience."
              benefits={[
                "Alumni Events",
                "House maintenance & improvements",
                "Recruitment activities",
                "Emergency chapter needs",
              ]}
              buttonText="Donate to Chapter"
              buttonLink="https://www.paypal.com/donate/?hosted_button_id=EX2WT66DDXQRL"
              index={0}
            />

            <DonationCard
              icon={GraduationCap}
              title="University of Idaho Foundation"
              subtitle="Tax-Deductible • Academic Focus"
              color="bg-[#5B2C6F]"
              description="Make a tax-deductible contribution through the University of Idaho Foundation. These gifts support scholarships and academic initiatives for deserving members."
              benefits={[
                "Tax-deductible donation",
                "Academic scholarships",
                "Leadership development grants",
                "Educational programming",
              ]}
              buttonText="Give Through UI Foundation"
              buttonLink="https://uidaho.edu/giving"
              featured
              index={1}
            />

            <DonationCard
              icon={Globe}
              title="National Headquarters"
              subtitle="National Initiatives"
              color="bg-gray-800"
              description="Contribute to Delta Sigma Phi's national programs and initiatives. Your gift supports leadership academies, educational resources, and fraternity-wide excellence."
              benefits={[
                "National leadership programs",
                "Educational resources",
                "Chapter support services",
                "Fraternity-wide initiatives",
              ]}
              buttonText="Give Nationally"
              buttonLink="https://deltasig.org/give"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <ImpactSection />

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Questions About Giving?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact the Alumni Corporation Board team to learn more about giving
            opportunities, planned giving, or how to maximize the impact of your
            contribution.
          </p>
          <a
            href="mailto:deltasigvandalalumni@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-nile-green text-white rounded-lg font-medium hover:bg-nile-green-dark transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
