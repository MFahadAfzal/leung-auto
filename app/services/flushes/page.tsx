// app/services/flushes/page.tsx
import ServiceHub from "@/components/ServiceHub"
import { reviewsBy } from "@/lib/reviews"

export const metadata = {
  title: "Fluid Flushes Edmonton | Leung's Auto Service",
  description:
    "Fluid flushes in West Edmonton: transmission service and transmission fluid change, and antifreeze coolant flush for domestic and import vehicles.",
  alternates: {
    canonical: "/services/flushes",
  },
}

export default function FluidFlushes() {
  return (
    <ServiceHub
      image={{ src: "/images/fluid-flushes.jpg", alt: "Mechanic in gloves pouring fluid into a car engine during a fluid flush in Edmonton" }}
      href="/services/flushes"
      intro="Old fluids wear out parts and lower performance. Pick the system below that needs fresh fluid."
      servicesHeading="Our Fluid Flush Services"
      ctaHeading="Not Sure Which Fluid Flush You Need?"
      ctaLabel="Book a Fluid Flush"
      whyUs={{
        heading: "Why Choose Our Shop for Fluid Flush Services",
        text: "Leung's Auto Service has done fluid flush services for Edmonton drivers since 2002. We're an independent, AMVIC certified shop in West Edmonton working on domestic and import vehicles. We check your fluids first and tell you which system needs a flush before we start.",
        alt: "Vehicle in the service bay for a fluid flush at Leung's Auto Service in West Edmonton",
        facts: [
          { value: "Since 2002", label: "Serving Edmonton drivers" },
          { value: "AMVIC Certified", label: "Independent auto repair shop" },
          { value: "Fluids Checked First", label: "Only the flush your vehicle needs" },
        ],
      }}
      reviews={{
        heading: "Fluid Flush Reviews from Our Customers",
        text: "Here's what customers have said about fluid changes at Leung's Auto Service.",
        items: reviewsBy("Sumanta Pal", "Jiayi Yu (fluids)", "Mariana Chan"),
      }}
    />
  )
}
