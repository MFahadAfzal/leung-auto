// app/services/suspension/steering-repair/page.tsx
import Link from "next/link"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"
import PageHero from "@/components/PageHero"
import FeatureBand from "@/components/FeatureBand"
import StepsSection from "@/components/StepsSection"
import { Panel, PanelSection } from "@/components/Panels"

export const metadata = {
  title: "Power Steering Leak Repair & Steering Repair Edmonton",
  description:
    "Power steering leak repair in West Edmonton. We fix leaking power steering and power steering fluid leaks, plus loose steering and clunking when turning.",
  alternates: {
    canonical: "/services/suspension/steering-repair",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "Does power steering leak repair fluid work?",
    answer:
      "Sometimes, for a while. Power steering leak repair fluid, often called stop-leak, can swell a dried-out seal and slow a small leak. It won't fix a cracked hose, a loose fitting, or a failing pump or rack, and the leak usually comes back. For a lasting power steering fluid fix, we find the source and replace the part that's leaking.",
  },
  {
    question: "What does the power steering warning light mean?",
    answer:
      "On cars with electric power steering, the power steering warning light means the system has found a fault, and the steering may suddenly feel heavy. We scan the system for fault codes and check the wiring, sensors, and steering motor to find the cause.",
  },
  {
    question: "How much does power steering leak repair cost?",
    answer:
      "The price depends on what's causing the problem. Replacing a leaking hose or a tie rod end costs much less than replacing a power steering pump or steering rack. Fixing a small leak early can save the pump.",
  },
]

export default function SteeringRepair() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <PageHero
        heading="Power Steering Leak Repair and Steering Repair in Edmonton"
        cta="Book Steering Repair"
        image={{ src: "/images/power-steering.jpg", alt: "Driver's hands on the steering wheel of a car that needs power steering repair or power steering leak repair in Edmonton" }}
      >
        Your steering keeps the car tracking straight and responding when you turn the wheel. Leung&apos;s Auto Service
          does power steering fluid leak repair and fixes other steering problems on domestic and import vehicles at
          our shop in West Edmonton.
      </PageHero>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <h2 className="accent-heading text-3xl font-bold">Common Steering Problems</h2>
          </div>
          <div className="lg:col-span-3">
            <ul className="checks text-lg text-brand-dark">
              <li>Power steering fluid leaking under the car, or a fluid level that keeps dropping</li>
              <li>The power steering warning light is on</li>
              <li>Loose steering, or play in the steering wheel</li>
              <li>Clunking when turning, or popping and whining noises</li>
              <li>The steering feels heavy or hard to turn</li>
              <li>The car wanders or pulls to one side</li>
            </ul>
          </div>
        </div>
      </section>

      <PanelSection gray>
        <Panel>
          <h2 className="accent-heading text-2xl font-bold md:text-3xl">Power Steering Fluid Leak Repair</h2>
          <p className="mt-4 text-lg text-gray-700">
            Power steering leaks usually come from worn hoses, loose fittings, a leaking pump, or a failing steering
            rack seal. A stop-leak product or topping up the fluid is not a lasting power steering fluid fix: the
            leak comes back, and running the system low can damage the pump. To fix leaking power steering, we find
            where the fluid is coming from, replace the failed part, and refill the system with the correct fluid.
          </p>
        </Panel>
        <Panel dark id="power-steering-flush">
          <h2 className="accent-heading text-2xl font-bold text-white md:text-3xl">Power Steering Flush</h2>
          <p className="mt-4 text-lg text-white/90">
            Old power steering fluid can make steering stiff and wear out the pump and rack, even without a leak.
            Signs you need a power steering flush include heavy steering, especially in the cold, a whining or
            groaning noise when you turn the wheel, jerky steering, and fluid that looks dark or dirty. We remove the
            old fluid, refill the system with fluid that meets your vehicle&apos;s specification, and check the hoses,
            pump, and rack for leaks. Some newer vehicles use electric steering and don&apos;t have steering
            fluid, so ask us if you&apos;re not sure which type your vehicle has.
          </p>
        </Panel>
      </PanelSection>

      <FeatureBand heading="Loose Steering and Clunking When Turning">
        <p className="mt-4 text-lg text-gray-700">
          Loose steering often comes from worn tie rod ends or a worn steering rack. Clunking when turning can come
          from tie rods, ball joints, or{" "}
          <Link href="/services/suspension/suspension-repair" className="text-brand-accent underline hover:text-brand-tint">worn suspension parts</Link>. We inspect the steering and front end to find which
          part is worn before we replace anything.
        </p>
      </FeatureBand>

      <StepsSection
        heading="What Steering Repair Involves"
        gray
        steps={[
          { title: "Inspect the front end", text: "Pump, hoses, steering rack, and tie rod ends" },
          { title: "Explain what we find", text: "What's worn and what it will take to fix" },
          { title: "You approve, we start", text: "The work and the price, before we begin" },
        ]}
      >
        <p className="mt-4 text-lg text-gray-700">
          We inspect the power steering pump, hoses, steering rack, tie rod ends, and other front end parts, and
          explain what we find. If parts need replacing, you approve the work and the price before we start. Many
          steering repairs are followed by a wheel alignment.
        </p>
      </StepsSection>

      <Faq title="Steering Repair FAQ" faqs={faqs} split />

      <BookingCta
        heading="Book Steering Repair in West Edmonton"
        text="Tell us what your steering is doing and we'll give you a price before any work starts."
        label="Get a Price Quote"
        gray
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/suspension/steering-repair"
        also={[
          { title: "Wheel Alignment", href: "/services/maintenance/wheel-alignment" },
          { title: "Car Diagnostics", href: "/services/diagnostics" },
        ]}
      />

    </main>
  )
}
