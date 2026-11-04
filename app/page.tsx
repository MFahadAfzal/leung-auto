import Image from "next/image"
import Link from "next/link"
import { BadgeCheck, DollarSign, ShieldCheck } from "lucide-react"
import Reviews from "@/components/Reviews"
import { reviewsBy } from "@/lib/reviews"
import { business } from "@/lib/business"
import { services } from "@/lib/services"

export const metadata = {
  title: "Affordable Car Repair Edmonton | Leung's Auto Service",
  description:
    "Affordable car repair in West Edmonton since 2002. Trusted mechanics and certified technicians for all automotive services. Call 780-452-0134 to book.",
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
          alt="Mechanic working on a car at Leung's Auto Service in Edmonton"
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
            <Link href="/contact" className="rounded bg-white px-6 py-3 font-bold text-[#2D3047] hover:bg-gray-200">
              Book Car Repair
            </Link>
            <a href={business.phoneHref} className="rounded border border-white px-6 py-3 font-bold text-white hover:bg-white/10">
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>


      {/* ===== ABOUT: trust section (independent, trusted, affordable) ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Trusted Mechanics in West Edmonton</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Leung's Auto Service is an independent car repair shop in West Edmonton, owned by Allan Leung and serving
          Edmonton drivers since 2002. Our certified technicians explain the work before they start, and our prices
          keep car repair in Edmonton affordable.{" "}
          <Link href="/about" className="text-[#2D3047] underline">Learn more about our shop</Link>.
        </p>

        {/* 1 column on phones, 3 side by side from md up */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 text-left md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded bg-gray-100 p-6">
              <reason.icon className="text-[#2D3047]" size={28} />
              <h3 className="mt-2 text-xl font-bold">{reason.title}</h3>
              <p className="mt-2 text-gray-700">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES: one card per hub, so every service is a click away ===== */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Our Automotive Services</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Our automotive services cover routine maintenance and major repairs on domestic and import vehicles.
        </p>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="flex flex-col rounded bg-white p-6 shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-[#2D3047]">{service.title}</h3>
              <p className="mt-2 flex-1 text-gray-600">{service.blurb}</p>
              <span className="mt-4 font-bold text-[#2D3047] underline">Learn more</span>
            </Link>
          ))}
        </div>

        {/* Direct links to the most-booked services */}
        <h3 className="mt-10 text-xl font-bold">Popular Services</h3>
        <div className="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-2">
          {popular.map((item) => (
            <Link key={item.href} href={item.href} className="text-[#2D3047] underline">
              {item.title}
            </Link>
          ))}
        </div>

        <Link href="/services" className="mt-8 inline-block font-bold text-[#2D3047] underline">
          See all automotive services
        </Link>
      </section>

      {/* ===== TESTIMONIALS: real Google reviews ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Car Repair Reviews from Edmonton Customers</h2>
        <p className="mt-4 text-lg md:text-xl">
          Here's what customers have said about their experience with Leung's Auto Service.
        </p>

        <Reviews reviews={reviewsBy("Leni Nievera", "DL Duffy", "Mac Rey")} />
      </section>

      {/* ===== LOCATION: name, address, phone, and hours for local search ===== */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Affordable Auto Repair in West Edmonton</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Visit our shop at {business.street}, {business.city}, {business.province} {business.postalCode}. We're
          open {business.hoursDays}, {business.hoursTime}.
        </p>
      </section>

      {/* ===== BOOKING: closing call to action ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Book Car Repair in Edmonton</h2>
        <p className="mt-4 text-lg md:text-xl">
          Ready to get your vehicle looked at? Call our West Edmonton shop or book an appointment today.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Book Affordable Car Repair
          </Link>
          <a href={business.phoneHref} className="rounded border border-[#2D3047] px-6 py-3 font-bold text-[#2D3047] hover:bg-gray-100">
            Call {business.phone}
          </a>
        </div>
      </section>

    </main>
  )
}
