"use client";
/**
 * EventsSection
 * Home page section showing the next 4 upcoming events (from Sanity) as cards
 * with date badges, type color-coding, time, location and an optional
 * details/RSVP link. Falls back to an empty-state card if none are upcoming.
 * Used in: app/page.js
 */
import React, { useRef, useSyncExternalStore } from "react";
import { motion, useInView } from "motion/react";
import { format } from "date-fns";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { pacificToday, parseDate } from "@lib/dates";

const MAX_EVENTS = 4;

const noSubscribe = () => () => {};

/** "Oct 17 – 19", or "Oct 30 – Nov 1" across months. */
function formatDateRange(start, end) {
  const s = parseDate(start);
  const e = parseDate(end);
  return s.getMonth() === e.getMonth()
    ? `${format(s, "MMM d")} – ${format(e, "d")}`
    : `${format(s, "MMM d")} – ${format(e, "MMM d")}`;
}

export default function EventsSection({ events = [], generatedOn }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // The page is cached, so re-check "today" in the browser to drop events
  // that ended since it was generated. The server snapshot keeps hydration
  // consistent with the cached HTML.
  const today = useSyncExternalStore(
    noSubscribe,
    pacificToday,
    () => generatedOn ?? pacificToday(),
  );
  const upcomingEvents = events
    .filter((e) => (e.end_date || e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, MAX_EVENTS);

  const eventTypeColors = {
    reunion: "bg-[#5B2C6F]",
    fundraiser: "bg-nile-green",
    social: "bg-blue-500",
    ceremony: "bg-amber-500",
    other: "bg-gray-500",
  };

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
            Mark Your Calendar
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for reunions, philanthropic events, and chapter celebrations
            throughout the year.
          </p>
        </motion.div>

        {upcomingEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-6">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl bg-white shadow-sm flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-nile-green">
                        {format(parseDate(event.date), "d")}
                      </span>
                      <span className="text-sm text-gray-500 uppercase">
                        {format(parseDate(event.date), "MMM")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`w-2 h-2 rounded-full ${eventTypeColors[event.type] || eventTypeColors.other}`}
                      />
                      <span className="text-sm text-gray-500 capitalize">
                        {event.type?.replace("_", " ")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-nile-green transition-colors">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {event.description}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      {event.end_date && event.end_date !== event.date && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {formatDateRange(event.date, event.end_date)}
                          </span>
                        </div>
                      )}
                      {event.time && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-nile-green hover:text-nile-green-dark"
                      >
                        Details / RSVP
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center py-16 bg-gray-50 rounded-2xl"
          >
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Upcoming Events
            </h3>
            <p className="text-gray-500">
              Check back soon for upcoming chapter events and reunions.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
