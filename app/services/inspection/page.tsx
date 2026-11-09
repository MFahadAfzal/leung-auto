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
      image={{ src: "/images/car-inspection.jpg", alt: "Technician doing a car inspection at Leung's Auto Service in Edmonton" }}
      href="/services/inspection"
      intro="An inspection tells you the real condition of a vehicle. Pick the type of inspection below that fits your situation."
      servicesHeading="Our Car Inspection Services"
      ctaHeading="Not Sure Which Car Inspection You Need?"
      ctaLabel="Book a Car Inspection"
      reviews={{
        heading: "Car Inspection Reviews from Our Customers",
        text: "Here's what customers have said about inspections at Leung's Auto Service.",
        items: reviewsBy("Evan Traverse", "stephen fan"),
      }}
    />
  )
}
