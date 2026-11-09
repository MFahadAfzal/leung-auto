'use client'
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CalendarCheck, ChevronDown, Clock, House, Info, MapPin, Menu, Phone, Wrench, X } from "lucide-react"
import { services } from "@/lib/services"
import { business } from "@/lib/business"

// Main pages in the nav bar. Services also opens the mega menu on desktop.
const links = [
  { title: "Home", href: "/", icon: House },
  { title: "About", href: "/about", icon: Info },
  { title: "Services", href: "/services", icon: Wrench },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const close = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  // A link is "current" on its own page, and Services stays current on every service page
  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  // Shop name with a wrench badge, used in both the desktop and mobile bars
  const brand = (onDark: boolean) => (
    <Link href="/" className="flex items-center gap-3" onClick={close}>
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          onDark ? "bg-[#BDDDFC] text-[#384959]" : "bg-[#384959] text-[#BDDDFC]"
        }`}
      >
        <Wrench size={20} />
      </span>
      <span className="leading-tight">
        <span className={`block text-lg font-bold sm:text-xl ${onDark ? "text-white" : "text-[#384959]"}`}>
          {business.name}
        </span>
        <span className={`hidden text-xs sm:block ${onDark ? "text-[#BDDDFC]" : "text-[#6A89A7]"}`}>
          Auto Repair in West Edmonton · Since 2002
        </span>
      </span>
    </Link>
  )

  return (
    <>

      {/* Desktop: lg and up */}
      <div className="hidden lg:block">

        {/* Top bar: shop name on the left, address, hours, and phone on the right */}
        <div className="flex items-center justify-between bg-white px-8 py-4">
          {brand(false)}
          <div className="flex items-center gap-8 text-sm text-[#384959]">
            <p className="flex items-center gap-2">
              <MapPin size={18} className="text-[#6A89A7]" />
              {business.street}
            </p>
            <p className="flex items-center gap-2">
              <Clock size={18} className="text-[#6A89A7]" />
              {business.hours}
            </p>
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 rounded-full border border-[#BDDDFC] px-4 py-2 text-base font-bold hover:bg-[#BDDDFC]/40"
            >
              <Phone size={18} className="text-[#6A89A7]" />
              {business.phone}
            </a>
          </div>
        </div>

        {/* Mouse leaving the whole nav (links + dropdown) closes the dropdown */}
        <nav
          className="relative z-50 bg-[#384959] px-8 shadow-md"
          onMouseLeave={() => setServicesOpen(false)}
        >
          <div className="flex items-center gap-2 py-3">
            {links.map((link) => {
              const isServices = link.href === "/services"
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  // Hover on Services opens the mega menu, click goes to the services page
                  onMouseEnter={isServices ? () => setServicesOpen(true) : undefined}
                  onClick={close}
                  className={`group relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition ${
                    isCurrent(link.href)
                      ? "bg-[#BDDDFC] text-[#384959] shadow-md"
                      : "text-[#BDDDFC] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <link.icon size={18} className="transition group-hover:scale-110" />
                  {link.title}
                  {isServices && (
                    <ChevronDown size={16} className={`transition ${servicesOpen ? "rotate-180" : ""}`} />
                  )}
                  {/* Light blue line that grows out from the centre on hover (not on the current page's pill) */}
                  {!isCurrent(link.href) && (
                    <span className="absolute inset-x-5 bottom-1 h-0.5 origin-center scale-x-0 rounded bg-[#BDDDFC] transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="ml-auto inline-flex items-center gap-2 rounded-full bg-[#BDDDFC] px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-[#384959] shadow-md transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
              onClick={close}
            >
              <CalendarCheck size={18} />
              Book Now
            </Link>
          </div>

          {/* Mega menu: each hub is a heading with its specific repairs under it */}
          {servicesOpen && (
            <div className="absolute left-0 top-full z-50 grid w-full grid-cols-3 gap-8 border-t-4 border-[#6A89A7] bg-white px-8 py-8 shadow-xl">
              {services.map((service) => (
                <div key={service.href}>
                  <Link
                    href={service.href}
                    className="font-bold text-[#384959] hover:underline"
                    onClick={close}
                  >
                    {service.title}
                  </Link>
                  <ul className="mt-3 flex flex-col gap-2 border-l-2 border-[#BDDDFC] pl-3">
                    {service.spokes.map((spoke) => (
                      <li key={spoke.href}>
                        <Link
                          href={spoke.href}
                          className="text-sm text-gray-600 hover:text-[#384959] hover:underline"
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
      <nav className="relative z-50 bg-[#384959] px-4 py-3 sm:px-8 lg:hidden">
        <div className="flex items-center justify-between gap-3">
          {brand(true)}
          <div className="flex items-center gap-2">
            {/* Tap-to-call is the main action on phones */}
            <a
              href={business.phoneHref}
              aria-label={`Call ${business.phone}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BDDDFC] text-[#384959]"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#BDDDFC] hover:bg-white/10 hover:text-white"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute left-0 top-full z-50 flex w-full flex-col border-t-4 border-[#6A89A7] bg-white shadow-xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`flex items-center gap-3 border-b border-[#BDDDFC] px-6 py-3 text-lg text-[#384959] ${
                  isCurrent(link.href) ? "border-l-4 border-l-[#6A89A7] bg-[#BDDDFC]/40 font-bold" : "hover:bg-[#BDDDFC]/20"
                }`}
                onClick={close}
              >
                <link.icon size={20} className="text-[#6A89A7]" />
                {link.title}
              </Link>
            ))}
            <div className="flex flex-col gap-3 p-6">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded bg-[#384959] px-6 py-3 font-bold text-white hover:bg-[#2A3744]"
                onClick={close}
              >
                <CalendarCheck size={18} />
                Book Now
              </Link>
              <a
                href={business.phoneHref}
                className="flex items-center justify-center gap-2 rounded border border-[#384959] px-6 py-3 font-bold text-[#384959]"
              >
                <Phone size={18} />
                Call {business.phone}
              </a>
              <p className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Clock size={16} />
                {business.hours}
              </p>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
