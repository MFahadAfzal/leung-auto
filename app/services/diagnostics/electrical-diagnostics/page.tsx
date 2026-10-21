// app/services/diagnostics/electrical-diagnostics/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Electrical Diagnostics Edmonton | Leung's Auto Service",
  description:
    "Car electrical diagnostics in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function ElectricalDiagnostics() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Electrical Diagnostics in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Modern vehicles rely on electrical systems for almost everything, from starting the engine to running the
          lights. Leung's Auto Service tracks down electrical problems on domestic and import vehicles at our shop
          in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Electrical Diagnostics
        </Link>
      </section>

      {/* ===== SIGNS OF AN ELECTRICAL PROBLEM ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs of an Electrical Problem</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The car is slow to start or won't start</li>
            <li>The battery keeps going dead</li>
            <li>Dim or flickering headlights and dash lights</li>
            <li>The battery or charging warning light is on</li>
            <li>Power windows, locks, or other accessories stop working</li>
            <li>Fuses that keep blowing</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Electrical Diagnostics Involves</h2>
          <p className="mt-4 text-lg">
            We test the battery, alternator, and starter, scan for fault codes, and trace the wiring and circuits
            involved to find the cause. We explain what we find, and you approve any repairs and the price before we
            start.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Electrical Diagnostics Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and how long it takes to find the cause. A weak battery is quick to
            find, while an intermittent wiring fault can take longer. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Diagnostic Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/diagnostics" className="text-[#2D3047] underline">Car Diagnostics</Link>
          <Link href="/services/diagnostics/check-engine-light" className="text-[#2D3047] underline">Check Engine Light Diagnostics</Link>
          <Link href="/services/diagnostics/transmission-diagnostics" className="text-[#2D3047] underline">Transmission Diagnostics</Link>
        </div>
      </section>

    </main>
  )
}
