"use client";
/**
 * ContactSection
 * Home page contact section (id="contact"). Shows chapter address, email,
 * and social links from Site Settings in Sanity; blank ones are hidden.
 * Used in: app/page.js
 */
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function ContactSection({ settings }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const email = settings?.contact_email;
  const addressLines = (settings?.mailing_address ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const socialLinks = [
    { href: settings?.facebook_url, Icon: Facebook, label: "Facebook" },
    { href: settings?.instagram_url, Icon: Instagram, label: "Instagram" },
    { href: settings?.linkedin_url, Icon: Linkedin, label: "LinkedIn" },
  ].filter(({ href }) => href);

  return (
    <section ref={ref} id="contact" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-nile-green/10 text-nile-green text-sm font-medium mb-4">
            Connect
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to get involved? We&apos;d love to hear from
            you.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-nile-green/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-nile-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Gamma Iota, Delta Sigma Phi
                    </h4>
                    {addressLines.length > 0 && (
                      <p className="text-gray-600">
                        {addressLines.map((line, i) => (
                          <React.Fragment key={i}>
                            {i > 0 && <br />}
                            {line}
                          </React.Fragment>
                        ))}
                      </p>
                    )}
                  </div>
                </div>

                {email && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-nile-green/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-nile-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a
                        href={`mailto:${email}`}
                        className="text-nile-green hover:underline"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Links */}
              {socialLinks.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map(({ href, Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-nile-green hover:text-white transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
