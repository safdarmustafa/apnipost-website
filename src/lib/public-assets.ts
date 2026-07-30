import { statSync } from "node:fs"
import path from "node:path"

/**
 * Checks at build time whether a file under `public/` exists and has content.
 *
 * Placeholder assets are committed as empty (0 byte) files so the folder
 * structure is ready before real exports land. An empty file would render as a
 * broken image, so it is treated the same as a missing file and callers can
 * fall back to a placeholder. Server-side only.
 */
export function hasPublicAsset(publicPath: string): boolean {
  const relativePath = publicPath.replace(/^\//, "")

  try {
    return statSync(path.join(process.cwd(), "public", relativePath)).size > 0
  } catch {
    return false
  }
}
