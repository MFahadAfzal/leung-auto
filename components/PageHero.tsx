// components/PageHero.tsx
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { business } from "@/lib/business"

// Intro banner at the top of an inner page: the page's photo fills the banner behind the text,
// with a slate overlay so the white text stays readable. Shows the H1, the intro text, and
// a keyword booking button with tap-to-call beside it (or custom `actions`).
//
// The photo always renders with its alt text, even before the file exists in public/images,
// so each page is ready for its photo. Until then the overlay colour shows instead.
export default function PageHero({
  heading,
  cta,
  eyebrow,
  image,
  actions,
  children,
}: {
  heading: React.ReactNode
  // Label for the booking button
  cta?: React.ReactNode
  eyebrow?: string
  // Background photo in public/images, with keyword alt text
  image?: { src: string; alt: string }
  // Replaces the default booking + call buttons
  actions?: React.ReactNode
  children: React.ReactNode
}) {
  const buttons =
    actions ??
    (cta && (
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href="/contact" className="rounded bg-[#BDDDFC] px-6 py-3 font-bold text-[#384959] shadow-md hover:bg-white">
          {cta}
        </Link>
        <a
          href={business.phoneHref}
          className="inline-flex items-center gap-2 rounded border border-white px-6 py-3 font-bold text-white hover:bg-white/10"
        >
          <Phone size={18} />
          Call {business.phone}
        </a>
      </div>
    ))

  return (
    <section className="relative isolate overflow-hidden bg-[#384959] px-6 pb-16 pt-6 text-center md:pb-24">
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          // text-transparent hides the alt text visually if the file is missing (it stays in the page for Google)
          className="-z-20 object-cover text-transparent"
        />
      )}

      {/* Overlay: dark enough for white text over any photo, and steel blue toward one corner so the
          banner never looks like a continuation of the slate navbar */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-br from-[#384959]/90 via-[#384959]/75 to-[#6A89A7]/70"
        aria-hidden="true"
      />

      {/* Home / Services / ... trail, on top of the photo (only on pages under /services) */}
      <Breadcrumbs />

      <div className="pt-8 md:pt-14">
        {eyebrow && <p className="text-sm font-bold uppercase tracking-widest text-[#BDDDFC]">{eyebrow}</p>}
        <h1 className={`${eyebrow ? "mt-3 " : ""}text-4xl font-bold text-white md:text-5xl`}>{heading}</h1>
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#BDDDFC]" />
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 md:text-xl">{children}</p>
        {buttons}
      </div>
    </section>
  )
}
