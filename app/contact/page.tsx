// app/contact/page.tsx
import { Clock, MapPin, Phone } from "lucide-react"
import { business } from "@/lib/business"
import PageHero from "@/components/PageHero"

export const metadata = {
  title: "Book an Appointment | Leung's Auto Service Edmonton",
  description:
    "Book car repair at Leung's Auto Service in West Edmonton. Call 780-452-0134 or visit us at 12025 149 St NW. Open Monday to Friday, 8:30 AM to 6 PM.",
  alternates: {
    canonical: "/contact",
  },
}

const mapsQuery = encodeURIComponent(business.mapsQuery)

export default function Contact() {
  return (
    <main className="flex-1">

      {/* ===== INTRO: call is the main action, since most visitors are on phones ===== */}
      <PageHero
        heading="Book an Appointment"
        image={{ src: "/images/book-appointment.jpg", alt: "Leung's Auto Service in West Edmonton, where you can book car repair, maintenance, or an inspection" }}
        actions={
          <a
            href={business.phoneHref}
            className="mt-8 inline-flex items-center gap-2 rounded bg-[#BDDDFC] px-8 py-4 text-xl font-bold text-[#384959] shadow-lg hover:bg-white"
          >
            <Phone size={22} />
            Call {business.phone}
          </a>
        }
      >
        Call us to book car repair, maintenance, or an inspection at our shop in West Edmonton. Tell us what your
        vehicle is doing and we&apos;ll find a time that works for you.
      </PageHero>

      {/* ===== DETAILS: phone, address, hours ===== */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">

          <div className="rounded-lg border border-[#BDDDFC] bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#384959] text-[#BDDDFC]">
              <Phone size={22} />
            </div>
            <h2 className="mt-4 text-xl font-bold">Call to Book</h2>
            <a href={business.phoneHref} className="mt-2 block text-lg text-[#384959] underline">
              {business.phone}
            </a>
          </div>

          <div className="rounded-lg border border-[#BDDDFC] bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#384959] text-[#BDDDFC]">
              <MapPin size={22} />
            </div>
            <h2 className="mt-4 text-xl font-bold">Shop Address</h2>
            <p className="mt-2 text-lg">{business.street}</p>
            <p className="text-lg">{business.city}, {business.province} {business.postalCode}</p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[#384959] underline"
            >
              Get directions to our shop
            </a>
          </div>

          <div className="rounded-lg border border-[#BDDDFC] bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#384959] text-[#BDDDFC]">
              <Clock size={22} />
            </div>
            <h2 className="mt-4 text-xl font-bold">Hours of Operation</h2>
            <p className="mt-2 text-lg">{business.hoursDays}</p>
            <p className="text-lg">{business.hoursTime}</p>
            <p className="text-lg text-gray-600">Closed weekends</p>
          </div>

        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="bg-[#BDDDFC]/40 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Find Our Shop in West Edmonton</h2>
          <iframe
            title="Map to Leung's Auto Service at 12025 149 St NW, Edmonton"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            className="mt-8 h-96 w-full rounded-lg border-0 shadow-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </main>
  )
}
