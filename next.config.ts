import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    // AVIF is ~20–30% smaller than WebP; browsers without AVIF get WebP, then the original JPEG.
    formats: ["image/avif", "image/webp"],
    // Photos rarely change, so keep optimized copies cached for 31 days instead of the 4-hour default.
    minimumCacheTTL: 2678400,
  },
  partialPrefetching: true,
  experimental: {
    agentUpgrade: "security",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
