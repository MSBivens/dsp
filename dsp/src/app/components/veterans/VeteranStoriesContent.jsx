"use client";
/**
 * VeteranStoriesContent
 * Veteran Stories listing: hero, stats bar, name search, conflict filter and
 * the card grid. Veterans and stats are fetched server-side and passed in.
 * Used in: app/veteran-stories/page.js
 */
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Shield, Users, Medal } from "lucide-react";
import VeteranCard from "@/components/veterans/VeteranCard";

export default function VeteranStoriesContent({ veterans, stats }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [conflictFilter, setConflictFilter] = useState("all");

  const conflicts = [
    "World War I",
    "World War II",
    "Korean War",
    "Vietnam War",
    "Cold War Era",
    "Gulf War",
    "Global War on Terrorism",
    "Operation Iraqi Freedom",
    "Operation Enduring Freedom",
    "Peacetime Service",
    "Expeditionary & Global Operations",
  ];

  const filteredVeterans = useMemo(() => {
    return veterans.filter((veteran) => {
      const matchesSearch =
        searchQuery === "" ||
        veteran.name?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesConflict =
        conflictFilter === "all" ||
        veteran.conflicts?.includes(conflictFilter);

      return matchesSearch && matchesConflict;
    });
  }, [veterans, searchQuery, conflictFilter]);

  const branchIcons = {
    Army: "⚔️",
    Navy: "⚓",
    "Air Force": "✈️",
    Marines: "🦅",
    "Coast Guard": "⛵",
    "National Guard": "🛡️",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              Honoring Service
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Veteran Stories
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
              Celebrating the brothers of Gamma Iota who have served our nation
              with honor and distinction
            </p>
            <Link
              href="/files/KnownVeterans.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-nile-green text-white rounded-lg font-medium hover:bg-nile-green-dark transition-all duration-300 shadow-lg"
            >
              View Known Veterans (PDF)
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-nile-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="w-8 h-8 text-white/80 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">
                {veterans.length}+
              </div>
              <div className="text-white/70 text-sm">Veterans Honored</div>
            </div>
            <div>
              <Medal className="w-8 h-8 text-white/80 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">
                {stats.branches}
              </div>
              <div className="text-white/70 text-sm">Military Branches</div>
            </div>
            <div>
              <Users className="w-8 h-8 text-white/80 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">
                {stats.combinedYears}
              </div>
              <div className="text-white/70 text-sm">
                Combined Years of Service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-b bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Select value={conflictFilter} onValueChange={setConflictFilter}>
              <SelectTrigger className="w-full sm:w-56 h-12">
                <SelectValue placeholder="Filter by conflict/era" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Conflicts & Eras</SelectItem>
                {conflicts.map((conflict) => (
                  <SelectItem key={conflict} value={conflict}>
                    {conflict}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Veterans Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredVeterans.length > 0 ? (
            <>
              <p className="text-gray-500 mb-8 text-center">
                Showing {filteredVeterans.length} of {veterans.length} veterans
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredVeterans.map((veteran, index) => (
                    <VeteranCard
                      key={veteran.id}
                      veteran={veteran}
                      index={index}
                      branchIcons={branchIcons}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <Shield className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No Veterans Found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
