/**
 * VeteranCard
 * Clickable card representing a single veteran in the VeteranStories grid.
 * Shows a photo (or branch-icon fallback), conflict era badge, branch/rank,
 * and a short bio excerpt. Links to the VeteranDetail page with the veteran's ID.
 * Used in: pages/VeteranStories
 */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const conflictColors = {
  "World War I": "bg-amber-100 text-amber-800",
  "World War II": "bg-red-100 text-red-800",
  "Korean War": "bg-blue-100 text-blue-800",
  "Vietnam War": "bg-green-100 text-green-800",
  "Gulf War": "bg-orange-100 text-orange-800",
  "War on Terror": "bg-purple-100 text-purple-800",
  "Peacetime Service": "bg-gray-100 text-gray-800",
};

export default function VeteranCard({ veteran, index, branchIcons }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/veteran-detail?id=${veteran.id}`}
        className="block group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
      >
        {/* Image */}
        <div className="relative h-48 bg-gray-100 overflow-hidden group">
          {veteran.photo_url ? (
            <Image
              src={veteran.photo_url}
              alt={veteran.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#006D5B] to-[#005648]">
              <span className="text-6xl">
                {branchIcons[veteran.branch] || "🎖️"}
              </span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${conflictColors[veteran.conflict] || "bg-gray-100 text-gray-800"}`}
            >
              {veteran.conflict}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#006D5B] transition-colors">
            {veteran.name}
          </h3>

          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <span>{branchIcons[veteran.branch]}</span>
            <span className="text-sm">{veteran.branch}</span>
            {veteran.rank && (
              <>
                <span className="text-gray-300">•</span>
                <span className="text-sm">{veteran.rank}</span>
              </>
            )}
          </div>

          {veteran.short_bio && (
            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
              {veteran.short_bio}
            </p>
          )}

          <div className="flex items-center text-[#006D5B] font-medium text-sm group-hover:gap-3 transition-all">
            Read Story
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
