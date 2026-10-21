import Link from "next/link"

export const metadata = {
  title: "Brake Pad Replacement Edmonton | Leung's Auto Service",
  description:
    "Brake pad replacement in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function BrakePadReplacement() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Brake Pad Replacement in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Worn brake pads are one of the most common reasons a car needs a brake repair. Leung's Auto Service
          replaces brake pads on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Brake Pad Replacement
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

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Brake Pad Replacement Involves</h2>
          <p className="mt-4 text-lg">
            We inspect the pads, rotors, and brake fluid, explain what we find, and replace the pads if they need it.
            You approve the work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Brake Pad Replacement Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle, the type of pads, and whether the rotors also need work. Contact us
            for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES: link back up and across ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Brake Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/brakes" className="text-[#2D3047] underline">Brake Repair</Link>
          <Link href="/services/brakes/brake-rotor-replacement" className="text-[#2D3047] underline">Brake Rotor Replacement</Link>
          <Link href="/services/brakes/brake-fluid-flush" className="text-[#2D3047] underline">Brake Fluid Flush</Link>
        </div>
      </section>

    </main>
  )
}