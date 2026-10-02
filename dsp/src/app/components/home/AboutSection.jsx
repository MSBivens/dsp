"use client";
/**
 * AboutSection
 * Scroll-animated section on the Home page presenting chapter history,
 * core values (Culture, Harmony, Friendship), and a mission statement
 * banner with high-level statistics (years active, alumni count, members).
 * Used in: pages/Home
 */
import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, Users, Award } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Culture",
      description:
        "Fostering intellectual growth and the pursuit of knowledge among our members.",
    },
    {
      icon: Users,
      title: "Harmony",
      description:
        "Building lasting bonds of brotherhood through mutual respect and support.",
    },
    {
      icon: Award,
      title: "Friendship",
      description:
        "Creating connections that last a lifetime, beyond graduation and beyond borders.",
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-nile-green/10 text-nile-green text-sm font-medium mb-4">
            Our Foundation
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Our Chapter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Gamma Iota Chapter of Delta Sigma Phi was established at the
            University of Idaho in 1950. For over 70 years, we have been
            committed to developing men of character, dedicated to the
            principles upon which our great fraternity was founded.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-nile-green/5 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-nile-green flex items-center justify-center mx-auto mb-6 shadow-lg shadow-nile-green/20">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-nile-green to-nile-green-dark text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed text-lg">
                Delta Sigma Phi develops men of character through our values of
                Culture, Harmony, and Friendship. We are committed to building
                better men who will become leaders in their communities,
                professions, and families.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-1">70+</div>
                <div className="text-white/70 text-sm">Years Active</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">1000+</div>
                <div className="text-white/70 text-sm">Alumni</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">30+</div>
                <div className="text-white/70 text-sm">Active Members</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
