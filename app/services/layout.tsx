// app/services/layout.tsx
// Breadcrumbs for every page under /services are shown inside the page intro (components/PageHero.tsx),
// on top of the photo. This layout adds the Service structured data for whichever service page is showing.
import ServiceSchema from "@/components/ServiceSchema"

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceSchema />
      {children}
    </>
  )
}
