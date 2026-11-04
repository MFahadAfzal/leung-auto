// app/services/maintenance/oil-change-services/page.tsx
import Image from "next/image"
import Link from "next/link"
import LastUpdated from "@/components/LastUpdated"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"

export const metadata = {
  title: "Quick Oil Change Services Edmonton | Leung's Auto Service",
  description:
    "Quick oil change services in West Edmonton with synthetic or conventional oil. Learn how often to get an oil change, and book your oil change today.",
  alternates: {
    canonical: "/services/maintenance/oil-change-services",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "How often should you get an oil change?",
    answer:
      "About every 5,000 km with conventional oil, or every 8,000 to 16,000 km with full synthetic. How often to get an oil change depends on your vehicle and the oil it uses. Many newer cars have an oil life monitor that tells you when it's due. Short trips and cold Edmonton winters count as severe driving and can mean more frequent changes. Check your owner's manual, or ask us what your vehicle needs.",
  },
  {
    question: "Synthetic vs. conventional oil: which is better?",
    answer:
      "Synthetic oil protects better in cold weather and lasts longer, while conventional oil costs less. Conventional oil is refined from crude oil. Synthetic oil is engineered to flow better in the cold, resist breaking down under heat, and last longer between changes. In an Edmonton winter, that faster flow on a cold start means better protection for your engine. Many newer engines require synthetic oil. We use the oil your vehicle's manufacturer calls for, and explain your options if you have a choice.",
  },
  {
    question: "How much does an oil change cost?",
    answer:
      "The price depends on your vehicle, how much oil it takes, and whether it needs conventional or synthetic oil. Call us for a quote on your vehicle.",
  },
  {
    question: "Is the cheapest oil change the best deal?",
    answer:
      "Not always. A low price can mean cheap filters, the wrong oil for your engine, or a long list of upsells once your car is on the hoist. If you're shopping for the cheapest oil change, compare what's included. We use oil and filters that meet your vehicle's specification and quote the price up front.",
  },
]

export default function OilChangeServices() {
  return (
    <main className="flex-1">
      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Oil Change Services in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Fresh oil protects your engine's moving parts from wear. Leung's Auto Service
          offers quick oil change services for domestic and import vehicles at our shop in West Edmonton, with
          synthetic or conventional oil to match your engine.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Quick Oil Change
        </Link>
        <LastUpdated date="2026-11-03" />
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
          <p className="mt-4 text-lg">
            Due for a{" "}
            <Link href="/services/maintenance/tire-change" className="text-[#2D3047] underline">seasonal tire change</Link> too? Book both and we&apos;ll do them in
            one visit.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <Faq title="Oil Change FAQ" faqs={faqs} gray />

      <BookingCta
        heading="Book a Quick Oil Change in West Edmonton"
        text="Book ahead and we'll have you in and out quickly, with the price up front."
        label="Get an Oil Change Quote"
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/maintenance/oil-change-services"
        also={[
          { title: "Antifreeze Coolant Flush", href: "/services/flushes/antifreeze-coolant-flush" },
          { title: "Transmission Service", href: "/services/flushes/transmission-service" },
        ]}
      />

    </main>
  )
}
