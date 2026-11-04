// app/services/flushes/antifreeze-coolant-flush/page.tsx
import Image from "next/image"
import Link from "next/link"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"

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
      "About every 2 years or 50,000 km for conventional coolant, and every 5 years or more for long-life coolant. The type in your vehicle decides which applies. Check your owner's manual, or ask us what your vehicle needs. Fall is a good time for an antifreeze flush, before the cold sets in.",
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
      "The price depends on your vehicle, the size of its cooling system, and the type of coolant it uses. An antifreeze flush costs far less than replacing a radiator or repairing an overheated engine.",
  },
]

export default function AntifreezeCoolantFlush() {
  return (
    <main className="flex-1">
      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Antifreeze Coolant Flush in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Antifreeze keeps your engine from overheating in summer and freezing in an Edmonton winter. Over time it
          breaks down and stops protecting the cooling system. Leung's Auto Service does antifreeze flushes and
          radiator flushes on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book an Antifreeze Flush
        </Link>
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/antifreeze-coolant-flush.jpg"
            alt="Mechanic doing an antifreeze coolant flush and radiator flush at Leung's Auto Service in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== SIGNS YOU NEED A FLUSH ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need an Antifreeze Flush</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The temperature gauge runs higher than normal</li>
            <li>Antifreeze that looks rusty, cloudy, or has bits floating in it</li>
            <li>A sweet smell from the engine bay</li>
            <li>The heater doesn't blow as hot as it used to</li>
            <li>It has been several years since the coolant was last changed</li>
          </ul>
        </div>
      </section>

      {/* ===== WHY IT MATTERS IN EDMONTON ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Why an Antifreeze Flush Matters in Edmonton</h2>
          <p className="mt-4 text-lg">
            Old antifreeze loses its freeze protection and its ability to stop rust and corrosion. In an Edmonton
            winter, weak antifreeze can freeze and crack the engine block or radiator. Rust and scale build up in the
            radiator and heater core, which leads to overheating in summer and a weak heater in winter. An antifreeze
            coolant flush clears out that buildup and restores full protection.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What an Antifreeze Coolant Flush Involves</h2>
          <p className="mt-4 text-lg">
            We drain the old antifreeze, do a radiator flush to clear out rust and buildup, and refill the system
            with coolant that meets your vehicle's specification. We also check the hoses, radiator, and cap for
            leaks or wear, and test that the new coolant protects against Edmonton's coldest days. You approve the
            work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <Faq title="Antifreeze Flush FAQ" faqs={faqs} />

      <BookingCta
        heading="Book an Antifreeze Coolant Flush in West Edmonton"
        text="Get your coolant ready for winter. We'll give you a price before any work starts."
        label="Get an Antifreeze Coolant Flush Quote"
        gray
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/flushes/antifreeze-coolant-flush"
        also={[
          { title: "Oil Change Services", href: "/services/maintenance/oil-change-services" },
          { title: "Check Engine Light Diagnosis", href: "/services/diagnostics#check-engine-light" },
        ]}
      />

    </main>
  )
}
