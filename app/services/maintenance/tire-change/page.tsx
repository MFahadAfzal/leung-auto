// app/services/maintenance/tire-change/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Tire Change Edmonton | Leung's Auto Service",
  description:
    "Seasonal tire changes and tire swaps in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function TireChange() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Tire Change in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Edmonton winters call for winter tires, and summer driving calls for something else. Leung's Auto Service
          swaps seasonal tires and installs new tires on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Tire Change
        </Link>
      </section>

      {/* ===== SIGNS YOU NEED A TIRE CHANGE ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">When You Need a Tire Change</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The season is changing and it's time to put on winter or summer tires</li>
            <li>The tread is worn down low</li>
            <li>Cracks, bulges, or cuts in the sidewall</li>
            <li>A tire keeps losing air</li>
            <li>More vibration or road noise than usual</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What a Tire Change Involves</h2>
          <p className="mt-4 text-lg">
            We remove your current tires, install your seasonal or new tires, set the tire pressure, and torque the
            wheel nuts to spec. While the wheels are off, we can take a look at your brakes and let you know what we
            find.
          </p>
        </div>
      </section>

      {/* ===== WHEN TO SWAP ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">When Should You Switch to Winter Tires?</h2>
          <p className="mt-4 text-lg">
            A common rule is to put winter tires on once temperatures stay around 7°C or colder, and switch back in
            spring when it warms up again. Book early, since fall and spring are the busiest times of year.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Tire Change Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and whether your tires are already on rims or need to be mounted and
            balanced. Contact us for a quote.
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
