// app/services/brakes/abs-brake-repair/page.tsx
import Link from "next/link"

export const metadata = {
  title: "ABS Brake Repair Edmonton | Leung's Auto Service",
  description:
    "ABS brake repair and ABS light diagnostics in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function AbsBrakeRepair() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">ABS Brake Repair in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          The anti-lock braking system (ABS) helps you keep control when you brake hard on wet, icy, or snowy
          roads. Leung's Auto Service diagnoses and repairs ABS problems on domestic and import vehicles at our
          shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book ABS Brake Repair
        </Link>
      </section>

      {/* ===== SIGNS OF AN ABS PROBLEM ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs of an ABS Problem</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The ABS warning light is on</li>
            <li>The brake pedal pulses or feels different when you brake hard</li>
            <li>The brakes lock up on wet or icy roads</li>
            <li>The traction control light comes on along with the ABS light</li>
            <li>Longer stopping distances than usual</li>
          </ul>
          <p className="mt-4 text-lg">
            If the ABS light is on, your regular brakes usually still work, but the anti-lock feature may not. Have
            it checked soon, especially before winter driving.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What ABS Brake Repair Involves</h2>
          <p className="mt-4 text-lg">
            We scan the system to find the fault code, then inspect the likely causes, such as wheel speed sensors,
            wiring, and the ABS module. We explain what we find, and you approve the work and the price before we
            start.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">ABS Brake Repair Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on what's causing the fault. A faulty sensor costs much less than a failed module.
            Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/brakes" className="text-[#2D3047] underline">Brake Repair</Link>
          <Link href="/services/brakes/brake-pad-rotor-replacement" className="text-[#2D3047] underline">Brake Pad and Rotor Replacement</Link>
          <Link href="/services/diagnostics" className="text-[#2D3047] underline">Car Diagnostics</Link>
        </div>
      </section>

    </main>
  )
}