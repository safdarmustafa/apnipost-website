import type { Metadata } from "next"

import { siteConfig } from "@/config/site"

export type PageMetadataKey =
  | "home"
  | "privacy"
  | "terms"
  | "deleteAccount"
  | "support"

export type PageMetadataMap = Record<PageMetadataKey, Metadata>

const defaultOgImage = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: siteConfig.name,
}

export const pageMetadata: PageMetadataMap = {
  home: {
    title: {
      default: `${siteConfig.name} — Share content your way`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: `${siteConfig.name} — Share content your way`,
      description: siteConfig.description,
      url: "/",
      siteName: siteConfig.name,
      images: [defaultOgImage],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} — Share content your way`,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
  },
  privacy: {
    title: "Privacy Policy",
    description: `Learn how ${siteConfig.name} collects, uses, and protects your personal information.`,
    alternates: {
      canonical: "/privacy",
    },
    openGraph: {
      title: `Privacy Policy | ${siteConfig.name}`,
      description: `Learn how ${siteConfig.name} collects, uses, and protects your personal information.`,
      url: "/privacy",
      images: [defaultOgImage],
    },
  },
  terms: {
    title: "Terms & Conditions",
    description: `Read the terms and conditions for using ${siteConfig.name}.`,
    alternates: {
      canonical: "/terms",
    },
    openGraph: {
      title: `Terms & Conditions | ${siteConfig.name}`,
      description: `Read the terms and conditions for using ${siteConfig.name}.`,
      url: "/terms",
      images: [defaultOgImage],
    },
  },
  deleteAccount: {
    title: "Account Deletion",
    description: `Request deletion of your ${siteConfig.name} account and associated data.`,
    alternates: {
      canonical: "/delete-account",
    },
    openGraph: {
      title: `Account Deletion | ${siteConfig.name}`,
      description: `Request deletion of your ${siteConfig.name} account and associated data.`,
      url: "/delete-account",
      images: [defaultOgImage],
    },
  },
  support: {
    title: "Support",
    description: `Get help with ${siteConfig.name}. Contact our support team for assistance.`,
    alternates: {
      canonical: "/support",
    },
    openGraph: {
      title: `Support | ${siteConfig.name}`,
      description: `Get help with ${siteConfig.name}. Contact our support team for assistance.`,
      url: "/support",
      images: [defaultOgImage],
    },
  },
}
