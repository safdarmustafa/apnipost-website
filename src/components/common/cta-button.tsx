"use client"

import Link from "next/link"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { VariantProps } from "class-variance-authority"

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
    const { href, disabled, ...rest } = props

    if (disabled) {
      return (
        <Button className={classes} disabled size={size} variant={variant}>
          {children}
        </Button>
      )
    }

    return (
      <Link className={classes} href={href} {...rest}>
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
