// app/contact/page.tsx
import { Clock, MapPin, Phone } from "lucide-react"
import { business } from "@/lib/business"

export const metadata = {
  title: "Book an Appointment | Leung's Auto Service Edmonton",
  description:
    "Book car repair at Leung's Auto Service in West Edmonton. Call 780-452-0134 or visit us at 12025 149 St NW. Open Monday to Friday, 8:30 AM to 6 PM.",
}

const mapsQuery = encodeURIComponent(business.mapsQuery)

export default function Contact() {
  return (
    <main className="flex-1">

      {/* ===== INTRO: call is the main action, since most visitors are on phones ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Book an Appointment</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Call us to book car repair, maintenance, or an inspection at our shop in West Edmonton. Tell us what your
          vehicle is doing and we&apos;ll find a time that works for you.
        </p>
        <a
          href={business.phoneHref}
          className="mt-6 inline-flex items-center gap-2 rounded bg-[#2D3047] px-8 py-4 text-xl font-bold text-white hover:opacity-90"
        >
          <Phone size={22} />
          Call {business.phone}
        </a>
      </section>

      {/* ===== DETAILS: phone, address, hours ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">

          <div className="rounded bg-white p-6 shadow">
            <Phone className="text-[#2D3047]" />
            <h2 className="mt-2 text-xl font-bold">Phone</h2>
            <a href={business.phoneHref} className="mt-2 block text-lg text-[#2D3047] underline">
              {business.phone}
            </a>
          </div>

          <div className="rounded bg-white p-6 shadow">
            <MapPin className="text-[#2D3047]" />
            <h2 className="mt-2 text-xl font-bold">Address</h2>
            <p className="mt-2 text-lg">{business.street}</p>
            <p className="text-lg">{business.city}, {business.province} {business.postalCode}</p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[#2D3047] underline"
            >
              Get directions to our shop
            </a>
          </div>

          <div className="rounded bg-white p-6 shadow">
            <Clock className="text-[#2D3047]" />
            <h2 className="mt-2 text-xl font-bold">Hours</h2>
            <p className="mt-2 text-lg">{business.hoursDays}</p>
            <p className="text-lg">{business.hoursTime}</p>
            <p className="text-lg text-gray-600">Closed weekends</p>
          </div>

        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Find Our Shop in West Edmonton</h2>
          <iframe
            title="Map to Leung's Auto Service at 12025 149 St NW, Edmonton"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            className="mt-8 h-96 w-full rounded border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </main>
  )
}
