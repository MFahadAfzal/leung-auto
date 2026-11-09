// components/FeatureBand.tsx
// One topic in a rounded band: heading on the left, text on the right (stacked on phones).

export default function FeatureBand({
  heading,
  gray = false,
  id,
  children,
}: {
  heading: string
  gray?: boolean
  id?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={`scroll-mt-4 ${gray ? "bg-[#BDDDFC]/40 " : ""}px-6 py-16`}>
      <div
        className={`mx-auto grid max-w-5xl gap-6 rounded-2xl p-8 md:p-10 lg:grid-cols-5 lg:gap-10 ${
          gray ? "bg-white shadow-sm" : "bg-[#BDDDFC]"
        }`}
      >
        <div className="lg:col-span-2">
          <h2 className="accent-heading text-3xl font-bold">{heading}</h2>
        </div>
        <div className="lg:col-span-3 [&>*:first-child]:mt-0">{children}</div>
      </div>
    </section>
  )
}
