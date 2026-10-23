// app/services/inspection/page.tsx
import ServiceHub from "@/components/ServiceHub"

export const metadata = {
  title: "Car Inspections Edmonton | Leung's Auto Service",
  description:
    "Car inspections in West Edmonton: pre-purchase inspections for used vehicles and vehicle safety inspections.",
}

export default function CarInspections() {
  return (
    <ServiceHub
      href="/services/inspection"
      intro="An inspection tells you the real condition of a vehicle. Pick the type of inspection below that fits your situation."
    />
  )
}
