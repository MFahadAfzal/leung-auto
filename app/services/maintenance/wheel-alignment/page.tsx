// app/services/maintenance/wheel-alignment/page.tsx
import Link from "next/link"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"
import PageHero from "@/components/PageHero"
import StepsSection from "@/components/StepsSection"
import { Panel, PanelSection } from "@/components/Panels"

export const metadata = {
  title: "Wheel Alignment Edmonton | Tire Alignment | Leung's Auto",
  description:
    "Wheel alignment and tire alignment in West Edmonton. Fix pulling, an off-centre steering wheel, and uneven tire wear. Book your wheel alignment today.",
  alternates: {
    canonical: "/services/maintenance/wheel-alignment",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "Is a tire alignment the same as a wheel alignment?",
    answer:
      "Yes. A wheel alignment and a tire alignment are the same thing. The adjustment is made to the steering and suspension that hold your wheels, not to the tires themselves, but the goal is to keep your tires pointing straight and wearing evenly. Getting a tire alignment when you need one helps your tires last longer and keeps the car driving straight.",
  },
  {
    question: "How often do you need a wheel alignment?",
    answer:
      "Have your alignment checked about once a year, and any time you hit a big pothole or curb, get new tires, or have steering repair or suspension replacement done. If the car pulls or the steering wheel is off-centre, have it checked sooner.",
  },
  {
    question: "Do potholes affect wheel alignment?",
    answer:
      "Yes. A hard hit from a pothole or curb can knock your wheels out of alignment or damage suspension parts. Edmonton's spring pothole season is a common time to need a wheel alignment.",
  },
  {
    question: "How much does a wheel alignment cost?",
    answer:
      "The price depends on your vehicle and whether it needs a front-end or four-wheel alignment. An alignment costs far less than replacing tires that have worn out early.",
  },
]

export default function WheelAlignment() {
  return (
    <main className="flex-1">
      {/* ===== INTRO ===== */}
      <PageHero
        heading="Wheel Alignment in Edmonton"
        cta="Book a Wheel Alignment"
        image={{ src: "/images/wheel-alignment.jpg", alt: "Mechanic doing a wheel alignment and tire alignment at Leung's Auto Service in Edmonton" }}
      >
        Potholes and curbs can knock your wheels out of alignment, which wears your tires faster and makes the car
          pull. Leung's Auto Service does wheel alignments, also called tire alignments, on domestic and import
          vehicles at our shop in West Edmonton.
      </PageHero>

      <PanelSection aside>
        <Panel>
          <h2 className="accent-heading text-2xl font-bold md:text-3xl">Signs You Need a Wheel Alignment</h2>
          <ul className="checks mt-6 text-lg text-[#384959]">
            <li>The car pulls or drifts to one side</li>
            <li>The steering wheel is off-centre when driving straight</li>
            <li>Uneven or fast tire wear</li>
            <li>The steering feels loose or wanders</li>
            <li>You recently hit a big pothole or curb</li>
          </ul>
        </Panel>
        <Panel label="Good to know" dark>
          <p className="mt-4 text-lg text-white/90">
            Uneven tire wear can also mean your tires are due for a rotation, which we can do at your{" "}
            <Link href="/services/maintenance/tire-change" className="text-[#BDDDFC] underline">seasonal tire change</Link>.
          </p>
        </Panel>
      </PanelSection>

      <StepsSection
        heading="What a Wheel Alignment Involves"
        gray
        steps={[
          { title: "Check the angles", text: "Measure how your wheels are aligned" },
          { title: "Adjust to spec", text: "Back to your vehicle's specification" },
          { title: "Flag worn parts", text: "Anything that would stop the alignment holding" },
        ]}
      >
        <p className="mt-4 text-lg text-gray-700">
          We check the angles of your wheels and adjust them back to your vehicle's specification. If we find worn
          steering or suspension parts that would stop the alignment from holding, we explain what we find and you
          approve any extra work and the price before we start.
        </p>
      </StepsSection>

      <Faq title="Wheel Alignment FAQ" faqs={faqs} split />

      <BookingCta
        heading="Book a Wheel Alignment in West Edmonton"
        text="Car pulling or tires wearing unevenly? We'll check your alignment and give you a price first."
        label="Get a Wheel Alignment Quote"
        gray
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/maintenance/wheel-alignment"
        also={[
          { title: "Steering Repair", href: "/services/suspension/steering-repair" },
          { title: "Suspension Repair", href: "/services/suspension/car-suspension-replacement" },
        ]}
      />

    </main>
  )
}
