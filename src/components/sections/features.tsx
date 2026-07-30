"use client"

import { motion, useReducedMotion } from "framer-motion"

import { FeatureCard } from "@/components/common/feature-card"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { features } from "@/config/features"

export function FeaturesSection() {
  const reduceMotion = useReducedMotion()

  return (
    <Section aria-labelledby="features-heading" id="features">
      <SectionHeader
        align="center"
        className="mb-12"
        description="Everything you need to discover content and share it with a personal touch."
        headingId="features-heading"
        title="Built for everyday sharing"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {features.map((feature, index) => (
          <motion.div
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            key={feature.title}
            transition={{
              duration: 0.4,
              delay: reduceMotion ? 0 : index * 0.05,
              ease: "easeOut",
            }}
          >
            <FeatureCard
              description={feature.description}
              icon={feature.icon}
              title={feature.title}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
