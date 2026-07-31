import { useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type PhoneMockupSize = "default" | "hero"

type PhoneMockupProps = {
  src?: string
  alt?: string
  label?: string
  children?: ReactNode
  className?: string
  priority?: boolean
  /**
   * `contain` preserves the entire screenshot without cropping. The frame
   * matches the 9:20.5 ratio of the exported screenshots, so there is no
   * visible letterboxing.
   */
  fit?: "cover" | "contain"
  size?: PhoneMockupSize
}

const sizeStyles: Record<PhoneMockupSize, string> = {
  default: "w-[220px] sm:w-[250px] md:w-[280px]",
  hero: "w-[250px] sm:w-[290px] lg:w-[320px]",
}

export function PhoneMockup({
  src,
  alt = "ApniPost app preview",
  label,
  children,
  className,
  priority = false,
  fit = "cover",
  size = "default",
}: PhoneMockupProps) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <div className={cn("relative mx-auto", sizeStyles[size], className)}>
      <div
        className={cn(
          "relative aspect-[9/20.5] overflow-hidden rounded-[2rem] border border-border bg-card transition-shadow duration-300 ease-out",
          size === "hero"
            ? "rounded-[2.25rem] border-[6px] border-foreground/90 shadow-[0_36px_80px_-28px_rgba(15,23,42,0.5)]"
            : "shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)] group-hover:shadow-[0_28px_60px_-22px_rgba(15,23,42,0.45)]"
        )}
      >
        {/* Real screenshots include the device status bar, so the drawn notch
            is only used for the CSS placeholder. */}
        {showImage ? null : (
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3"
          >
            <div className="h-5 w-24 rounded-full bg-foreground/90" />
          </div>
        )}

        <div
          className={cn(
            "absolute inset-0",
            showImage && fit === "contain" ? "bg-card" : "bg-secondary"
          )}
        >
          {showImage ? (
            <img
              alt={alt}
              className={cn(
                "absolute inset-0 h-full w-full",
                fit === "contain" ? "object-contain" : "object-cover"
              )}
              decoding="async"
              loading={priority ? "eager" : "lazy"}
              onError={() => setFailed(true)}
              src={src}
            />
          ) : (
            children ?? (
              <div className="flex h-full flex-col justify-between p-5 pt-12">
                <div className="space-y-3">
                  <div className="h-3 w-20 rounded-full bg-primary/20" />
                  <div className="h-8 w-full rounded-xl bg-background/80" />
                  <div className="h-28 w-full rounded-2xl bg-primary/10" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 rounded-xl bg-background/70" />
                    <div className="h-16 rounded-xl bg-background/70" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-10 rounded-xl bg-primary/80" />
                  <p className="text-center text-[10px] text-muted-foreground">
                    {label ?? "Replace with app screenshot"}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
