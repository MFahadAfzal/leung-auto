import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    agentUpgrade: "security",
  },
  // Old URLs that were renamed or merged, sent to the page that replaced them
  async redirects() {
    return [
      // Brakes
      {
        source: "/services/brakes/brake-pad-rotor-replacement",
        destination: "/services/brake-repair/brake-pad-replacement",
        permanent: true,
      },
      {
        source: "/services/brakes/brake-rotor-replacement",
        destination: "/services/brake-repair/brake-pad-replacement",
        permanent: true,
      },
      // Steering and suspension
      {
        source: "/services/suspension/steering-front-end-repair",
        destination: "/services/suspension/steering-repair",
        permanent: true,
      },
      {
        source: "/services/suspension/shock-strut-replacement",
        destination: "/services/suspension/suspension-repair#shock-strut-replacement",
        permanent: true,
      },
      {
        source: "/services/suspension/ball-joint-control-arm",
        destination: "/services/suspension/suspension-repair#ball-joint-replacement",
        permanent: true,
      },
      {
        source: "/services/suspension/car-suspension-replacement",
        destination: "/services/suspension/suspension-repair",
        permanent: true,
      },
      // Inspections
      {
        source: "/services/inspection/safety-inspection",
        destination: "/services/car-inspection",
        permanent: true,
      },
      // Flushes
      {
        source: "/services/flushes/transmission-flush",
        destination: "/services/flushes/transmission-service",
        permanent: true,
      },
      {
        source: "/services/flushes/coolant-flush",
        destination: "/services/flushes/antifreeze-coolant-flush",
        permanent: true,
      },
      {
        source: "/services/flushes/power-steering-flush",
        destination: "/services/suspension/steering-repair#power-steering-flush",
        permanent: true,
      },
      // Maintenance
      {
        source: "/services/maintenance/oil-change",
        destination: "/services/maintenance/oil-change-services",
        permanent: true,
      },
      {
        source: "/services/maintenance/tire-rotation",
        destination: "/services/maintenance/tire-change#tire-rotation",
        permanent: true,
      },
      // Diagnostics
      {
        source: "/services/diagnostics/check-engine-light",
        destination: "/services/car-diagnostic#check-engine-light",
        permanent: true,
      },
      {
        source: "/services/diagnostics/transmission-diagnostics",
        destination: "/services/car-diagnostic#transmission-diagnostics",
        permanent: true,
      },
      {
        source: "/services/diagnostics/electrical-diagnostics",
        destination: "/services/car-diagnostic#electrical-diagnostics",
        permanent: true,
      },
      // Hub folders renamed to match their keywords (2026-11-17). Covers the hub and every page under it.
      {
        source: "/services/brakes/:path*",
        destination: "/services/brake-repair/:path*",
        permanent: true,
      },
      {
        source: "/services/diagnostics/:path*",
        destination: "/services/car-diagnostic/:path*",
        permanent: true,
      },
      {
        source: "/services/inspection/:path*",
        destination: "/services/car-inspection/:path*",
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
