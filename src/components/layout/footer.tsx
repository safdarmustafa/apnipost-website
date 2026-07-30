import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"

import { Container } from "@/components/layout/container"
import { APP_CONSTANTS } from "@/config/constants"
import { navigationConfig } from "@/config/navigation"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] lg:gap-16">
          <div>
            <Link
              className="text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href="/"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A content-sharing platform for exploring posts across categories
              and sharing them to WhatsApp with personalized templates.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary">
                <MessageCircle aria-hidden className="size-3.5" />
                WhatsApp sharing
              </span>
              <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                Android · {APP_CONSTANTS.playStoreLabel}
              </span>
            </div>

            <a
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={`mailto:${APP_CONSTANTS.supportEmail}`}
            >
              <Mail aria-hidden className="size-4 text-primary" />
              {APP_CONSTANTS.supportEmail}
            </a>
          </div>

          <nav aria-label="Footer">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {navigationConfig.footerGroups.map((group) => (
                <div key={group.title}>
                  <h2 className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    {group.title}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          href={item.href}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {APP_CONSTANTS.copyrightYear} {APP_CONSTANTS.appName}. All rights
            reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for communities across India
          </p>
        </div>
      </Container>
    </footer>
  )
}
