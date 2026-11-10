// components/ServiceSchema.tsx
"use client"

import { usePathname } from "next/navigation"
import { business, businessId } from "@/lib/business"
import { services } from "@/lib/services"

// Tells Google which service each page under /services describes, and that Leung's Auto Service
// (the business in the layout's structured data) provides it in Edmonton.
// Names and descriptions come from the same list as the navbar, so they stay in sync.
// Hub pages also list their sub-services. The /services directory page itself gets nothing.
export default function ServiceSchema() {
  const pathname = usePathname()

  const hub = services.find((s) => s.href === pathname)
  const spoke = services.flatMap((s) => s.spokes).find((s) => s.href === pathname)
  const page = hub ?? spoke
  if (!page) return null

  const url = business.siteUrl + page.href
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.title,
    serviceType: page.title,
    description: page.blurb,
    url,
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: business.city },
    // Hubs list the specific services under them. On Car Diagnostics these point to sections of the same page.
    ...(hub && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: hub.title,
        itemListElement: hub.spokes.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, url: business.siteUrl + s.href },
        })),
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  )
}
