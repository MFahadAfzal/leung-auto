// app/services/maintenance/oil-change/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Oil Change Edmonton | Leung's Auto Service",
  description:
    "Oil changes in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function OilChange() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Oil Change in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Fresh oil keeps your engine's moving parts clean, cool, and protected from wear. Leung's Auto Service
          changes oil on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book an Oil Change
        </Link>
      </section>

      {/* ===== SIGNS YOU NEED AN OIL CHANGE ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need an Oil Change</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The oil change or maintenance reminder light is on</li>
            <li>The oil on the dipstick looks dark, gritty, or low</li>
            <li>The engine sounds louder or makes a ticking noise</li>
            <li>A burning oil smell inside or around the car</li>
            <li>You've driven past the mileage on your last oil change sticker</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What an Oil Change Involves</h2>
          <p className="mt-4 text-lg">
            We drain the old oil, replace the oil filter, and refill the engine with oil that meets your vehicle's
            specification. We also take a quick look for leaks and anything else that needs attention, and let you
            know what we find.
          </p>
        </div>
      </section>

      {/* ===== HOW OFTEN ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How Often Should You Change Your Oil?</h2>
          <p className="mt-4 text-lg">
            The interval depends on your vehicle, the type of oil, and how you drive. Short trips and cold Edmonton
            winters can mean more frequent changes. Check your owner's manual, or ask us what your vehicle needs.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Oil Change Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle, how much oil it takes, and whether it needs conventional or synthetic
            oil. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Maintenance Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/maintenance" className="text-[#2D3047] underline">Car Maintenance</Link>
          <Link href="/services/maintenance/tire-rotation" className="text-[#2D3047] underline">Tire Rotation</Link>
          <Link href="/services/maintenance/wheel-alignment" className="text-[#2D3047] underline">Wheel Alignment</Link>
        </div>
      </section>

    </main>
  )
}
