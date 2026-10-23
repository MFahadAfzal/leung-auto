// components/ServiceHub.tsx
import Link from "next/link"
import { services } from "@/lib/services"

// Hub page for one main service: an intro, then a card for each specific repair
// so visitors can pick the one that matches what their vehicle is doing.
export default function ServiceHub({ href, intro }: { href: string; intro: string }) {
  const service = services.find((s) => s.href === href)!

  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">{service.title} in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">{intro}</p>
      </section>

      {/* ===== SPECIFIC SERVICES: one card per repair, with the symptoms it fixes ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Choose the Service You Need</h2>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.spokes.map((spoke) => (
            <Link
              key={spoke.href}
              href={spoke.href}
              className="flex flex-col rounded bg-white p-6 shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-[#2D3047]">{spoke.title}</h3>
              <p className="mt-2 flex-1 text-gray-600">{spoke.blurb}</p>
              <span className="mt-4 font-bold text-[#2D3047] underline">Learn more</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Not Sure What You Need?</h2>
        <p className="mt-4 text-lg md:text-xl">
          Tell us what your vehicle is doing and we&apos;ll point you in the right direction.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Contact Us
        </Link>
        <p className="mt-6">
          <Link href="/services" className="text-[#2D3047] underline">See all services</Link>
        </p>
      </section>

    </main>
  )
}
