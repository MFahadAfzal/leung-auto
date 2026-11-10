// app/services/diagnostics/page.tsx
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import BookingCta from "@/components/BookingCta"
import OtherServices from "@/components/OtherServices"
import Reviews from "@/components/Reviews"
import { reviewsBy } from "@/lib/reviews"
import { services } from "@/lib/services"
import { spokeIcon } from "@/lib/spokeIcons"
import PageHero from "@/components/PageHero"
import WhyChooseUs from "@/components/WhyChooseUs"

export const metadata = {
  title: "Car Diagnostic Edmonton | Check Engine Light Diagnosis",
  description:
    "Car diagnostic in West Edmonton: check engine light diagnosis, transmission diagnostic, and car electrical diagnostic for domestic and import vehicles.",
  alternates: {
    canonical: "/services/diagnostics",
  },
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
      "Usually yes if the light is steady, but not if it's flashing. If the check engine light is on and steady, the car is usually safe to drive for a short time, but book a check engine light diagnosis soon. If the light is flashing, the engine may be misfiring badly. Reduce your speed and have it checked right away to avoid damaging the engine or catalytic converter.",
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
      <PageHero
        heading="Car Diagnostic Services in Edmonton"
        cta="Book a Car Diagnostic"
        image={{ src: "/images/car-diagnostic.jpg", alt: "Technician doing a car diagnostic and check engine light diagnosis in Edmonton" }}
      >
        Warning lights and strange behaviour need a proper car diagnostic before a repair. Leung&apos;s Auto
          Service tracks down the cause on domestic and import vehicles at our shop in West Edmonton, from a check
          engine light diagnosis to transmission and electrical problems.
      </PageHero>

      {/* ===== JUMP LINKS: one card per diagnostic, linking to its section below ===== */}
      <section className="px-6 py-16">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Choose the Car Diagnostic You Need</h2>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diagnostics.spokes.map((spoke) => {
            const Icon = spokeIcon(spoke.href)
            return (
              <Link
                key={spoke.href}
                href={spoke.href}
                className="group flex flex-col rounded-xl border border-brand-light border-t-4 border-t-brand-accent bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-accent hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent text-white transition group-hover:bg-brand-support">
                  <Icon size={28} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-dark">{spoke.title}</h3>
                <p className="mt-2 flex-1 text-gray-600">{spoke.blurb}</p>
                <ArrowRight className="mt-4 text-brand-accent transition group-hover:translate-x-1" size={20} aria-hidden="true" />
              </Link>
            )
          })}
        </div>
      </section>

      {/* ===== CHECK ENGINE LIGHT ===== */}
      <section id="check-engine-light" className="scroll-mt-4 bg-brand-light/40 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2 lg:sticky lg:top-8 lg:self-start">
            <h2 className="accent-heading text-3xl font-bold md:text-4xl">Check Engine Light Diagnosis</h2>
            <p className="mt-4 text-lg text-gray-700">
              The check engine light can mean anything from a loose gas cap to a serious engine problem. A check engine
              light diagnosis finds the real cause so you don&apos;t pay for parts you don&apos;t need.
            </p>

          </div>
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-brand-dark">Common Causes of a Check Engine Light</h3>
            <ul className="checks mt-4 text-lg text-brand-dark">
              <li>A loose or damaged gas cap</li>
              <li>A faulty oxygen sensor</li>
              <li>Worn spark plugs or ignition coils</li>
              <li>A failing catalytic converter</li>
              <li>A mass airflow sensor problem</li>
              <li>Vacuum or exhaust leaks</li>
            </ul>
            <p className="mt-4 text-lg text-gray-700">
              If the check engine light is flashing, the engine may be misfiring badly. Reduce your speed and have it
              checked as soon as possible to avoid damaging the engine or catalytic converter.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-brand-dark">What a Check Engine Light Diagnosis Involves</h3>
            <p className="mt-4 text-lg text-gray-700">
              We scan the vehicle&apos;s computer for fault codes, then test the parts and systems those codes point to.
              A code alone doesn&apos;t always tell you which part has failed, so we confirm the cause before recommending
              a repair. You approve the work and the price before we start.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-brand-dark">Check Engine Light Diagnostic Near Me</h3>
            <p className="mt-4 text-lg text-gray-700">
              Looking for a check engine light diagnostic near you? Leung&apos;s Auto Service is at 12025 149 St NW in
              West Edmonton. Call us at 780-452-0134, and we&apos;ll find out why your light is on.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-brand-dark">Check Engine Light Diagnosis Cost</h3>
            <p className="mt-4 text-lg text-gray-700">
              The price depends on your vehicle and how much testing it takes to find the cause.
            </p>
            <Link href="/contact" className="mt-6 inline-block rounded bg-brand-accent px-6 py-3 font-bold text-white hover:bg-brand-tint">
              Book a Check Engine Light Diagnosis
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TRANSMISSION ===== */}
      <section id="transmission-diagnostics" className="scroll-mt-4 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2 lg:sticky lg:top-8 lg:self-start">
            <h2 className="accent-heading text-3xl font-bold md:text-4xl">Transmission Diagnostic Service</h2>
            <p className="mt-4 text-lg text-gray-700">
              Transmission problems are easier and cheaper to fix when they&apos;re caught early. A transmission
              diagnostic tells you what&apos;s wrong before a small problem turns into a rebuild.
            </p>

          </div>
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-brand-dark">Signs You Need a Transmission Diagnostic</h3>
            <ul className="checks mt-4 text-lg text-brand-dark">
              <li>Slipping out of gear, or the engine revs without the car speeding up</li>
              <li>Harsh, delayed, or rough shifting</li>
              <li>A delay before the car moves when you shift into drive or reverse</li>
              <li>Whining, humming, or clunking noises</li>
              <li>Red fluid leaking under the car</li>
              <li>A burning smell or a transmission warning light</li>
            </ul>

            <h3 className="mt-10 text-2xl font-bold text-brand-dark">What a Transmission Diagnostic Involves</h3>
            <p className="mt-4 text-lg text-gray-700">
              We scan for fault codes, check the transmission fluid level and condition, look for leaks, and test drive
              the vehicle to see how it shifts. We explain what we find, and you approve any repairs and the price
              before we start.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-brand-dark">Transmission Diagnostic Cost</h3>
            <p className="mt-4 text-lg text-gray-700">
              The price depends on your vehicle and what the problem turns out to be. Some issues are fixed with a
              fluid service or a sensor, not a full rebuild.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Transmission fluid due for a change? See our{" "}
              <Link href="/services/flushes/transmission-service" className="text-brand-accent underline hover:text-brand-tint">Transmission Service</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ELECTRICAL ===== */}
      <section id="electrical-diagnostics" className="scroll-mt-4 bg-brand-light/40 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2 lg:sticky lg:top-8 lg:self-start">
            <h2 className="accent-heading text-3xl font-bold md:text-4xl">Car Electrical Diagnostic Service</h2>
            <p className="mt-4 text-lg text-gray-700">
              Modern vehicles rely on electrical systems for almost everything, from starting the engine to running the
              lights. A car electrical diagnostic traces the fault to the battery, charging system, or wiring.
            </p>

          </div>
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-brand-dark">Signs You Need a Car Electrical Diagnostic</h3>
            <ul className="checks mt-4 text-lg text-brand-dark">
              <li>The car is slow to start or won&apos;t start</li>
              <li>The battery keeps going dead</li>
              <li>Dim or flickering headlights and dash lights</li>
              <li>The battery or charging warning light is on</li>
              <li>Power windows, locks, or other accessories stop working</li>
              <li>Fuses that keep blowing</li>
            </ul>

            <h3 className="mt-10 text-2xl font-bold text-brand-dark">What a Car Electrical Diagnostic Involves</h3>
            <p className="mt-4 text-lg text-gray-700">
              We test the battery, alternator, and starter, scan for fault codes, and trace the wiring and circuits
              involved to find the cause. We explain what we find, and you approve any repairs and the price before we
              start.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-brand-dark">Car Electrical Diagnostic Cost</h3>
            <p className="mt-4 text-lg text-gray-700">
              The price depends on your vehicle and how long it takes to find the cause. A weak battery is quick to
              find, while an intermittent wiring fault can take longer.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY US + REVIEW: shared shop photo behind the section, customer review on the right ===== */}
      <WhyChooseUs
        heading="Why Choose Our Shop for Car Diagnostics"
        alt="Technician running a car diagnostic at Leung's Auto Service, an independent auto repair shop in West Edmonton"
        facts={[
          { value: "Since 2002", label: "Serving Edmonton drivers" },
          { value: "AMVIC Certified", label: "Independent auto repair shop" },
          { value: "Cause Found First", label: "No guessing with parts" },
        ]}
        aside={
          <>
            <h2 className="text-2xl font-bold md:text-3xl">Car Diagnostic Reviews from Our Customers</h2>
            <p className="mt-4 text-lg text-gray-700">
              Here&apos;s what customers have said about car diagnostics at Leung&apos;s Auto Service.
            </p>
            <Reviews reviews={reviewsBy("J P")} />
          </>
        }
      >
        <p>
          Leung&apos;s Auto Service has diagnosed problems on Edmonton vehicles since 2002. We&apos;re an independent,
          AMVIC certified shop in West Edmonton working on domestic and import vehicles. We find the cause before we
          recommend a repair, then explain what we found and what it will cost.
        </p>
      </WhyChooseUs>

      {/* ===== FAQ ===== */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Car Diagnostic FAQ</h2>
          {/* Click a question to open its answer (answers stay in the page for Google) */}
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-brand-light border-l-4 border-l-brand-accent bg-brand-light/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-bold text-brand-dark md:text-xl">{faq.question}</h3>
                  <ChevronDown className="shrink-0 text-brand-support transition group-open:rotate-180" size={22} />
                </summary>
                <p className="px-5 pb-5 text-lg text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <BookingCta
        heading="Not Sure Which Car Diagnostic You Need?"
        text="Tell us what your vehicle is doing and we'll run the right car diagnostic to find the cause."
        label="Book a Car Diagnostic"
      >
        <Link href="/services" className="underline hover:text-white">See all automotive services</Link>
      </BookingCta>

      <OtherServices current="/services/diagnostics" />

    </main>
  )
}
