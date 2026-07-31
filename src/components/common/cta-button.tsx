import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { Link } from "react-router-dom"
import type { VariantProps } from "class-variance-authority"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>
type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>

type SharedProps = {
  children: ReactNode
  className?: string
  size?: ButtonSize
  variant?: ButtonVariant
}

type CtaButtonAsButton = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, "children" | "className"> & {
    href?: undefined
  }

type CtaButtonAsLink = SharedProps & {
  href: string
  disabled?: boolean
}

export type CtaButtonProps = CtaButtonAsButton | CtaButtonAsLink

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  )
}

export function CtaButton({
  children,
  className,
  size = "lg",
  variant = "default",
  ...props
}: CtaButtonProps) {
  const classes = cn(
    buttonVariants({ variant, size }),
    "h-11 rounded-xl px-6 text-sm font-medium shadow-sm transition-colors",
    className
  )

  if ("href" in props && props.href) {
    const { href, disabled } = props

    if (disabled) {
      return (
        <Button className={classes} disabled size={size} variant={variant}>
          {children}
        </Button>
      )
    }

    if (isExternalHref(href)) {
      return (
        <a className={classes} href={href}>
          {children}
        </a>
      )
    }

    return (
      <Link className={classes} to={href}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as CtaButtonAsButton

  return (
    <Button className={classes} size={size} variant={variant} {...buttonProps}>
      {children}
    </Button>
  )
}
