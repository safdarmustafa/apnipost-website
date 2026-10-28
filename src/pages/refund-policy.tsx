import { Link } from "react-router-dom"
import {
  BadgeIndianRupee,
  CheckCircle2,
  Clock,
  HelpCircle,
  Mail,
} from "lucide-react"

import { CtaButton } from "@/components/common/cta-button"
import { LegalPage } from "@/components/common/legal-page"
import {
  ContactCard,
  PolicyCallout,
  PolicyStep,
} from "@/components/common/policy-ui"
import { APP_CONSTANTS } from "@/config/constants"
import { siteConfig } from "@/config/site"
import { usePageMeta } from "@/hooks/use-page-meta"

const toc = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "how-to-request", label: "How to request" },
  { id: "processing", label: "Processing time" },
  { id: "non-refundable", label: "Non-refundable cases" },
  { id: "google-play", label: "Google Play purchases" },
  { id: "contact", label: "Contact us" },
]

export function RefundPolicyPage() {
  usePageMeta({
    title: "Refund Policy",
    description: `Learn how refunds work for ${siteConfig.name} and how to contact us for a refund request.`,
    path: "/refund-policy",
  })

  return (
    <LegalPage
      badge="Refunds & billing support"
      description={`This Refund Policy explains when refunds may be available for ${siteConfig.name}, how to request one, and how to contact our support team.`}
      highlights={[
        {
          icon: BadgeIndianRupee,
          title: "Clear refund process",
          description:
            "Submit a refund request by email with your purchase details and reason.",
        },
        {
          icon: Clock,
          title: "Fast response",
          description: APP_CONSTANTS.responseTime,
        },
        {
          icon: CheckCircle2,
          title: "Fair review",
          description:
            "Eligible requests are reviewed carefully and confirmed by email.",
        },
      ]}
      title="Refund Policy"
      toc={toc}
    >
      <section id="overview">
        <h2>1. Overview</h2>
        <p>
          {siteConfig.name} is primarily offered as a free Android application.
          If you make a purchase related to {siteConfig.name} in the future
          (such as a paid feature, subscription, or in-app purchase), this
          Refund Policy explains how refund requests are handled.
        </p>
        <PolicyCallout className="mt-5" title="Need a refund?">
          Contact us at{" "}
          <a href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Refund%20Request`}>
            {APP_CONSTANTS.supportEmail}
          </a>{" "}
          with the subject line <strong>Refund Request</strong>. Include your
          purchase details so we can help you quickly.
        </PolicyCallout>
      </section>

      <section id="eligibility">
        <h2>2. Refund eligibility</h2>
        <p>
          Refund requests are reviewed on a case-by-case basis. You may be
          eligible for a refund if:
        </p>
        <ul>
          <li>You were charged incorrectly or more than once for the same purchase</li>
          <li>A paid feature did not work as described due to a verified app issue</li>
          <li>You requested a refund within a reasonable time after the purchase</li>
          <li>
            The purchase was unauthorized and you report it promptly with
            supporting details
          </li>
        </ul>
        <p>
          Refund decisions may also depend on Google Play&apos;s billing and
          refund rules for purchases made through the Play Store.
        </p>
      </section>

      <section id="how-to-request">
        <h2>3. How to request a refund</h2>
        <p>Follow these steps to submit a refund request:</p>

        <div className="not-prose mt-6 space-y-5 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
          <PolicyStep step={1} title="Email our support team">
            Send an email to{" "}
            <a
              className="font-medium text-primary underline-offset-4 hover:underline"
              href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Refund%20Request`}
            >
              {APP_CONSTANTS.supportEmail}
            </a>{" "}
            with the subject line <strong>Refund Request</strong>.
          </PolicyStep>
          <PolicyStep step={2} title="Include these details">
            Please share:
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Your name / display name in {siteConfig.name}</li>
              <li>Google Play order ID or purchase receipt (if available)</li>
              <li>Date of purchase and amount charged</li>
              <li>A short explanation of why you are requesting a refund</li>
            </ul>
          </PolicyStep>
          <PolicyStep step={3} title="Wait for our confirmation">
            We will review your request and reply by email.{" "}
            {APP_CONSTANTS.responseTime}
          </PolicyStep>
        </div>

        <div className="not-prose mt-6">
          <CtaButton
            href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Refund%20Request&body=Hello%20ApniPost%20Support%2C%0A%0AI%20would%20like%20to%20request%20a%20refund.%0A%0ADisplay%20name%3A%0AOrder%20ID%20%2F%20receipt%3A%0APurchase%20date%3A%0AAmount%3A%0AReason%3A%0A%0AThank%20you.`}
          >
            Contact us for a refund
          </CtaButton>
        </div>
      </section>

      <section id="processing">
        <h2>4. Processing time</h2>
        <p>
          After we receive a complete refund request, we typically respond
          within <strong>1–2 business days</strong>. If a refund is approved,
          the actual credit may take additional time to appear depending on
          Google Play, your payment method, and your bank or card issuer.
        </p>
      </section>

      <section id="non-refundable">
        <h2>5. Non-refundable cases</h2>
        <p>Refunds may be declined when:</p>
        <ul>
          <li>The request is made a long time after the purchase without a valid reason</li>
          <li>The issue was caused by device settings, unsupported devices, or user error</li>
          <li>Required purchase details are missing and cannot be verified</li>
          <li>
            The request conflicts with Google Play&apos;s refund policies for the
            transaction
          </li>
        </ul>
      </section>

      <section id="google-play">
        <h2>6. Google Play purchases</h2>
        <p>
          Purchases made through Google Play are also subject to Google&apos;s
          payment and refund policies. In some cases, you may request a refund
          directly through Google Play. You can also contact us first and we
          will guide you.
        </p>
        <p>
          For general product terms, see our{" "}
          <Link to="/terms">Terms & Conditions</Link>. For privacy-related
          questions, see our <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section id="contact">
        <h2>7. Contact us for refunds</h2>
        <p>
          If you need help with a refund, billing question, or purchase issue,
          contact Square Nova Tech support:
        </p>
        <div className="not-prose mt-5 grid gap-4 sm:grid-cols-2">
          <ContactCard
            description="Email us with your order details and we will review your refund request."
            href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Refund%20Request`}
            icon={Mail}
            label={APP_CONSTANTS.supportEmail}
            title="Refund support"
          />
          <ContactCard
            description="Visit the Support page for response times and other help topics."
            href="/support"
            icon={HelpCircle}
            label="Go to Support"
            title="General support"
          />
        </div>
        <p className="mt-6">
          <strong>Developer:</strong> Square Nova Tech
          <br />
          <strong>App:</strong> {APP_CONSTANTS.appName}
          <br />
          <strong>Email:</strong>{" "}
          <a href={`mailto:${APP_CONSTANTS.supportEmail}`}>
            {APP_CONSTANTS.supportEmail}
          </a>
        </p>
      </section>
    </LegalPage>
  )
}
