import { CtaButton } from "@/components/common/cta-button"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { APP_CONSTANTS } from "@/config/constants"

export function SupportCtaSection() {
  return (
    <Section aria-labelledby="support-cta-heading" id="support-cta">
      <div className="rounded-3xl border border-border bg-card px-6 py-12 text-center shadow-sm sm:px-12">
        <SectionHeader
          align="center"
          className="mb-8"
          description="Questions about the app, refunds, your account, or data requests? Our team is here to help."
          headingId="support-cta-heading"
          title="Need help?"
        />
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <CtaButton href={`mailto:${APP_CONSTANTS.supportEmail}`}>
            Email {APP_CONSTANTS.supportEmail}
          </CtaButton>
          <CtaButton href={APP_CONSTANTS.playStoreUrl} variant="outline">
            {APP_CONSTANTS.playStoreLabel}
          </CtaButton>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {APP_CONSTANTS.responseTime}
        </p>
      </div>
    </Section>
  )
}
