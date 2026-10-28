import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"

export function AboutSection() {
  return (
    <Section
      aria-labelledby="about-heading"
      className="bg-secondary/60"
      id="about"
    >
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          as="h2"
          description="ApniPost helps people across India create status posts, birthday videos, and ringtones — then share them on WhatsApp with a personal touch."
          eyebrow="About"
          headingId="about-heading"
          title="A simpler way to share what matters"
        />
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Whether you want a Good Morning status, a birthday wish video, or a
            special ringtone, ApniPost makes it easy to personalize and share.
          </p>
          <p>
            Add your photo and name to templates, then share to WhatsApp in one
            tap — so every post feels like it came from you.
          </p>
          <p>
            Designed for Hindi readers, families, and local communities,
            ApniPost focuses on clarity, speed, and a polished sharing
            experience on Android.
          </p>
        </div>
      </div>
    </Section>
  )
}
