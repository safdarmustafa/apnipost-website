import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

import { Container } from "@/components/layout/container"
import { cn } from "@/lib/utils"

type LegalPageProps = {
  title: string
  description?: string
  lastUpdated?: string
  badge?: string
  highlights?: Array<{
    icon: LucideIcon
    title: string
    description: string
  }>
  toc?: Array<{ id: string; label: string }>
  children: ReactNode
  className?: string
}

export function LegalPage({
  title,
  description,
  lastUpdated = "Last updated: July 31, 2026",
  badge,
  highlights,
  toc,
  children,
  className,
}: LegalPageProps) {
  return (
    <div className={cn("bg-background", className)}>
      <div className="border-b border-border bg-secondary/50">
        <Container className="max-w-4xl py-14 sm:py-16">
          {badge ? (
            <p className="mb-4 inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-primary">
              {badge}
            </p>
          ) : null}
          <h1 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
          <p className="mt-5 text-sm text-muted-foreground">{lastUpdated}</p>
        </Container>
      </div>

      <Container className="max-w-4xl py-12 sm:py-16">
        {highlights && highlights.length > 0 ? (
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                  key={item.title}
                >
                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <h2 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        ) : null}

        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
          {toc && toc.length > 0 ? (
            <aside className="hidden lg:block">
              <nav
                aria-label="On this page"
                className="sticky top-24 space-y-1"
              >
                <p className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  On this page
                </p>
                {toc.map((item) => (
                  <a
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    href={`#${item.id}`}
                    key={item.id}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>
          ) : null}

          <div
            className={cn(
              "space-y-10 text-base leading-relaxed text-muted-foreground",
              "[&_h2]:scroll-mt-28 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground",
              "[&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground",
              "[&_p]:mt-3 [&_p]:max-w-prose",
              "[&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5",
              "[&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5",
              "[&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline",
              "[&_strong]:font-semibold [&_strong]:text-foreground"
            )}
          >
            {children}
          </div>
        </div>
      </Container>
    </div>
  )
}
