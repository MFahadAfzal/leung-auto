// components/ServiceHub.tsx
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BookingCta from "@/components/BookingCta"
import OtherServices from "@/components/OtherServices"
import PageHero from "@/components/PageHero"
import Reviews, { type Review } from "@/components/Reviews"
import { services } from "@/lib/services"
import { spokeIcon } from "@/lib/spokeIcons"

// Hub page for one main service: an intro, then a card for each specific repair
// so visitors can pick the one that matches what their vehicle is doing.
// The headings and button text are passed in so each hub uses its own keywords.
export default function ServiceHub({
  href,
  intro,
  servicesHeading,
  ctaHeading,
  ctaLabel,
  reviews,
  image,
}: {
  href: string
  intro: string
  servicesHeading: string
  ctaHeading: string
  ctaLabel: string
  // Optional customer reviews, shown the same way as on the home page
  reviews?: { heading: string; text: string; items: Review[] }
  // Background photo for the intro, with keyword alt text
  image?: { src: string; alt: string }
}) {
  const service = services.find((s) => s.href === href)!

  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <PageHero heading={`${service.title} in Edmonton`} cta={ctaLabel} image={image}>
        {intro}
      </PageHero>

      {/* ===== SPECIFIC SERVICES: one card per repair, with the symptoms it fixes ===== */}
      <section className="px-6 py-16">
        <h2 className="text-center text-3xl font-bold md:text-4xl">{servicesHeading}</h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.spokes.map((spoke) => {
            const Icon = spokeIcon(spoke.href)
            return (
              <Link
                key={spoke.href}
                href={spoke.href}
                className="group flex flex-col rounded-xl border border-[#BDDDFC] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#6A89A7] hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#384959] text-[#BDDDFC] transition group-hover:bg-[#6A89A7] group-hover:text-white">
                  <Icon size={28} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#384959]">{spoke.title}</h3>
                <p className="mt-2 flex-1 text-gray-600">{spoke.blurb}</p>
                <ArrowRight className="mt-4 text-[#6A89A7] transition group-hover:translate-x-1" size={20} aria-hidden="true" />
              </Link>
            )
          })}
        </div>
      </section>

      {reviews && (
        <section className="bg-[#BDDDFC]/40 px-6 py-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{reviews.heading}</h2>
          <p className="mt-4 text-lg text-gray-700 md:text-xl">{reviews.text}</p>
          <Reviews reviews={reviews.items} onGray />
        </section>
      )}

      {/* ===== CALL TO ACTION ===== */}
      <BookingCta
        heading={ctaHeading}
        text="Tell us what your vehicle is doing and we'll point you in the right direction."
        label={ctaLabel}
      >
        <Link href="/services" className="underline hover:text-white">See all automotive services</Link>
      </BookingCta>

      <OtherServices current={href} />

    </main>
  )
}
