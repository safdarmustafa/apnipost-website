import type { ComponentProps } from "react"

import { Container } from "@/components/layout/container"
import { cn } from "@/lib/utils"

type SectionProps = ComponentProps<"section">

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24", className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  )
}
