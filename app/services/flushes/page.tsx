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
      servicesHeading="Our Flush Services"
      ctaHeading="Not Sure Which Flush You Need?"
      ctaText="Bring it in and we'll test the fluids to see which one is due."
      ctaLabel="Book an Appointment"
      whyUs={{
        heading: "Why Choose Our Shop for Fluid Flush Services",
        text: "Leung's Auto Service has been changing fluids for Edmonton drivers since 2002. We use fluid that meets your vehicle maker's specification, not one product for every car.",
        alt: "Mechanic and customer looking under the hood of a car together before a fluid check in West Edmonton",
        facts: [
          { value: "Since 2002", label: "Serving Edmonton drivers" },
          { value: "AMVIC Certified", label: "Independent auto repair shop" },
          { value: "Fluids Checked First", label: "Only the flush your vehicle needs" },
        ],
      }}
      reviews={{
        heading: "Reviews from Our Customers",
        text: "From drivers who've had their fluids changed with us.",
        items: reviewsBy("Sumanta Pal", "Jiayi Yu (fluids)", "Mariana Chan"),
      }}
    />
  )
}
