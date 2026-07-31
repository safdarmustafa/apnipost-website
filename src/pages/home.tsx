import { AboutSection } from "@/components/sections/about"
import { FaqSection } from "@/components/sections/faq"
import { FeaturesSection } from "@/components/sections/features"
import { HeroSection } from "@/components/sections/hero"
import { ScreenshotsSection } from "@/components/sections/screenshots"
import { SupportCtaSection } from "@/components/sections/support-cta"
import { siteConfig } from "@/config/site"
import { usePageMeta } from "@/hooks/use-page-meta"

export function HomePage() {
  usePageMeta({
    title: `${siteConfig.name} — Share content your way`,
    description: siteConfig.description,
    path: "/",
  })

  return (
    <>
      <HeroSection screenshotSrc="/screenshots/home.png" />
      <FeaturesSection />
      <AboutSection />
      <ScreenshotsSection />
      <FaqSection />
      <SupportCtaSection />
    </>
  )
}
