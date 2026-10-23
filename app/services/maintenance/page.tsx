// app/services/maintenance/page.tsx
import ServiceHub from "@/components/ServiceHub"

export const metadata = {
  title: "Car Maintenance Edmonton | Leung's Auto Service",
  description:
    "Car maintenance in West Edmonton: oil changes, tire changes, tire rotations, and wheel alignments.",
}

export default function CarMaintenance() {
  return (
    <ServiceHub
      href="/services/maintenance"
      intro="Regular maintenance keeps your vehicle running well and helps avoid bigger repairs. Pick the service below that you need."
    />
  )
}
