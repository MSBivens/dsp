"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, Shield, Calendar, Award, User } from "lucide-react";
import veteransData from "@/components/data/veterans";
import Image from "next/image";

function VeteranDetailContent() {
  const searchParams = useSearchParams();
  const veteranId = searchParams.get("id");

  const veteran =
    veteransData.find((v) => String(v.id) === String(veteranId)) || null;

  const branchIcons = {
    Army: "⚔️",
    Navy: "⚓",
    "Air Force": "✈️",
    Marines: "🦅",
    "Coast Guard": "⛵",
    "National Guard": "🛡️",
  };

  if (!veteran) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Veteran Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The veteran story you&apos;re looking for doesn&apos;t exist (ID:{" "}
            {veteranId}).
          </p>
          <Link
            href="/veteran-stories"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#18453B] text-white rounded-lg font-medium hover:bg-[#12362e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Veterans
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {veteran.photo_url && (
          <div className="absolute inset-0 opacity-30">
            <Image
              src={veteran.photo_url}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/veteran-stories"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Veterans
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">
                {branchIcons[veteran.branch] || "🎖️"}
              </span>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  {veteran.name}
                </h1>
                {veteran.rank && (
                  <p className="text-xl text-white/80 mt-1">{veteran.rank}</p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                {veteran.branch}
              </span>
              <span className="px-4 py-2 rounded-full bg-[#006D5B]/80 text-white text-sm font-medium">
                {veteran.conflict}
              </span>
              {veteran.graduation_year && (
                <span className="px-4 py-2 rounded-full bg-[#5B2C6F]/80 text-white text-sm font-medium">
                  Pledge Class {veteran.graduation_year}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-28 space-y-6"
              >
                {veteran.photo_url && (
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={veteran.photo_url}
                      alt={veteran.name}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                )}

                <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                  <h3 className="font-bold text-gray-900">Service Details</h3>

                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#006D5B] mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Branch</p>
                      <p className="font-medium text-gray-900">
                        {veteran.branch}
                      </p>
                    </div>
                  </div>

                  {veteran.years_of_service && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#006D5B] mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">
                          Years of Service
                        </p>
                        <p className="font-medium text-gray-900">
                          {veteran.years_of_service}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    {/* Adding a flex-shrink-0 ensures the icon never gets squeezed by long text */}
                    <Award className="w-5 h-5 flex-shrink-0 text-[#006D5B] mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 leading-none mb-1">
                        Decorations
                      </p>
                      <p className="font-medium text-gray-900 leading-tight">
                        {veteran.decorations}
                      </p>
                    </div>
                  </div>

                  {veteran.graduation_year && (
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-[#006D5B] mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Pledge Class</p>
                        <p className="font-medium text-gray-900">
                          {veteran.graduation_year}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              {veteran.short_bio && (
                <div className="mb-8">
                  <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-[#006D5B] pl-6">
                    {veteran.short_bio}
                  </p>
                </div>
              )}

              {veteran.full_story && (
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Their Story
                  </h2>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {veteran.full_story}
                  </div>
                </div>
              )}

              {!veteran.full_story && !veteran.short_bio && (
                <div className="text-center py-12 bg-gray-50 rounded-2xl">
                  <Shield className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Full story coming soon. If you have information about this
                    veteran, please contact us to help preserve their legacy.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function VeteranDetail() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-pulse text-[#18453B] font-medium">
            Loading Story...
          </div>
        </div>
      }
    >
      <VeteranDetailContent />
    </Suspense>
  );
}
