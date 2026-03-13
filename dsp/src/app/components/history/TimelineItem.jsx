/**
 * TimelineItem
 * Single animated card in the chapter history timeline. Displays a year
 * badge with era color indicator, the event title, description, and an
 * optional image. Animates into view on scroll using framer-motion.
 * Used in: pages/HistoryTimeline
 */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function TimelineItem({ event, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const eraColors = {
    "Founding Era": "bg-amber-500",
    "Early Years": "bg-blue-500",
    "Growth Period": "bg-[#006D5B]",
    "Modern Era": "bg-[#5B2C6F]",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-8 md:gap-12"
    >
      {/* Year Badge */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-24 h-24 rounded-2xl bg-white shadow-lg border flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-[#006D5B]">
            {event.year}
          </span>
          {event.era && (
            <span
              className={`mt-1 w-3 h-3 rounded-full ${eraColors[event.era] || "bg-gray-400"}`}
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
        {event.era && (
          <span className="inline-block px-3 py-1 rounded-full bg-[#006D5B]/10 text-[#006D5B] text-xs font-medium mb-3">
            {event.era}
          </span>
        )}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
        <p className="text-gray-600 leading-relaxed">{event.description}</p>

        {event.image_url && (
          <div className="mt-6 relative w-full h-48 rounded-xl overflow-hidden">
            <Image
              src={event.image_url}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
