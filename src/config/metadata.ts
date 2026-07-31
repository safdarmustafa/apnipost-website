import { siteConfig } from "@/config/site"

export type PageMetadataKey =
  | "home"
  | "privacy"
  | "terms"
  | "deleteAccount"
  | "support"

export type PageMeta = {
  title: string
  description: string
  path: string
}

export type PageMetadataMap = Record<PageMetadataKey, PageMeta>

export const pageMetadata: PageMetadataMap = {
  home: {
    title: `${siteConfig.name} — Share content your way`,
    description: siteConfig.description,
    path: "/",
  },
  privacy: {
    title: "Privacy Policy",
    description: `Learn how ${siteConfig.name} collects, uses, and protects your personal information.`,
    path: "/privacy",
  },
  terms: {
    title: "Terms & Conditions",
    description: `Read the terms and conditions for using ${siteConfig.name}.`,
    path: "/terms",
  },
  deleteAccount: {
    title: "Account Deletion",
    description: `Request deletion of your ${siteConfig.name} account and associated data.`,
    path: "/delete-account",
  },
  support: {
    title: "Support",
    description: `Get help with ${siteConfig.name}. Contact our support team for assistance.`,
    path: "/support",
  },
}
