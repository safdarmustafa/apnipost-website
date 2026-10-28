import { useEffect } from "react"

import { siteConfig } from "@/config/site"

type PageMeta = {
  title: string
  description: string
  path?: string
}

function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
}

export function usePageMeta({ title, description, path = "/" }: PageMeta) {
  useEffect(() => {
    const fullTitle =
      title === siteConfig.name || title.includes(siteConfig.name)
        ? title
        : `${title} | ${siteConfig.name}`

    document.title = fullTitle

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement("meta")
        if (selector.includes("property=")) {
          el.setAttribute("property", selector.match(/property="([^"]+)"/)![1])
        } else {
          el.setAttribute("name", selector.match(/name="([^"]+)"/)![1])
        }
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    const ogImage = absoluteUrl(siteConfig.ogImage)
    const pageUrl = absoluteUrl(path)

    setMeta('meta[name="description"]', "content", description)
    setMeta('meta[property="og:type"]', "content", "website")
    setMeta('meta[property="og:site_name"]', "content", siteConfig.name)
    setMeta('meta[property="og:title"]', "content", fullTitle)
    setMeta('meta[property="og:description"]', "content", description)
    setMeta('meta[property="og:url"]', "content", pageUrl)
    setMeta('meta[property="og:image"]', "content", ogImage)
    setMeta('meta[property="og:image:alt"]', "content", `${siteConfig.name} logo`)
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image")
    setMeta('meta[name="twitter:title"]', "content", fullTitle)
    setMeta('meta[name="twitter:description"]', "content", description)
    setMeta('meta[name="twitter:image"]', "content", ogImage)

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    canonical.href = pageUrl
  }, [title, description, path])
}
