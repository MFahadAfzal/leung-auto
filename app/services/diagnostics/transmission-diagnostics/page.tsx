// app/services/diagnostics/transmission-diagnostics/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Transmission Diagnostics Edmonton | Leung's Auto Service",
  description:
    "Transmission diagnostics in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function TransmissionDiagnostics() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Transmission Diagnostics in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Transmission problems are easier and cheaper to fix when they're caught early. Leung's Auto Service
          diagnoses transmission problems on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Transmission Diagnostics
        </Link>
      </section>

      {/* ===== SIGNS OF A TRANSMISSION PROBLEM ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs of a Transmission Problem</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Slipping out of gear, or the engine revs without the car speeding up</li>
            <li>Harsh, delayed, or rough shifting</li>
            <li>A delay before the car moves when you shift into drive or reverse</li>
            <li>Whining, humming, or clunking noises</li>
            <li>Red fluid leaking under the car</li>
            <li>A burning smell or a transmission warning light</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Transmission Diagnostics Involves</h2>
          <p className="mt-4 text-lg">
            We scan for fault codes, check the transmission fluid level and condition, look for leaks, and test drive
            the vehicle to see how it shifts. We explain what we find, and you approve any repairs and the price
            before we start.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Transmission Diagnostics Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and what the problem turns out to be. Some issues are fixed with a
            fluid service or a sensor, not a full rebuild. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/diagnostics" className="text-[#2D3047] underline">Car Diagnostics</Link>
          <Link href="/services/diagnostics/check-engine-light" className="text-[#2D3047] underline">Check Engine Light Diagnostics</Link>
          <Link href="/services/flushes/transmission-flush" className="text-[#2D3047] underline">Transmission Fluid Flush</Link>
        </div>
      </section>

    </main>
  )
}
