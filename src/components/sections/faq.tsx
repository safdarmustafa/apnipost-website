import { FaqList } from "@/components/common/faq-list"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { homeFaqs } from "@/config/faqs"

export function FaqSection() {
  return (
    <Section
      aria-labelledby="faq-heading"
      className="bg-secondary/60"
      id="faq"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          align="center"
          className="mb-10"
          description="Quick answers about ApniPost, sharing, accounts, and support."
          headingId="faq-heading"
          title="Frequently asked questions"
        />
        <FaqList
          className="rounded-2xl border border-border bg-card px-4 shadow-sm"
          idPrefix="faq"
          items={homeFaqs}
        />
      </div>
    </Section>
  )
}
