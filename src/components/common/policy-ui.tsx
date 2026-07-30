import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type PolicyCalloutProps = {
  title: string
  children: ReactNode
  className?: string
}

export function PolicyCallout({
  title,
  children,
  className,
}: PolicyCalloutProps) {
  return (
    <aside
      className={cn(
        "not-prose rounded-2xl border border-border bg-secondary/60 p-5 sm:p-6",
        className
      )}
    >
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </aside>
  )
}

type PolicyStepProps = {
  step: number
  title: string
  children: ReactNode
}

export function PolicyStep({ step, title, children }: PolicyStepProps) {
  return (
    <div className="flex gap-4">
      <div
        aria-hidden
        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
      >
        {step}
      </div>
      <div className="min-w-0 flex-1 pb-2">
        <h3 className="!mt-0 text-base font-semibold text-foreground">
          {title}
        </h3>
        <div className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  )
}

type ContactCardProps = {
  icon: LucideIcon
  title: string
  description: string
  href: string
  label: string
}

export function ContactCard({
  icon: Icon,
  title,
  description,
  href,
  label,
}: ContactCardProps) {
  return (
    <div className="not-prose rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
        <Icon aria-hidden className="size-5" />
      </div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <a
        className="mt-4 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        href={href}
      >
        {label}
      </a>
    </div>
  )
}
