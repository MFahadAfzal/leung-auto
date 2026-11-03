// app/services/diagnostics/page.tsx
import Image from "next/image"
import Link from "next/link"
import OtherServices from "@/components/OtherServices"
import { services } from "@/lib/services"

export const metadata = {
  title: "Car Diagnostic Edmonton | Check Engine Light Diagnosis",
  description:
    "Car diagnostic in West Edmonton: check engine light diagnosis, transmission diagnostic, and car electrical diagnostic for domestic and import vehicles.",
}

const diagnostics = services.find((s) => s.href === "/services/diagnostics")!

// Questions shown in the FAQ section, also sent to Google as FAQ structured data
const faqs = [
  {
    question: "What does a car diagnostic test do?",
    answer:
      "A car diagnostic test reads the fault codes stored in your vehicle's computer, then a technician tests the parts and systems those codes point to. The code narrows down where the problem is, and the testing confirms which part has actually failed.",
  },
  {
    question: "Can I drive with the check engine light on?",
    answer:
      "If the check engine light is on and steady, the car is usually safe to drive for a short time, but book a check engine light diagnosis soon. If the light is flashing, the engine may be misfiring badly. Reduce your speed and have it checked right away to avoid damaging the engine or catalytic converter.",
  },
  {
    question: "Can an auto parts store code reader replace a car diagnostic?",
    answer:
      "Not really. A code reader tells you which system set the code, not which part failed. For example, an oxygen sensor code can be caused by the sensor itself, a wiring fault, or a vacuum leak. A full car diagnostic tests the system so you only pay to replace the part that's actually bad.",
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

export default function CarDiagnostics() {
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
        <h1 className="text-4xl font-bold md:text-5xl">Car Diagnostic Services in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Warning lights and strange behaviour need a proper car diagnostic before a repair. Leung&apos;s Auto
          Service tracks down the cause on domestic and import vehicles at our shop in West Edmonton, from a check
          engine light diagnosis to transmission and electrical problems.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Car Diagnostic
        </Link>
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/car-diagnostic.jpg"
            alt="Technician doing a car diagnostic and check engine light diagnosis in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== JUMP LINKS: one card per diagnostic, linking to its section below ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Choose the Car Diagnostic You Need</h2>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diagnostics.spokes.map((spoke) => (
            <Link
              key={spoke.href}
              href={spoke.href}
              className="flex flex-col rounded bg-white p-6 shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-[#2D3047]">{spoke.title}</h3>
              <p className="mt-2 flex-1 text-gray-600">{spoke.blurb}</p>
              <span className="mt-4 font-bold text-[#2D3047] underline">Learn more</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== CHECK ENGINE LIGHT ===== */}
      <section id="check-engine-light" className="scroll-mt-4 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Check Engine Light Diagnosis</h2>
          <p className="mt-4 text-lg">
            The check engine light can mean anything from a loose gas cap to a serious engine problem. A check engine
            light diagnosis finds the real cause so you don&apos;t pay for parts you don&apos;t need.
          </p>

          <h3 className="mt-8 text-2xl font-bold">Common Causes of a Check Engine Light</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>A loose or damaged gas cap</li>
            <li>A faulty oxygen sensor</li>
            <li>Worn spark plugs or ignition coils</li>
            <li>A failing catalytic converter</li>
            <li>A mass airflow sensor problem</li>
            <li>Vacuum or exhaust leaks</li>
          </ul>
          <p className="mt-4 text-lg">
            If the check engine light is flashing, the engine may be misfiring badly. Reduce your speed and have it
            checked as soon as possible to avoid damaging the engine or catalytic converter.
          </p>

          <h3 className="mt-8 text-2xl font-bold">What a Check Engine Light Diagnosis Involves</h3>
          <p className="mt-4 text-lg">
            We scan the vehicle&apos;s computer for fault codes, then test the parts and systems those codes point to.
            A code alone doesn&apos;t always tell you which part has failed, so we confirm the cause before recommending
            a repair. You approve the work and the price before we start.
          </p>

          <h3 className="mt-8 text-2xl font-bold">Check Engine Light Diagnostic Near Me</h3>
          <p className="mt-4 text-lg">
            Looking for a check engine light diagnostic near you? Leung&apos;s Auto Service is at 12025 149 St NW in
            West Edmonton. Call us at 780-452-0134, and we&apos;ll find out why your light is on.
          </p>

          <h3 className="mt-8 text-2xl font-bold">Check Engine Light Diagnosis Cost</h3>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and how much testing it takes to find the cause.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Book a Check Engine Light Diagnosis
          </Link>
        </div>
      </section>

      {/* ===== TRANSMISSION ===== */}
      <section id="transmission-diagnostics" className="scroll-mt-4 bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Transmission Diagnostic Service</h2>
          <p className="mt-4 text-lg">
            Transmission problems are easier and cheaper to fix when they&apos;re caught early. A transmission
            diagnostic tells you what&apos;s wrong before a small problem turns into a rebuild.
          </p>

          <h3 className="mt-8 text-2xl font-bold">Signs You Need a Transmission Diagnostic</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Slipping out of gear, or the engine revs without the car speeding up</li>
            <li>Harsh, delayed, or rough shifting</li>
            <li>A delay before the car moves when you shift into drive or reverse</li>
            <li>Whining, humming, or clunking noises</li>
            <li>Red fluid leaking under the car</li>
            <li>A burning smell or a transmission warning light</li>
          </ul>

          <h3 className="mt-8 text-2xl font-bold">What a Transmission Diagnostic Involves</h3>
          <p className="mt-4 text-lg">
            We scan for fault codes, check the transmission fluid level and condition, look for leaks, and test drive
            the vehicle to see how it shifts. We explain what we find, and you approve any repairs and the price
            before we start.
          </p>

          <h3 className="mt-8 text-2xl font-bold">Transmission Diagnostic Cost</h3>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and what the problem turns out to be. Some issues are fixed with a
            fluid service or a sensor, not a full rebuild.
          </p>
          <p className="mt-4 text-lg">
            Transmission fluid due for a change? See our{" "}
            <Link href="/services/flushes/transmission-service" className="text-[#2D3047] underline">Transmission Service</Link>.
          </p>
        </div>
      </section>

      {/* ===== ELECTRICAL ===== */}
      <section id="electrical-diagnostics" className="scroll-mt-4 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Car Electrical Diagnostic Service</h2>
          <p className="mt-4 text-lg">
            Modern vehicles rely on electrical systems for almost everything, from starting the engine to running the
            lights. A car electrical diagnostic traces the fault to the battery, charging system, or wiring.
          </p>

          <h3 className="mt-8 text-2xl font-bold">Signs You Need a Car Electrical Diagnostic</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The car is slow to start or won&apos;t start</li>
            <li>The battery keeps going dead</li>
            <li>Dim or flickering headlights and dash lights</li>
            <li>The battery or charging warning light is on</li>
            <li>Power windows, locks, or other accessories stop working</li>
            <li>Fuses that keep blowing</li>
          </ul>

          <h3 className="mt-8 text-2xl font-bold">What a Car Electrical Diagnostic Involves</h3>
          <p className="mt-4 text-lg">
            We test the battery, alternator, and starter, scan for fault codes, and trace the wiring and circuits
            involved to find the cause. We explain what we find, and you approve any repairs and the price before we
            start.
          </p>

          <h3 className="mt-8 text-2xl font-bold">Car Electrical Diagnostic Cost</h3>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and how long it takes to find the cause. A weak battery is quick to
            find, while an intermittent wiring fault can take longer.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Car Diagnostic FAQ</h2>
          {faqs.map((faq) => (
            <div key={faq.question} className="mt-8">
              <h3 className="text-2xl font-bold">{faq.question}</h3>
              <p className="mt-2 text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Not Sure Which Car Diagnostic You Need?</h2>
        <p className="mt-4 text-lg md:text-xl">
          Tell us what your vehicle is doing and we&apos;ll run the right car diagnostic to find the cause.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Car Diagnostic
        </Link>
        <p className="mt-6">
          <Link href="/services" className="text-[#2D3047] underline">See all automotive services</Link>
        </p>
      </section>

      <OtherServices current="/services/diagnostics" />

    </main>
  )
}
