import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows a build to target its own output directory (e.g.
  // `NEXT_DIST_DIR=.next-build npm run build`) so verification builds do not
  // clobber the manifests of a running `next dev` server.
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
};

export default nextConfig;
