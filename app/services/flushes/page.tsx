// app/services/flushes/page.tsx
import ServiceHub from "@/components/ServiceHub"
import { reviewsBy } from "@/lib/reviews"

export const metadata = {
  title: "Car Fluid Flushes Edmonton | Leung's Auto Service",
  description:
    "Fluid flushes in West Edmonton: transmission service and transmission fluid change, and antifreeze coolant flush for domestic and import vehicles.",
  alternates: {
    canonical: "/services/flushes",
  },
}

export default function SystemFlushes() {
  return (
    <ServiceHub
      image={{ src: "/images/system-flushes.jpg", alt: "Mechanic doing a system flush to replace vehicle fluids in Edmonton" }}
      href="/services/flushes"
      intro="Old fluids wear out parts and lower performance. Pick the system below that needs fresh fluid."
      servicesHeading="Our Fluid Flush Services"
      ctaHeading="Not Sure Which Fluid Flush You Need?"
      ctaLabel="Book a Fluid Flush"
      reviews={{
        heading: "Fluid Flush Reviews from Our Customers",
        text: "Here's what customers have said about fluid changes at Leung's Auto Service.",
        items: reviewsBy("Sumanta Pal", "Jiayi Yu (fluids)", "Mariana Chan"),
      }}
    />
  )
}
