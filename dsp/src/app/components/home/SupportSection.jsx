"use client";
/**
 * SupportSection
 * Full-width green CTA section on the Home page highlighting three giving
 * areas (Scholarships, House Fund, Programming) and a social-proof card
 * with donor stats and an alumni testimonial. Links to the Donate page.
 * Used in: pages/Home
 */
import React from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Heart, DollarSign, GraduationCap, Home } from "lucide-react";

export default function SupportSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const supportAreas = [
    {
      icon: GraduationCap,
      title: "Scholarships",
      description: "Help deserving students achieve their academic dreams.",
    },
    {
      icon: Home,
      title: "House Fund",
      description: "Maintain and improve our historic chapter house.",
    },
    {
      icon: Heart,
      title: "Programming",
      description: "Support leadership development and brotherhood events.",
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-nile-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              Make an Impact
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Support the Chapter
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Your generosity directly impacts the lives of our undergraduate
              brothers. Every gift, regardless of size, helps us provide
              scholarships, maintain our facilities, and deliver exceptional
              programming.
            </p>

            <div className="space-y-4 mb-10">
              {supportAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {area.title}
                    </h4>
                    <p className="text-white/70">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-nile-green rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              <DollarSign className="w-5 h-5" />
              Make a Gift Today
            </Link>
          </motion.div>

          {/* Image / Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-nile-green/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-nile-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Every Gift Matters
                </h3>
                <p className="text-gray-600">
                  Join fellow alumni in supporting our mission
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-nile-green">200+</div>
                  <div className="text-sm text-gray-500">Annual Donors</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-nile-green">$5K</div>
                  <div className="text-sm text-gray-500">Raised Yearly</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-nile-green">5</div>
                  <div className="text-sm text-gray-500">Scholarships</div>
                </div>
              </div>

              <div className="bg-[#5B2C6F]/5 rounded-xl p-6 border border-[#5B2C6F]/10">
                <p className="text-gray-700 italic text-center">
                  &quot;I&apos;m extremely grateful and proud to be part of a
                  brotherhood that cares enough about its youngest members to
                  contribute their time and money to help them. This investment
                  in my future shows what a great bond Delta Sigma Phi brings to
                  the University of Idaho campus and sets a great example of how
                  to invest in young men. Thank you to all brothers who funded
                  the scholarship and invested in my future!&quot;
                </p>
                <p className="text-sm text-[#5B2C6F] font-medium text-center mt-3">
                  — Ben Macomber, Pledge Class of 2018
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
