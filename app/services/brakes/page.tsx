// app/services/brakes/page.tsx
import ServiceHub from "@/components/ServiceHub"

export const metadata = {
  title: "Brake Repair Edmonton | Leung's Auto Service",
  description:
    "Brake repair in West Edmonton: brake pads and rotors, brake fluid flushes, and ABS repair for domestic and import vehicles.",
}

export default function BrakeRepair() {
  return (
    <ServiceHub
      href="/services/brakes"
      intro="Leung's Auto Service handles brake repairs on domestic and import vehicles in West Edmonton. Pick the service below that matches what your brakes are doing."
    />
  )
}
