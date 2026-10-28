import { motion, useReducedMotion } from "framer-motion"

import { CtaButton } from "@/components/common/cta-button"
import { Container } from "@/components/layout/container"
import { APP_CONSTANTS } from "@/config/constants"
import { siteConfig } from "@/config/site"

type HeroSectionProps = {
  /** Marketing screenshot shown on the right (already includes device frame). */
  screenshotSrc?: string
}

export function HeroSection({
  screenshotSrc = "/screenshots/home.jpg",
}: HeroSectionProps) {
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
          <div className="mb-4 flex items-center gap-3">
            <img
              alt=""
              className="size-11 rounded-xl object-contain shadow-sm"
              height={44}
              src={siteConfig.logo}
              width={44}
            />
            <p className="text-sm font-medium tracking-wide text-primary">
              {siteConfig.name}
            </p>
          </div>
          <h1
            className="max-w-xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            id="hero-heading"
          >
            Share posts that feel personal
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Create Good Morning status, birthday wish videos, and name
            ringtones — then share instantly on WhatsApp with your photo and
            name. Built for communities across India.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton href={APP_CONSTANTS.playStoreUrl}>
              {APP_CONSTANTS.playStoreLabel}
            </CtaButton>
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
            className="relative w-[240px] sm:w-[280px] lg:w-[320px]"
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <img
              alt={`${siteConfig.name} app preview — personalized status sharing`}
              className="h-auto w-full rounded-3xl border border-border bg-card object-contain shadow-[0_36px_80px_-28px_rgba(15,23,42,0.45)]"
              decoding="async"
              height={1024}
              loading="eager"
              src={screenshotSrc}
              width={473}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
