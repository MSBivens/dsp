/**
 * ImpactSection
 * Dark full-width section on the Donate page displaying the giving impact
 * statistics edited in the Donate Page document in Sanity.
 * Animates into view on scroll using framer-motion.
 * Used in: components/donate/DonateContent
 */
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function ImpactSection({ stats }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Your Impact
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Every dollar you give directly supports our brothers and strengthens
            our chapter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="text-5xl font-bold text-nile-green mb-2">
                {stat.value}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
