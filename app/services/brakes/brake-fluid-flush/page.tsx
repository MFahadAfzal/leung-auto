// app/services/brakes/brake-fluid-flush/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Brake Fluid Flush Edmonton | Leung's Auto Service",
  description:
    "Brake fluid flush in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function BrakeFluidFlush() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Brake Fluid Flush in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Brake fluid absorbs moisture over time, which lowers its performance and can damage brake parts from the
          inside. Leung's Auto Service flushes and replaces brake fluid on domestic and import vehicles at our shop
          in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Brake Fluid Flush
        </Link>
      </section>

      {/* ===== SIGNS YOU NEED A FLUSH ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need a Brake Fluid Flush</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>A soft or spongy brake pedal</li>
            <li>Brake fluid that looks dark or dirty</li>
            <li>The brakes feel less responsive than they used to</li>
            <li>A brake warning light on the dashboard</li>
            <li>It has been a few years since the fluid was last changed</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What a Brake Fluid Flush Involves</h2>
          <p className="mt-4 text-lg">
            We remove the old brake fluid from the system, refill it with fresh fluid that meets your vehicle's
            specification, and check the brakes for leaks. You approve the work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== HOW OFTEN ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How Often Should Brake Fluid Be Changed?</h2>
          <p className="mt-4 text-lg">
            Many manufacturers recommend replacing brake fluid every two to three years, but the interval varies by
            vehicle. Check your owner's manual, or ask us what your vehicle needs.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Brake Fluid Flush Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and the type of fluid it uses. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Brake Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/brakes" className="text-[#2D3047] underline">Brake Repair</Link>
          <Link href="/services/brakes/brake-pad-rotor-replacement" className="text-[#2D3047] underline">Brake Pad and Rotor Replacement</Link>
        </div>
      </section>

    </main>
  )
}