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
      intro="An inspection tells you the real condition of a vehicle, whether you're registering it in Alberta or getting a used car inspection before you buy. Pick the type of inspection below that fits your situation."
      servicesHeading="Our Car Inspection Services"
      ctaHeading="Not Sure Which Car Inspection You Need?"
      ctaLabel="Book a Car Inspection"
      whyUs={{
        heading: "Why Choose Our Shop for Your Car Inspection",
        text: "Leung's Auto Service has done car inspections for Edmonton drivers since 2002. We're an independent, AMVIC certified shop in West Edmonton, so you get a straight answer on the vehicle's condition. We walk you through what we find and what it means before you decide anything.",
        alt: "Vehicle in the service bay for a car inspection at Leung's Auto Service in West Edmonton",
        facts: [
          { value: "Since 2002", label: "Serving Edmonton drivers" },
          { value: "AMVIC Certified", label: "Independent inspection shop" },
          { value: "Clear Results", label: "We explain every finding" },
        ],
      }}
      reviews={{
        heading: "Car Inspection Reviews from Our Customers",
        text: "Here's what customers have said about inspections at Leung's Auto Service.",
        items: reviewsBy("Evan Traverse", "stephen fan"),
      }}
    />
  )
}
