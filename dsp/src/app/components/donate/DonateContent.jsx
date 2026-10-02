"use client";
/**
 * DonateContent
 * Donate page: hero, the giving-option cards and impact stats (edited in the
 * Donate Page document in Sanity), and a contact call to action.
 * Used in: app/donate/page.jsx
 */
import React from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import DonationCard from "@/components/donate/DonationCard";
import ImpactSection from "@/components/donate/ImpactSection";

const COUNT_WORDS = ["One", "Two", "Three", "Four", "Five", "Six"];

/** "Three Ways to Give", "One Way to Give". */
function waysToGiveHeading(count) {
  const number = COUNT_WORDS[count - 1] ?? String(count);
  return `${number} ${count === 1 ? "Way" : "Ways"} to Give`;
}

export default function DonateContent({
  givingOptions = [],
  impactStats = [],
  contactEmail,
}) {
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
              {waysToGiveHeading(givingOptions.length)}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the giving pathway that aligns with your philanthropic
              goals. Each option supports our mission in meaningful ways.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {givingOptions.map((option, index) => (
              <DonationCard
                key={option.key}
                icon={option.icon}
                title={option.title}
                subtitle={option.subtitle}
                color={option.color}
                description={option.description}
                benefits={option.benefits ?? []}
                buttonText={option.button_text}
                buttonLink={option.button_link}
                featured={option.featured}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      {impactStats.length > 0 && <ImpactSection stats={impactStats} />}

      {/* CTA */}
      {contactEmail && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Giving?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact the Alumni Corporation Board team to learn more about
              giving opportunities, planned giving, or how to maximize the
              impact of your contribution.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-nile-green text-white rounded-lg font-medium hover:bg-nile-green-dark transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
