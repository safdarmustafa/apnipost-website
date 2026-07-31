import { useEffect } from "react"

import { siteConfig } from "@/config/site"

type PageMeta = {
  title: string
  description: string
  path?: string
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

    setMeta('meta[name="description"]', "content", description)
    setMeta('meta[property="og:title"]', "content", fullTitle)
    setMeta('meta[property="og:description"]', "content", description)
    setMeta('meta[property="og:url"]', "content", `${siteConfig.url}${path}`)
    setMeta('meta[name="twitter:title"]', "content", fullTitle)
    setMeta('meta[name="twitter:description"]', "content", description)

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    canonical.href = `${siteConfig.url}${path}`
  }, [title, description, path])
}
