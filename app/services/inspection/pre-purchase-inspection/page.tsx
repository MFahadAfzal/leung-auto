// app/services/inspection/pre-purchase-inspection/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Pre-Purchase Inspection Edmonton | Used Car Inspection",
  description:
    "Pre-purchase used car inspection in West Edmonton. See what a pre-purchase inspection checks, why it's worth it, and how Edmonton winters affect used cars.",
}

// Questions shown in the FAQ section, also sent to Google as FAQ structured data
const faqs = [
  {
    question: "Is a pre-purchase inspection worth it?",
    answer:
      "Yes, for most used cars. A pre-purchase inspection costs far less than the repairs it can uncover, like a failing transmission, rusted brake lines, or worn suspension. It also gives you a list of problems you can use to negotiate a lower price or walk away.",
  },
  {
    question: "What does a pre-purchase inspection check?",
    answer:
      "We check the engine, transmission, brakes, steering, suspension, tires, fluids, battery, and the underbody for rust, leaks, and signs of past accident damage. We also scan the computer for stored fault codes.",
  },
  {
    question: "Can I get a pre-purchase inspection on a car from a private seller?",
    answer:
      "Yes. Ask the seller to bring the car to our shop, or arrange to bring it yourself. A seller who refuses to allow an inspection is a warning sign.",
  },
  {
    question: "When should I get a pre-purchase inspection?",
    answer:
      "Before you pay a deposit or sign anything. Once the sale is done, any problems the inspection would have found become yours to fix.",
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

export default function PrePurchaseInspection() {
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
        <h1 className="text-4xl font-bold md:text-5xl">Pre-Purchase Inspection in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Buying a used car? A pre-purchase used car inspection tells you what condition it's really in before you
          hand over your money. Leung's Auto Service does pre-purchase inspections on domestic and import vehicles
          at our shop in West Edmonton, whether you're buying from a dealer or a private seller.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Pre-Purchase Inspection
        </Link>
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/pre-purchase-inspection.jpg"
            alt="Mechanic doing a pre-purchase used car inspection at Leung's Auto Service in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== WORTH IT ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Is a Pre-Purchase Inspection Worth It?</h2>
          <p className="mt-4 text-lg">
            For most used cars, yes. A pre-purchase inspection costs far less than the repairs it can uncover. It
            helps you:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Find problems the seller may not know about or may not mention</li>
            <li>Avoid buying a car that needs expensive repairs soon</li>
            <li>Use what we find to negotiate a better price, or walk away</li>
            <li>Know what maintenance the car will need after you buy it</li>
            <li>Buy with confidence from a dealer or a private seller</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT IT CHECKS ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Does a Pre-Purchase Inspection Check?</h2>
          <p className="mt-4 text-lg">Our pre-purchase used car inspection covers:</p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Engine and transmission, including leaks and how the car runs and shifts</li>
            <li>Brakes, including pads, rotors, lines, and brake fluid</li>
            <li>Steering and suspension</li>
            <li>Tires, including tread depth and uneven wear</li>
            <li>Fluids, battery, and charging system</li>
            <li>Underbody and frame for rust and signs of past accident damage</li>
            <li>A computer scan for stored fault codes</li>
          </ul>
          <p className="mt-4 text-lg">
            Afterward, we walk you through what we found so you can decide whether the car is worth buying.
          </p>
        </div>
      </section>

      {/* ===== EDMONTON CONDITIONS ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Edmonton Conditions and Used Vehicle Risk</h2>
          <p className="mt-4 text-lg">
            Edmonton conditions are hard on vehicles, which adds to the risk of buying a used vehicle here. A
            pre-purchase inspection in Edmonton looks for the damage our climate and roads cause:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Road salt causes rust on the frame, brake lines, and underbody</li>
            <li>Cold winters wear out batteries and strain starters and engines</li>
            <li>Potholes damage suspension parts and throw off wheel alignment</li>
            <li>Gravel roads chip paint and crack windshields</li>
          </ul>
          <p className="mt-4 text-lg">
            A car that looks clean on top can hide rust and worn parts underneath. Lifting it up is the only way to
            know.
          </p>
        </div>
      </section>

      {/* ===== HOW TO BOOK ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How to Book a Pre-Purchase Inspection in Edmonton</h2>
          <p className="mt-4 text-lg">
            Arrange with the seller to bring the car to our shop at 12025 149 St NW, then contact us to book a time.
            Do the inspection before you pay or sign anything. If the car is registered outside Alberta, it will
            also need an{" "}
            <Link href="/services/inspection/out-of-province-inspection" className="text-[#2D3047] underline">out of province inspection</Link>{" "}
            before you can register it.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Book Your Used Car Inspection
          </Link>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Pre-Purchase Inspection Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on the vehicle. It's usually a small cost compared to the repairs it can help you
            avoid. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Pre-Purchase Inspection FAQ</h2>
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
          <Link href="/services/inspection" className="text-[#2D3047] underline">Car Inspections</Link>
          <Link href="/services/inspection/out-of-province-inspection" className="text-[#2D3047] underline">Out of Province Inspection</Link>
          <Link href="/services/diagnostics" className="text-[#2D3047] underline">Car Diagnostics</Link>
          <Link href="/services/brakes" className="text-[#2D3047] underline">Brake Inspection</Link>
          <Link href="/services/suspension/car-suspension-replacement" className="text-[#2D3047] underline">Suspension Inspection</Link>
        </div>
      </section>

    </main>
  )
}
