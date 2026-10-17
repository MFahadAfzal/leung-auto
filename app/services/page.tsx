// app/services/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Automotive Services in Edmonton | Leung Auto",
  description:
    "Brake repair, suspension, diagnostics, maintenance, inspections and more at Leung's Auto Service in West Edmonton.",
}

// Each hub is a main service page. Spokes are the specific jobs under it.
const services = [
  {
    title: "Brake Repair",
    href: "/services/brakes",
    blurb: "Brake service to keep your vehicle stopping safely.",
    spokes: [
      { title: "Brake Pad Replacement", href: "/services/brakes/brake-pad-replacement" },
      { title: "Brake Rotor Replacement", href: "/services/brakes/brake-rotor-replacement" },
      { title: "Brake Fluid Flush", href: "/services/brakes/brake-fluid-flush" },
      { title: "ABS Brake Repair", href: "/services/brakes/abs-brake-repair" },
    ],
  },
  {
    title: "Suspension Repair",
    href: "/services/suspension",
    blurb: "Fix clunking, pulling, and bouncy rides.",
    spokes: [
      { title: "Shock and Strut Replacement", href: "/services/suspension/shock-strut-replacement" },
      { title: "Ball Joint and Control Arm Repair", href: "/services/suspension/ball-joint-control-arm" },
      { title: "Steering and Front End Repair", href: "/services/suspension/steering-front-end-repair" },
    ],
  },
  {
    title: "Car Diagnostics",
    href: "/services/diagnostics",
    blurb: "Find the cause of warning lights and performance problems.",
    spokes: [
      { title: "Check Engine Light Diagnostics", href: "/services/diagnostics/check-engine-light" },
      { title: "Transmission Diagnostics", href: "/services/diagnostics/transmission-diagnostics" },
      { title: "Electrical Diagnostics", href: "/services/diagnostics/electrical-diagnostics" },
    ],
  },
  {
    title: "Car Maintenance",
    href: "/services/routine-maintenance",
    blurb: "Regular upkeep to extend the life of your vehicle.",
    spokes: [
      { title: "Tire Change", href: "/services/routine-maintenance/tire-change" },
      { title: "Tire Rotation", href: "/services/routine-maintenance/tire-rotation" },
      { title: "Wheel Alignment", href: "/services/routine-maintenance/wheel-alignment" },
      { title: "Oil Change", href: "/services/routine-maintenance/oil-change" },
    ],
  },
  {
    title: "Car Inspections",
    href: "/services/inspections",
    blurb: "Know the condition of a vehicle before you buy or drive it.",
    spokes: [
      { title: "Pre-Purchase Inspection", href: "/services/inspections/pre-purchase-inspection" },
      { title: "Safety Inspection", href: "/services/inspections/safety-inspection" },
    ],
  },
  {
    title: "System Flushes",
    href: "/services/system-flushes",
    blurb: "Fresh fluids to keep your systems running efficiently.",
    spokes: [
      { title: "Coolant Flush", href: "/services/system-flushes/coolant-flush" },
      { title: "Transmission Fluid Flush", href: "/services/system-flushes/transmission-flush" },
      { title: "Power Steering Flush", href: "/services/system-flushes/power-steering-flush" },
    ],
  },
]

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