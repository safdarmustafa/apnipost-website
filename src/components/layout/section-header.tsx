import type { ComponentPropsWithoutRef, ElementType } from "react"

import { cn } from "@/lib/utils"

type SectionHeaderAlign = "left" | "center"

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: SectionHeaderAlign
  as?: "h1" | "h2" | "h3"
  headingId?: string
  className?: string
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "title" | "id">

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  headingId,
  className,
  ...props
}: SectionHeaderProps) {
  const Title = Heading as ElementType

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}

      <Title
        className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        id={headingId}
      >
        {title}
      </Title>

      {description ? (
        <p className="text-pretty text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
