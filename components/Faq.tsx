// components/Faq.tsx
import { ChevronDown } from "lucide-react"
import { business } from "@/lib/business"

export type FaqItem = { question: string; answer: string }

// FAQ section for a service page. The same questions are sent to Google as FAQ structured data,
// so answers are plain text (no links).
export default function Faq({
  title,
  faqs,
  gray = false,
  aside,
  split = false,
}: {
  title: string
  faqs: FaqItem[]
  gray?: boolean
  // Optional content under the heading. When given, the heading and this sit on the left
  // and the questions on the right (stacked on phones).
  aside?: React.ReactNode
  // Split layout with the default "call us" line on the left
  split?: boolean
}) {
  if (split && !aside) {
    aside = (
      <p>
        Have a question that isn&apos;t answered here? Call us at{" "}
        <a href={business.phoneHref} className="font-bold text-brand-dark underline">{business.phone}</a>.
      </p>
    )
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <section className={`${gray ? "bg-brand-light/40 " : ""}px-6 py-16`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      {aside ? (
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <h2 className="accent-heading text-3xl font-bold md:text-4xl">{title}</h2>
            <div className="mt-6 text-lg text-gray-700">{aside}</div>
          </div>
          {/* Click a question to open its answer. Answers stay in the page, so Google still reads them. */}
          <div className="space-y-3 lg:col-span-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}

                className={`group rounded-xl border-l-4 border-l-brand-accent ${gray ? "bg-white shadow-sm" : "border border-brand-light bg-brand-light/20"}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-bold text-brand-dark md:text-xl">{faq.question}</h3>
                  <ChevronDown className="shrink-0 text-brand-support transition group-open:rotate-180" size={22} />
                </summary>
                <p className="px-5 pb-5 text-lg text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">{title}</h2>
          {/* Click a question to open its answer. Answers stay in the page, so Google still reads them. */}
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}

                className={`group rounded-xl border-l-4 border-l-brand-accent ${gray ? "bg-white shadow-sm" : "border border-brand-light bg-brand-light/20"}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-bold text-brand-dark md:text-xl">{faq.question}</h3>
                  <ChevronDown className="shrink-0 text-brand-support transition group-open:rotate-180" size={22} />
                </summary>
                <p className="px-5 pb-5 text-lg text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
