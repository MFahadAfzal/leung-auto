// app/services/suspension/steering-front-end-repair/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Steering and Front End Repair Edmonton | Leung's Auto Service",
  description:
    "Steering and front end repair in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function SteeringFrontEndRepair() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Steering and Front End Repair in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Your steering and front end parts keep the car tracking straight and responding when you turn the wheel.
          Leung's Auto Service repairs steering and front end problems on domestic and import vehicles at our shop
          in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Steering and Front End Repair
        </Link>
      </section>

      {/* ===== SIGNS OF A STEERING PROBLEM ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs of a Steering or Front End Problem</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Play or looseness in the steering wheel</li>
            <li>The steering feels heavy or hard to turn</li>
            <li>The car wanders or pulls to one side</li>
            <li>Clunking, popping, or whining noises when you turn</li>
            <li>The steering wheel is off-centre when driving straight</li>
            <li>Power steering fluid leaking under the car</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Steering and Front End Repair Involves</h2>
          <p className="mt-4 text-lg">
            We inspect the tie rod ends, steering rack, power steering system, and other front end parts, and
            explain what we find. If parts need replacing, you approve the work and the price before we start. Most
            front end repairs are followed by a wheel alignment.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Steering and Front End Repair Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on what's causing the problem. Replacing a tie rod end costs much less than replacing
            a steering rack. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/suspension" className="text-[#2D3047] underline">Suspension Repair</Link>
          <Link href="/services/suspension/ball-joint-control-arm" className="text-[#2D3047] underline">Ball Joint and Control Arm Repair</Link>
          <Link href="/services/maintenance/wheel-alignment" className="text-[#2D3047] underline">Wheel Alignment</Link>
          <Link href="/services/flushes/power-steering-flush" className="text-[#2D3047] underline">Power Steering Flush</Link>
        </div>
      </section>

    </main>
  )
}
