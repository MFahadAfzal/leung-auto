// app/services/brakes/abs-brake-repair/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "ABS Brake Repair Edmonton | Leung's Auto Service",
  description:
    "ABS brake repair in West Edmonton. ABS light on? Learn what causes the ABS light to turn on, and book ABS sensor replacement and diagnostics with us.",
}

export default function AbsBrakeRepair() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">ABS Brake Repair in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          The anti-lock braking system (ABS) helps you keep control when you brake hard on wet, icy, or snowy
          roads. If your ABS light is on, Leung's Auto Service can find the cause. We do ABS brake repair and ABS
          sensor replacement on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book ABS Brake Repair
        </Link>
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/abs-brake-repair.jpg"
            alt="Mechanic doing ABS brake repair and ABS sensor replacement at Leung's Auto Service in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== SIGNS OF AN ABS PROBLEM ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need ABS Brake Repair</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The ABS light is on</li>
            <li>The brake pedal pulses or feels different when you brake hard</li>
            <li>The brakes lock up on wet or icy roads</li>
            <li>The traction control light comes on along with the ABS light</li>
            <li>Longer stopping distances than usual</li>
          </ul>
        </div>
      </section>

      {/* ===== ABS LIGHT ON ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">ABS Light On? Is It Safe to Drive?</h2>
          <p className="mt-4 text-lg">
            If the ABS light is on, your regular brakes usually still work, but the anti-lock feature may not. That
            means the wheels can lock up if you brake hard on a slippery road. Have it checked soon, especially
            before winter driving. If the red brake warning light is on as well, stop driving and have the car
            checked right away.
          </p>
        </div>
      </section>

      {/* ===== WHAT CAUSES THE ABS LIGHT ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Causes the ABS Light to Turn On?</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>A faulty or dirty wheel speed sensor, the most common cause</li>
            <li>Damaged or corroded wiring to an ABS sensor</li>
            <li>A damaged tone ring on the wheel hub or axle</li>
            <li>Low brake fluid</li>
            <li>A failed ABS module or pump</li>
          </ul>
        </div>
      </section>

      {/* ===== ABS SENSOR REPLACEMENT ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">ABS Sensor Replacement</h2>
          <p className="mt-4 text-lg">
            Each wheel has a speed sensor that tells the ABS how fast it is turning. Road salt, dirt, and moisture
            can damage these sensors and their wiring, which turns the ABS light on. If testing shows a sensor has
            failed, ABS sensor replacement is usually a quick repair that turns the light off and restores the
            anti-lock feature.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="bg-gray-100 px-6 py-12">
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
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">ABS Brake Repair Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on what's causing the fault. ABS sensor replacement costs much less than replacing a
            failed ABS module.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Get Your ABS Light Checked
          </Link>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/brakes" className="text-[#2D3047] underline">Brake Repair</Link>
          <Link href="/services/brakes/brake-pad-replacement" className="text-[#2D3047] underline">Brake Pad Replacement</Link>
          <Link href="/services/brakes/brake-fluid-flush" className="text-[#2D3047] underline">Brake Fluid Flush</Link>
          <Link href="/services/diagnostics" className="text-[#2D3047] underline">Car Diagnostics</Link>
          <Link href="/services/maintenance/wheel-alignment" className="text-[#2D3047] underline">Wheel Alignment</Link>
        </div>
      </section>

    </main>
  )
}
