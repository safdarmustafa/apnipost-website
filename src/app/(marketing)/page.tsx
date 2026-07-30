import type { Metadata } from "next"

import { AboutSection } from "@/components/sections/about"
import { FaqSection } from "@/components/sections/faq"
import { FeaturesSection } from "@/components/sections/features"
import { HeroSection } from "@/components/sections/hero"
import { ScreenshotsSection } from "@/components/sections/screenshots"
import { SupportCtaSection } from "@/components/sections/support-cta"
import { pageMetadata } from "@/config/metadata"
import { hasPublicAsset } from "@/lib/public-assets"

export const metadata: Metadata = pageMetadata.home

const HERO_SCREENSHOT = "/screenshots/home.png"

export default function HomePage() {
  return (
    <>
      <HeroSection
        screenshotSrc={
          hasPublicAsset(HERO_SCREENSHOT) ? HERO_SCREENSHOT : undefined
        }
      />
      <FeaturesSection />
      <AboutSection />
      <ScreenshotsSection />
      <FaqSection />
      <SupportCtaSection />
    </>
  )
}
