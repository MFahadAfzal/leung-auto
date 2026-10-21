// app/services/brakes/brake-rotor-replacement/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Brake Rotor Replacement Edmonton | Leung's Auto Service",
  description:
    "Brake rotor replacement in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function BrakeRotorReplacement() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Brake Rotor Replacement in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Brake rotors wear down over time, and damaged rotors reduce your braking power. Leung's Auto Service
          replaces brake rotors on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Brake Rotor Replacement
        </Link>
      </section>

      {/* ===== SIGNS YOU NEED NEW ROTORS ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need New Brake Rotors</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The steering wheel or brake pedal shakes or pulses when you brake</li>
            <li>Grooves, scoring, or a blue tint on the rotor surface</li>
            <li>A scraping or grinding noise when braking</li>
            <li>Longer stopping distances</li>
            <li>Rotors worn below the minimum thickness</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Brake Rotor Replacement Involves</h2>
          <p className="mt-4 text-lg">
            We measure the rotors, check the pads and calipers, and explain what we find. If the rotors need
            replacing, you approve the work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Brake Rotor Replacement Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and the type of rotors. Rotors are often replaced together with
            the brake pads. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Brake Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/brakes" className="text-[#2D3047] underline">Brake Repair</Link>
          <Link href="/services/brakes/brake-pad-replacement" className="text-[#2D3047] underline">Brake Pad Replacement</Link>
          <Link href="/services/brakes/brake-fluid-flush" className="text-[#2D3047] underline">Brake Fluid Flush</Link>
        </div>
      </section>

    </main>
  )
}