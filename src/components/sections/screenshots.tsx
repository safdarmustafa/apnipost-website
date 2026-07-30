import { PhoneMockup } from "@/components/common/phone-mockup"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { hasPublicAsset } from "@/lib/public-assets"

/**
 * Screenshots rendered inside the phone mockups.
 *
 * `src` points at `public/screenshots/*`, which currently holds empty
 * placeholder files. Replace those files with the actual exported Android
 * screenshots — no code change is needed. Until a real image is present, each
 * phone falls back to the built-in CSS placeholder so the page never renders a
 * broken image.
 */
const screenshots = [
  {
    id: "login",
    src: "/screenshots/login.png",
    caption: "Login",
    alt: "ApniPost login screen",
  },
  {
    id: "home",
    src: "/screenshots/home.png",
    caption: "Home Feed",
    alt: "ApniPost home feed showing posts across categories",
  },
  {
    id: "profile",
    src: "/screenshots/profile.png",
    caption: "Profile",
    alt: "ApniPost user profile screen",
  },
] as const

export function ScreenshotsSection() {
  return (
    <Section aria-labelledby="screenshots-heading" id="screenshots">
      <SectionHeader
        align="center"
        className="mb-12"
        description="A clean Android experience designed for discovery and one-tap WhatsApp sharing. Replace these placeholders with real screenshots anytime."
        headingId="screenshots-heading"
        title="A closer look"
      />
      <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((shot) => {
          const hasScreenshot = hasPublicAsset(shot.src)

          return (
            <figure
              className="group flex flex-col items-center gap-4 transition-transform duration-300 ease-out motion-safe:hover:-translate-y-1.5 motion-safe:hover:scale-[1.02]"
              key={shot.id}
            >
              <PhoneMockup
                alt={shot.alt}
                label={`${shot.caption} screenshot placeholder`}
                src={hasScreenshot ? shot.src : undefined}
              />
              <figcaption className="text-sm font-medium text-foreground">
                {shot.caption}
              </figcaption>
            </figure>
          )
        })}
      </div>
    </Section>
  )
}
