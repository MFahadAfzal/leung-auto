// app/services/flushes/coolant-flush/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Coolant Flush Edmonton | Leung's Auto Service",
  description:
    "Coolant flush and radiator flush in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function CoolantFlush() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Coolant Flush in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Coolant keeps your engine from overheating in summer and freezing in an Edmonton winter. Over time it
          breaks down and stops protecting the cooling system. Leung's Auto Service flushes and replaces coolant on
          domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Coolant Flush
        </Link>
      </section>

      {/* ===== SIGNS YOU NEED A FLUSH ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need a Coolant Flush</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The temperature gauge runs higher than normal</li>
            <li>Coolant that looks rusty, cloudy, or has bits floating in it</li>
            <li>A sweet smell from the engine bay</li>
            <li>The heater doesn't blow as hot as it used to</li>
            <li>It has been several years since the coolant was last changed</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What a Coolant Flush Involves</h2>
          <p className="mt-4 text-lg">
            We drain the old coolant, flush the system, and refill it with coolant that meets your vehicle's
            specification. We also check the hoses, radiator, and cap for leaks or wear. You approve the work and the
            price before we start.
          </p>
        </div>
      </section>

      {/* ===== HOW OFTEN ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How Often Should Coolant Be Changed?</h2>
          <p className="mt-4 text-lg">
            The interval varies widely by vehicle and coolant type. Check your owner's manual, or ask us what your
            vehicle needs. Fall is a good time to check it, before the cold sets in.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Coolant Flush Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle, the size of its cooling system, and the type of coolant it uses.
            Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Flush Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/flushes" className="text-[#2D3047] underline">System Flushes</Link>
          <Link href="/services/flushes/transmission-flush" className="text-[#2D3047] underline">Transmission Fluid Flush</Link>
          <Link href="/services/flushes/power-steering-flush" className="text-[#2D3047] underline">Power Steering Flush</Link>
        </div>
      </section>

    </main>
  )
}
