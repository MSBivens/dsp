"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import timelineData from "@/components/data/timeline";
import TimelineItem from "@/components/history/TimelineItem";

export default function HistoryTimeline() {
  const [selectedEra, setSelectedEra] = useState("all");
  const events = [...timelineData].sort((a, b) => a.year - b.year);

  const filteredEvents =
    selectedEra === "all"
      ? events
      : events.filter((e) => e.era === selectedEra);

  const eras = ["Founding Era", "Early Years", "Growth Period", "Modern Era"];

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

      {/* Filter */}
      <section className="py-8 border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
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
      </section>

      {/* Timeline */}
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
  );
}
