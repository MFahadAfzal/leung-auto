// app/robots.ts
// Served at /robots.txt. Lets search engines crawl everything and tells them where the sitemap is.
import type { MetadataRoute } from "next"
import { business } from "@/lib/business"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${business.siteUrl}/sitemap.xml`,
  }
}
