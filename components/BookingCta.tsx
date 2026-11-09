// components/BookingCta.tsx
import Link from "next/link"
import { Phone } from "lucide-react"
import { business } from "@/lib/business"

// Closing call to action on a service page: a keyword booking button plus tap-to-call,
// in a navy card with space around it so it never runs into the navy footer.
export default function BookingCta({
  heading,
  text,
  label,
  gray = false,
  children,
}: {
  heading: string
  text: React.ReactNode
  label: string
  gray?: boolean
  // Optional extra line under the buttons (like a link to all services)
  children?: React.ReactNode
}) {
  return (
    <section className={`${gray ? "bg-[#BDDDFC]/40 " : ""}px-6 py-12`}>
      <div className="mx-auto max-w-5xl rounded-2xl bg-[#384959] px-6 py-12 text-center text-white shadow-lg md:px-12">
        <h2 className="text-3xl font-bold md:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90 md:text-xl">{text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="rounded px-6 py-3 bg-[#BDDDFC] font-bold text-[#384959] hover:bg-white">
            {label}
          </Link>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 rounded border border-[#BDDDFC] px-6 py-3 font-bold text-[#BDDDFC] hover:bg-white/10"
          >
            <Phone size={18} />
            Call {business.phone}
          </a>
        </div>
        {children && <div className="mt-6 text-white/90">{children}</div>}
      </div>
    </section>
  )
}
