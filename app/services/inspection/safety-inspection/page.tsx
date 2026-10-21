// app/services/inspection/safety-inspection/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Safety Inspection Edmonton | Leung's Auto Service",
  description:
    "Vehicle safety inspections in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function SafetyInspection() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Safety Inspection in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          A safety inspection checks the parts of your vehicle that keep you safe on the road. Leung's Auto Service
          inspects domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Safety Inspection
        </Link>
      </section>

      {/* ===== WHEN TO GET ONE ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">When to Get a Safety Inspection</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Before a long road trip</li>
            <li>Before winter driving season</li>
            <li>After an accident or a hard hit to a pothole or curb</li>
            <li>When the car has been sitting unused for a long time</li>
            <li>When you've noticed a new noise, vibration, or warning light</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What a Safety Inspection Involves</h2>
          <p className="mt-4 text-lg">
            We check the brakes, tires, suspension, steering, lights, wipers, exhaust, and seatbelts, and look for
            leaks and other problems. We explain what we find, and you approve any repairs and the price before we
            start.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Safety Inspection Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/inspection" className="text-[#2D3047] underline">Car Inspections</Link>
          <Link href="/services/inspection/pre-purchase-inspection" className="text-[#2D3047] underline">Pre-Purchase Inspection</Link>
          <Link href="/services/brakes" className="text-[#2D3047] underline">Brake Repair</Link>
        </div>
      </section>

    </main>
  )
}
