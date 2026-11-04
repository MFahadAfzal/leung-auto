// components/BookingCta.tsx
import Link from "next/link"
import { business } from "@/lib/business"

// Closing call to action on a service page: a keyword booking button plus tap-to-call
export default function BookingCta({
  heading,
  text,
  label,
  gray = false,
}: {
  heading: string
  text: string
  label: string
  gray?: boolean
}) {
  return (
    <section className={`${gray ? "bg-gray-100 " : ""}px-6 py-12 text-center`}>
      <h2 className="text-3xl font-bold md:text-4xl">{heading}</h2>
      <p className="mt-4 text-lg md:text-xl">{text}</p>
      <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href="/contact" className="rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          {label}
        </Link>
        <a
          href={business.phoneHref}
          className={`rounded border border-[#2D3047] px-6 py-3 font-bold text-[#2D3047] ${gray ? "hover:bg-white" : "hover:bg-gray-100"}`}
        >
          Call {business.phone}
        </a>
      </div>
    </section>
  )
}
