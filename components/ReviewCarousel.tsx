// components/ReviewCarousel.tsx
"use client"
import { Children, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Shows one review card at a time, with arrows and dots to move between them (swipe works on phones).
// Every card stays in the page, just scrolled out of view, so Google still reads all the reviews.
export default function ReviewCarousel({ children }: { children: React.ReactNode }) {
  const slides = Children.toArray(children)
  const track = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const goTo = (i: number) => {
    const el = track.current
    if (!el) return
    const next = (i + slides.length) % slides.length
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" })
  }

  // Keep the dots in sync when the visitor swipes instead of using the arrows
  const onScroll = () => {
    const el = track.current
    if (el) setCurrent(Math.round(el.scrollLeft / el.clientWidth))
  }

  return (
    <div className="mt-8">
      <div
        ref={track}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="flex w-full shrink-0 snap-center"
            aria-roledescription="slide"
            aria-label={`Review ${i + 1} of ${slides.length}`}
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous review"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-light text-brand-dark transition hover:border-brand-accent hover:bg-brand-accent hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show review ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all ${i === current ? "w-6 bg-brand-accent" : "w-2.5 bg-brand-light hover:bg-brand-support"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next review"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-light text-brand-dark transition hover:border-brand-accent hover:bg-brand-accent hover:text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
