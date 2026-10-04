/**
 * ScrapbookCard
 * Cover card for one chapter scrapbook on the History page: cover
 * image (the Studio cover, or the first page), title, years and page count.
 * Links to the scrapbook viewer page.
 * Used in: components/history/HistoryContent
 */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { BookOpen, ChevronRight } from "lucide-react";
import { photoSrc, sanityLoader } from "@lib/sanity-image";

const COVER_SIZES = "(max-width: 1024px) 50vw, 25vw";

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
        {/* Cover: shown whole (album covers are photographed in either
            orientation), over a blurred copy that fills the card. Both use
            the same URL, so the image downloads once. */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 shadow-md group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
          {src ? (
            <>
              <Image
                loader={sanityLoader}
                src={src}
                alt=""
                aria-hidden
                fill
                className="object-cover scale-110 blur-xl opacity-60"
                sizes={COVER_SIZES}
              />
              <Image
                loader={sanityLoader}
                src={src}
                alt={`Cover of ${scrapbook.title}`}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
                sizes={COVER_SIZES}
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-nile-green to-nile-green-dark">
              <BookOpen className="w-16 h-16 text-white/70" />
            </div>
          )}
        </div>

        {/* Details */}
        <div className="pt-4">
          <p className="text-sm font-medium text-nile-green mb-1">
            {[
              scrapbook.years,
              `${scrapbook.page_count} ${scrapbook.page_count === 1 ? "page" : "pages"}`,
            ]
              .filter(Boolean)
              .join(" · ")}
          </p>
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
