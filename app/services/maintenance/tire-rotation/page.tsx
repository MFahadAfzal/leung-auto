// app/services/maintenance/tire-rotation/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Tire Rotation Edmonton | Leung's Auto Service",
  description:
    "Tire rotation in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function TireRotation() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Tire Rotation in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Rotating your tires helps them wear evenly, so they last longer and grip better. Leung's Auto Service
          rotates tires on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Tire Rotation
        </Link>
      </section>

      {/* ===== SIGNS YOU NEED A ROTATION ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need a Tire Rotation</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The front tires are more worn than the back, or the other way around</li>
            <li>Uneven wear across the tread</li>
            <li>More vibration at highway speeds</li>
            <li>It has been several thousand kilometres since your last rotation</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What a Tire Rotation Involves</h2>
          <p className="mt-4 text-lg">
            We move each tire to a different position on the vehicle following the right pattern for your vehicle,
            set the tire pressure, and torque the wheel nuts to spec. We also check the tread and let you know if
            anything looks off.
          </p>
        </div>
      </section>

      {/* ===== HOW OFTEN ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How Often Should Tires Be Rotated?</h2>
          <p className="mt-4 text-lg">
            Many manufacturers recommend a rotation about every 8,000 to 12,000 km, and it's easy to do at the same
            time as an oil change. Check your owner's manual, or ask us what your vehicle needs.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Tire Rotation Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Maintenance Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/maintenance" className="text-[#2D3047] underline">Car Maintenance</Link>
          <Link href="/services/maintenance/tire-change" className="text-[#2D3047] underline">Tire Change</Link>
          <Link href="/services/maintenance/wheel-alignment" className="text-[#2D3047] underline">Wheel Alignment</Link>
        </div>
      </section>

    </main>
  )
}
