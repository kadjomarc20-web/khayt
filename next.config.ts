import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site d'une page, CSS Tailwind compact : on l'inline pour supprimer la requête bloquante
  experimental: { inlineCss: true },
  images: { qualities: [75] },
  cacheComponents: true,
  partialPrefetching: true,
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
