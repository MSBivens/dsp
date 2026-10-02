"use client";
/**
 * VeteranDetailContent
 * Full profile view for a single veteran: hero with photo/branch/conflict
 * badges, a sidebar of service details, and the short/full story.
 * Used in: app/veterans/[id]/page.js
 */
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Shield,
  Calendar,
  Award,
  User,
  Star,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import {
  photoDimensions,
  photoObjectPosition,
  photoSrc,
  sanityLoader,
} from "@lib/sanity-image";

const branchIcons = {
  Army: "⚔️",
  Navy: "⚓",
  "Air Force": "✈️",
  Marines: "🦅",
  "Coast Guard": "⛵",
  "National Guard": "🛡️",
};

const CONTACT_EMAIL = "deltasigvandalalumni@gmail.com";

const hasValue = (value) =>
  Array.isArray(value)
    ? value.length > 0
    : value != null && String(value).trim() !== "";

// Rendering for the formatted full story edited in Sanity.
const storyComponents = {
  block: {
    normal: ({ children }) => <p className="mb-5 last:mb-0">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 list-disc space-y-1 pl-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-1 pl-6">{children}</ol>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const external = /^https?:\/\//.test(value?.href ?? "");
      return (
        <a
          href={value?.href}
          className="text-nile-green underline underline-offset-2 hover:text-nile-green-dark"
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </a>
      );
    },
  },
};

export default function VeteranDetailContent({ veteran }) {
  const branches = veteran.branches ?? [];
  const conflicts = veteran.conflicts ?? [];
  const src = photoSrc(veteran.photo);
  const objectPosition = photoObjectPosition(veteran.photo);

  const serviceDetails = [
    { label: "Rank", value: veteran.rank, Icon: Star },
    {
      label: branches.length > 1 ? "Branches" : "Branch",
      value: branches.join(" / "),
      Icon: Shield,
    },
    {
      label: "Years of Service",
      value: veteran.years_of_service,
      Icon: Calendar,
    },
    { label: "Decorations", value: veteran.decorations, Icon: Award },
    { label: "Pledge Class", value: veteran.pledge_class, Icon: User },
  ];
  const isIncomplete = serviceDetails.some(({ value }) => !hasValue(value));
  const helpHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Information for ${veteran.name}`,
  )}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {src && (
          <div className="absolute inset-0 opacity-30">
            <Image
              loader={sanityLoader}
              src={src}
              alt=""
              fill
              className="object-cover"
              style={{ objectPosition }}
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
                {branchIcons[branches[0]] || "🎖️"}
              </span>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  {veteran.name}
                </h1>
                {hasValue(veteran.rank) && (
                  <p className="text-xl text-white/80 mt-1">{veteran.rank}</p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {branches.map((branch) => (
                <span
                  key={branch}
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium"
                >
                  {branch}
                </span>
              ))}
              {conflicts.map((conflict) => (
                <span
                  key={conflict}
                  className="px-4 py-2 rounded-full bg-nile-green/80 text-white text-sm font-medium"
                >
                  {conflict}
                </span>
              ))}
              {hasValue(veteran.pledge_class) && (
                <span className="px-4 py-2 rounded-full bg-[#5B2C6F]/80 text-white text-sm font-medium">
                  Pledge Class {veteran.pledge_class}
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
                {src && (
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      loader={sanityLoader}
                      src={src}
                      alt={veteran.name}
                      {...photoDimensions(veteran.photo)}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                )}

                <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                  <h3 className="font-bold text-gray-900">Service Details</h3>

                  {serviceDetails.map(({ label, value, Icon }) => (
                    <div key={label} className="flex items-start gap-3">
                      {/* flex-shrink-0 keeps the icon from being squeezed by long text */}
                      <Icon className="w-5 h-5 flex-shrink-0 text-nile-green mt-1" />
                      <div>
                        <p className="text-sm text-gray-500 leading-none mb-1">
                          {label}
                        </p>
                        {hasValue(value) ? (
                          <p className="font-medium text-gray-900 leading-tight">
                            {value}
                          </p>
                        ) : (
                          <p className="italic text-gray-400 leading-tight">
                            Not yet documented
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
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
              {/* Summary quote hidden for now; short_bio is still used on the
                  Veteran Stories cards. Uncomment to show it again.
              {veteran.short_bio && (
                <div className="mb-8">
                  <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-nile-green pl-6">
                    {veteran.short_bio}
                  </p>
                </div>
              )}
              */}

              {hasValue(veteran.full_story) && (
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Their Story
                  </h2>
                  <div className="text-gray-700 leading-relaxed">
                    <PortableText
                      value={veteran.full_story}
                      components={storyComponents}
                    />
                  </div>
                </div>
              )}

              {!hasValue(veteran.full_story) && !veteran.short_bio && (
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

          {isIncomplete && (
            <div className="mt-16 flex items-center justify-center gap-3 rounded-2xl bg-gray-50 px-6 py-5 text-center text-gray-600">
              <Mail className="w-5 h-5 flex-shrink-0 text-nile-green" />
              <p>
                Information about this veteran is not yet complete,{" "}
                <a
                  href={helpHref}
                  className="font-medium text-nile-green underline underline-offset-2 hover:text-nile-green-dark"
                >
                  can you help?
                </a>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
