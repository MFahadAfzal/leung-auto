// app/services/maintenance/page.tsx
import ServiceHub from "@/components/ServiceHub"
import { reviewsBy } from "@/lib/reviews"

export const metadata = {
  title: "Car Maintenance Edmonton | Leung's Auto Service",
  description:
    "Car maintenance in West Edmonton: quick oil change services, winter and summer tire change, tire rotation, and wheel alignment.",
  alternates: {
    canonical: "/services/maintenance",
  },
}

export default function CarMaintenance() {
  return (
    <ServiceHub
      image={{ src: "/images/car-maintenance.jpg", alt: "Mechanic using a socket wrench on a car engine during routine car maintenance in Edmonton" }}
      href="/services/maintenance"
      intro="Regular vehicle maintenance keeps your car running well and helps avoid bigger repairs. Pick the service below that you need."
      servicesHeading="Our Maintenance Services"
      ctaHeading="Not Sure What's Due?"
      ctaLabel="Book an Appointment"
      whyUs={{
        heading: "Why Choose Our Shop for Car Maintenance",
        text: "Leung's Auto Service has kept Edmonton vehicles on schedule since 2002. We're an independent, AMVIC certified shop in West Edmonton working on domestic and import vehicles. We tell you what's due now and what can wait, so you only pay for the maintenance you need.",
        alt: "Mechanic and customer looking under the hood of a car together to plan upcoming maintenance in West Edmonton",
        facts: [
          { value: "Since 2002", label: "Serving Edmonton drivers" },
          { value: "AMVIC Certified", label: "Independent auto repair shop" },
          { value: "Domestic & Import", label: "Most makes and models" },
        ],
      }}
      reviews={{
        heading: "Maintenance Reviews from Our Customers",
        text: "Here's what customers have said about maintenance at Leung's Auto Service.",
        items: reviewsBy("Ed", "Jiayi Yu"),
      }}
    />
  )
}
