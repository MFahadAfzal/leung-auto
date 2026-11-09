// components/Panels.tsx
// Side-by-side panels for a service subpage: usually a light panel and a dark slate panel,
// with an optional "Good to know" tip strip underneath.

export function Panel({
  label,
  dark = false,
  id,
  children,
}: {
  // Small uppercase line above the panel's heading
  label?: string
  dark?: boolean
  // For in-page links like #shock-strut-replacement
  id?: string
  children: React.ReactNode
}) {
  return (
    <div
      id={id}
      className={
        dark
          ? "on-dark scroll-mt-4 rounded-2xl bg-[#384959] p-8 text-white shadow-xl"
          : "scroll-mt-4 rounded-2xl border border-[#BDDDFC] bg-white p-8 shadow-sm"
      }
    >
      {label && (
        <p className={`panel-label text-sm font-bold uppercase tracking-widest ${dark ? "text-[#BDDDFC]" : "text-[#6A89A7]"}`}>
          {label}
        </p>
      )}
      <div className={label ? "mt-2" : ""}>{children}</div>
    </div>
  )
}

export function PanelSection({
  gray = false,
  heading,
  tip,
  aside = false,
  children,
}: {
  gray?: boolean
  // The second panel is a short note: make it a narrower side callout that doesn't stretch to the first panel's height
  aside?: boolean
  // Optional centred heading above both panels
  heading?: string
  // Optional "Good to know" strip under the panels
  tip?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className={`${gray ? "bg-[#BDDDFC]/40 " : ""}px-6 py-16`}>
      {heading && <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold md:text-4xl">{heading}</h2>}
      <div
        className={`mx-auto grid max-w-5xl gap-6 ${heading ? "mt-10 " : ""}${
          aside ? "lg:grid-cols-5 lg:items-start lg:[&>*:first-child]:col-span-3 lg:[&>*:last-child]:col-span-2" : "lg:grid-cols-2"
        }`}
      >
        {children}
      </div>
      {tip && (
        <div className={`mx-auto mt-8 max-w-5xl rounded-2xl px-8 py-6 ${gray ? "bg-white shadow-sm" : "bg-[#BDDDFC]"}`}>
          <p className="text-lg text-[#384959]">
            <span className="font-bold">Good to know: </span>
            {tip}
          </p>
        </div>
      )}
    </section>
  )
}
