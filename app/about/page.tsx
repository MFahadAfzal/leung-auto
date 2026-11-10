// app/about/page.tsx
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Car,
  ClipboardCheck,
  Clock,
  Disc,
  Droplet,
  Gauge,
  Handshake,
  MapPin,
  MessageSquare,
  Phone,
  Users,
} from "lucide-react"
import { business } from "@/lib/business"
import PageHero from "@/components/PageHero"

export const metadata = {
  title: "About Leung's Auto Service | Auto Repair Shop in Edmonton",
  description:
    "Leung's Auto Service is an independent, AMVIC certified auto repair shop in West Edmonton, serving domestic and import vehicles since 2002.",
  alternates: {
    canonical: "/about",
  },
}

// Quick facts shown in the strip under the intro
const facts = [
  { icon: CalendarCheck, label: "Serving Edmonton", value: "Since 2002" },
  { icon: BadgeCheck, label: "Licensed shop", value: "AMVIC Certified" },
  { icon: Car, label: "We work on", value: "Domestic & Import" },
  { icon: Users, label: "Run by", value: "Owner Allan Leung" },
]

// How the shop works with customers
const values = [
  {
    icon: MessageSquare,
    title: "We Explain First",
    text: "Before any repair starts, we tell you what is wrong and what it will take to fix it.",
  },
  {
    icon: Handshake,
    title: "Fair, Honest Pricing",
    text: "You know what you are paying for before we pick up a wrench. No surprises on the bill.",
  },
  {
    icon: Users,
    title: "Customers Who Come Back",
    text: "Most of our customers return, and many send their friends and family our way.",
  },
]

// The work the shop does most, each linked with keyword anchor text
const mainServices = [
  { icon: Disc, title: "Brake repair", href: "/services/brakes" },
  { icon: Gauge, title: "Car diagnostics", href: "/services/diagnostics" },
  { icon: Droplet, title: "Oil changes", href: "/services/maintenance/oil-change-services" },
  { icon: ClipboardCheck, title: "Out of province inspections", href: "/services/inspection/out-of-province-inspection" },
]

const mapsQuery = encodeURIComponent(business.mapsQuery)

export default function About() {
  return (
    <main className="flex-1">


      {/* ===== INTRO: shop photo behind the headline ===== */}
      <PageHero
        heading="About Leung's Auto Service, an Auto Repair Shop in Edmonton"
        eyebrow="West Edmonton · Since 2002"
        image={{ src: "/images/about-leungs-auto.jpg", alt: "Inside Leung's Auto Service, an independent auto repair shop in West Edmonton" }}
      >
        Leung&apos;s Auto Service is an independent auto repair shop in West Edmonton, run by owner Allan Leung
        and serving local drivers since 2002.
      </PageHero>

      {/* ===== FACTS: 2 columns on phones, 4 across from md up ===== */}
      <section className="px-6">
        <div className="relative z-10 mx-auto -mt-8 grid max-w-5xl grid-cols-2 gap-4 rounded-lg bg-white p-6 shadow-lg md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.value} className="flex flex-col items-center text-center">
              <fact.icon className="text-brand-accent" size={28} />
              <p className="mt-2 font-bold text-brand-dark">{fact.value}</p>
              <p className="text-sm text-gray-600">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STORY: photo beside text on desktop, stacked on phones ===== */}
      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">

          {/* Shop photo */}
          <div className="relative h-72 w-full overflow-hidden rounded-lg shadow-lg ring-4 ring-brand-light md:h-[28rem] md:w-1/2">
            <Image
              src="/images/front.jpeg"
              alt="Front of Leung's Auto Service, an independent auto repair shop on 149 Street in West Edmonton"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Story text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">Honest Auto Repair at Fair Prices</h2>
            <div className="mt-3 h-1 w-16 rounded bg-brand-accent" />
            <p className="mt-6 text-lg text-gray-700">
              We work on both domestic and import vehicles. Before any repair starts, we explain what is wrong
              and what it will take to fix, so you know what you are paying for.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              The shop is AMVIC certified, and most of our customers come back or send their friends and family.
            </p>
          </div>
        </div>
      </section>

      {/* ===== VALUES: how we treat every customer ===== */}
      <section className="bg-brand-light/40 px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">Why Edmonton Drivers Trust Our Shop</h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 text-left md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-lg border-t-4 border-brand-accent bg-white p-6 shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white">
                <value.icon size={24} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-brand-dark">{value.title}</h3>
              <p className="mt-2 text-gray-700">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES: the work we do most ===== */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">Our Most Requested Auto Repairs</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
          Most of our work is brakes, diagnostics, oil changes, and inspections.
        </p>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {mainServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-center gap-3 rounded-lg border border-brand-light p-5 transition hover:border-brand-accent hover:bg-brand-light/30 hover:shadow-md"
            >
              <service.icon className="shrink-0 text-brand-accent" size={26} />
              <span className="flex-1 font-bold text-brand-dark">{service.title}</span>
              <ArrowRight className="shrink-0 text-brand-accent transition group-hover:translate-x-1" size={18} />
            </Link>
          ))}
        </div>
        <Link href="/services" className="mt-8 inline-block font-bold text-brand-accent underline hover:text-brand-tint">
          See all our automotive services
        </Link>
      </section>

      {/* ===== CALL TO ACTION: address, hours, and booking ===== */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl rounded-2xl bg-brand-accent px-6 py-12 text-center text-white shadow-lg md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">Visit Our Auto Repair Shop in West Edmonton</h2>

          <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-center gap-4 text-lg text-white/90 md:flex-row md:gap-10">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <MapPin size={20} />
              {business.street}, {business.city}, {business.province} {business.postalCode}
            </a>
            <p className="flex items-center gap-2">
              <Clock size={20} />
              {business.hours}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded bg-white px-6 py-3 font-bold text-brand-accent hover:bg-brand-dark hover:text-white">
              Book Auto Repair
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded border border-white px-6 py-3 font-bold text-white hover:bg-white/10"
            >
              <Phone size={18} />
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
