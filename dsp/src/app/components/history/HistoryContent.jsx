"use client";
/**
 * HistoryContent
 * History page: hero, a jump bar to the sections, the chapter scrapbooks
 * and the timeline with its era filter (entries from Sanity, oldest first).
 * Used in: app/history/page.jsx
 */
import React, { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, Calendar, Clock, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TimelineItem from "@/components/history/TimelineItem";
import ScrapbookCard from "@/components/history/ScrapbookCard";

export default function HistoryContent({ events = [], scrapbooks = [] }) {
  const [selectedEra, setSelectedEra] = useState("all");

  const filteredEvents =
    selectedEra === "all"
      ? events
      : events.filter((e) => e.era === selectedEra);

  const eras = ["Founding Era", "Early Years", "Growth Period", "Modern Era"];

  // Sections listed in the jump bar; add new History sections here.
  const sections = [
    scrapbooks.length > 0 && { id: "scrapbooks", label: "Scrapbooks", icon: BookOpen },
    { id: "timeline", label: "Timeline", icon: Clock },
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/history1.jpg')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              Since 1950
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our History
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover the legacy and accomplishments of the Gamma Iota Chapter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jump bar */}
      {sections.length > 1 && (
        <nav
          aria-label="History sections"
          className="border-b bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-2">
            {sections.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Icon className="w-4 h-4 text-nile-green" />
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}

      {/* Scrapbooks */}
      {scrapbooks.length > 0 && (
        <section id="scrapbooks" className="py-24 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#5B2C6F]/10 text-[#5B2C6F] text-sm font-medium mb-4">
                From the Archives
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Scrapbooks
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Turn the pages of the chapter&apos;s scrapbooks: photos,
                clippings and keepsakes collected by brothers over the years.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8">
              {scrapbooks.map((scrapbook, index) => (
                <ScrapbookCard
                  key={scrapbook.id}
                  scrapbook={scrapbook}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Timeline */}
      <div id="timeline" className="scroll-mt-20">
        {/* Filter */}
        <section className="py-8 border-y bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900 sm:mr-4">
                Chapter Timeline
              </h2>
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-500" />
                <Select value={selectedEra} onValueChange={setSelectedEra}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by era" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Eras</SelectItem>
                    {eras.map((era) => (
                      <SelectItem key={era} value={era}>
                        {era}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredEvents.length > 0 ? (
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-nile-green/20 hidden md:block" />

                <div className="space-y-12">
                  {filteredEvents.map((event, index) => (
                    <TimelineItem key={event.id} event={event} index={index} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No Events Found
                </h3>
                <p className="text-gray-500">
                  Try selecting a different era or check back later.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
