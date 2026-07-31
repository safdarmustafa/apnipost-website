import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * Scrolls to top on path changes, and to hash targets when present
 * (e.g. /#features). Matches the previous Next.js marketing-site behavior.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace("#", ""))
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname, hash])

  return null
}
