// app/services/brakes/page.tsx
import Image from "next/image"
import Link from "next/link"
import OtherServices from "@/components/OtherServices"
import Reviews from "@/components/Reviews"
import { reviewsBy } from "@/lib/reviews"
import { business } from "@/lib/business"
import { services } from "@/lib/services"

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

export default function BrakeRepair() {
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
        <h1 className="text-4xl font-bold md:text-5xl">Brake Repair in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Leung&apos;s Auto Service is an independent brake repair shop in West Edmonton. We do brake inspections and
          full brake service on domestic and import vehicles, and tell you what your brakes need before we start.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Brake Repair
        </Link>
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/brake-repair.jpg"
            alt="Mechanic doing a brake inspection and brake repair at an Edmonton brake repair shop"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== SPECIFIC SERVICES: one card per brake repair page ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Choose the Brake Service You Need</h2>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brakes.spokes.map((spoke) => (
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

      {/* ===== SIGNS ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Signs You Need Brake Repair</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Squealing, squeaking, or grinding when you brake</li>
            <li>A soft or spongy brake pedal, or one that sinks toward the floor</li>
            <li>The car pulls to one side when braking</li>
            <li>Shaking in the steering wheel or brake pedal when you stop</li>
            <li>A brake or ABS warning light on the dashboard</li>
            <li>A burning smell or fluid leaking near a wheel</li>
          </ul>
          <p className="mt-4 text-lg">
            Hearing a squeal or grind? See our{" "}
            <Link href="/services/brakes/brake-pad-replacement" className="text-[#2D3047] underline">Brake Pad Replacement</Link>{" "}
            page. ABS light on? See{" "}
            <Link href="/services/brakes/abs-brake-repair" className="text-[#2D3047] underline">ABS Brake Repair</Link>.
          </p>
        </div>
      </section>

      {/* ===== BRAKE INSPECTION ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Brake Inspection</h2>
          <p className="mt-4 text-lg">
            Every brake repair starts with a brake inspection, so you only pay for the parts that actually need
            replacing. We check:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Brake pad thickness and wear on every wheel</li>
            <li>Rotors for grooves, warping, and rust</li>
            <li>Calipers and caliper slides for sticking or leaks</li>
            <li>Brake lines and hoses for rust, cracks, and leaks</li>
            <li>Brake fluid level and condition</li>
            <li>The parking brake and any dashboard warning lights</li>
          </ul>
          <p className="mt-4 text-lg">
            We show you what we find and explain what&apos;s urgent and what can wait. You approve the work and the
            price before we start.
          </p>
        </div>
      </section>

      {/* ===== BRAKE SERVICE & MAINTENANCE ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Brake Service and Brake Maintenance</h2>
          <p className="mt-4 text-lg">
            Regular brake maintenance keeps small problems from turning into expensive repairs. Edmonton winters are
            hard on brakes: road salt and moisture rust rotors, brake lines, and caliper slides, and stop-and-go city
            driving wears pads faster.
          </p>

          <h3 className="mt-8 text-2xl font-bold">Brake Maintenance Tips</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>
              Have a brake inspection at least once a year, or at your{" "}
              <Link href="/services/maintenance/tire-change" className="text-[#2D3047] underline">seasonal tire change</Link>
            </li>
            <li>Replace brake pads before they wear down to the metal, to save your rotors</li>
            <li>
              Change the brake fluid on schedule. See our{" "}
              <Link href="/services/brakes/brake-fluid-flush" className="text-[#2D3047] underline">Brake Fluid Flush</Link>{" "}
              page
            </li>
            <li>Get any new noise, vibration, or warning light checked early</li>
          </ul>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Why Choose Our Brake Repair Shop</h2>
          <p className="mt-4 text-lg">
            Leung&apos;s Auto Service has served Edmonton drivers since 2002. We&apos;re an independent, AMVIC
            certified brake repair shop at {business.street} in West Edmonton. We show you the worn parts and only
            recommend the brake service your vehicle needs.
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS: real Google reviews, laid out like the home page ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Brake Repair Reviews from Our Customers</h2>
        <p className="mt-4 text-lg md:text-xl">
          Here's what customers have said about their brake repair at Leung's Auto Service.
        </p>

        <Reviews reviews={reviewsBy("Ace")} />
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Brake Repair FAQ</h2>
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
        <h2 className="text-3xl font-bold md:text-4xl">Book Brake Service in West Edmonton</h2>
        <p className="mt-4 text-lg md:text-xl">
          Tell us what your brakes are doing and we&apos;ll book a brake inspection to find the cause.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Book a Brake Inspection
          </Link>
          <a href={business.phoneHref} className="rounded border border-[#2D3047] px-6 py-3 font-bold text-[#2D3047] hover:bg-gray-100">
            Call {business.phone}
          </a>
        </div>
        <p className="mt-6">
          <Link href="/services" className="text-[#2D3047] underline">See all automotive services</Link>
        </p>
      </section>

      <OtherServices current="/services/brakes" />

    </main>
  )
}
