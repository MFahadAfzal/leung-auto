// app/services/diagnostics/check-engine-light/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Check Engine Light Diagnostics Edmonton | Leung's Auto Service",
  description:
    "Check engine light diagnostics in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function CheckEngineLight() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Check Engine Light Diagnostics in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          The check engine light can mean anything from a loose gas cap to a serious engine problem. Leung's Auto
          Service finds the cause on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Check Engine Light Diagnostics
        </Link>
      </section>

      {/* ===== COMMON CAUSES ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Common Causes of a Check Engine Light</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>A loose or damaged gas cap</li>
            <li>A faulty oxygen sensor</li>
            <li>Worn spark plugs or ignition coils</li>
            <li>A failing catalytic converter</li>
            <li>A mass airflow sensor problem</li>
            <li>Vacuum or exhaust leaks</li>
          </ul>
          <p className="mt-4 text-lg">
            If the check engine light is flashing, the engine may be misfiring badly. Reduce your speed and have it
            checked as soon as possible to avoid damaging the engine or catalytic converter.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Check Engine Light Diagnostics Involves</h2>
          <p className="mt-4 text-lg">
            We scan the vehicle's computer for fault codes, then test the parts and systems those codes point to.
            A code alone doesn't always tell you which part has failed, so we confirm the cause before recommending
            a repair. You approve the work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Check Engine Light Diagnostics Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and how much testing it takes to find the cause. Contact us for a
            quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Diagnostic Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/diagnostics" className="text-[#2D3047] underline">Car Diagnostics</Link>
          <Link href="/services/diagnostics/transmission-diagnostics" className="text-[#2D3047] underline">Transmission Diagnostics</Link>
          <Link href="/services/diagnostics/electrical-diagnostics" className="text-[#2D3047] underline">Electrical Diagnostics</Link>
        </div>
      </section>

    </main>
  )
}
