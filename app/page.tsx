import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative flex min-h-[500px] items-center justify-center">
        <Image
          src="/images/front.jpeg"
          alt="Front of Leung's Auto Service, a car repair shop in West Edmonton"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">Car Repair in Edmonton</h1>
          <p className="mt-4 text-lg md:text-xl">
            Honest, affordable car repair in West Edmonton for domestic and import vehicles since 2002.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded bg-white px-6 py-3 font-bold text-[#2D3047] hover:bg-gray-200">
              Book Car Repair
            </Link>
            <Link href="/services" className="rounded border border-white px-6 py-3 font-bold text-white hover:bg-white/10">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">A Trusted Mechanic in West Edmonton</h2>
        <p className="mt-4 text-lg md:text-xl">
          Leung's Auto Service is an independent shop known for trusted mechanics, certified technicians, and
          affordable car repair in Edmonton. We explain the work before we do it, so you only pay for what your
          vehicle needs.
        </p>
      </section>

      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Automotive Services in Edmonton</h2>
        <p className="mt-4 text-lg md:text-xl">
          From routine maintenance to engine diagnostics, we offer the automotive services that keep your vehicle
          running smoothly.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/services/inspections" className="rounded bg-white p-6 shadow hover:shadow-lg">
            <h3 className="text-xl font-bold">Car Inspections</h3>
            <p className="mt-2 text-gray-600">Thorough vehicle inspections to make sure your car is safe and reliable.</p>
          </Link>
          <Link href="/services/diagnostics" className="rounded bg-white p-6 shadow hover:shadow-lg">
            <h3 className="text-xl font-bold">Engine Diagnostics</h3>
            <p className="mt-2 text-gray-600">Advanced diagnostics to find and fix problems quickly.</p>
          </Link>
          <Link href="/services/brake-suspensions" className="rounded bg-white p-6 shadow hover:shadow-lg">
            <h3 className="text-xl font-bold">Brake Repair & Suspension</h3>
            <p className="mt-2 text-gray-600">Brake and suspension repair to keep your vehicle safe on the road.</p>
          </Link>
          <Link href="/services/routine-maintenance" className="rounded bg-white p-6 shadow hover:shadow-lg">
            <h3 className="text-xl font-bold">Routine Maintenance</h3>
            <p className="mt-2 text-gray-600">Regular maintenance to extend the life of your vehicle.</p>
          </Link>
          <Link href="/services/system-flushes" className="rounded bg-white p-6 shadow hover:shadow-lg">
            <h3 className="text-xl font-bold">System Flushes</h3>
            <p className="mt-2 text-gray-600">Professional flushes to keep your car's systems running efficiently.</p>
          </Link>
          <Link href="/services/oil-change" className="rounded bg-white p-6 shadow hover:shadow-lg">
            <h3 className="text-xl font-bold">Oil Change</h3>
            <p className="mt-2 text-gray-600">Quick, reliable oil changes to keep your engine healthy.</p>
          </Link>
        </div>
      </section>

      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Book Car Repair in Edmonton</h2>
        <p className="mt-4 text-lg md:text-xl">
          Ready to get your vehicle looked at? Contact our West Edmonton shop to book an appointment.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Now
        </Link>
      </section>
    </main>
  )
}