import Link from "next/link"

export const metadata = {
  title: "Brake Pad and Rotor Replacement Edmonton | Leung's Auto Service",
  description:
    "Brake pad and rotor replacement in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function BrakePadRotorReplacement() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Brake Pad and Rotor Replacement in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Brake pads and rotors wear down over time, and worn parts reduce your braking power. Leung's Auto Service
          replaces brake pads and rotors on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Brake Pad and Rotor Replacement
        </Link>
      </section>

      {/* ===== SIGNS YOU NEED NEW PADS ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need New Brake Pads</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>A high-pitched squeal when you brake</li>
            <li>A grinding or scraping sound, which can mean the pads are worn down to metal</li>
            <li>The car takes longer to stop, or the brake pedal feels soft</li>
            <li>The car pulls to one side when braking</li>
            <li>A brake warning light on the dashboard</li>
          </ul>
        </div>
      </section>

      {/* ===== SIGNS YOU NEED NEW ROTORS ===== */}
      <section className="px-6 py-12">
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
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Brake Pad and Rotor Replacement Involves</h2>
          <p className="mt-4 text-lg">
            We inspect the pads, measure the rotors, and check the calipers and brake fluid, then explain what we
            find. If the pads or rotors need replacing, you approve the work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Brake Pad and Rotor Replacement Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle, the type of pads and rotors, and whether the rotors need replacing
            along with the pads. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES: link back up and across ===== */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Brake Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/brakes" className="text-[#2D3047] underline">Brake Repair</Link>
          <Link href="/services/brakes/brake-fluid-flush" className="text-[#2D3047] underline">Brake Fluid Flush</Link>
          <Link href="/services/brakes/abs-brake-repair" className="text-[#2D3047] underline">ABS Brake Repair</Link>
        </div>
      </section>

    </main>
  )
}
