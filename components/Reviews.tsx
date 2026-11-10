// components/Reviews.tsx
import { Quote, Star } from "lucide-react"
import { businessId } from "@/lib/business"
import ReviewCarousel from "@/components/ReviewCarousel"

// rating is optional: only show stars when we know what the customer gave.
// key tells apart two excerpts of the same customer's review; it defaults to the name.
export type Review = { name: string; text: string; rating?: number; key?: string }

// Grid of customer review cards. onGray gives the cards a white background
// so they stand out when the section behind them is grey. carousel shows one card at a time with
// arrows and dots (used in the narrow review card of the "why choose us" section).
// Also sends each review to Google as Review structured data, using exactly the text shown on the page.
export default function Reviews({
  reviews,
  onGray = false,
  carousel = false,
}: {
  reviews: Review[]
  onGray?: boolean
  carousel?: boolean
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": reviews.map((review) => ({
      "@type": "Review",
      // Points to the AutoRepair business in the layout's structured data
      itemReviewed: { "@id": businessId },
      author: { "@type": "Person", name: review.name },
      ...(review.rating && {
        reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5, worstRating: 1 },
      }),
      reviewBody: review.text,
      // The reviews were first posted on Google
      publisher: { "@type": "Organization", name: "Google" },
    })),
  }

  // One review card: stars, the review text, then the customer's initial and name
  const card = (review: Review) => (
    <div
      key={review.key ?? review.name}
      className={`flex w-full flex-col rounded-lg p-6 text-left ${onGray ? "bg-white shadow" : "border border-brand-light bg-brand-light/20"}`}
    >
      <div className="mb-4 flex items-center justify-between">
        {review.rating ? (
          <div className="flex gap-1 text-yellow-500" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: review.rating }, (_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
        ) : (
          <span />
        )}
        <Quote className="text-gray-300" size={28} aria-hidden="true" />
      </div>

      <p className="flex-1 text-gray-700">“{review.text}”</p>

      {/* Initial in a navy circle, then the name */}
      <div className="mt-6 flex items-center gap-3 border-t border-brand-light pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-dark font-bold uppercase text-white">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold">{review.name}</p>
          <p className="text-sm text-gray-500">Google review</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      {carousel && reviews.length > 1 ? (
        <ReviewCarousel>{reviews.map(card)}</ReviewCarousel>
      ) : (
        <div
          className={`mx-auto mt-8 grid gap-6 ${
            carousel ? "" : reviews.length >= 3 ? "max-w-5xl lg:grid-cols-3" : reviews.length === 2 ? "max-w-5xl md:grid-cols-2" : "max-w-2xl"
          }`}
        >
          {reviews.map(card)}
        </div>
      )}
    </>
  )
}
