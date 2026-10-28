export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  logo: string
  links: {
    supportEmail: string
    playStore: string
  }
}

export const siteConfig: SiteConfig = {
  name: "ApniPost",
  description:
    "ApniPost helps you create personalized status posts, birthday videos, and ringtones — then share them on WhatsApp with your photo and name.",
  url: import.meta.env.VITE_SITE_URL ?? "https://apnipost.com",
  ogImage: "/brand/og-image.png",
  logo: "/brand/logo.png",
  links: {
    supportEmail: "admin@squarenovatech.com",
    playStore:
      "https://play.google.com/store/apps/details?id=com.apnipost.app",
  },
}
