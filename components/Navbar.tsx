'use client'
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const close = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <>


      {/* Desktop: lg and up */}
      <div className="hidden lg:block">
        <div className="flex justify-between px-8 py-4">
          <Link href="/" className="text-xl font-bold text-black">Leung Auto</Link>
          <p> Tuesday-Friday: 8AM - 6PM</p>
        </div>
        <nav className="relative hidden bg-[#2D3047] px-8 py-4 lg:block">

          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl text-gray-300 hover:text-white" onClick={close}>Home</Link>
            <Link href="/" className="text-xl text-gray-300 hover:text-white" onClick={close}>About</Link>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              className="text-xl text-gray-300 hover:text-white"
            >
              Services
            </button>
          </div>
          
          {servicesOpen && (
            <div className="absolute left-0 top-full z-10 flex w-full flex-row gap-8 bg-white px-8 py-3 shadow-lg">
              <Link href="/services/inspections" className="hover:text-gray-500" onClick={close}>Inspections</Link>
              <Link href="/services/diagnostics" className="hover:text-gray-500" onClick={close}>Diagnostics</Link>
              <Link href="/services/brake-suspensions" className="hover:text-gray-500" onClick={close}>Brake And Suspensions</Link>
              <Link href="/services/routine-maintenance" className="hover:text-gray-500" onClick={close}>Routine Maintenance</Link>
              <Link href="/services/system-flushes" className="hover:text-gray-500" onClick={close}>System Flushes</Link>
              <Link href="/services/oil-change" className="hover:text-gray-500" onClick={close}>Oil Change</Link>
              
              
            </div>
          )}
        </nav>
      </div>

      {/* Mobile: below lg */}
      <nav className="relative bg-[#2D3047] px-8 py-4 lg:hidden">
        <div className="flex justify-between">
          <div><Link href="/" className="text-xl font-bold text-white">Leung Auto</Link></div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="text-xl text-gray-300 hover:text-white"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute left-0 top-full z-10 flex w-full flex-col bg-white py-2 shadow-lg">
            <Link href="/" className="px-8 py-2 hover:bg-gray-100" onClick={close}>Home</Link>
            <Link href="/services/brake-suspensions" className="px-8 py-2 hover:bg-gray-100" onClick={close}>Brake And Suspensions</Link>
            <Link href="/services/oil-change" className="px-8 py-2 hover:bg-gray-100" onClick={close}>Oil Change</Link>
            <Link href="/services/diagnostics" className="px-8 py-2 hover:bg-gray-100" onClick={close}>Diagnostics</Link>
          </div>
        )}
      </nav>
    </>
  )
}