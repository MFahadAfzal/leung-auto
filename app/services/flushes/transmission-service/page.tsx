// app/services/flushes/transmission-service/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Transmission Service Edmonton | Fluid Change & Flush",
  description:
    "Transmission service in West Edmonton: transmission fluid change service and automatic transmission fluid flush. Learn how often to change transmission fluid.",
}

// Questions shown in the FAQ section, also sent to Google as FAQ structured data
const faqs = [
  {
    question: "Is a transmission flush necessary?",
    answer:
      "Not always. Many vehicles only need a transmission fluid change service, which drains and replaces part of the old fluid. A transmission flush replaces almost all of it and suits some vehicles better. We check your vehicle's service schedule and the condition of the fluid, then recommend the one that fits.",
  },
  {
    question: "How often should you change transmission fluid?",
    answer:
      "It depends on your vehicle. Many automatic transmissions call for new fluid somewhere between about 50,000 and 100,000 km, and some manufacturers list longer intervals. Towing, heavy loads, and short trips in cold weather all count as severe driving and shorten the interval.",
  },
  {
    question: "What are the signs you need a transmission fluid change?",
    answer:
      "Dark or burnt-smelling fluid, rough or delayed shifts, slipping, hesitation when you put the car in gear, or a transmission warning light. If you notice any of these, book a transmission service soon.",
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

export default function TransmissionService() {
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
        <h1 className="text-4xl font-bold md:text-5xl">Transmission Service in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Transmission fluid cools and protects the parts inside your transmission, and it wears out with heat and
          time. Leung's Auto Service does transmission service, including transmission fluid change service and
          transmission flushes, on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Transmission Service
        </Link>
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/transmission-service.jpg"
            alt="Mechanic doing a transmission service and transmission fluid change in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== SIGNS ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need a Transmission Fluid Change</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Transmission fluid that looks dark or smells burnt</li>
            <li>Rough, delayed, or slipping shifts</li>
            <li>The car hesitates before moving in drive or reverse</li>
            <li>A transmission warning light on the dashboard</li>
            <li>You tow, haul heavy loads, or do a lot of stop-and-go driving</li>
            <li>It has been a long time since your last transmission service</li>
          </ul>
        </div>
      </section>

      {/* ===== FLUID CHANGE VS FLUSH ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Transmission Fluid Change Service vs. Transmission Flush</h2>
          <p className="mt-4 text-lg">
            A transmission fluid change service drains the old fluid from the pan and refills it with fresh fluid.
            It replaces part of the fluid each time, so regular changes keep it in good shape.
          </p>
          <p className="mt-4 text-lg">
            A transmission service flush, also called an automatic transmission fluid flush, pushes out nearly all
            of the old fluid and replaces it with new fluid. It's a more complete change in one visit.
          </p>
        </div>
      </section>

      {/* ===== IS A FLUSH NECESSARY ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Is a Transmission Flush Necessary?</h2>
          <p className="mt-4 text-lg">
            Not always. Some vehicles only need a regular transmission fluid change, and some manufacturers
            recommend against a flush. We check your vehicle's service schedule and the condition of the fluid, then
            recommend a fluid change or a transmission flush based on what your vehicle needs, not what costs more.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Our Transmission Service Includes</h2>
          <p className="mt-4 text-lg">
            We check the condition of the old fluid, replace it with fluid that meets your vehicle's specification,
            and check for leaks. If the fluid points to a deeper problem, we explain what we find before going any
            further. You approve the work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== HOW OFTEN ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How Often to Change Transmission Fluid</h2>
          <p className="mt-4 text-lg">
            How often to change transmission fluid depends on your vehicle and transmission type. Many automatic
            transmissions call for new fluid somewhere between about 50,000 and 100,000 km, and some manufacturers
            list longer intervals. Towing, heavy loads, and short trips in Edmonton's cold winters count as severe
            driving and shorten the interval. Check your owner's manual, or ask us what your vehicle needs.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Transmission Service Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle, how much fluid it takes, the type of fluid it needs, and whether it
            needs a fluid change or a flush. A transmission service costs far less than a transmission rebuild.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Get a Transmission Fluid Change Quote
          </Link>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Transmission Service FAQ</h2>
          {faqs.map((faq) => (
            <div key={faq.question} className="mt-8">
              <h3 className="text-2xl font-bold">{faq.question}</h3>
              <p className="mt-2 text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/flushes" className="text-[#2D3047] underline">System Flushes</Link>
          <Link href="/services/flushes/antifreeze-coolant-flush" className="text-[#2D3047] underline">Antifreeze Coolant Flush</Link>
          <Link href="/services/diagnostics#transmission-diagnostics" className="text-[#2D3047] underline">Transmission Diagnostic</Link>
          <Link href="/services/maintenance/oil-change-services" className="text-[#2D3047] underline">Oil Change Services</Link>
        </div>
      </section>

    </main>
  )
}
