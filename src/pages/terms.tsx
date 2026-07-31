import { Link } from "react-router-dom"
import {
  FileText,
  Mail,
  Scale,
  Shield,
} from "lucide-react"

import { LegalPage } from "@/components/common/legal-page"
import {
  ContactCard,
  PolicyCallout,
} from "@/components/common/policy-ui"
import { APP_CONSTANTS } from "@/config/constants"
import { siteConfig } from "@/config/site"
import { usePageMeta } from "@/hooks/use-page-meta"


const toc = [
  { id: "acceptance", label: "Acceptance" },
  { id: "service", label: "The service" },
  { id: "eligibility", label: "Eligibility" },
  { id: "accounts", label: "Accounts" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "content", label: "Content & sharing" },
  { id: "ip", label: "Intellectual property" },
  { id: "third-party", label: "Third-party services" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Liability" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing law" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
]

export function TermsPage() {
  usePageMeta({
    title: "Terms & Conditions",
    description: "Read the terms and conditions for using ApniPost.",
    path: "/terms",
  })

  return (
    <LegalPage
      badge="Terms of use"
      description={`These Terms & Conditions set out the rules for using the ${siteConfig.name} Android app and website. Please read them carefully before creating an account or sharing content.`}
      highlights={[
        {
          icon: Scale,
          title: "Clear usage rules",
          description:
            "Fair guidelines that keep the community safe and the product reliable.",
        },
        {
          icon: Shield,
          title: "Respectful sharing",
          description:
            "Share content responsibly through WhatsApp with your own profile identity.",
        },
        {
          icon: FileText,
          title: "Your account, your control",
          description:
            "You can stop using the service and request account deletion at any time.",
        },
      ]}
      title="Terms & Conditions"
      toc={toc}
    >
      <section id="acceptance">
        <h2>1. Acceptance of terms</h2>
        <p>
          By downloading, accessing, or using {siteConfig.name}, you agree to
          these Terms & Conditions and our{" "}
          <Link to="/privacy">Privacy Policy</Link>. If you do not agree, do
          not use the app or website.
        </p>
        <PolicyCallout className="mt-5" title="Important">
          These terms form a binding agreement between you and Square Nova Tech,
          the operator of {siteConfig.name}. Continued use after updates means
          you accept the revised terms.
        </PolicyCallout>
      </section>

      <section id="service">
        <h2>2. Description of the service</h2>
        <p>
          {siteConfig.name} is a content-sharing platform for Android that
          allows users to:
        </p>
        <ul>
          <li>Explore posts across multiple categories</li>
          <li>Personalize share templates with a profile name and photo</li>
          <li>Share content instantly to WhatsApp</li>
          <li>Manage a basic user profile for branded sharing</li>
        </ul>
        <p>
          Features may evolve over time. We may add, modify, or discontinue
          parts of the service with reasonable notice where practical.
        </p>
      </section>

      <section id="eligibility">
        <h2>3. Eligibility</h2>
        <p>
          You must be at least 13 years old (or the minimum legal age in your
          country) to use {siteConfig.name}. By using the app, you confirm that
          you meet this requirement and have the legal capacity to agree to
          these terms.
        </p>
      </section>

      <section id="accounts">
        <h2>4. User accounts</h2>
        <p>If you create an account or profile, you agree to:</p>
        <ul>
          <li>Provide accurate and up-to-date information</li>
          <li>Keep your account credentials secure</li>
          <li>Accept responsibility for activity under your account</li>
          <li>
            Notify us promptly if you suspect unauthorized access
          </li>
        </ul>
        <p>
          We may suspend or restrict accounts that appear compromised, abusive,
          or in violation of these terms.
        </p>
      </section>

      <section id="acceptable-use">
        <h2>5. Acceptable use</h2>
        <p>You agree not to use {siteConfig.name} to:</p>
        <ul>
          <li>Violate any applicable law or regulation</li>
          <li>
            Upload, share, or distribute unlawful, harmful, harassing, hateful,
            or infringing content
          </li>
          <li>Impersonate another person or misrepresent your identity</li>
          <li>
            Interfere with, disrupt, or attempt unauthorized access to the
            service or related systems
          </li>
          <li>
            Reverse engineer, scrape, or exploit the app except as allowed by
            law
          </li>
          <li>
            Use automated tools in a way that harms service quality or other
            users
          </li>
        </ul>
      </section>

      <section id="content">
        <h2>6. Content and WhatsApp sharing</h2>
        <h3>6.1 App content</h3>
        <p>
          Content available in {siteConfig.name} may be provided by us or made
          available through the platform for browsing and sharing. You may use
          that content only as permitted by the app features and these terms.
        </p>
        <h3>6.2 Your profile details</h3>
        <p>
          When you share a post, {siteConfig.name} may generate a personalized
          template that includes your profile photo and name. You are
          responsible for ensuring that the identity details you display are
          accurate and that you have the right to use any photo you upload.
        </p>
        <h3>6.3 WhatsApp</h3>
        <p>
          Sharing through WhatsApp is subject to WhatsApp&apos;s own terms and
          privacy policy. We are not responsible for WhatsApp&apos;s
          availability, delivery, or handling of shared content after you
          confirm a share.
        </p>
      </section>

      <section id="ip">
        <h2>7. Intellectual property</h2>
        <p>
          The {siteConfig.name} name, logos, app design, software, and original
          materials are owned by Square Nova Tech or its licensors and are
          protected by intellectual property laws. You may not copy, modify,
          distribute, or create derivative works from our branding or software
          without prior written permission, except for personal use of the app
          as intended.
        </p>
      </section>

      <section id="third-party">
        <h2>8. Third-party services</h2>
        <p>
          The app may interact with third-party services such as WhatsApp or
          Google Play. Those services are governed by their own terms. We are
          not responsible for third-party products, policies, or outages.
        </p>
      </section>

      <section id="disclaimers">
        <h2>9. Disclaimers</h2>
        <p>
          {siteConfig.name} is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis. To the fullest extent permitted by law, we
          disclaim warranties of merchantability, fitness for a particular
          purpose, and non-infringement. We do not guarantee that the service
          will be uninterrupted, error-free, or completely secure at all times.
        </p>
      </section>

      <section id="liability">
        <h2>10. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Square Nova Tech and its
          operators shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or for any loss of data, profits,
          or goodwill arising from your use of {siteConfig.name}.
        </p>
      </section>

      <section id="termination">
        <h2>11. Suspension and termination</h2>
        <p>
          We may suspend or terminate access if you violate these terms, misuse
          the service, or create risk for other users or our systems. You may
          stop using {siteConfig.name} at any time and request account deletion
          through our{" "}
          <Link to="/delete-account">Account Deletion</Link> page.
        </p>
      </section>

      <section id="governing-law">
        <h2>12. Governing law</h2>
        <p>
          These terms are governed by the laws of India, without regard to
          conflict-of-law principles, unless mandatory consumer protections in
          your country provide otherwise.
        </p>
      </section>

      <section id="changes">
        <h2>13. Changes to these terms</h2>
        <p>
          We may update these Terms & Conditions periodically. The &quot;Last
          updated&quot; date at the top of this page will change when revisions
          are published. Continued use of the service after changes become
          effective constitutes acceptance of the updated terms.
        </p>
      </section>

      <section id="contact">
        <h2>14. Contact</h2>
        <p>
          Questions about these Terms & Conditions can be sent to our support
          team:
        </p>
        <div className="not-prose mt-5">
          <ContactCard
            description="For terms questions, policy clarifications, or account issues."
            href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Terms%20%26%20Conditions%20Inquiry`}
            icon={Mail}
            label={APP_CONSTANTS.supportEmail}
            title="Legal & support contact"
          />
        </div>
      </section>
    </LegalPage>
  )
}
