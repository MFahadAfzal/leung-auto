import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { business, businessId } from "@/lib/business"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  // Base for every page's canonical URL, so pages can use relative paths like "/services/brakes"
  metadataBase: new URL(business.siteUrl),
  title: "Leung's Auto Service | Auto Repair in Edmonton",
  description: `Honest auto repair in Edmonton: brakes, oil changes, diagnostics and more. Call ${business.phone} to book.`,
}

const schema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": businessId,
  name: business.name,
  url: business.siteUrl,
  telephone: business.phoneHref.replace("tel:", ""),
  foundingDate: "2002",
  founder: { "@type": "Person", name: "Allan Leung" },
  description:
    "Independent, AMVIC certified auto repair shop in West Edmonton serving domestic and import vehicles since 2002.",
  image: `${business.siteUrl}/images/front.jpeg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.province,
    postalCode: business.postalCode,
    addressCountry: "CA",
  },
  areaServed: { "@type": "City", name: business.city },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapsQuery)}`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
  ],
}



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />

        <Navbar />

        <div className="flex-1">{children}</div>

        <Footer />

      </body>
    </html>
  );
}
