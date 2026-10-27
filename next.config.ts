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
      {
        source: "/services/diagnostics/check-engine-light",
        destination: "/services/diagnostics#check-engine-light",
        permanent: true,
      },
      {
        source: "/services/diagnostics/transmission-diagnostics",
        destination: "/services/diagnostics#transmission-diagnostics",
        permanent: true,
      },
      {
        source: "/services/diagnostics/electrical-diagnostics",
        destination: "/services/diagnostics#electrical-diagnostics",
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
