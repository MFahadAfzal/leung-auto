// app/services/suspension/page.tsx
import ServiceHub from "@/components/ServiceHub"

export const metadata = {
  title: "Steering & Suspension Repair Edmonton | Leung's Auto Service",
  description:
    "Steering and suspension repair in West Edmonton: suspension repair for clunking and a bouncy ride, steering repair for power steering leaks and loose steering.",
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
      whyUs={{
        heading: "Why Choose Our Shop for Steering and Suspension Repair",
        text: "Leung's Auto Service has done steering and suspension repair for Edmonton drivers since 2002. We're an independent, AMVIC certified shop in West Edmonton. We find the worn part causing the clunk, pull, or loose steering, show you what we found, and only replace what needs replacing.",
        alt: "Vehicle on a lift for steering and suspension repair at Leung's Auto Service in West Edmonton",
        facts: [
          { value: "Since 2002", label: "Serving Edmonton drivers" },
          { value: "AMVIC Certified", label: "Independent auto repair shop" },
          { value: "See the Worn Parts", label: "Only the repair you need" },
        ],
      }}
    />
  )
}
