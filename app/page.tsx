import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Clock, DollarSign, MapPin, ShieldCheck } from "lucide-react"
import BookingCta from "@/components/BookingCta"
import Reviews from "@/components/Reviews"
import { reviewsBy } from "@/lib/reviews"
import { business } from "@/lib/business"
import { services } from "@/lib/services"

export const metadata = {
  title: "Affordable Car Repair Edmonton | Leung's Auto Service",
  description:
    `Affordable car repair in West Edmonton since 2002. Trusted mechanics and certified technicians for all automotive services. Call ${business.phone} to book.`,
  alternates: {
    canonical: "/",
  },
}


// Reasons to choose the shop, each built around one of the page's keywords
const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Mechanics",
    text: "Independent and family-run since 2002. We show you what's wrong and only recommend work your vehicle needs.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Technicians",
    text: "Our certified technicians work on domestic and import vehicles in an AMVIC certified shop.",
  },
  {
    icon: DollarSign,
    title: "Affordable Auto Repair",
    text: "Fair, up-front pricing. You approve the work and the price before we start, with no surprises on the bill.",
  },
]

// Most-booked services, linked straight from the home page
const popular = [
  { title: "Oil Change Services", href: "/services/maintenance/oil-change-services" },
  { title: "Brake Pad Replacement", href: "/services/brakes/brake-pad-replacement" },
  { title: "Winter Tire Change", href: "/services/maintenance/tire-change" },
  { title: "Check Engine Light Diagnosis", href: "/services/diagnostics#check-engine-light" },
  { title: "Out of Province Inspection", href: "/services/inspection/out-of-province-inspection" },
  { title: "Pre-Purchase Inspection", href: "/services/inspection/pre-purchase-inspection" },
  { title: "Wheel Alignment", href: "/services/maintenance/wheel-alignment" },
  { title: "Power Steering Leak Repair", href: "/services/suspension/steering-repair" },
]

export default function Home() {
  return (
    <main className="flex-1">

      {/* ===== HERO: shop photo with headline and buttons on top ===== */}
      <section className="relative flex min-h-[500px] items-center justify-center">

        {/* Background photo (file lives in public/images) */}
        <Image
          src="/images/front.jpeg"
          alt="Mechanic leaning into a car's open engine bay during car repair in Edmonton"
          fill
          priority
          className="object-cover"
        />

        {/* Dark layer so the white text stays readable over the photo */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Headline, subtext, and buttons (z-10 keeps them above the dark layer) */}
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">Affordable Car Repair in Edmonton</h1>
          <p className="mt-4 text-lg md:text-xl">
            Trusted mechanics and certified technicians in West Edmonton, fixing domestic and import vehicles since
            2002.
          </p>

          {/* Buttons stack on phones, sit side by side from sm up */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded bg-brand-accent px-6 py-3 font-bold text-white hover:bg-brand-tint">
              Book Car Repair
            </Link>
            <a href={business.phoneHref} className="rounded border border-white px-6 py-3 font-bold text-white hover:bg-white/10">
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>


      {/* ===== ABOUT: trust section (independent, trusted, affordable) ===== */}
      <section className="px-6 py-14 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Trusted Mechanics in West Edmonton</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Leung&apos;s Auto Service is an independent auto repair shop in West Edmonton, owned by Allan Leung and serving
          Edmonton drivers since 2002. Our certified technicians explain the work before they start, and our prices
          keep car repair in Edmonton affordable.{" "}
          <Link href="/about" className="text-brand-accent underline hover:text-brand-tint">Learn more about our shop</Link>.
        </p>

        {/* 1 column on phones, 3 side by side from md up */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 text-left md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-lg border border-brand-light bg-brand-light/20 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white">
                <reason.icon size={24} />
              </div>
              <h3 className="mt-4 text-xl font-bold">{reason.title}</h3>
              <p className="mt-2 text-gray-700">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES: one card per hub, so every service is a click away ===== */}
      <section className="bg-brand-light/40 px-6 py-14 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Our Automotive Services</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Our automotive services cover routine maintenance and major repairs on domestic and import vehicles.
        </p>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col rounded-lg bg-white p-6 shadow transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-brand-dark">{service.title}</h3>
              <p className="mt-2 flex-1 text-gray-600">{service.blurb}</p>
              <ArrowRight className="mt-4 text-brand-accent transition group-hover:translate-x-1" size={20} aria-hidden="true" />
            </Link>
          ))}
        </div>

        {/* Direct links to the most-booked services */}
        <h3 className="mt-10 text-xl font-bold">Popular Services</h3>
        <div className="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-3">
          {popular.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-brand-accent/40 bg-white px-4 py-2 text-brand-dark transition hover:border-brand-dark hover:bg-brand-dark hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <Link href="/services" className="mt-8 inline-block font-bold text-brand-accent underline hover:text-brand-tint">
          See all automotive services
        </Link>
      </section>

      {/* ===== TESTIMONIALS: real Google reviews ===== */}
      <section className="px-6 py-14 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Car Repair Reviews from Edmonton Customers</h2>
        <p className="mt-4 text-lg md:text-xl">
          Here&apos;s what customers have said about their experience with Leung&apos;s Auto Service.
        </p>

        <Reviews reviews={reviewsBy("Leni Nievera", "DL Duffy", "Mac Rey")} />
      </section>

      {/* ===== LOCATION: name, address, phone, and hours for local search ===== */}
      <section className="bg-brand-light/40 px-6 py-14 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Affordable Auto Repair in West Edmonton</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Visit our shop at {business.street}, {business.city}, {business.province} {business.postalCode}. We&apos;re
          open {business.hours}.
        </p>
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-lg bg-white p-5 shadow">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white">
              <MapPin size={22} />
            </div>
            <div>
              <p className="font-bold">{business.street}</p>
              <p className="text-gray-600">{business.city}, {business.province} {business.postalCode}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-white p-5 shadow">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white">
              <Clock size={22} />
            </div>
            <div>
              <p className="font-bold">{business.hoursTime}</p>
              <p className="text-gray-600">{business.hoursDays}</p>
              <p className="text-gray-600">{business.hoursClosed}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOOKING: closing call to action ===== */}
      <BookingCta
        heading="Book Car Repair in Edmonton"
        text="Ready to get your vehicle looked at? Call our West Edmonton shop or book an appointment today."
        label="Book Affordable Car Repair"
      />

    </main>
  )
}
