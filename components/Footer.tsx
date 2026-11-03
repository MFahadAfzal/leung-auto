// components/Footer.tsx
import Link from "next/link"
import { business } from "@/lib/business"
import { services } from "@/lib/services"

export default function Footer() {
  return (

    <footer className="bg-[#2D3047] px-8 py-10 text-gray-300">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div>
            <p className="text-xl font-bold text-white">{business.name}</p>
            <p className="mt-2">{business.street}</p>
            <p>{business.city}, {business.province} {business.postalCode}</p>
            <p className="mt-2">Phone: <a href={business.phoneHref} className="hover:text-white">{business.phone}</a></p>
            </div>

            <div>
            <p className="font-bold text-white">Hours</p>
            <p className="mt-2">{business.hoursDays}</p>
            <p>{business.hoursTime}</p>
            <p>Closed weekends</p>
            </div>

            {/* Built from the same list as the navbar, so it always matches the real service pages */}
            <div className="flex flex-col gap-2">
            <p className="font-bold text-white">Services</p>
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="hover:text-white">{service.title}</Link>
            ))}
            </div>

            <div className="flex flex-col gap-2">
            <p className="font-bold text-white">Quick Links</p>
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/services" className="hover:text-white">All Services</Link>
            <Link href="/contact" className="hover:text-white">Book an Appointment</Link>
            </div>

        </div>

        <p className="mt-8 border-t border-gray-600 pt-4 text-sm">
            © 2026 {business.name}. All rights reserved.
        </p>
    </footer>

  )
}
