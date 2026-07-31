import { Link } from "react-router-dom"
import {
  Clock,
  HelpCircle,
  LifeBuoy,
  Mail,
  MessageSquare,
  Shield,
  Trash2,
} from "lucide-react"

import { CtaButton } from "@/components/common/cta-button"
import { FaqList } from "@/components/common/faq-list"
import { Container } from "@/components/layout/container"
import { APP_CONSTANTS } from "@/config/constants"
import { supportFaqs } from "@/config/faqs"
import { siteConfig } from "@/config/site"
import { usePageMeta } from "@/hooks/use-page-meta"


const helpTopics = [
  {
    icon: HelpCircle,
    title: "App usage help",
    description:
      "Questions about browsing categories, sharing to WhatsApp, or setting up your profile.",
  },
  {
    icon: Shield,
    title: "Privacy & data",
    description:
      "Ask how your information is used, stored, or protected under our Privacy Policy.",
  },
  {
    icon: Trash2,
    title: "Account deletion",
    description:
      "Request permanent removal of your account and associated personal data.",
  },
  {
    icon: MessageSquare,
    title: "Feedback & issues",
    description:
      "Report bugs, suggest improvements, or tell us about a problem you experienced.",
  },
] as const

export function SupportPage() {
  usePageMeta({
    title: "Support",
    description: "Get help with ApniPost. Contact our support team for assistance.",
    path: "/support",
  })

  return (
    <div className="bg-background">
      <div className="border-b border-border bg-secondary/50">
        <Container className="max-w-4xl py-14 sm:py-16">
          <p className="mb-4 inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-primary">
            We&apos;re here to help
          </p>
          <h1
            className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            id="support-heading"
          >
            Support
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Get help with {siteConfig.name} — from app questions to privacy and
            account deletion requests. Our team responds by email as quickly as
            possible.
          </p>
        </Container>
      </div>

      <Container className="max-w-4xl py-12 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
              <Mail aria-hidden className="size-5" />
            </div>
            <h2 className="text-base font-semibold text-foreground">
              Support email
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The fastest way to reach us for account, privacy, and product
              questions.
            </p>
            <a
              className="mt-4 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={`mailto:${APP_CONSTANTS.supportEmail}`}
            >
              {APP_CONSTANTS.supportEmail}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
              <Clock aria-hidden className="size-5" />
            </div>
            <h2 className="text-base font-semibold text-foreground">
              Response time
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {APP_CONSTANTS.responseTime} Complex privacy or deletion requests
              may take a little longer while we verify details.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaButton href={`mailto:${APP_CONSTANTS.supportEmail}`}>
            Email support
          </CtaButton>
          <CtaButton href="/delete-account" variant="outline">
            Request account deletion
          </CtaButton>
        </div>

        <section className="mt-14" aria-labelledby="help-topics-heading">
          <div className="mb-6 flex items-start gap-3">
            <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
              <LifeBuoy aria-hidden className="size-5" />
            </div>
            <div>
              <h2
                className="text-xl font-semibold tracking-tight text-foreground"
                id="help-topics-heading"
              >
                What we can help with
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Choose a topic below, then email us with as much detail as you
                can.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {helpTopics.map((topic) => {
              const Icon = topic.icon
              return (
                <div
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                  key={topic.title}
                >
                  <div className="mb-3 flex size-9 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                    <Icon aria-hidden className="size-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {topic.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {topic.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="before-you-email-heading">
          <h2
            className="text-xl font-semibold tracking-tight text-foreground"
            id="before-you-email-heading"
          >
            Before you email
          </h2>
          <div className="mt-4 rounded-2xl border border-border bg-secondary/60 p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Including these details helps us respond faster:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Your display name in {siteConfig.name}</li>
              <li>Device model and Android version (if reporting a bug)</li>
              <li>A short description of the issue or request</li>
              <li>
                Screenshots, if relevant (do not include passwords or OTPs)
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="support-links-heading">
          <h2
            className="text-xl font-semibold tracking-tight text-foreground"
            id="support-links-heading"
          >
            Helpful links
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Link
              className="rounded-2xl border border-border bg-card p-5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              to="/privacy"
            >
              Privacy Policy
              <span className="mt-1 block text-sm font-normal text-muted-foreground">
                How we handle your data
              </span>
            </Link>
            <Link
              className="rounded-2xl border border-border bg-card p-5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              to="/terms"
            >
              Terms & Conditions
              <span className="mt-1 block text-sm font-normal text-muted-foreground">
                Rules for using the app
              </span>
            </Link>
            <Link
              className="rounded-2xl border border-border bg-card p-5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              to="/delete-account"
            >
              Account Deletion
              <span className="mt-1 block text-sm font-normal text-muted-foreground">
                Request data removal
              </span>
            </Link>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="support-faq-heading">
          <h2
            className="mb-4 text-xl font-semibold tracking-tight text-foreground"
            id="support-faq-heading"
          >
            Common questions
          </h2>
          <FaqList
            className="rounded-2xl border border-border bg-card px-4 shadow-sm"
            idPrefix="support-faq"
            items={supportFaqs}
          />
        </section>
      </Container>
    </div>
  )
}
