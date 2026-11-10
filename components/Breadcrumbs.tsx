// components/Breadcrumbs.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { business } from "@/lib/business"
import { services } from "@/lib/services"

// Page names for every URL under /services, taken from the same list as the navbar
const names: Record<string, string> = { "/services": "Services" }
for (const service of services) {
  names[service.href] = service.title
  for (const spoke of service.spokes) {
    if (!spoke.href.includes("#")) names[spoke.href] = spoke.title
  }
}

// Home > Services > Brake Repair > Brake Pad Replacement, linking each step back up the site.
// Also sent to Google as breadcrumb structured data.
// Shown at the top of the page intro (components/PageHero.tsx), over the photo, so it uses light text.
// Pages outside /services (like About) have no trail, so nothing is shown there.
export default function Breadcrumbs() {
  const pathname = usePathname()

  // Build each step from the URL: /services, /services/brakes, /services/brakes/brake-pad-replacement
  const parts = pathname.split("/").filter(Boolean)
  const crumbs = [{ name: "Home", href: "/" }]
  parts.forEach((_, i) => {
    const href = "/" + parts.slice(0, i + 1).join("/")
    if (names[href]) crumbs.push({ name: names[href], href })
  })

  if (crumbs.length < 2) return null

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: business.siteUrl + crumb.href,
    })),
  }

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl text-left text-sm text-white/70">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <ol className="flex flex-wrap gap-2">
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} className="flex gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {/* The last step is the current page, so it isn't a link */}
            {i === crumbs.length - 1 ? (
              <span aria-current="page" className="font-bold text-white">{crumb.name}</span>
            ) : (
              <Link href={crumb.href} className="text-brand-light underline hover:text-white">{crumb.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
