// app/services/maintenance/wheel-alignment/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Wheel Alignment Edmonton | Leung's Auto Service",
  description:
    "Wheel alignment in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function WheelAlignment() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Wheel Alignment in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Potholes and curbs can knock your wheels out of alignment, which wears your tires faster and makes the car
          pull. Leung's Auto Service aligns wheels on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Wheel Alignment
        </Link>
      </section>

      {/* ===== SIGNS YOU NEED AN ALIGNMENT ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need a Wheel Alignment</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The car pulls or drifts to one side</li>
            <li>The steering wheel is off-centre when driving straight</li>
            <li>Uneven or fast tire wear</li>
            <li>The steering feels loose or wanders</li>
            <li>You recently hit a big pothole or curb</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What a Wheel Alignment Involves</h2>
          <p className="mt-4 text-lg">
            We check the angles of your wheels and adjust them back to your vehicle's specification. If we find worn
            steering or suspension parts that would stop the alignment from holding, we explain what we find and you
            approve any extra work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Wheel Alignment Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and whether it needs a front-end or four-wheel alignment. Contact us
            for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/maintenance" className="text-[#2D3047] underline">Car Maintenance</Link>
          <Link href="/services/maintenance/tire-rotation" className="text-[#2D3047] underline">Tire Rotation</Link>
          <Link href="/services/suspension/steering-front-end-repair" className="text-[#2D3047] underline">Steering and Front End Repair</Link>
        </div>
      </section>

    </main>
  )
}
