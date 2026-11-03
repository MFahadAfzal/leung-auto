// app/services/flushes/antifreeze-coolant-flush/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Antifreeze Coolant Flush Edmonton | Leung's Auto Service",
  description:
    "Antifreeze flush and radiator flush in West Edmonton. Find out how often you should change engine coolant, and book an antifreeze coolant flush today.",
}

// Questions shown in the FAQ section, also sent to Google as FAQ structured data
const faqs = [
  {
    question: "How often should I change engine coolant?",
    answer:
      "It depends on the type of coolant. Older conventional coolant is often changed about every 2 years or 50,000 km, while long-life coolant can last 5 years or more. Check your owner's manual, or ask us what your vehicle needs.",
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
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

export default function AntifreezeCoolantFlush() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

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

      {/* ===== HOW OFTEN ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How Often Should I Change Engine Coolant?</h2>
          <p className="mt-4 text-lg">
            It depends on the type of coolant in your vehicle. Older conventional coolant is often changed about
            every 2 years or 50,000 km, while long-life coolant can last 5 years or more. Check your owner's manual,
            or ask us what your vehicle needs. Fall is a good time for an antifreeze flush, before the cold sets in.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Antifreeze Coolant Flush Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle, the size of its cooling system, and the type of coolant it uses. An
            antifreeze flush costs far less than replacing a radiator or repairing an overheated engine.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Get an Antifreeze Coolant Flush Quote
          </Link>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Antifreeze Flush FAQ</h2>
          {faqs.map((faq) => (
            <div key={faq.question} className="mt-8">
              <h3 className="text-2xl font-bold">{faq.question}</h3>
              <p className="mt-2 text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/flushes" className="text-[#2D3047] underline">System Flushes</Link>
          <Link href="/services/flushes/transmission-service" className="text-[#2D3047] underline">Transmission Service</Link>
          <Link href="/services/maintenance/oil-change-services" className="text-[#2D3047] underline">Oil Change Services</Link>
          <Link href="/services/diagnostics#check-engine-light" className="text-[#2D3047] underline">Check Engine Light Diagnosis</Link>
        </div>
      </section>

    </main>
  )
}
