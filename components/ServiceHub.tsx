// components/ServiceHub.tsx
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BookingCta from "@/components/BookingCta"
import OtherServices from "@/components/OtherServices"
import PageHero from "@/components/PageHero"
import Reviews, { type Review } from "@/components/Reviews"
import WhyChooseUs, { type ShopFact } from "@/components/WhyChooseUs"
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
  whyUs,
  image,
  details,
}: {
  href: string
  intro: string
  servicesHeading: string
  ctaHeading: string
  ctaLabel: string
  // Optional customer reviews, shown the same way as on the home page
  reviews?: { heading: string; text: string; items: Review[] }
  // "Why choose us" section over the shared shop photo, with this hub's keywords
  whyUs?: { heading: string; text: React.ReactNode; alt: string; facts: ShopFact[] }
  // Background photo for the intro, with keyword alt text
  image?: { src: string; alt: string }
  // Optional extra section under the service cards (short write-ups that link to the spoke pages)
  details?: React.ReactNode
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
                className="group flex flex-col rounded-xl border border-brand-light border-t-4 border-t-brand-accent bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-accent hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent text-white transition group-hover:bg-brand-support">
                  <Icon size={28} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-dark group-hover:text-brand-accent">{spoke.title}</h3>
                <p className="mt-2 flex-1 text-gray-600">{spoke.blurb}</p>
                <ArrowRight className="mt-4 text-brand-accent transition group-hover:translate-x-1" size={20} aria-hidden="true" />
              </Link>
            )
          })}
        </div>
      </section>

      {details}

      {/* With a "why choose us" section, the reviews sit in its white card (like the brakes page) */}
      {whyUs && (
        <WhyChooseUs
          heading={whyUs.heading}
          alt={whyUs.alt}
          facts={whyUs.facts}
          aside={
            reviews && (
              <>
                <h2 className="text-2xl font-bold md:text-3xl">{reviews.heading}</h2>
                <p className="mt-4 text-lg text-gray-700">{reviews.text}</p>
                <Reviews reviews={reviews.items} carousel />
              </>
            )
          }
        >
          <p>{whyUs.text}</p>
        </WhyChooseUs>
      )}

      {reviews && !whyUs && (
        <section className="bg-brand-light/40 px-6 py-16 text-center">
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
