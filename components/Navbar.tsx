'use client'
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { services } from "@/lib/services"

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
          <div className="flex gap-10 items-end text-right text-gray-600">
            <p> 12025 149 St NW</p>
            <p> Tuesday-Friday: 8AM - 6PM</p>
            <p> 780-452-0134</p>
          </div>
        </div>

        {/* Mouse leaving the whole nav (links + dropdown) closes the dropdown */}
        <nav
          className="relative z-50 bg-[#2D3047] px-8 py-4"
          onMouseLeave={() => setServicesOpen(false)}
        >
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl text-gray-300 hover:text-white" onClick={close}>Home</Link>
            <Link href="/about" className="text-xl text-gray-300 hover:text-white" onClick={close}>About</Link>

            {/* Hover opens the mega menu, click goes to the services page */}
            <Link
              href="/services"
              className="text-xl text-gray-300 hover:text-white"
              onMouseEnter={() => setServicesOpen(true)}
              onClick={close}
            >
              Services
            </Link>
          </div>

          {/* Mega menu: each hub is a heading with its specific repairs under it */}
          {servicesOpen && (
            <div className="absolute left-0 top-full z-50 grid w-full grid-cols-3 gap-8 bg-white px-8 py-6 shadow-lg">
              {services.map((service) => (
                <div key={service.href}>
                  <Link
                    href={service.href}
                    className="font-bold text-[#2D3047] hover:underline"
                    onClick={close}
                  >
                    {service.title}
                  </Link>
                  <ul className="mt-2 flex flex-col gap-1">
                    {service.spokes.map((spoke) => (
                      <li key={spoke.href}>
                        <Link
                          href={spoke.href}
                          className="text-sm text-gray-600 hover:text-black"
                          onClick={close}
                        >
                          {spoke.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </nav>
      </div>

      {/* Mobile: below lg */}
      <nav className="relative z-50 bg-[#2D3047] px-8 py-4 lg:hidden">
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
          <div className="absolute left-0 top-full z-50 flex w-full flex-col bg-white py-2 shadow-lg">
            <Link href="/" className="px-8 py-2 hover:bg-gray-100" onClick={close}>Home</Link>
            <Link href="/about" className="px-8 py-2 hover:bg-gray-100" onClick={close}>About</Link>
            <Link href="/services" className="px-8 py-2 hover:bg-gray-100" onClick={close}>Services</Link>
            <Link href="/contact" className="px-8 py-2 hover:bg-gray-100" onClick={close}>Contact</Link>
          </div>
        )}
      </nav>
    </>
  )
}