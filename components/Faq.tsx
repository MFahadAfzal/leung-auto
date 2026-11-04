// components/Faq.tsx
export type FaqItem = { question: string; answer: string }

// FAQ section for a service page. The same questions are sent to Google as FAQ structured data,
// so answers are plain text (no links).
export default function Faq({
  title,
  faqs,
  gray = false,
}: {
  title: string
  faqs: FaqItem[]
  gray?: boolean
}) {
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
    <section className={`${gray ? "bg-gray-100 " : ""}px-6 py-12`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold">{title}</h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="mt-8">
            <h3 className="text-2xl font-bold">{faq.question}</h3>
            <p className="mt-2 text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
