// app/services/page.tsx
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BookingCta from "@/components/BookingCta"
import PageHero from "@/components/PageHero"
import { services } from "@/lib/services"

export const metadata = {
  title: "Automotive Services in Edmonton | Leung's Auto Service",
  description:
    "Brake repair, suspension, diagnostics, maintenance, inspections and more at Leung's Auto Service in West Edmonton.",
  alternates: {
    canonical: "/services",
  },
}

export default function Services() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <PageHero
        heading="Automotive Services in Edmonton"
        image={{ src: "/images/automotive-services.jpg", alt: "Mechanic working on a vehicle at Leung's Auto Service, offering automotive services in West Edmonton" }}
      >
        Leung&apos;s Auto Service is an independent shop in West Edmonton. Choose a service below to see the
        specific repairs we handle for domestic and import vehicles.
      </PageHero>

      {/* ===== SERVICE HUBS: one card per main service, with its specific repairs listed under it ===== */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.href} className="flex flex-col rounded-lg border border-[#BDDDFC] bg-white p-6 shadow-sm transition hover:shadow-md">

              {/* Hub link */}
              <h2 className="text-xl font-bold text-[#384959]">
                <Link href={service.href} className="group inline-flex items-center gap-2 hover:underline">
                  {service.title}
                  <ArrowRight className="transition group-hover:translate-x-1" size={18} aria-hidden="true" />
                </Link>
              </h2>
              <p className="mt-2 text-gray-600">{service.blurb}</p>

              {/* Specific repairs under this service */}
              {service.spokes.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2 border-t border-[#BDDDFC] pt-4">
                  {service.spokes.map((spoke) => (
                    <li key={spoke.href} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#384959]" aria-hidden="true" />
                      <Link href={spoke.href} className="text-[#384959] hover:underline">
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
      <BookingCta
        heading="Not Sure Which Automotive Service You Need?"
        text="Tell us what your vehicle is doing and we'll point you in the right direction."
        label="Book Auto Repair"
        gray
      />

    </main>
  )
}