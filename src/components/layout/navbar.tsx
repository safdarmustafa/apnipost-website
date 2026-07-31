import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

import { CtaButton } from "@/components/common/cta-button"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { APP_CONSTANTS } from "@/config/constants"
import { navigationConfig } from "@/config/navigation"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-colors duration-200",
        scrolled && "border-border/80 bg-background/80 backdrop-blur-md"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            className="text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            to="/"
          >
            {siteConfig.name}
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 md:flex"
          >
            {navigationConfig.main.map((item) => (
              <Link
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                key={item.href}
                to={item.href}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <CtaButton aria-disabled disabled size="default">
              {APP_CONSTANTS.playStoreLabel}
            </CtaButton>
          </div>

          <Sheet onOpenChange={setOpen} open={open}>
            <SheetTrigger
              render={
                <Button
                  aria-label="Open menu"
                  className="md:hidden"
                  size="icon"
                  variant="outline"
                />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent
              className="flex h-full w-full max-w-xs flex-col gap-0 p-0"
              side="right"
            >
              <SheetHeader className="border-b border-border px-5 py-4 text-left">
                <SheetTitle>{siteConfig.name}</SheetTitle>
              </SheetHeader>
              <nav
                aria-label="Mobile"
                className="flex flex-1 flex-col gap-1 px-3 py-4"
              >
                {navigationConfig.main.map((item) => (
                  <Link
                    className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    key={item.href}
                    onClick={() => setOpen(false)}
                    to={item.href}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-border px-5 py-4">
                <CtaButton className="w-full" disabled>
                  {APP_CONSTANTS.playStoreLabel}
                </CtaButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
