// app/services/diagnostics/page.tsx
import ServiceHub from "@/components/ServiceHub"

export const metadata = {
  title: "Car Diagnostics Edmonton | Leung's Auto Service",
  description:
    "Car diagnostics in West Edmonton: check engine light, transmission, and electrical diagnostics for domestic and import vehicles.",
}

export default function CarDiagnostics() {
  return (
    <ServiceHub
      href="/services/diagnostics"
      intro="Warning lights and strange behaviour need a proper diagnosis before a repair. Pick the type of problem below to see how we track it down."
    />
  )
}
