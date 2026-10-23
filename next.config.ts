import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    agentUpgrade: "security",
  },
  async redirects() {
    return [
      {
        source: "/services/brakes/brake-pad-replacement",
        destination: "/services/brakes/brake-pad-rotor-replacement",
        permanent: true,
      },
      {
        source: "/services/brakes/brake-rotor-replacement",
        destination: "/services/brakes/brake-pad-rotor-replacement",
        permanent: true,
      },
    ];
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
