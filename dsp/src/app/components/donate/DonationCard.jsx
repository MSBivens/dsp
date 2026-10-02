/**
 * DonationCard
 * Animated card representing a single giving option on the Donate page.
 * Accepts an icon name, title, subtitle, color name, description, benefits
 * list, and an external button link. Supports a "featured" variant with a
 * purple border and "Most Popular" banner.
 * Used in: components/donate/DonateContent
 */
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ExternalLink,
  CheckCircle,
  Building2,
  GraduationCap,
  Globe,
  Heart,
} from "lucide-react";

// Keep in sync with the icon and color options in studio/schemaTypes/donatePage.js.
const ICONS = {
  building: Building2,
  graduation: GraduationCap,
  globe: Globe,
  heart: Heart,
};
const COLORS = {
  green: "bg-nile-green",
  purple: "bg-[#5B2C6F]",
  gray: "bg-gray-800",
};

export default function DonationCard({
  icon,
  title,
  subtitle,
  color,
  description,
  benefits,
  buttonText,
  buttonLink,
  featured,
  index,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = ICONS[icon] ?? Heart;
  const colorClass = COLORS[color] ?? COLORS.green;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-3xl overflow-hidden ${featured ? "lg:-mt-4 lg:mb-4" : ""}`}
    >
      {featured && (
        <div className="absolute top-0 left-0 right-0 bg-[#5B2C6F] text-white text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}

      <div
        className={`bg-white border-2 ${featured ? "border-[#5B2C6F] pt-10" : "border-gray-100"} rounded-3xl h-full flex flex-col`}
      >
        <div className="p-8 flex-1">
          <div
            className={`w-16 h-16 rounded-2xl ${colorClass} flex items-center justify-center mb-6`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
          {description && <p className="text-gray-600 mb-6">{description}</p>}

          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-nile-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-8 pb-8">
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
              featured
                ? "bg-[#5B2C6F] text-white hover:bg-[#7D3C98]"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            {buttonText}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
