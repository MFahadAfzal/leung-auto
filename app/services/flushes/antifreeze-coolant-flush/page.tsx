// app/services/flushes/antifreeze-coolant-flush/page.tsx
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"
import PageHero from "@/components/PageHero"
import StepsSection from "@/components/StepsSection"
import { Panel, PanelSection } from "@/components/Panels"

export const metadata = {
  title: "Antifreeze Coolant Flush Edmonton | Leung's Auto Service",
  description:
    "Antifreeze flush and radiator flush in West Edmonton. Find out how often you should change engine coolant, and book an antifreeze coolant flush today.",
  alternates: {
    canonical: "/services/flushes/antifreeze-coolant-flush",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "How often should I change engine coolant?",
    answer:
      "About every 2 years or 50,000 km for conventional coolant, and every 5 years or more for long-life coolant. Your owner's manual lists which type your vehicle uses. Fall is a good time for an antifreeze flush, before the cold sets in.",
  },
  {
    question: "Is an antifreeze flush the same as a radiator flush?",
    answer:
      "Yes, mostly. Both names describe draining the old antifreeze, flushing out the radiator and cooling system, and refilling with fresh coolant.",
  },
  {
    question: "What is the difference between antifreeze and coolant?",
    answer:
      "Antifreeze is the concentrate. Coolant is antifreeze mixed with water, usually half and half, and it is what goes in your radiator. People often use the two words for the same thing.",
  },
  {
    question: "How much does an antifreeze coolant flush cost?",
    answer:
      "It depends on your vehicle, the size of its cooling system, and the type of coolant it uses. An antifreeze flush costs far less than replacing a radiator or repairing an overheated engine.",
  },
]

export default function AntifreezeCoolantFlush() {
  return (
    <main className="flex-1">
      {/* ===== INTRO ===== */}
      <PageHero
        heading="Antifreeze Coolant Flush in Edmonton"
        cta="Book an Antifreeze Flush"
        image={{ src: "/images/antifreeze-coolant-flush.jpg", alt: "Open car engine bay with the cooling system hoses ready for an antifreeze coolant flush in Edmonton" }}
      >
        Antifreeze keeps your engine from overheating in summer and freezing in an Edmonton winter. Over time it
          breaks down and stops protecting the cooling system. Leung&apos;s Auto Service does antifreeze flushes and radiator flushes in West Edmonton.
      </PageHero>

      <PanelSection>
        <Panel>
          <h2 className="accent-heading text-2xl font-bold md:text-3xl">Signs You Need an Antifreeze Flush</h2>
          <ul className="checks mt-6 text-lg text-brand-dark">
            <li>The temperature gauge runs higher than normal</li>
            <li>Antifreeze that looks rusty, cloudy, or has bits floating in it</li>
            <li>A sweet smell from the engine bay</li>
            <li>The heater doesn&apos;t blow as hot as it used to</li>
            <li>It has been several years since the coolant was last changed</li>
          </ul>
        </Panel>
        <Panel dark>
          <h2 className="accent-heading text-2xl font-bold text-white md:text-3xl">Why an Antifreeze Flush Matters in Edmonton</h2>
          <p className="mt-4 text-lg text-white/90">
            Old antifreeze loses its freeze protection and its ability to stop rust and corrosion. In an Edmonton
            winter, weak antifreeze can freeze and crack the engine block or radiator. Rust and scale build up in the
            radiator and heater core, which leads to overheating in summer and a weak heater in winter. An antifreeze
            coolant flush clears out that buildup and restores full protection.
          </p>
        </Panel>
      </PanelSection>

      <StepsSection
        heading="What an Antifreeze Coolant Flush Involves"
        gray
        steps={[
          { title: "Drain and flush", text: "Old antifreeze out, rust and buildup cleared" },
          { title: "Refill with coolant", text: "Coolant that meets your vehicle's specification" },
          { title: "Check and test", text: "Hoses, radiator, cap, and cold protection" },
        ]}
      >
        <p className="mt-4 text-lg text-gray-700">
          A radiator flush clears out the rust and scale that a simple drain leaves behind, and we test that the new coolant protects against Edmonton&apos;s coldest days. You approve the work and the price before we start.
        </p>
      </StepsSection>

      <Faq title="Antifreeze Flush FAQ" faqs={faqs} split />

      <BookingCta
        heading="Book an Antifreeze Coolant Flush in West Edmonton"
        text="Get your coolant ready for winter, before the first cold snap."
        label="Get an Antifreeze Coolant Flush Quote"
        gray
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/flushes/antifreeze-coolant-flush"
        also={[
          { title: "Oil Change Services", href: "/services/maintenance/oil-change-services" },
          { title: "Check Engine Light Diagnosis", href: "/services/car-diagnostic#check-engine-light" },
        ]}
      />

    </main>
  )
}
