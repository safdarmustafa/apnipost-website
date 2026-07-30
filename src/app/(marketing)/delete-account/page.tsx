import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle2,
  Clock,
  Mail,
  ShieldAlert,
  Trash2,
} from "lucide-react"

import { CtaButton } from "@/components/common/cta-button"
import { LegalPage } from "@/components/common/legal-page"
import {
  ContactCard,
  PolicyCallout,
  PolicyStep,
} from "@/components/common/policy-ui"
import { APP_CONSTANTS } from "@/config/constants"
import { pageMetadata } from "@/config/metadata"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = pageMetadata.deleteAccount

const toc = [
  { id: "overview", label: "Overview" },
  { id: "how-to-request", label: "How to request" },
  { id: "what-we-delete", label: "What we delete" },
  { id: "what-we-retain", label: "What we may retain" },
  { id: "timeline", label: "Processing time" },
  { id: "verification", label: "Verification" },
  { id: "after-deletion", label: "After deletion" },
  { id: "contact", label: "Contact" },
]

export default function DeleteAccountPage() {
  return (
    <LegalPage
      badge="Google Play data deletion"
      description={`Google Play requires a clear way for users to request deletion of their account and associated data. Use this page to request removal of your ${siteConfig.name} account.`}
      highlights={[
        {
          icon: Trash2,
          title: "Full account removal",
          description:
            "Request deletion of your profile, photo, and associated personal data.",
        },
        {
          icon: Clock,
          title: "Clear timeline",
          description:
            "Requests are typically completed within 7 business days after verification.",
        },
        {
          icon: CheckCircle2,
          title: "Confirmation by email",
          description:
            "You will receive confirmation once deletion is completed or if we need more details.",
        },
      ]}
      title="Account Deletion"
      toc={toc}
    >
      <section id="overview">
        <h2>1. Overview</h2>
        <p>
          You can request deletion of your {siteConfig.name} account at any
          time. This page explains how to submit a request, what data is
          deleted, what may be retained temporarily for legal or security
          reasons, and how long the process usually takes.
        </p>
        <PolicyCallout className="mt-5" title="Google Play requirement">
          This page is provided so users and Google Play reviewers can clearly
          understand how account and data deletion works for{" "}
          {siteConfig.name}. For related details, see our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </PolicyCallout>
      </section>

      <section id="how-to-request">
        <h2>2. How to request account deletion</h2>
        <p>Follow these steps to submit a deletion request:</p>

        <div className="not-prose mt-6 space-y-5 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
          <PolicyStep step={1} title="Send an email from your contact address">
            Email{" "}
            <a
              className="font-medium text-primary underline-offset-4 hover:underline"
              href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Account%20Deletion%20Request`}
            >
              {APP_CONSTANTS.supportEmail}
            </a>{" "}
            with the subject line <strong>Account Deletion Request</strong>.
          </PolicyStep>
          <PolicyStep step={2} title="Include the details we need">
            Please include:
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Your registered name / display name in the app</li>
              <li>The email or phone used with your account (if any)</li>
              <li>A short note confirming you want permanent deletion</li>
            </ul>
          </PolicyStep>
          <PolicyStep step={3} title="Wait for verification and confirmation">
            We may ask a follow-up question to verify ownership. After
            verification, we process the request and send a confirmation email.
          </PolicyStep>
        </div>

        <div className="not-prose mt-6">
          <CtaButton
            href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Account%20Deletion%20Request&body=Hello%20ApniPost%20Support%2C%0A%0AI%20would%20like%20to%20request%20permanent%20deletion%20of%20my%20ApniPost%20account%20and%20associated%20personal%20data.%0A%0ADisplay%20name%3A%0AContact%20email%2Fphone%3A%0A%0AThank%20you.`}
          >
            Request account deletion
          </CtaButton>
        </div>
      </section>

      <section id="what-we-delete">
        <h2>3. What data is deleted</h2>
        <p>
          When your request is approved and processed, we delete the following
          from our active systems where applicable:
        </p>
        <ul>
          <li>Your user account / profile record</li>
          <li>Display name</li>
          <li>Profile photo</li>
          <li>
            Account-linked personal identifiers used to operate your profile
          </li>
          <li>
            Support tickets tied solely to your account, where retention is not
            legally required
          </li>
        </ul>
      </section>

      <section id="what-we-retain">
        <h2>4. Data that may be retained</h2>
        <p>
          Certain information may be retained for a limited period when required
          for:
        </p>
        <ul>
          <li>Security and fraud prevention</li>
          <li>Legal compliance or regulatory obligations</li>
          <li>Resolving disputes or enforcing our terms</li>
          <li>
            Backup systems that are periodically purged on a delayed schedule
          </li>
        </ul>
        <p>
          Any retained data is handled according to our{" "}
          <Link href="/privacy">Privacy Policy</Link> and is not kept longer
          than necessary for those purposes.
        </p>
        <PolicyCallout className="mt-5" title="Shared content note">
          Content you previously shared to WhatsApp exists outside{" "}
          {siteConfig.name} and is controlled by WhatsApp and the recipients of
          those messages. We cannot delete copies already shared through
          WhatsApp.
        </PolicyCallout>
      </section>

      <section id="timeline">
        <h2>5. Processing time</h2>
        <p>
          Account deletion requests are typically completed within{" "}
          <strong>7 business days</strong> after we successfully verify the
          request. Complex cases may take longer, and we will communicate if
          additional time or information is needed.
        </p>
      </section>

      <section id="verification">
        <h2>6. Request verification</h2>
        <p>
          To protect users from unauthorized deletion requests, we may ask you
          to confirm ownership of the account before processing. We will not
          delete an account based on incomplete or unverifiable requests.
        </p>
      </section>

      <section id="after-deletion">
        <h2>7. After your account is deleted</h2>
        <ul>
          <li>You will lose access to your {siteConfig.name} profile</li>
          <li>
            Personalized sharing tied to that account will no longer be
            available
          </li>
          <li>
            Creating a new account later will start a fresh profile and will not
            restore deleted data
          </li>
        </ul>
      </section>

      <section id="contact">
        <h2>8. Contact for deletion help</h2>
        <p>
          If you have trouble submitting a request or need status updates,
          contact us:
        </p>
        <div className="not-prose mt-5 grid gap-4 sm:grid-cols-2">
          <ContactCard
            description="Send your deletion request or ask about an existing request."
            href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Account%20Deletion%20Request`}
            icon={Mail}
            label={APP_CONSTANTS.supportEmail}
            title="Deletion support"
          />
          <ContactCard
            description="Read how we collect, use, and protect personal information."
            href="/privacy"
            icon={ShieldAlert}
            label="View Privacy Policy"
            title="Privacy details"
          />
        </div>
      </section>
    </LegalPage>
  )
}
