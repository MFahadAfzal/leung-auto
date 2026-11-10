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
      image={{ src: "/images/car-maintenance.jpg", alt: "Mechanic doing car maintenance on a vehicle at Leung's Auto Service in Edmonton" }}
      href="/services/maintenance"
      intro="Regular maintenance keeps your vehicle running well and helps avoid bigger repairs. Pick the service below that you need."
      servicesHeading="Our Car Maintenance Services"
      ctaHeading="Not Sure What Car Maintenance Is Due?"
      ctaLabel="Book Car Maintenance"
      whyUs={{
        heading: "Why Choose Our Shop for Car Maintenance",
        text: "Leung's Auto Service has kept Edmonton vehicles on schedule since 2002. We're an independent, AMVIC certified shop in West Edmonton doing car maintenance on domestic and import vehicles. We tell you what's due now and what can wait, so you only pay for the maintenance you need.",
        alt: "Vehicle in the service bay for car maintenance at Leung's Auto Service in West Edmonton",
        facts: [
          { value: "Since 2002", label: "Serving Edmonton drivers" },
          { value: "AMVIC Certified", label: "Independent auto repair shop" },
          { value: "Domestic & Import", label: "Car maintenance for most vehicles" },
        ],
      }}
      reviews={{
        heading: "Car Maintenance Reviews from Our Customers",
        text: "Here's what customers have said about car maintenance at Leung's Auto Service.",
        items: reviewsBy("Ed", "Jiayi Yu"),
      }}
    />
  )
}
