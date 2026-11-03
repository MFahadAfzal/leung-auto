// app/services/maintenance/page.tsx
import ServiceHub from "@/components/ServiceHub"

export const metadata = {
  title: "Car Maintenance Edmonton | Leung's Auto Service",
  description:
    "Car maintenance in West Edmonton: quick oil change services, winter and summer tire change, tire rotation, and wheel alignment.",
}

export default function CarMaintenance() {
  return (
    <ServiceHub
      href="/services/maintenance"
      intro="Regular maintenance keeps your vehicle running well and helps avoid bigger repairs. Pick the service below that you need."
      servicesHeading="Our Car Maintenance Services"
      ctaHeading="Not Sure What Car Maintenance Is Due?"
      ctaLabel="Book Car Maintenance"
    />
  )
}
