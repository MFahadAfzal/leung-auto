// app/services/brake-repair/brake-fluid-flush/page.tsx
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
    "Brake fluid flush in West Edmonton. Learn the signs your fluid is due, how often to change brake fluid, and what a flush costs. Book today.",
  alternates: {
    canonical: "/services/brake-repair/brake-fluid-flush",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "Why change brake fluid?",
    answer:
      "The fluid carries the force from your foot on the pedal to the brakes at each wheel. Over time it absorbs moisture, which lowers its boiling point, so the pedal can feel soft under hard braking. That moisture also causes corrosion inside the brake lines, calipers, and ABS unit. Changing it on schedule keeps your brakes working as they should and protects those parts.",
  },
  {
    question: "How often should you change brake fluid?",
    answer:
      "Every two to three years for most vehicles. The interval varies by manufacturer, so check your owner's manual too. Ask us if you're not sure. We can also test your fluid to see whether it's due.",
  },
  {
    question: "How much does a brake fluid flush cost?",
    answer:
      "It depends on your vehicle and the type of fluid it uses. A flush usually costs much less than repairing brake parts damaged by old, corroded fluid.",
  },
]

export default function BrakeFluidFlush() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <PageHero
        heading="Brake Fluid Flush in Edmonton"
        cta="Book a Brake Fluid Flush"
        image={{ src: "/images/brake-fluid-flush.jpg", alt: "Mechanic leaning over an open engine bay near the fluid reservoirs during a brake fluid flush in Edmonton" }}
      >
        Over time, the fluid in your brakes absorbs moisture, which weakens braking and can damage parts from the
          inside. A brake fluid flush swaps the old fluid for fresh, and Leung&apos;s Auto Service
          does it for all makes and models at our West Edmonton shop.
      </PageHero>

      <PanelSection aside>
        <Panel>
          <h2 className="accent-heading text-2xl font-bold md:text-3xl">Signs You Need a Brake Fluid Flush</h2>
          <ul className="checks mt-6 text-lg text-brand-dark">
            <li>A soft or spongy brake pedal</li>
            <li>Fluid that looks dark or dirty instead of clear or light amber</li>
            <li>The brakes feel less responsive than they used to</li>
            <li>A brake warning light on the dashboard</li>
            <li>It has been two to three years or more since your last flush</li>
          </ul>
        </Panel>
        <Panel label="Good to know" dark>
          <p className="mt-4 text-lg text-white/90">
            Some of these signs can also come from worn brake pads. When we check your brakes, we look at both before
            recommending anything. See{" "}
            <Link href="/services/brake-repair/brake-pad-replacement" className="text-brand-light underline">brake pad replacement</Link>{" "}
            for more on worn pads.
          </p>
        </Panel>
      </PanelSection>

      <StepsSection
        heading="What's Involved"
        gray
        steps={[
          { title: "Remove the old fluid", text: "From the reservoir and every brake line" },
          { title: "Refill with fresh fluid", text: "Fluid that meets your vehicle's specification" },
          { title: "Check for leaks", text: "Before your car goes back to you" },
        ]}
      >
        <p className="mt-4 text-lg text-gray-700">
          A flush replaces the fluid in every brake line, not just what&apos;s in the reservoir. You approve the
          work and the price before we start.
        </p>
      </StepsSection>

      <Faq title="Common Questions" faqs={faqs} split />

      <BookingCta
        heading="Book a Brake Fluid Flush in West Edmonton"
        text="Not sure if yours is due? We can test the fluid and tell you."
        label="Get a Price Quote"
        gray
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/brake-repair/brake-fluid-flush"
        also={[
          { title: "Antifreeze Coolant Flush", href: "/services/flushes/antifreeze-coolant-flush" },
        ]}
      />

    </main>
  )
}
