// app/services/maintenance/oil-change-services/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Quick Oil Change Services Edmonton | Leung's Auto Service",
  description:
    "Quick oil change services in West Edmonton with synthetic or conventional oil. Learn how often to get an oil change, and book your oil change today.",
}

// Questions shown in the FAQ section, also sent to Google as FAQ structured data
const faqs = [
  {
    question: "How often should you get an oil change?",
    answer:
      "It depends on your vehicle and the oil it uses. Conventional oil is often changed about every 5,000 km, while full synthetic oil can go about 8,000 to 16,000 km. Many newer cars have an oil life monitor that tells you when it's due. Short trips and cold Edmonton winters count as severe driving and can mean more frequent changes.",
  },
  {
    question: "What's the difference between synthetic and conventional oil?",
    answer:
      "Conventional oil is refined from crude oil and costs less. Synthetic oil is engineered to flow better in the cold, resist breaking down under heat, and last longer between changes. Many newer engines require synthetic oil. We use the oil your vehicle's manufacturer calls for.",
  },
  {
    question: "Is the cheapest oil change the best deal?",
    answer:
      "Not always. A low price can mean cheap filters, the wrong oil for your engine, or a long list of upsells once your car is on the hoist. We use oil and filters that meet your vehicle's specification, tell you the price up front, and only recommend work your car actually needs.",
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

export default function OilChangeServices() {
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
        <h1 className="text-4xl font-bold md:text-5xl">Oil Change Services in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Fresh oil keeps your engine's moving parts clean, cool, and protected from wear. Leung's Auto Service
          offers quick oil change services for domestic and import vehicles at our shop in West Edmonton, with
          synthetic or conventional oil to match your engine.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Quick Oil Change
        </Link>
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/oil-change-services.jpg"
            alt="Mechanic doing a quick oil change at Leung's Auto Service, offering oil change services in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== QUICK OIL CHANGE ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Quick Oil Change in West Edmonton</h2>
          <p className="mt-4 text-lg">
            An oil change shouldn't take your whole day. Book ahead and we'll have your car in and out quickly, with
            the same care we give every job. Our oil changing services include:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Draining the old oil and replacing the oil filter</li>
            <li>Refilling with synthetic or conventional oil that meets your vehicle's specification</li>
            <li>A quick check for leaks and anything else that needs attention</li>
            <li>Resetting your oil change reminder, and telling you when your next one is due</li>
          </ul>
        </div>
      </section>

      {/* ===== SIGNS YOU NEED AN OIL CHANGE ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need an Oil Change</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The oil change or maintenance reminder light is on</li>
            <li>The oil on the dipstick looks dark, gritty, or low</li>
            <li>The engine sounds louder or makes a ticking noise</li>
            <li>A burning oil smell inside or around the car</li>
            <li>You've driven past the kilometres on your last oil change sticker</li>
          </ul>
        </div>
      </section>

      {/* ===== HOW OFTEN ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How Often to Get an Oil Change</h2>
          <p className="mt-4 text-lg">
            How often to get an oil change depends on your vehicle and the oil it uses. Conventional oil is often
            changed about every 5,000 km, while full synthetic oil can go about 8,000 to 16,000 km. Many newer cars
            have an oil life monitor that tells you when it's due. Short trips and cold Edmonton winters count as
            severe driving and can mean more frequent changes. Check your owner's manual, or ask us what your vehicle
            needs.
          </p>
        </div>
      </section>

      {/* ===== SYNTHETIC VS CONVENTIONAL ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Synthetic vs. Conventional Oil</h2>
          <p className="mt-4 text-lg">
            Conventional oil is refined from crude oil and costs less. Synthetic oil is engineered to flow better in
            the cold, resist breaking down under heat, and last longer between changes. In an Edmonton winter, that
            faster flow on a cold start means better protection for your engine. Many newer engines require synthetic
            oil. We use the oil your vehicle's manufacturer calls for, and explain your options if you have a choice.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Oil Change Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle, how much oil it takes, and whether it needs conventional or synthetic
            oil. If you're shopping for the cheapest oil change, compare what's included: we use oil and filters that
            meet your vehicle's specification, tell you the price up front, and only recommend work your car actually
            needs.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Get an Oil Change Quote
          </Link>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Oil Change FAQ</h2>
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
          <Link href="/services/maintenance/wheel-alignment" className="text-[#2D3047] underline">Wheel Alignment</Link>
          <Link href="/services/flushes/antifreeze-coolant-flush" className="text-[#2D3047] underline">Antifreeze Coolant Flush</Link>
          <Link href="/services/flushes/transmission-service" className="text-[#2D3047] underline">Transmission Service</Link>
        </div>
      </section>

    </main>
  )
}
