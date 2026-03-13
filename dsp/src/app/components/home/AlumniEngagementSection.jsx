"use client";
/**
 * AlumniEngagementSection
 * Home page section encouraging alumni involvement through four engagement
 * cards (Attend Events, Mentor, Give Back, Stay Connected) and a full-width
 * "Why It Matters" banner with CTAs linking to Donate and #contact.
 * Used in: pages/Home
 */
import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  Mail,
  Users,
  Heart,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function AlumniEngagementSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const engagementWays = [
    {
      icon: Calendar,
      title: "Attend Events",
      description:
        "Join us for reunions, homecoming, and chapter events throughout the year.",
    },
    {
      icon: Briefcase,
      title: "Mentor Students",
      description:
        "Share your professional experience and guide the next generation of leaders.",
    },
    {
      icon: Heart,
      title: "Give Back",
      description:
        "Support scholarships, house improvements, and chapter programming.",
    },
    {
      icon: Mail,
      title: "Stay Connected",
      description: "Subscribe to our newsletter and follow us on social media.",
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#006D5B]/10 text-[#006D5B] text-sm font-medium mb-4">
            Get Involved
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Alumni Engagement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your involvement matters. Whether through mentorship, financial
            support, or simply staying connected, alumni engagement is essential
            to our chapter&apos;s continued success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementWays.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-gray-50 hover:bg-[#006D5B] transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-[#006D5B] group-hover:bg-white flex items-center justify-center mb-5 transition-colors duration-300">
                <way.icon className="w-7 h-7 text-white group-hover:text-[#006D5B] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                {way.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                {way.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why It Matters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/AlumniEngagement.jpg')]" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />

            <div className="relative z-10 p-8 lg:p-16">
              <div className="max-w-2xl">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Why Alumni Engagement Matters
                </h3>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  Active alumni are the backbone of a thriving chapter. Your
                  mentorship provides invaluable guidance to undergraduates
                  navigating college and preparing for their careers. Your
                  financial support enables scholarships, leadership
                  development, and facility improvements.
                </p>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  Most importantly, your continued engagement demonstrates that
                  the bonds of brotherhood extend far beyond graduation. You
                  represent what it means to be a Delta Sig—not just for four
                  years, but for life.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/donate"
                    className="px-6 py-3 bg-[#006D5B] text-white rounded-lg font-medium hover:bg-[#005648] transition-all duration-300"
                  >
                    Make a Gift
                  </Link>
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
