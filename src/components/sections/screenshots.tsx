import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"

/**
 * Store-style marketing screenshots. Each asset already includes a device
 * frame, so we render them as elevated cards (not nested inside PhoneMockup).
 */
const screenshots = [
  {
    id: "login",
    src: "/screenshots/login.jpg",
    caption: "Login",
    alt: "ApniPost login screen — enter mobile number",
  },
  {
    id: "home",
    src: "/screenshots/home.jpg",
    caption: "Daily Status",
    alt: "ApniPost Good Morning status with personalized photo",
  },
  {
    id: "share",
    src: "/screenshots/share.jpg",
    caption: "Share with Photo",
    alt: "ApniPost video share screen with user photo overlay",
  },
  {
    id: "ringtone",
    src: "/screenshots/ringtone.jpg",
    caption: "Name Ringtone",
    alt: "ApniPost ringtone category screen",
  },
  {
    id: "birthday",
    src: "/screenshots/birthday.jpg",
    caption: "Birthday Video",
    alt: "ApniPost birthday wish video template",
  },
] as const

export function ScreenshotsSection() {
  return (
    <Section aria-labelledby="screenshots-heading" id="screenshots">
      <SectionHeader
        align="center"
        className="mb-12"
        description="From login to status posts, birthday videos, and ringtones — a clean Android experience built for daily sharing."
        headingId="screenshots-heading"
        title="A closer look"
      />
      <div className="grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((shot) => (
          <figure
            className="group flex w-full max-w-[280px] flex-col items-center gap-4 transition-transform duration-300 ease-out motion-safe:hover:-translate-y-1.5 motion-safe:hover:scale-[1.02]"
            key={shot.id}
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)] transition-shadow duration-300 group-hover:shadow-[0_28px_60px_-22px_rgba(15,23,42,0.45)]">
              <img
                alt={shot.alt}
                className="h-auto w-full object-contain"
                decoding="async"
                height={1024}
                loading="lazy"
                src={shot.src}
                width={473}
              />
            </div>
            <figcaption className="text-sm font-medium text-foreground">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
