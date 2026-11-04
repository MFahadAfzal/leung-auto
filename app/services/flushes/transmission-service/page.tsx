// app/services/flushes/transmission-service/page.tsx
import Image from "next/image"
import Link from "next/link"
import LastUpdated from "@/components/LastUpdated"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"

export const metadata = {
  title: "Transmission Service Edmonton | Fluid Change & Flush",
  description:
    "Transmission service in West Edmonton: transmission fluid change service and automatic transmission fluid flush. Learn how often to change transmission fluid.",
  alternates: {
    canonical: "/services/flushes/transmission-service",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "Is a transmission flush necessary?",
    answer:
      "Only for some vehicles. Many only need a regular transmission fluid change, and some manufacturers recommend against a flush. We check your vehicle's service schedule and the condition of the fluid, then recommend the fluid change or transmission flush your vehicle actually needs.",
  },
  {
    question: "How often should you change transmission fluid?",
    answer:
      "Every 50,000 to 100,000 km for most automatic transmissions, though some manufacturers list longer intervals. How often to change transmission fluid depends on your vehicle and transmission type. Towing, heavy loads, and short trips in Edmonton's cold winters count as severe driving and shorten the interval. Check your owner's manual, or ask us what your vehicle needs.",
  },
  {
    question: "How much does a transmission service cost?",
    answer:
      "The price depends on your vehicle, how much fluid it takes, the type of fluid it needs, and whether it needs a fluid change or a flush. A transmission service costs far less than a transmission rebuild.",
  },
]

export default function TransmissionService() {
  return (
    <main className="flex-1">
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
        <LastUpdated date="2026-11-03" />
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

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Our Transmission Service Includes</h2>
          <p className="mt-4 text-lg">
            We check the condition of the old fluid, replace it with fluid that meets your vehicle's specification,
            and check for leaks. If the fluid points to a deeper problem, we explain what we find before going any
            further. You approve the work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <Faq title="Transmission Service FAQ" faqs={faqs} />

      <BookingCta
        heading="Book a Transmission Service in West Edmonton"
        text="We'll check your transmission fluid and give you a price before any work starts."
        label="Get a Transmission Fluid Change Quote"
        gray
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/flushes/transmission-service"
        also={[
          { title: "Transmission Diagnostic", href: "/services/diagnostics#transmission-diagnostics" },
          { title: "Oil Change Services", href: "/services/maintenance/oil-change-services" },
        ]}
      />

    </main>
  )
}
