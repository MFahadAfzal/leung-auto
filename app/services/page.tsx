// app/services/page.tsx
import Link from "next/link"
import { services } from "@/lib/services"

export const metadata = {
  title: "Automotive Services in Edmonton | Leung Auto",
  description:
    "Brake repair, suspension, diagnostics, maintenance, inspections and more at Leung's Auto Service in West Edmonton.",
}

export default function Services() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Automotive Services in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Leung's Auto Service is an independent shop in West Edmonton. Choose a service below to see the
          specific repairs we handle for domestic and import vehicles.
        </p>
      </section>

      {/* ===== SERVICE HUBS: one card per main service, with its specific repairs listed under it ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.href} className="flex flex-col rounded bg-white p-6 shadow">

              {/* Hub link */}
              <h2 className="text-xl font-bold">
                <Link href={service.href} className="hover:underline">{service.title}</Link>
              </h2>
              <p className="mt-2 text-gray-600">{service.blurb}</p>

              {/* Specific repairs under this service */}
              {service.spokes.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
                  {service.spokes.map((spoke) => (
                    <li key={spoke.href}>
                      <Link href={spoke.href} className="text-[#2D3047] hover:underline">
                        {spoke.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Not Sure What You Need?</h2>
        <p className="mt-4 text-lg md:text-xl">
          Tell us what your vehicle is doing and we'll point you in the right direction.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Contact Us
        </Link>
      </section>

    </main>
  )
}