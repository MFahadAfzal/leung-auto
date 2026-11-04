// components/Reviews.tsx
import { Star } from "lucide-react"

// rating is optional: only show stars when we know what the customer gave.
// key tells apart two excerpts of the same customer's review; it defaults to the name.
export type Review = { name: string; text: string; rating?: number; key?: string }

// Grid of customer review cards. onGray gives the cards a white background
// so they stand out when the section behind them is grey.
export default function Reviews({ reviews, onGray = false }: { reviews: Review[]; onGray?: boolean }) {
  return (
    <div
      className={`mx-auto mt-8 grid gap-6 ${
        reviews.length >= 3 ? "max-w-6xl lg:grid-cols-3" : reviews.length === 2 ? "max-w-6xl md:grid-cols-2" : "max-w-2xl"
      }`}
    >
      {reviews.map((review) => (
        <div key={review.key ?? review.name} className={`flex flex-col rounded p-6 text-left shadow ${onGray ? "bg-white" : "bg-gray-100"}`}>
          {review.rating && (
            <div className="mb-4 flex gap-1 text-yellow-500" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: review.rating }, (_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
          )}

          <p className="flex-1 text-gray-700">“{review.text}”</p>

          <p className="mt-4 font-bold">{review.name}</p>
          <p className="text-sm text-gray-500">Google review</p>
        </div>
      ))}
    </div>
  )
}
