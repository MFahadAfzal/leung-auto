// app/services/inspection/pre-purchase-inspection/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Pre-Purchase Inspection Edmonton | Leung's Auto Service",
  description:
    "Pre-purchase used car inspections in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function PrePurchaseInspection() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Pre-Purchase Inspection in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Buying a used car? A pre-purchase inspection tells you what condition it's really in before you hand over
          your money. Leung's Auto Service inspects domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Pre-Purchase Inspection
        </Link>
      </section>

      {/* ===== WHY GET ONE ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Why Get a Pre-Purchase Inspection?</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Find problems the seller may not know about or may not mention</li>
            <li>Avoid buying a car that needs expensive repairs soon</li>
            <li>Use what we find to negotiate a better price</li>
            <li>Know what maintenance the car will need after you buy it</li>
            <li>Buy with confidence from a dealer or a private seller</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What a Pre-Purchase Inspection Involves</h2>
          <p className="mt-4 text-lg">
            We check the engine, transmission, brakes, suspension, steering, tires, fluids, and for leaks, rust, and
            signs of past damage. We also scan for stored fault codes. Afterward, we walk you through what we found
            so you can decide whether the car is worth buying.
          </p>
        </div>
      </section>

      {/* ===== HOW TO BOOK ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How to Book an Inspection</h2>
          <p className="mt-4 text-lg">
            Arrange with the seller to bring the car to our shop, then contact us to book a time. Do the inspection
            before you pay or sign anything.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Pre-Purchase Inspection Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on the vehicle. It's usually a small cost compared to the repairs it can help you
            avoid. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/inspection" className="text-[#2D3047] underline">Car Inspections</Link>
          <Link href="/services/inspection/safety-inspection" className="text-[#2D3047] underline">Safety Inspection</Link>
          <Link href="/services/diagnostics" className="text-[#2D3047] underline">Car Diagnostics</Link>
        </div>
      </section>

    </main>
  )
}
