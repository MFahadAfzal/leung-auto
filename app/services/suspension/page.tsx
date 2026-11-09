// app/services/suspension/page.tsx
import ServiceHub from "@/components/ServiceHub"

export const metadata = {
  title: "Steering & Suspension Repair Edmonton | Leung's Auto Service",
  description:
    "Steering and suspension repair in West Edmonton: car suspension replacement, shocks and struts, ball joint replacement, and power steering leak repair.",
  alternates: {
    canonical: "/services/suspension",
  },
}

export default function SteeringSuspensionRepair() {
  return (
    <ServiceHub
      image={{ src: "/images/steering-suspension-repair.jpg", alt: "Mechanic doing steering and suspension repair on a car in Edmonton" }}
      href="/services/suspension"
      intro="Steering problems, clunking, pulling, or a bouncy ride usually mean something in the steering or suspension is worn. Pick the service below that matches what your vehicle is doing."
      servicesHeading="Our Steering and Suspension Services"
      ctaHeading="Not Sure If It's Steering or Suspension?"
      ctaLabel="Book Steering and Suspension Repair"
    />
  )
}
