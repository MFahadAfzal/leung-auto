// app/services/flushes/transmission-flush/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Transmission Fluid Flush Edmonton | Leung's Auto Service",
  description:
    "Transmission fluid flush in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function TransmissionFlush() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Transmission Fluid Flush in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Transmission fluid cools and protects the parts inside your transmission, and it wears out with heat and
          time. Leung's Auto Service replaces transmission fluid on domestic and import vehicles at our shop in
          West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Transmission Fluid Flush
        </Link>
      </section>

      {/* ===== SIGNS YOU NEED A FLUSH ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need a Transmission Fluid Flush</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Transmission fluid that looks dark or smells burnt</li>
            <li>Rough, delayed, or slipping shifts</li>
            <li>The car hesitates before moving in drive or reverse</li>
            <li>You tow, haul heavy loads, or do a lot of stop-and-go driving</li>
            <li>It has been a long time since the fluid was last changed</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What a Transmission Fluid Flush Involves</h2>
          <p className="mt-4 text-lg">
            We check the condition of the old fluid, replace it with fluid that meets your vehicle's specification,
            and check for leaks. If the fluid points to a deeper problem, we explain what we find before going any
            further. You approve the work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== HOW OFTEN ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How Often Should Transmission Fluid Be Changed?</h2>
          <p className="mt-4 text-lg">
            The interval varies by vehicle and transmission type, and it's shorter if you tow or drive in severe
            conditions. Check your owner's manual, or ask us what your vehicle needs.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Transmission Fluid Flush Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle, how much fluid it takes, and the type of fluid it needs. Contact us
            for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/flushes" className="text-[#2D3047] underline">System Flushes</Link>
          <Link href="/services/flushes/coolant-flush" className="text-[#2D3047] underline">Coolant Flush</Link>
          <Link href="/services/diagnostics#transmission-diagnostics" className="text-[#2D3047] underline">Transmission Diagnostics</Link>
        </div>
      </section>

    </main>
  )
}
