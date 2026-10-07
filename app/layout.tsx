import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Leung Auto | Auto Repair in Edmonton",
  description: "Honest auto repair in Edmonton: brakes, oil changes, diagnostics and more. Call or book online.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Leung Auto",
  url: "https://yourdomain.com",
  telephone: "+1-780-555-0123",
  image: "https://yourdomain.com/shop.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Example St",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    postalCode: "T5J 0A1",
    addressCountry: "CA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
}



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
