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
          description="ApniPost helps people across India discover shareable posts and send them on WhatsApp with a branded, personalized template."
          eyebrow="About"
          headingId="about-heading"
          title="A simpler way to share what matters"
        />
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Whether you are a student, a community organizer, or someone who
            simply loves sharing useful content, ApniPost makes discovery and
            WhatsApp sharing feel effortless.
          </p>
          <p>
            Explore posts across multiple categories, then share instantly.
            Each shared template automatically includes your profile photo and
            name—so every post carries your identity without extra design work.
          </p>
          <p>
            Designed with Hindi and Urdu readers, local communities, and
            mobile-first audiences in mind, ApniPost focuses on clarity, speed,
            and a polished sharing experience.
          </p>
        </div>
      </div>
    </Section>
  )
}
