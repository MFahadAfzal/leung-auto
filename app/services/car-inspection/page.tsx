// app/services/car-inspection/page.tsx
import ServiceHub from "@/components/ServiceHub"
import { reviewsBy } from "@/lib/reviews"

export const metadata = {
  title: "Car Inspection Edmonton | Leung's Auto Service",
  description:
    "Car inspections in West Edmonton: out of province inspections for vehicles registering in Alberta, and pre-purchase used car inspections.",
  alternates: {
    canonical: "/services/car-inspection",
  },
}

export default function CarInspections() {
  return (
    <ServiceHub
      image={{ src: "/images/car-inspection.jpg", alt: "Mechanic checking under the open hood of an SUV during a car inspection in Edmonton" }}
      href="/services/car-inspection"
      intro="A vehicle inspection tells you its real condition, whether you're registering it in Alberta or deciding whether to buy it. Pick the type of inspection below that fits your situation."
      servicesHeading="Our Inspection Services"
      ctaHeading="Not Sure Which Inspection You Need?"
      ctaText="Tell us whether you're registering a vehicle or buying one, and we'll book the right inspection."
      ctaLabel="Book an Inspection"
      whyUs={{
        heading: "Why Choose Our Shop for Your Car Inspection",
        text: "Leung's Auto Service has inspected vehicles for Edmonton drivers since 2002. As an independent shop, we give you a straight answer on the vehicle's condition, whatever it means for the sale or the registration.",
        alt: "Mechanic and customer looking under the hood of a car together before an inspection in West Edmonton",
        facts: [
          { value: "Since 2002", label: "Serving Edmonton drivers" },
          { value: "AMVIC Certified", label: "Independent inspection shop" },
          { value: "Clear Results", label: "We explain every finding" },
        ],
      }}
      reviews={{
        heading: "Inspection Reviews from Our Customers",
        text: "What drivers said after an inspection at our shop.",
        items: reviewsBy("Evan Traverse", "stephen fan"),
      }}
    />
  )
}
