// app/services/suspension/page.tsx
import ServiceHub from "@/components/ServiceHub"

export const metadata = {
  title: "Suspension Repair Edmonton | Leung's Auto Service",
  description:
    "Suspension repair in West Edmonton: shocks and struts, ball joints and control arms, and steering and front end repair.",
}

export default function SuspensionRepair() {
  return (
    <ServiceHub
      href="/services/suspension"
      intro="Clunking, pulling, or a bouncy ride usually means something in the suspension or steering is worn. Pick the service below that matches what your vehicle is doing."
    />
  )
}
