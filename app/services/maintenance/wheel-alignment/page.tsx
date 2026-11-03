// app/services/maintenance/wheel-alignment/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Wheel Alignment Edmonton | Tire Alignment | Leung's Auto",
  description:
    "Wheel alignment and tire alignment in West Edmonton. Fix pulling, an off-centre steering wheel, and uneven tire wear. Book your wheel alignment today.",
}

// Questions shown in the FAQ section, also sent to Google as FAQ structured data
const faqs = [
  {
    question: "Is a tire alignment the same as a wheel alignment?",
    answer:
      "Yes. A tire alignment and a wheel alignment are the same service. Both adjust the angles of your wheels so the tires sit straight and meet the road evenly.",
  },
  {
    question: "How often do you need a wheel alignment?",
    answer:
      "Many shops suggest checking your alignment about once a year, and any time you hit a big pothole or curb, get new tires, or have steering or suspension parts replaced. If the car pulls or the steering wheel is off-centre, have it checked sooner.",
  },
  {
    question: "Do potholes affect wheel alignment?",
    answer:
      "Yes. A hard hit from a pothole or curb can knock your wheels out of alignment or damage suspension parts. Edmonton's spring pothole season is a common time to need a wheel alignment.",
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

export default function WheelAlignment() {
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
        <h1 className="text-4xl font-bold md:text-5xl">Wheel Alignment in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Potholes and curbs can knock your wheels out of alignment, which wears your tires faster and makes the car
          pull. Leung's Auto Service does wheel alignments, also called tire alignments, on domestic and import
          vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Wheel Alignment
        </Link>
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/wheel-alignment.jpg"
            alt="Mechanic doing a wheel alignment and tire alignment at Leung's Auto Service in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== SIGNS YOU NEED AN ALIGNMENT ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need a Wheel Alignment</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The car pulls or drifts to one side</li>
            <li>The steering wheel is off-centre when driving straight</li>
            <li>Uneven or fast tire wear</li>
            <li>The steering feels loose or wanders</li>
            <li>You recently hit a big pothole or curb</li>
          </ul>
        </div>
      </section>

      {/* ===== WHEEL VS TIRE ALIGNMENT ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Wheel Alignment vs. Tire Alignment</h2>
          <p className="mt-4 text-lg">
            A wheel alignment and a tire alignment are the same thing. The adjustment is made to the steering and
            suspension that hold your wheels, not to the tires themselves, but the goal is to keep your tires
            pointing straight and wearing evenly. Getting a tire alignment when you need one helps your tires last
            longer and keeps the car driving straight.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What a Wheel Alignment Involves</h2>
          <p className="mt-4 text-lg">
            We check the angles of your wheels and adjust them back to your vehicle's specification. If we find worn
            steering or suspension parts that would stop the alignment from holding, we explain what we find and you
            approve any extra work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== WHEN TO GET ONE ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">When to Get a Wheel Alignment</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>About once a year as a check-up</li>
            <li>After hitting a big pothole or curb, especially in Edmonton's spring pothole season</li>
            <li>When you get new tires</li>
            <li>
              After{" "}
              <Link href="/services/suspension/steering-repair" className="text-[#2D3047] underline">steering repair</Link>{" "}
              or{" "}
              <Link href="/services/suspension/car-suspension-replacement" className="text-[#2D3047] underline">suspension replacement</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Wheel Alignment Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and whether it needs a front-end or four-wheel alignment. An
            alignment costs far less than replacing tires that have worn out early.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Get a Wheel Alignment Quote
          </Link>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Wheel Alignment FAQ</h2>
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
          <Link href="/services/maintenance" className="text-[#2D3047] underline">Car Maintenance</Link>
          <Link href="/services/maintenance/tire-change" className="text-[#2D3047] underline">Tire Change and Tire Rotation</Link>
          <Link href="/services/suspension/steering-repair" className="text-[#2D3047] underline">Steering Repair</Link>
          <Link href="/services/suspension/car-suspension-replacement" className="text-[#2D3047] underline">Suspension Repair</Link>
        </div>
      </section>

    </main>
  )
}
