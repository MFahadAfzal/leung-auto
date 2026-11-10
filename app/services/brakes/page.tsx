// app/services/brakes/page.tsx
import Link from "next/link"
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import BookingCta from "@/components/BookingCta"
import OtherServices from "@/components/OtherServices"
import Reviews from "@/components/Reviews"
import { reviewsBy } from "@/lib/reviews"
import { business } from "@/lib/business"
import { services } from "@/lib/services"
import PageHero from "@/components/PageHero"
import WhyChooseUs from "@/components/WhyChooseUs"
import { spokeIcon } from "@/lib/spokeIcons"

export const metadata = {
  title: "Brake Repair Edmonton | Brake Inspection & Brake Service",
  description:
    "Brake repair shop in West Edmonton. Brake inspection, brake service, and brake maintenance for domestic and import vehicles. Call 780-452-0134 to book.",
  alternates: {
    canonical: "/services/brakes",
  },
}

const brakes = services.find((s) => s.href === "/services/brakes")!


// Questions shown in the FAQ section, also sent to Google as FAQ structured data
const faqs = [
  {
    question: "How do I know if I need brake repair?",
    answer:
      "You likely need brake repair if your brakes squeal, squeak, or grind, the brake pedal feels soft or sinks toward the floor, the car pulls to one side when you brake, the steering wheel or pedal shakes when stopping, or a brake or ABS warning light comes on. If you notice any of these, book a brake inspection so we can find the cause.",
  },
  {
    question: "What are the signs of failing brakes?",
    answer:
      "Common signs of failing brakes are a high-pitched squeal, a metal-on-metal grinding noise, a soft or spongy pedal, longer stopping distances, vibration when braking, a burning smell after driving, fluid leaking near a wheel, and a brake warning light on the dashboard.",
  },
  {
    question: "How often should my brakes be inspected?",
    answer:
      "Have your brakes inspected at least once a year, and any time you notice a change in how they sound or feel. Many Edmonton drivers have them checked during their seasonal tire change, since the wheels are already off and the pads and rotors are easy to see.",
  },
  {
    question: "What does a brake service include?",
    answer:
      "A brake service starts with a brake inspection of the pads, rotors, calipers, brake lines and hoses, brake fluid, and parking brake. Depending on what we find, it can include replacing brake pads, replacing or resurfacing rotors, cleaning and lubricating the caliper slides, and flushing the brake fluid. You approve the work and the price before we start.",
  },
  {
    question: "How long does a brake repair take?",
    answer:
      "Most brake pad and rotor jobs are done the same day, often in a couple of hours per axle. Jobs like replacing a seized caliper, a rusted brake line, or an ABS part can take longer, especially if parts need to be ordered. We give you a time estimate when you book.",
  },
  {
    question: "Is it safe to drive with grinding brakes?",
    answer:
      "No. Grinding usually means the brake pads are worn down to the metal backing plate, which is scraping against the rotor. This reduces stopping power and quickly damages the rotors, turning a pad replacement into a more expensive repair. Have your brakes checked as soon as possible and avoid driving more than you need to.",
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

// Warning signs, shown as a numbered list
const signs = [
  "Squealing, squeaking, or grinding when you brake",
  "A soft or spongy brake pedal, or one that sinks toward the floor",
  "The car pulls to one side when braking",
  "Shaking in the steering wheel or brake pedal when you stop",
  "A brake or ABS warning light on the dashboard",
  "A burning smell or fluid leaking near a wheel",
]

// What the brake inspection covers
const inspectionChecks = [
  "Brake pad thickness and wear on every wheel",
  "Rotors for grooves, warping, and rust",
  "Calipers and caliper slides for sticking or leaks",
  "Brake lines and hoses for rust, cracks, and leaks",
  "Brake fluid level and condition",
  "The parking brake and any dashboard warning lights",
]

// Quick facts beside the "why choose us" text
const shopFacts = [
  { value: "Since 2002", label: "Serving Edmonton drivers" },
  { value: "AMVIC Certified", label: "Independent brake repair shop" },
  { value: "See the Worn Parts", label: "Only the brake service you need" },
]

export default function BrakeRepair() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ===== INTRO: text on the left, photo on the right (stacked on phones) ===== */}
      <PageHero
        heading="Brake Repair in Edmonton"
        cta="Book Brake Repair"
        eyebrow="West Edmonton Brake Shop"
        image={{ src: "/images/brake-repair.jpg", alt: "Mechanic doing a brake inspection and brake repair at an Edmonton brake repair shop" }}
      >
        Leung&apos;s Auto Service is an independent brake repair shop in West Edmonton. We do brake inspections and
        full brake service on domestic and import vehicles, and tell you what your brakes need before we start.
      </PageHero>

      {/* ===== SPECIFIC SERVICES: one card per brake repair page ===== */}
      <section className="px-6 py-16">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Choose the Brake Service You Need</h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brakes.spokes.map((spoke) => {
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
                <h3 className="mt-5 text-xl font-bold text-brand-dark group-hover:text-brand-accent">{spoke.title}</h3>
                <p className="mt-2 flex-1 text-gray-600">{spoke.blurb}</p>
                <ArrowRight className="mt-4 text-brand-accent transition group-hover:translate-x-1" size={20} aria-hidden="true" />
              </Link>
            )
          })}
        </div>
      </section>

      {/* ===== SIGNS: heading and shortcuts on the left, the signs as a divided list on the right ===== */}
      <section className="bg-brand-light/40 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <h2 className="accent-heading text-3xl font-bold md:text-4xl">Signs You Need Brake Repair</h2>
            {/* Shortcut to the two pages people with these symptoms usually need */}
            <p className="mt-6 text-lg text-gray-700">
              Hearing a squeal or grind? See our{" "}
              <Link href="/services/brakes/brake-pad-replacement" className="font-bold text-brand-accent underline hover:text-brand-tint">Brake Pad Replacement</Link>{" "}
              page. ABS light on? See{" "}
              <Link href="/services/brakes/abs-brake-repair" className="font-bold text-brand-accent underline hover:text-brand-tint">ABS Brake Repair</Link>.
            </p>
          </div>

          <ul className="divide-y divide-brand-accent/40 border-y border-brand-accent/40 lg:col-span-3">
            {signs.map((sign, i) => (
              <li key={sign} className="flex items-baseline gap-5 py-4">
                <span className="w-6 shrink-0 text-sm font-bold text-brand-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg text-brand-dark">{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== BRAKE INSPECTION: explanation beside a checklist card ===== */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="accent-heading text-3xl font-bold md:text-4xl">Brake Inspection</h2>
            <p className="mt-6 text-lg text-gray-700">
              Every brake repair starts with a brake inspection, so you only pay for the parts that actually need
              replacing. We check:
            </p>
            <p className="mt-4 text-lg text-gray-700">
              We show you what we find and explain what&apos;s urgent and what can wait. You approve the work and the
              price before we start.
            </p>
          </div>

          <div className="rounded-2xl border-l-8 border-brand-accent bg-brand-dark p-8 text-white shadow-xl">
            <p className="text-xl font-bold">What we check</p>
            <div className="mt-3 h-1 w-12 rounded bg-brand-accent" />
            <ul className="mt-6 space-y-4">
              {inspectionChecks.map((check) => (
                <li key={check} className="flex items-start gap-3 text-lg">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-support text-white">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BRAKE SERVICE & MAINTENANCE: same layout as the signs section, text left and tips as a divided list ===== */}
      <section className="bg-brand-support/15 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <h2 className="accent-heading text-3xl font-bold md:text-4xl">Brake Service and Brake Maintenance</h2>
            <p className="mt-6 text-lg text-gray-700">
              Regular brake maintenance keeps small problems from turning into expensive repairs. Edmonton winters are
              hard on brakes: road salt and moisture rust rotors, brake lines, and caliper slides, and stop-and-go city
              driving wears pads faster.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-brand-dark">Brake Maintenance Tips</h3>
            <div className="mt-3 h-1 w-12 rounded bg-brand-support" />
            <ol className="mt-4 divide-y divide-brand-support/50 border-y border-brand-support/50">
              <li className="flex items-baseline gap-5 py-4">
                <span className="w-6 shrink-0 text-sm font-bold text-brand-support">01</span>
                <span className="text-lg text-brand-dark">
                  Have a brake inspection at least once a year, or at your{" "}
                  <Link href="/services/maintenance/tire-change" className="font-bold text-brand-accent underline hover:text-brand-tint">seasonal tire change</Link>
                </span>
              </li>
              <li className="flex items-baseline gap-5 py-4">
                <span className="w-6 shrink-0 text-sm font-bold text-brand-support">02</span>
                <span className="text-lg text-brand-dark">Replace brake pads before they wear down to the metal, to save your rotors</span>
              </li>
              <li className="flex items-baseline gap-5 py-4">
                <span className="w-6 shrink-0 text-sm font-bold text-brand-support">03</span>
                <span className="text-lg text-brand-dark">
                  Change the brake fluid on schedule. See our{" "}
                  <Link href="/services/brakes/brake-fluid-flush" className="font-bold text-brand-accent underline hover:text-brand-tint">Brake Fluid Flush</Link>{" "}
                  page
                </span>
              </li>
              <li className="flex items-baseline gap-5 py-4">
                <span className="w-6 shrink-0 text-sm font-bold text-brand-support">04</span>
                <span className="text-lg text-brand-dark">Get any new noise, vibration, or warning light checked early</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===== WHY US + REVIEW: shared shop photo behind the section, customer review on the right ===== */}
      <WhyChooseUs
        heading="Why Choose Our Brake Repair Shop"
        alt="Vehicle on a lift for brake service at Leung's Auto Service, an independent brake repair shop in West Edmonton"
        facts={shopFacts}
        aside={
          <>
            <h2 className="text-2xl font-bold md:text-3xl">Brake Repair Reviews from Our Customers</h2>
            <p className="mt-4 text-lg text-gray-700">
              Here&apos;s what customers have said about their brake repair at Leung&apos;s Auto Service.
            </p>
            <Reviews reviews={reviewsBy("Ace")} />
          </>
        }
      >
        <p>
          Leung&apos;s Auto Service has served Edmonton drivers since 2002. We&apos;re an independent, AMVIC certified
          brake repair shop at {business.street} in West Edmonton. We show you the worn parts and only recommend the
          brake service your vehicle needs.
        </p>
      </WhyChooseUs>

      {/* ===== FAQ: click a question to open its answer (answers stay in the page for Google) ===== */}
      <section className="bg-brand-light/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Brake Repair FAQ</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border-l-4 border-brand-accent bg-white shadow-sm">
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
        heading="Book Brake Service in West Edmonton"
        text="Tell us what your brakes are doing and we'll book a brake inspection to find the cause."
        label="Book a Brake Inspection"
      >
        <Link href="/services" className="underline hover:text-white">See all automotive services</Link>
      </BookingCta>

      <OtherServices current="/services/brakes" />

    </main>
  )
}
