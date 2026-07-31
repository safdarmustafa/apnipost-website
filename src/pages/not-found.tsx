import { Link } from "react-router-dom"

import { Container } from "@/components/layout/container"
import { siteConfig } from "@/config/site"
import { usePageMeta } from "@/hooks/use-page-meta"

export function NotFoundPage() {
  usePageMeta({
    title: "Page not found",
    description: `The page you are looking for does not exist on ${siteConfig.name}.`,
    path: "/404",
  })

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-medium tracking-wide text-primary">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you requested does not exist or may have moved.
      </p>
      <Link
        className="mt-8 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        to="/"
      >
        Back to home
      </Link>
    </Container>
  )
}
