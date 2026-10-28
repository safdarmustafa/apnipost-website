import { Link } from "react-router-dom"
import {
  BadgeIndianRupee,
  CheckCircle2,
  Clock,
  ExternalLink,
  HelpCircle,
  Mail,
  Receipt,
  ShieldAlert,
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
  { id: "free-app", label: "Free app" },
  { id: "when-refund", label: "When you can get a refund" },
  { id: "how-to-request", label: "How to request" },
  { id: "order-id", label: "Find Order ID" },
  { id: "google-play", label: "Refund via Google Play" },
  { id: "processing", label: "What happens next" },
  { id: "not-eligible", label: "When refunds are declined" },
  { id: "contact", label: "Contact us" },
]

export function RefundPolicyPage() {
  usePageMeta({
    title: "Refund Policy",
    description: `Need a refund for ${siteConfig.name}? Learn eligibility, how to find your Google Play Order ID, and how to contact support.`,
    path: "/refund-policy",
  })

  return (
    <LegalPage
      badge="Customer billing help"
      description={`If you were charged for an ${siteConfig.name} purchase on Google Play and need help, this page explains refund eligibility, the exact details we need, and how to contact us.`}
      highlights={[
        {
          icon: BadgeIndianRupee,
          title: "We review every request",
          description:
            "Wrong charge, duplicate payment, or a feature that did not work — tell us and we will check.",
        },
        {
          icon: Receipt,
          title: "Order ID helps us move faster",
          description:
            "Your Google Play Order ID (GPA…) lets us verify the purchase quickly.",
        },
        {
          icon: Clock,
          title: "Reply in 1–2 business days",
          description: APP_CONSTANTS.responseTime,
        },
      ]}
      title="Refund Policy"
      toc={toc}
    >
      <section id="overview">
        <h2>1. Overview</h2>
        <p>
          This Refund Policy applies to paid purchases related to{" "}
          {siteConfig.name} (package ID: <strong>com.apnipost.app</strong>) made
          through Google Play. It is written for real customers who need clear
          steps — not legal jargon.
        </p>
        <PolicyCallout className="mt-5" title="Fastest way to reach us">
          Email{" "}
          <a
            href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Refund%20Request`}
          >
            {APP_CONSTANTS.supportEmail}
          </a>{" "}
          with subject <strong>Refund Request</strong>. Include your Google Play
          Order ID, purchase date, amount, and a short reason. We reply within
          1–2 business days.
        </PolicyCallout>
      </section>

      <section id="free-app">
        <h2>2. ApniPost is free to download</h2>
        <p>
          {siteConfig.name} is free on Google Play. You do not pay to install the
          app. Refunds only apply if you completed a paid in-app purchase,
          subscription, or other Google Play billing for {siteConfig.name}.
        </p>
        <p>
          Download the app here:{" "}
          <a
            href={APP_CONSTANTS.playStoreUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Play — ApniPost
          </a>
          .
        </p>
      </section>

      <section id="when-refund">
        <h2>3. When you can get a refund</h2>
        <p>We generally approve refunds when:</p>
        <ul>
          <li>You were charged twice for the same purchase</li>
          <li>You were charged by mistake or for the wrong amount</li>
          <li>
            A paid feature did not unlock / did not work after payment, and the
            issue is on our side
          </li>
          <li>
            Someone used your Google account without permission and you report
            it quickly with proof
          </li>
          <li>
            You request the refund soon after the purchase (ideally within a few
            days)
          </li>
        </ul>
        <p>
          Final approval can also depend on Google Play&apos;s refund rules for
          that order.
        </p>
      </section>

      <section id="how-to-request">
        <h2>4. How to request a refund from us</h2>
        <p>Follow these steps:</p>

        <div className="not-prose mt-6 space-y-5 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
          <PolicyStep step={1} title="Write to support">
            Email{" "}
            <a
              className="font-medium text-primary underline-offset-4 hover:underline"
              href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Refund%20Request`}
            >
              {APP_CONSTANTS.supportEmail}
            </a>{" "}
            with subject <strong>Refund Request</strong>.
          </PolicyStep>
          <PolicyStep step={2} title="Share these details">
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Your name / display name in the app</li>
              <li>
                Google Play <strong>Order ID</strong> (starts with GPA…)
              </li>
              <li>Purchase date and amount (₹)</li>
              <li>What you bought (if shown in Play Store)</li>
              <li>Why you want a refund (1–3 lines is enough)</li>
              <li>Screenshot of the Play receipt (optional, but helpful)</li>
            </ul>
          </PolicyStep>
          <PolicyStep step={3} title="Wait for our reply">
            We verify the order and email you the decision. If approved, Google
            Play / your bank may take a few more days to show the credit.
          </PolicyStep>
        </div>

        <div className="not-prose mt-6 flex flex-col gap-3 sm:flex-row">
          <CtaButton
            href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Refund%20Request&body=Hello%20ApniPost%20Support%2C%0A%0AI%20need%20help%20with%20a%20refund.%0A%0AName%20%2F%20display%20name%3A%0AGoogle%20Play%20Order%20ID%20(GPA...)%3A%0APurchase%20date%3A%0AAmount%20(INR)%3A%0AWhat%20I%20bought%3A%0AReason%3A%0A%0AThank%20you.`}
          >
            Email refund request
          </CtaButton>
          <CtaButton href={APP_CONSTANTS.playStoreUrl} variant="outline">
            Open ApniPost on Play Store
          </CtaButton>
        </div>
      </section>

      <section id="order-id">
        <h2>5. How to find your Google Play Order ID</h2>
        <p>On your Android phone:</p>
        <ol>
          <li>Open the <strong>Play Store</strong> app</li>
          <li>Tap your profile photo (top right)</li>
          <li>Tap <strong>Payments & subscriptions</strong></li>
          <li>Tap <strong>Budget & history</strong></li>
          <li>Open the purchase for {siteConfig.name}</li>
          <li>
            Copy the <strong>Order ID</strong> (usually starts with{" "}
            <strong>GPA</strong>)
          </li>
        </ol>
        <p>
          You can also check the purchase email from Google Play for the same
          Order ID.
        </p>
      </section>

      <section id="google-play">
        <h2>6. You can also request a refund on Google Play</h2>
        <p>
          For many Play Store purchases, Google lets you request a refund
          directly. That is often the fastest option for recent orders.
        </p>
        <ul>
          <li>
            Open{" "}
            <a
              href="https://play.google.com/store/account/orderhistory"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Play order history
            </a>
          </li>
          <li>Find the {siteConfig.name} purchase</li>
          <li>Follow Google&apos;s refund / report a problem option</li>
        </ul>
        <PolicyCallout className="mt-5" title="Already contacted Google?">
          If Google Play already refunded the order, you do not need to email
          us again — unless the paid feature is still showing as active and you
          need help turning it off.
        </PolicyCallout>
      </section>

      <section id="processing">
        <h2>7. What happens after you contact us</h2>
        <ul>
          <li>
            <strong>We acknowledge</strong> your email (usually within 1–2
            business days)
          </li>
          <li>
            <strong>We verify</strong> the Order ID and purchase with available
            billing records
          </li>
          <li>
            <strong>We reply</strong> with approval, next steps, or questions if
            details are missing
          </li>
          <li>
            <strong>If approved</strong>, the refund is processed through Google
            Play / your original payment method. Banks can take additional days
            to show the amount
          </li>
        </ul>
      </section>

      <section id="not-eligible">
        <h2>8. When refunds may be declined</h2>
        <p>We may decline a refund when:</p>
        <ul>
          <li>We cannot verify the purchase (no Order ID / wrong app)</li>
          <li>The request is made long after purchase without a valid reason</li>
          <li>
            The issue was caused by device settings, no internet, unsupported
            Android version, or user error
          </li>
          <li>
            Google Play policy does not allow a refund for that transaction
          </li>
          <li>The purchase was already refunded</li>
        </ul>
        <p>
          Even if a refund is not possible, we still try to help fix the app
          issue — email us the problem and your device model.
        </p>
      </section>

      <section id="contact">
        <h2>9. Contact us for refund help</h2>
        <p>
          Square Nova Tech (developer of {siteConfig.name}) is here to help with
          billing and refund questions.
        </p>
        <div className="not-prose mt-5 grid gap-4 sm:grid-cols-2">
          <ContactCard
            description="Best for refund requests. Include Order ID, amount, and reason."
            href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Refund%20Request`}
            icon={Mail}
            label={APP_CONSTANTS.supportEmail}
            title="Email support"
          />
          <ContactCard
            description="More help topics, response time, and account questions."
            href="/support"
            icon={HelpCircle}
            label="Open Support page"
            title="Support center"
          />
          <ContactCard
            description="Request a refund directly from Google for recent Play purchases."
            href="https://play.google.com/store/account/orderhistory"
            icon={ExternalLink}
            label="Google Play order history"
            title="Refund on Google Play"
          />
          <ContactCard
            description="Read how we handle personal data related to your account."
            href="/privacy"
            icon={ShieldAlert}
            label="Privacy Policy"
            title="Privacy"
          />
        </div>

        <div className="not-prose mt-8 rounded-2xl border border-border bg-secondary/60 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2
              aria-hidden
              className="mt-0.5 size-5 shrink-0 text-primary"
            />
            <div className="text-sm leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">Developer details</p>
              <p className="mt-2">
                <strong>App:</strong> {APP_CONSTANTS.appName}
                <br />
                <strong>Package:</strong> com.apnipost.app
                <br />
                <strong>Developer:</strong> Square Nova Tech
                <br />
                <strong>Support email:</strong>{" "}
                <a href={`mailto:${APP_CONSTANTS.supportEmail}`}>
                  {APP_CONSTANTS.supportEmail}
                </a>
                <br />
                <strong>Play Store:</strong>{" "}
                <a
                  href={APP_CONSTANTS.playStoreUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open listing
                </a>
              </p>
              <p className="mt-3">
                Related pages: <Link to="/terms">Terms</Link>,{" "}
                <Link to="/privacy">Privacy</Link>,{" "}
                <Link to="/delete-account">Account Deletion</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </LegalPage>
  )
}
