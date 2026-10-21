// app/services/flushes/power-steering-flush/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Power Steering Flush Edmonton | Leung's Auto Service",
  description:
    "Power steering fluid flush in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function PowerSteeringFlush() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Power Steering Flush in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Old power steering fluid can make steering harder and wear out the pump and rack. Leung's Auto Service
          flushes power steering fluid on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Power Steering Flush
        </Link>
      </section>

      {/* ===== SIGNS YOU NEED A FLUSH ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need a Power Steering Flush</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The steering feels heavy or stiff, especially in the cold</li>
            <li>A whining or groaning noise when you turn the wheel</li>
            <li>Power steering fluid that looks dark or dirty</li>
            <li>The steering feels jerky or uneven</li>
          </ul>
          <p className="mt-4 text-lg">
            Some newer vehicles use electric power steering and don't have power steering fluid. Ask us if you're
            not sure which type your vehicle has.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What a Power Steering Flush Involves</h2>
          <p className="mt-4 text-lg">
            We remove the old fluid, refill the system with fluid that meets your vehicle's specification, and check
            the hoses, pump, and rack for leaks. You approve the work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Power Steering Flush Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and the type of fluid it uses. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/flushes" className="text-[#2D3047] underline">System Flushes</Link>
          <Link href="/services/flushes/coolant-flush" className="text-[#2D3047] underline">Coolant Flush</Link>
          <Link href="/services/suspension/steering-front-end-repair" className="text-[#2D3047] underline">Steering and Front End Repair</Link>
        </div>
      </section>

    </main>
  )
}
