// app/services/suspension/page.tsx
import Link from "next/link"
import ServiceHub from "@/components/ServiceHub"

export const metadata = {
  title: "Steering & Suspension Repair Edmonton | Leung's Auto Service",
  description:
    "Steering and suspension repair in West Edmonton. We fix clunking over bumps, pulling, a bouncy ride, power steering leaks, and loose steering.",
  alternates: {
    canonical: "/services/suspension",
  },
}

// Short write-ups under the service cards. Each one is a quick symptom check, worded differently from the
// page it links to, and its heading links to that page so the phrase points there instead of competing with it.
const commonRepairs = [
  {
    heading: "Shock and Strut Replacement",
    text: "If the car keeps bouncing after a bump, nose-dives when you stop, or there's oil on the outside of a shock, the shocks or struts are likely worn out. Edmonton potholes are hard on them.",
    href: "/services/suspension/suspension-repair#shock-strut-replacement",
  },
  {
    heading: "Ball Joint Replacement",
    text: "A clunk from the front end over bumps, or steering that wanders at highway speed, often comes from a worn ball joint. It's a safety part, so it's one of the first things we check.",
    href: "/services/suspension/suspension-repair#ball-joint-replacement",
  },
  {
    heading: "Power Steering Leak Repair",
    text: "A whining pump, steering that feels heavy, or a reddish puddle under the front of the car usually points to a power steering leak. Catching it early can keep a hose or fitting fix from turning into a new pump.",
    href: "/services/suspension/steering-repair",
  },
]

export default function SteeringSuspensionRepair() {
  return (
    <ServiceHub
      image={{ src: "/images/steering-suspension-repair.jpg", alt: "Mechanic lying under a car with the front wheel removed for steering and suspension repair in Edmonton" }}
      href="/services/suspension"
      intro="Steering problems, clunking, pulling, or a bouncy ride usually mean something in the steering or suspension is worn and it's time for front end repair. Pick the service below that matches what your vehicle is doing."
      servicesHeading="Our Steering and Suspension Services"
      ctaHeading="Not Sure If It's Steering or Suspension?"
      ctaLabel="Book a Steering or Suspension Check"
      details={
        <section className="bg-brand-light/40 px-6 py-16">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Repairs We Do Most Often</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {commonRepairs.map((repair) => (
              <div key={repair.heading} className="rounded-xl border-t-4 border-brand-accent bg-white p-6 shadow-sm">
                {/* The heading is the link, so the phrase points straight at the page that covers it in full */}
                <h3 className="text-xl font-bold">
                  <Link href={repair.href} className="text-brand-dark underline decoration-brand-accent underline-offset-4 hover:text-brand-accent">
                    {repair.heading}
                  </Link>
                </h3>
                <p className="mt-3 text-gray-700">{repair.text}</p>
              </div>
            ))}
          </div>
        </section>
      }
      whyUs={{
        heading: "Why Choose Our Shop for Steering and Suspension Repair",
        text: "Leung's Auto Service has fixed steering and suspension problems for Edmonton drivers since 2002. We're an independent, AMVIC certified shop in West Edmonton. We find the worn part causing the clunk, pull, or loose steering, show you what we found, and only replace what needs replacing.",
        alt: "Mechanic and customer looking under the hood of a car together before a steering or suspension check in West Edmonton",
        facts: [
          { value: "Since 2002", label: "Serving Edmonton drivers" },
          { value: "AMVIC Certified", label: "Independent auto repair shop" },
          { value: "See the Worn Parts", label: "Only the repair you need" },
        ],
      }}
    />
  )
}
