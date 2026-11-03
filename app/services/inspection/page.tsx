// app/services/inspection/page.tsx
import ServiceHub from "@/components/ServiceHub"

export const metadata = {
  title: "Car Inspections Edmonton | Leung's Auto Service",
  description:
    "Car inspections in West Edmonton: out of province inspections for vehicles registering in Alberta, and pre-purchase used car inspections.",
}

export default function CarInspections() {
  return (
    <ServiceHub
      href="/services/inspection"
      intro="An inspection tells you the real condition of a vehicle. Pick the type of inspection below that fits your situation."
      servicesHeading="Our Car Inspection Services"
      ctaHeading="Not Sure Which Car Inspection You Need?"
      ctaLabel="Book a Car Inspection"
    />
  )
}
