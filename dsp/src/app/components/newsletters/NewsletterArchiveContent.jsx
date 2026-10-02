"use client";
/**
 * NewsletterArchiveContent
 * Gamma Eye archive: editions (from Sanity) grouped by year, newest first,
 * each linking to its PDF.
 * Used in: app/newsletter-archive/page.js
 */
import React from "react";
import { motion } from "motion/react";
import { format } from "date-fns";
import { FileText, Calendar, ExternalLink } from "lucide-react";
import { parseDate } from "@lib/dates";

export default function NewsletterArchiveContent({ newsletters: items = [] }) {
  const newsletters = [...items].sort(
    (a, b) => parseDate(b.issue_date) - parseDate(a.issue_date),
  );

  // Group newsletters by year
  const groupedNewsletters = newsletters.reduce((acc, newsletter) => {
    const year = parseDate(newsletter.issue_date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(newsletter);
    return acc;
  }, {});

  const years = Object.keys(groupedNewsletters).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-20 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-nile-green flex items-center justify-center">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Gamma Eye Archive
                </h1>
                <p className="text-gray-600">Gamma Iota Chapter Publications</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {newsletters.length > 0 ? (
            <div className="space-y-12">
              {years.map((year) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-nile-green" />
                    {year}
                  </h2>
                  <div className="space-y-3">
                    {groupedNewsletters[year].map((newsletter, index) => (
                      <motion.a
                        key={newsletter.id}
                        href={newsletter.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md hover:border-nile-green/20 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-nile-green/10 transition-colors">
                          <FileText className="w-6 h-6 text-gray-500 group-hover:text-nile-green transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 group-hover:text-nile-green transition-colors truncate">
                            {newsletter.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {format(
                              parseDate(newsletter.issue_date),
                              "MMMM yyyy",
                            )}
                          </p>
                          {newsletter.description && (
                            <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                              {newsletter.description}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 group-hover:text-nile-green transition-colors">
                          <span className="text-sm font-medium hidden sm:block">
                            View PDF
                          </span>
                          <ExternalLink className="w-5 h-5" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No Newsletters Yet
              </h3>
              <p className="text-gray-500">
                Check back soon for chapter newsletters and publications.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
