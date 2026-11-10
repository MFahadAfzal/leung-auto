// app/services/brakes/brake-fluid-flush/page.tsx
import Link from "next/link"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"
import PageHero from "@/components/PageHero"
import StepsSection from "@/components/StepsSection"
import { Panel, PanelSection } from "@/components/Panels"

export const metadata = {
  title: "Brake Fluid Flush Edmonton | Leung's Auto Service",
  description:
    "Brake fluid flush in West Edmonton. Learn the signs you need a brake fluid flush, how often to change brake fluid, and brake fluid flush cost. Book today.",
  alternates: {
    canonical: "/services/brakes/brake-fluid-flush",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "Why change brake fluid?",
    answer:
      "Old brake fluid absorbs moisture, which makes the pedal feel soft and corrodes brake parts from the inside. Brake fluid passes the force from your foot on the pedal to the brakes at each wheel. As it absorbs moisture, its boiling point drops, which can make the pedal feel soft under hard braking. The moisture can also cause corrosion inside the brake lines, calipers, and ABS unit. Changing brake fluid on schedule helps your brakes work as they should and protects those parts.",
  },
  {
    question: "How often should you change brake fluid?",
    answer:
      "Every two to three years for most vehicles. How often to change brake fluid varies by manufacturer, so check your owner's manual too. Ask us if you're not sure. We can also test your brake fluid to see whether it is due.",
  },
  {
    question: "How much does a brake fluid flush cost?",
    answer:
      "Brake fluid flush cost depends on your vehicle and the type of brake fluid it uses. A flush usually costs much less than repairing brake parts damaged by old, corroded fluid.",
  },
]

export default function BrakeFluidFlush() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <PageHero
        heading="Brake Fluid Flush in Edmonton"
        cta="Book a Brake Fluid Flush"
        image={{ src: "/images/brake-fluid-flush.jpg", alt: "Mechanic doing a brake fluid flush to change brake fluid at Leung's Auto Service in Edmonton" }}
      >
        Brake fluid absorbs moisture over time, which lowers its performance and can damage brake parts from the
          inside. A brake fluid flush replaces the old fluid with fresh fluid. Leung's Auto Service changes brake
          fluid on domestic and import vehicles at our shop in West Edmonton.
      </PageHero>

      <PanelSection aside>
        <Panel>
          <h2 className="accent-heading text-2xl font-bold md:text-3xl">Signs You Need a Brake Fluid Flush</h2>
          <ul className="checks mt-6 text-lg text-brand-dark">
            <li>A soft or spongy brake pedal</li>
            <li>Brake fluid that looks dark or dirty instead of clear or light amber</li>
            <li>The brakes feel less responsive than they used to</li>
            <li>A brake warning light on the dashboard</li>
            <li>It has been two to three years or more since you last had the brake fluid changed</li>
          </ul>
        </Panel>
        <Panel label="Good to know" dark>
          <p className="mt-4 text-lg text-white/90">
            Some of these signs can also come from worn brake pads. When we check your brakes, we look at both, so
            you only pay for what your car needs. See{" "}
            <Link href="/services/brakes/brake-pad-replacement" className="text-brand-light underline">brake pad replacement</Link>{" "}
            for more on worn pads.
          </p>
        </Panel>
      </PanelSection>

      <StepsSection
        heading="What a Brake Fluid Flush Involves"
        gray
        steps={[
          { title: "Remove the old fluid", text: "Drain the old brake fluid from the system" },
          { title: "Refill with fresh fluid", text: "Fluid that meets your vehicle's specification" },
          { title: "Check for leaks", text: "Before your car goes back to you" },
        ]}
      >
        <p className="mt-4 text-lg text-gray-700">
          During the service, we remove the old brake fluid from the system, refill it with fresh fluid that
          meets your vehicle's specification, and check the brakes for leaks. You approve the work and the price
          before we start.
        </p>
      </StepsSection>

      <Faq title="Brake Fluid Flush FAQ" faqs={faqs} split />

      <BookingCta
        heading="Book a Brake Fluid Flush in West Edmonton"
        text="Not sure if your brake fluid is due? We can test it and give you a price before any work starts."
        label="Get a Brake Fluid Flush Cost Quote"
        gray
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/brakes/brake-fluid-flush"
        also={[
          { title: "Antifreeze Coolant Flush", href: "/services/flushes/antifreeze-coolant-flush" },
        ]}
      />

    </main>
  )
}
