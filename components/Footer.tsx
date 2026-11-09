// components/Footer.tsx
import Link from "next/link"
import { BadgeCheck, Clock, MapPin, Phone, Wrench } from "lucide-react"
import { business } from "@/lib/business"
import { services } from "@/lib/services"

const mapsQuery = encodeURIComponent(business.mapsQuery)

export default function Footer() {
  return (
    <footer className="bg-[#384959] text-[#BDDDFC]">

      <div className="mx-auto grid max-w-6xl gap-10 px-8 py-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Shop details */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#BDDDFC] text-[#384959]">
              <Wrench size={20} />
            </span>
            <p className="text-xl font-bold text-white">{business.name}</p>
          </div>
          <p className="mt-4">
            Independent auto repair shop in West Edmonton, serving domestic and import vehicles since 2002.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#6A89A7] px-3 py-1 text-sm">
            <BadgeCheck size={16} />
            AMVIC Certified
          </p>
        </div>

        {/* Contact and hours */}
        <div>
          <p className="font-bold uppercase tracking-wider text-white">Visit Us</p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex gap-3 hover:text-white"
          >
            <MapPin size={18} className="mt-1 shrink-0 text-[#6A89A7]" />
            <span>
              {business.street}
              <br />
              {business.city}, {business.province} {business.postalCode}
            </span>
          </a>
          <a href={business.phoneHref} className="mt-3 flex gap-3 hover:text-white">
            <Phone size={18} className="mt-1 shrink-0 text-[#6A89A7]" />
            {business.phone}
          </a>
          <div className="mt-3 flex gap-3">
            <Clock size={18} className="mt-1 shrink-0 text-[#6A89A7]" />
            <span>
              {business.hoursDays}
              <br />
              {business.hoursTime}
              <br />
              Closed weekends
            </span>
          </div>
        </div>

        {/* Built from the same list as the navbar, so it always matches the real service pages */}
        <div>
          <p className="font-bold uppercase tracking-wider text-white">Services</p>
          <ul className="mt-4 flex flex-col gap-2">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="hover:text-white hover:underline">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold uppercase tracking-wider text-white">Quick Links</p>
          <ul className="mt-4 flex flex-col gap-2">
            <li><Link href="/" className="hover:text-white hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:text-white hover:underline">About Our Shop</Link></li>
            <li><Link href="/services" className="hover:text-white hover:underline">All Automotive Services</Link></li>
            <li><Link href="/contact" className="hover:text-white hover:underline">Book an Appointment</Link></li>
          </ul>
        </div>

      </div>

      <div className="bg-[#2A3744] px-8 py-4">
        <p className="mx-auto max-w-6xl text-center text-sm md:text-left">
          © 2026 {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
