/**
 * ScrapbookCard
 * Book-style cover card for one chapter scrapbook on the History page: cover
 * image (the Studio cover, or the first page), title, years and page count.
 * Links to the scrapbook viewer page.
 * Used in: components/history/HistoryContent
 */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { BookOpen, ChevronRight } from "lucide-react";
import { photoObjectPosition, photoSrc, sanityLoader } from "@lib/sanity-image";

export default function ScrapbookCard({ scrapbook, index }) {
  const src = photoSrc(scrapbook.cover);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/history/scrapbooks/${scrapbook.id}`}
        className="block group"
      >
        {/* Cover */}
        <div className="relative aspect-[3/4] rounded-r-xl rounded-l-sm overflow-hidden bg-gray-200 shadow-md group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
          {src ? (
            <Image
              loader={sanityLoader}
              src={src}
              alt={`Cover of ${scrapbook.title}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ objectPosition: photoObjectPosition(scrapbook.cover) }}
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-nile-green to-nile-green-dark">
              <BookOpen className="w-16 h-16 text-white/70" />
            </div>
          )}
          {/* Book spine */}
          <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
          <span className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
            {scrapbook.page_count} {scrapbook.page_count === 1 ? "page" : "pages"}
          </span>
        </div>

        {/* Details */}
        <div className="pt-4">
          {scrapbook.years && (
            <p className="text-sm font-medium text-nile-green mb-1">
              {scrapbook.years}
            </p>
          )}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-nile-green transition-colors">
            {scrapbook.title}
          </h3>
          {scrapbook.description && (
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
              {scrapbook.description}
            </p>
          )}
          <div className="flex items-center text-nile-green font-medium text-sm">
            Open Scrapbook
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
