// app/services/flushes/page.tsx
import ServiceHub from "@/components/ServiceHub"

export const metadata = {
  title: "Car Fluid Flushes Edmonton | Leung's Auto Service",
  description:
    "Fluid flushes in West Edmonton: coolant, transmission fluid, and power steering flushes for domestic and import vehicles.",
}

export default function SystemFlushes() {
  return (
    <ServiceHub
      href="/services/flushes"
      intro="Old fluids wear out parts and lower performance. Pick the system below that needs fresh fluid."
    />
  )
}
