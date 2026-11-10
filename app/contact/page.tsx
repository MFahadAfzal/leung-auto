// app/contact/page.tsx
import { Clock, MapPin, Phone } from "lucide-react"
import { business } from "@/lib/business"
import PageHero from "@/components/PageHero"

export const metadata = {
  title: "Book an Appointment | Leung's Auto Service Edmonton",
  description:
    "Book an appointment or book car repair in West Edmonton: call 780-452-0134 or visit 12025 149 St NW. 8:30 AM - 6 PM Monday-Friday, closed weekends.",
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
        image={{ src: "/images/book-appointment.jpg", alt: "Mechanic working at a laptop on a workbench in an auto repair shop, where you can book car repair or book an appointment in West Edmonton" }}
        actions={
          <a
            href={business.phoneHref}
            className="mt-8 inline-flex items-center gap-2 rounded bg-brand-accent px-8 py-4 text-xl font-bold text-white shadow-lg hover:bg-brand-tint"
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

          <div className="rounded-lg border border-brand-light bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white">
              <Phone size={22} />
            </div>
            <h2 className="mt-4 text-xl font-bold">Call to Book</h2>
            <a href={business.phoneHref} className="mt-2 block text-lg text-brand-dark underline">
              {business.phone}
            </a>
          </div>

          <div className="rounded-lg border border-brand-light bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white">
              <MapPin size={22} />
            </div>
            <h2 className="mt-4 text-xl font-bold">Shop Address</h2>
            <p className="mt-2 text-lg">{business.street}</p>
            <p className="text-lg">{business.city}, {business.province} {business.postalCode}</p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-brand-dark underline"
            >
              Get directions to our shop
            </a>
          </div>

          <div className="rounded-lg border border-brand-light bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white">
              <Clock size={22} />
            </div>
            <h2 className="mt-4 text-xl font-bold">Hours of Operation</h2>
            <p className="mt-2 text-lg">{business.hoursTime}</p>
            <p className="text-lg">{business.hoursDays}</p>
            <p className="text-lg text-gray-600">{business.hoursClosed}</p>
          </div>

        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="bg-brand-light/40 px-6 py-14">
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
