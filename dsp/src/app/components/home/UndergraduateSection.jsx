"use client";
/**
 * UndergraduateSection
 * Home page section showcasing the current undergraduate chapter with a
 * photo, floating stats card (desktop), mobile stat grid, and a list of
 * highlights covering academics, campus leadership, and community service.
 * Used in: pages/Home
 */
import React from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Trophy, BookOpen, Users, Star } from "lucide-react";
import Image from "next/image";

export default function UndergraduateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    { icon: Trophy, value: "2.9+", label: "Chapter GPA" },
    { icon: Users, value: "30+", label: "Active Members" },
    // Could put philanthropy number here
    // { icon: Star, value: "15+", label: "Campus Leaders" },
    // { icon: BookOpen, value: "25+", label: "Dean's List" },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <Image
                src="/images/undergrad.jpg"
                alt="Undergraduate chapter"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 hidden md:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {achievements.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-6 h-6 text-nile-green mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5B2C6F]/10 text-[#5B2C6F] text-sm font-medium mb-4">
              Current Chapter
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Undergraduate Chapter
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Today&apos;s Gamma Iota chapter continues the proud tradition of
              excellence established by those who came before. Our
              undergraduates are campus leaders, scholars, and community
              servants who embody the values of Delta Sigma Phi every day.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From leadership positions in student government to philanthropic
              efforts in the Moscow community, our brothers make their mark
              across the University of Idaho campus and beyond.
            </p>

            {/* Mobile Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:hidden">
              {achievements.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-4 text-center shadow-sm"
                >
                  <stat.icon className="w-5 h-5 text-nile-green mx-auto mb-2" />
                  <div className="text-xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="hidden md:block space-y-4">
              <div className="flex items-start gap-4">
                {/* <div className="w-10 h-10 rounded-full bg-nile-green/10 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-nile-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Academic Excellence
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Consistently among top GPA chapters in the IFC
                  </p>
                </div> */}
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-nile-green/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-nile-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Campus Leadership
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Members active in student government, clubs, and athletics
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-nile-green/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-nile-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Community Service
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Over 100 service hours contributed annually
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
