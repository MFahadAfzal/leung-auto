// app/services/inspection/page.tsx
import ServiceHub from "@/components/ServiceHub"
import { reviewsBy } from "@/lib/reviews"

export const metadata = {
  title: "Car Inspections Edmonton | Leung's Auto Service",
  description:
    "Car inspections in West Edmonton: out of province inspections for vehicles registering in Alberta, and pre-purchase used car inspections.",
  alternates: {
    canonical: "/services/inspection",
  },
}

export default function CarInspections() {
  return (
    <ServiceHub
      image={{ src: "/images/car-inspection.jpg", alt: "Mechanic checking under the open hood of an SUV during a car inspection in Edmonton" }}
      href="/services/inspection"
      intro="A vehicle inspection tells you its real condition, whether you're registering it in Alberta or getting a used car checked before you buy. Pick the type of inspection below that fits your situation."
      servicesHeading="Our Inspection Services"
      ctaHeading="Not Sure Which Inspection You Need?"
      ctaLabel="Book an Inspection"
      whyUs={{
        heading: "Why Choose Our Shop for Your Car Inspection",
        text: "Leung's Auto Service has inspected vehicles for Edmonton drivers since 2002. We're an independent, AMVIC certified shop in West Edmonton, so you get a straight answer on the vehicle's condition. We walk you through what we find and what it means before you decide anything.",
        alt: "Mechanic and customer looking under the hood of a car together before an inspection in West Edmonton",
        facts: [
          { value: "Since 2002", label: "Serving Edmonton drivers" },
          { value: "AMVIC Certified", label: "Independent inspection shop" },
          { value: "Clear Results", label: "We explain every finding" },
        ],
      }}
      reviews={{
        heading: "Inspection Reviews from Our Customers",
        text: "Here's what customers have said about inspections at Leung's Auto Service.",
        items: reviewsBy("Evan Traverse", "stephen fan"),
      }}
    />
  )
}
