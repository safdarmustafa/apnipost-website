import { Link } from "react-router-dom"
import {
  Database,
  Mail,
  ShieldCheck,
  Trash2,
  UserRound,
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
  { id: "introduction", label: "Introduction" },
  { id: "who-we-are", label: "Who we are" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use", label: "How we use information" },
  { id: "sharing", label: "Sharing & third parties" },
  { id: "permissions", label: "App permissions" },
  { id: "security", label: "Data security" },
  { id: "retention", label: "Data retention" },
  { id: "your-rights", label: "Your rights" },
  { id: "children", label: "Children's privacy" },
  { id: "changes", label: "Policy changes" },
  { id: "contact", label: "Contact us" },
]

export function PrivacyPage() {
  usePageMeta({
    title: "Privacy Policy",
    description: "Learn how ApniPost collects, uses, and protects your personal information.",
    path: "/privacy",
  })

  return (
    <LegalPage
      badge="Google Play compliant"
      description={`This Privacy Policy explains what personal data ${siteConfig.name} collects, why we collect it, how it is used, and the choices available to you when using our Android application and website.`}
      highlights={[
        {
          icon: ShieldCheck,
          title: "We do not sell data",
          description:
            "Your personal information is never sold to advertisers or data brokers.",
        },
        {
          icon: UserRound,
          title: "You control your profile",
          description:
            "Name and photo are used only to personalize WhatsApp share templates.",
        },
        {
          icon: Trash2,
          title: "Deletion available",
          description:
            "You can request full account and data deletion at any time.",
        },
      ]}
      title="Privacy Policy"
      toc={toc}
    >
      <section id="introduction">
        <h2>1. Introduction</h2>
        <p>
          {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
          is committed to protecting your privacy. This policy applies to the{" "}
          {siteConfig.name} Android application available on Google Play and to
          our related website. By using {siteConfig.name}, you acknowledge the
          practices described here.
        </p>
        <PolicyCallout className="mt-5" title="Quick summary">
          {siteConfig.name} helps you explore posts and share them to WhatsApp
          with a personalized template that may include your name and profile
          photo. We collect only what is needed to provide that experience,
          respond to support requests, and keep the service secure.
        </PolicyCallout>
      </section>

      <section id="who-we-are">
        <h2>2. Who we are</h2>
        <p>
          {siteConfig.name} is operated by Square Nova Tech. For privacy-related
          questions, account requests, or data concerns, contact us at:
        </p>
        <ul>
          <li>
            <strong>App name:</strong> {APP_CONSTANTS.appName}
          </li>
          <li>
            <strong>Support email:</strong>{" "}
            <a href={`mailto:${APP_CONSTANTS.supportEmail}`}>
              {APP_CONSTANTS.supportEmail}
            </a>
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a href={siteConfig.url}>{siteConfig.url}</a>
          </li>
        </ul>
      </section>

      <section id="information-we-collect">
        <h2>3. Information we collect</h2>
        <p>
          Depending on how you use the app, we may collect the following
          categories of information:
        </p>

        <h3>3.1 Account and profile information</h3>
        <ul>
          <li>Display name</li>
          <li>Profile photo you choose to upload</li>
          <li>
            Account identifiers needed to manage your profile and share
            templates
          </li>
        </ul>

        <h3>3.2 Content and activity</h3>
        <ul>
          <li>Posts you view, browse, or choose to share</li>
          <li>Category preferences and in-app interactions</li>
          <li>
            Templates generated for WhatsApp sharing that include your selected
            profile details
          </li>
        </ul>

        <h3>3.3 Support communications</h3>
        <ul>
          <li>
            Email address and message content when you contact support
          </li>
          <li>
            Details you voluntarily provide for account deletion or privacy
            requests
          </li>
        </ul>

        <h3>3.4 Device and technical information</h3>
        <ul>
          <li>Device type, OS version, and app version</li>
          <li>
            Diagnostic or crash information needed to maintain app stability
          </li>
          <li>
            Approximate usage metrics to improve performance and reliability
          </li>
        </ul>

        <PolicyCallout className="mt-5" title="What we do not collect">
          We do not intentionally collect precise GPS location, contacts,
          payment card details, or sensitive identity documents through the
          current version of {siteConfig.name}.
        </PolicyCallout>
      </section>

      <section id="how-we-use">
        <h2>4. How we use information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Create and manage your user profile</li>
          <li>
            Personalize WhatsApp share templates with your name and profile
            photo
          </li>
          <li>Deliver content discovery and category browsing features</li>
          <li>Respond to support, privacy, and deletion requests</li>
          <li>Improve app quality, reliability, and user experience</li>
          <li>Detect abuse, prevent fraud, and protect the service</li>
          <li>Comply with applicable laws and Google Play requirements</li>
        </ul>
      </section>

      <section id="sharing">
        <h2>5. Sharing and third parties</h2>
        <p>
          <strong>We do not sell your personal information.</strong> We may
          share limited data only in these situations:
        </p>
        <ul>
          <li>
            <strong>WhatsApp sharing:</strong> When you tap share, content and
            your selected profile details are packaged into a template you send
            through WhatsApp. WhatsApp&apos;s own privacy policy then applies
            to that share.
          </li>
          <li>
            <strong>Service providers:</strong> Trusted vendors who help us
            host, operate, or secure the app, under confidentiality obligations.
          </li>
          <li>
            <strong>Legal requirements:</strong> When disclosure is required by
            law, regulation, or valid legal process.
          </li>
          <li>
            <strong>Business transfers:</strong> In connection with a merger,
            acquisition, or asset transfer, with continued privacy protections
            where required.
          </li>
        </ul>
      </section>

      <section id="permissions">
        <h2>6. App permissions</h2>
        <p>
          {siteConfig.name} may request permissions that are necessary for core
          features, such as:
        </p>
        <ul>
          <li>
            <strong>Photos / media access:</strong> To let you select or update
            a profile photo used on share templates
          </li>
          <li>
            <strong>Internet access:</strong> To load content and sync your
            profile experience
          </li>
          <li>
            <strong>Storage / downloads (where applicable):</strong> To save
            shared or downloaded content you request
          </li>
        </ul>
        <p>
          You can manage permissions in your Android system settings. Denying
          optional permissions may limit related features but will not block
          core browsing where possible.
        </p>
      </section>

      <section id="security">
        <h2>7. Data security</h2>
        <p>
          We use reasonable administrative, technical, and organizational
          measures to protect personal information against unauthorized access,
          alteration, disclosure, or destruction. No method of transmission or
          storage is 100% secure, so we cannot guarantee absolute security, but
          we continuously work to protect your data.
        </p>
      </section>

      <section id="retention">
        <h2>8. Data retention</h2>
        <p>
          We retain personal information only as long as needed to provide{" "}
          {siteConfig.name}, fulfill the purposes in this policy, resolve
          disputes, enforce agreements, or meet legal obligations.
        </p>
        <p>
          When you request account deletion, we remove your account and
          associated personal data from our active systems according to the
          process described on our{" "}
          <Link to="/delete-account">Account Deletion</Link> page.
        </p>
      </section>

      <section id="your-rights">
        <h2>9. Your rights and choices</h2>
        <p>Depending on applicable law, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Request deletion of your account and personal data</li>
          <li>Ask questions about how your information is processed</li>
        </ul>
        <p>
          To exercise these rights, email{" "}
          <a href={`mailto:${APP_CONSTANTS.supportEmail}`}>
            {APP_CONSTANTS.supportEmail}
          </a>
          . For deletion specifically, see{" "}
          <Link to="/delete-account">Account Deletion</Link>.
        </p>
      </section>

      <section id="children">
        <h2>10. Children&apos;s privacy</h2>
        <p>
          {siteConfig.name} is not directed to children under 13 (or the
          minimum age required in your jurisdiction). We do not knowingly
          collect personal information from children. If you believe a child
          has provided personal information, contact us and we will take
          appropriate steps to delete it.
        </p>
      </section>

      <section id="changes">
        <h2>11. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make
          material changes, we will revise the &quot;Last updated&quot; date at
          the top of this page. Continued use of {siteConfig.name} after an
          update means you acknowledge the revised policy.
        </p>
      </section>

      <section id="contact">
        <h2>12. Contact us</h2>
        <p>
          If you have questions about this Privacy Policy or your personal
          data, contact our support team:
        </p>
        <div className="not-prose mt-5 grid gap-4 sm:grid-cols-2">
          <ContactCard
            description="For privacy questions, data requests, and policy clarifications."
            href={`mailto:${APP_CONSTANTS.supportEmail}?subject=Privacy%20Policy%20Inquiry`}
            icon={Mail}
            label={APP_CONSTANTS.supportEmail}
            title="Privacy contact"
          />
          <ContactCard
            description="Request removal of your account and associated personal data."
            href="/delete-account"
            icon={Database}
            label="Go to Account Deletion"
            title="Delete your data"
          />
        </div>
      </section>
    </LegalPage>
  )
}
