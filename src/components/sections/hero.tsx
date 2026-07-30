"use client"

import { motion, useReducedMotion } from "framer-motion"

import { CtaButton } from "@/components/common/cta-button"
import { PhoneMockup } from "@/components/common/phone-mockup"
import { Container } from "@/components/layout/container"
import { APP_CONSTANTS } from "@/config/constants"
import { siteConfig } from "@/config/site"

type HeroSectionProps = {
  /**
   * Real Home screen export from `public/screenshots/home.png`. Passed in from
   * the page so a missing file falls back to the placeholder device instead of
   * rendering a broken image.
   */
  screenshotSrc?: string
}

export function HeroSection({ screenshotSrc }: HeroSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <Container className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <motion.div
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="flex flex-col items-start"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm font-medium tracking-wide text-primary">
            {siteConfig.name}
          </p>
          <h1
            className="max-w-xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            id="hero-heading"
          >
            Share posts that feel personal
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore content across categories and share instantly to WhatsApp.
            Every share includes your profile photo and name on a polished
            template—built for communities across India.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton disabled>{APP_CONSTANTS.playStoreLabel}</CtaButton>
            <CtaButton href="/#features" variant="outline">
              Learn More
            </CtaButton>
          </div>
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="relative flex justify-center lg:justify-end"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end"
          >
            <div className="size-[280px] rounded-full bg-primary/25 blur-[90px] sm:size-[340px] lg:size-[380px] lg:translate-x-8" />
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            className="relative"
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <PhoneMockup
              alt={`${siteConfig.name} home feed on Android`}
              fit="contain"
              label="Home screen preview"
              priority
              size="hero"
              src={screenshotSrc}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
