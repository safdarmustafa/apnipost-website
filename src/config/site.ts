export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    supportEmail: string
  }
}

export const siteConfig: SiteConfig = {
  name: "ApniPost",
  description:
    "ApniPost is a content-sharing platform where users can explore posts across multiple categories and instantly share them to WhatsApp with personalized templates.",
  url: import.meta.env.VITE_SITE_URL ?? "https://apnipost.com",
  ogImage: "/og.png",
  links: {
    supportEmail: "admin@squarenovatech.com",
  },
}
