// components/WhyChooseUs.tsx
import Image from "next/image"

export type ShopFact = { value: string; label: string }

// "Why choose us" section on the hub pages: the shared shop photo (public/images/why-choose-us.jpg)
// fills the section behind white text, with the shop facts underneath.
// Each page passes its own keyword heading, text, facts, and alt text.
// Optional children (like a review card) sit in the right column; without them the photo shows there.
// The photo renders with its alt text even before the file exists in public/images.
export default function WhyChooseUs({
  heading,
  alt,
  facts,
  children,
  aside,
}: {
  heading: string
  // Keyword alt text for the shared photo, specific to the page
  alt: string
  facts: ShopFact[]
  // The paragraph(s) under the heading
  children: React.ReactNode
  // Right column content, shown in a white card over the photo
  aside?: React.ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark px-6 py-20">
      <Image
        src="/images/why-choose-us.jpg"
        alt={alt}
        fill
        sizes="100vw"
        // text-transparent hides the alt text visually if the file is missing (it stays in the page for Google)
        className="-z-20 object-cover text-transparent"
      />
      {/* Overlay: darkest on the left behind the text, lighter on the right so more of the photo shows */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/40"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div className="[text-shadow:0_2px_10px_rgb(0_0_0/0.6)]">
          <h2 className="accent-heading text-3xl font-bold text-white md:text-4xl">{heading}</h2>
          <div className="mt-6 space-y-4 text-lg text-white/90">{children}</div>
          <div className="mt-8 grid gap-6 border-t border-white/25 pt-6 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.value} className="border-l-4 border-brand-accent pl-3">
                <p className="text-lg font-bold text-white">{fact.value}</p>
                <p className="mt-1 text-sm text-brand-light">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>

        {aside && (
          <div className="rounded-2xl border-t-4 border-brand-accent bg-white p-8 text-center shadow-xl">{aside}</div>
        )}
      </div>
    </section>
  )
}
