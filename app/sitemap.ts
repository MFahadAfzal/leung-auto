// app/sitemap.ts
// Served at /sitemap.xml. Service pages come from the same list as the navbar,
// so a new service page is added here automatically.
import type { MetadataRoute } from "next"
import { business } from "@/lib/business"
import { services } from "@/lib/services"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about", "/contact", "/services"]

  for (const service of services) {
    paths.push(service.href)
    for (const spoke of service.spokes) {
      // Skip jump links to a section of another page (like /services/diagnostics#check-engine-light)
      if (!spoke.href.includes("#")) paths.push(spoke.href)
    }
  }

  return paths.map((path) => ({ url: business.siteUrl + (path === "/" ? "" : path) }))
}
