// components/Footer.tsx
import Link from "next/link"

export default function Footer() {
  return (

    <footer className="bg-[#2D3047] px-8 py-10 text-gray-300">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">

            <div>
            <p className="text-xl font-bold text-white">Leung Auto</p>
            <p className="mt-2">12025 149 St NW</p>
            <p>Edmonton, AB T5L 2J2</p>
            <p className="mt-2">Phone: 780-555-0123</p>
            </div>

            <div>
            <p className="font-bold text-white">Hours</p>
            <p className="mt-2">Tuesday - Friday</p>
            <p>8AM - 6PM</p>
            </div>

            <div className="flex flex-col gap-2">
            <p className="font-bold text-white">Services</p>
            <Link href="/services/inspections" className="hover:text-white">Inspections</Link>
            <Link href="/services/diagnostics" className="hover:text-white">Diagnostics</Link>
            <Link href="/services/brake-suspensions" className="hover:text-white">Brake And Suspensions</Link>
            <Link href="/services/routine-maintenance" className="hover:text-white">Routine Maintenance</Link>
            <Link href="/services/system-flushes" className="hover:text-white">System Flushes</Link>
            <Link href="/services/oil-change" className="hover:text-white">Oil Change</Link>
            </div>

        </div>

        <p className="mt-8 border-t border-gray-600 pt-4 text-sm">
            © 2026 Leung's Auto Service. All rights reserved.
        </p>
    </footer>

  )
}