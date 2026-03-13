"use client";
/**
 * LegacySection
 * Two-column section on the Home page: narrative text on the left and
 * an animated mini-timeline of key chapter milestones on the right.
 * Links to the full HistoryTimeline page.
 * Used in: pages/Home
 */
import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen, Clock, Star } from "lucide-react";

export default function LegacySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      ear: 1950,
      title: "Chapter Founded",
      description:
        "The Gamma Iota Chapter was founded at the University of Idaho.",
    },
    {
      year: 1963,
      title: "Bike 2 Boise Established",
      description:
        "Our primary philanthropy was established and called Bike to Boise which involved riding a tandem bicycle from Moscow, ID. to the steps of the capitol in Boise and continues to this day.",
    },
    {
      year: 1981,
      title: "Burning of the Mortgage",
      description:
        "Gamma Iota celebrates its 31st anniversary and mortgage burning for the property purchased in 1969.",
    },
    {
      year: "Today",
      title: "Continuing Legacy",
      description: "Building tomorrow's leaders",
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5B2C6F]/10 text-[#5B2C6F] text-sm font-medium mb-4">
              Our Heritage
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Legacy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              For over seventy years, Gamma Iota has been a cornerstone of the
              University of Idaho Greek community. Our chapter has produced
              distinguished alumni who have excelled in business, military
              service, public office, and countless other fields.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From our founding to our continued growth today, we have
              maintained an unwavering commitment to developing men of
              exceptional character. Our history is not just about the past,
              it&apos;s the foundation upon which we build our future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/history-timeline"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5B2C6F] text-white rounded-lg font-medium hover:bg-[#7D3C98] transition-all duration-300 shadow-lg shadow-[#5B2C6F]/25"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/newsletter-archive"
                className="px-6 py-3 bg-[#006D5B] text-white rounded-lg font-medium hover:bg-[#12362e] transition-all duration-300 border border-white/20"
              >
                Read The Gamma Eye
              </Link>
            </div>
          </motion.div>

          {/* Timeline Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#006D5B]/20" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-white border-4 border-[#006D5B] flex items-center justify-center shadow-lg">
                    <Clock className="w-5 h-5 text-[#006D5B]" />
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-[#006D5B] font-bold text-lg mb-1">
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
