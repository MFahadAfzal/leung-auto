// app/services/suspension/shock-strut-replacement/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Shock and Strut Replacement Edmonton | Leung's Auto Service",
  description:
    "Shock and strut replacement in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function ShockStrutReplacement() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Shock and Strut Replacement in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Shocks and struts keep your tires on the road and your ride smooth and controlled. Leung's Auto Service
          replaces shocks and struts on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Shock and Strut Replacement
        </Link>
      </section>

      {/* ===== SIGNS YOU NEED NEW SHOCKS OR STRUTS ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need New Shocks or Struts</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The car bounces or keeps moving after going over bumps</li>
            <li>The front end dips when you brake, or the back squats when you accelerate</li>
            <li>The car leans or sways in turns</li>
            <li>A clunking or knocking noise over bumps</li>
            <li>Oil leaking from the shocks or struts</li>
            <li>Uneven or cupped tire wear</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Shock and Strut Replacement Involves</h2>
          <p className="mt-4 text-lg">
            We inspect the shocks, struts, mounts, and springs, explain what we find, and replace the worn parts if
            they need it. Because struts affect wheel alignment, we may recommend an alignment afterward. You
            approve the work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Shock and Strut Replacement Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle, the type of parts, and whether they are replaced in pairs. Contact us
            for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Suspension Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/suspension" className="text-[#2D3047] underline">Suspension Repair</Link>
          <Link href="/services/suspension/ball-joint-control-arm" className="text-[#2D3047] underline">Ball Joint and Control Arm Repair</Link>
          <Link href="/services/suspension/steering-front-end-repair" className="text-[#2D3047] underline">Steering and Front End Repair</Link>
        </div>
      </section>

    </main>
  )
}
