import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type FeatureCardProps = {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
        <Icon aria-hidden className="size-5" />
      </div>
      <h3 className="text-base font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  )
}
