// app/services/flushes/page.tsx
import ServiceHub from "@/components/ServiceHub"

export const metadata = {
  title: "Car Fluid Flushes Edmonton | Leung's Auto Service",
  description:
    "Fluid flushes in West Edmonton: transmission service and transmission fluid change, and antifreeze coolant flush for domestic and import vehicles.",
}

export default function SystemFlushes() {
  return (
    <ServiceHub
      href="/services/flushes"
      intro="Old fluids wear out parts and lower performance. Pick the system below that needs fresh fluid."
      servicesHeading="Our Fluid Flush Services"
      ctaHeading="Not Sure Which Fluid Flush You Need?"
      ctaLabel="Book a Fluid Flush"
    />
  )
}
