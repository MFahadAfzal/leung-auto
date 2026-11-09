// components/StepsSection.tsx
// Centred heading and text, then the job as numbered steps in a row joined by a line
// (stacked on phones). Steps can have a short title, or just text.

type Step = { title?: string; text: string }

export default function StepsSection({
  heading,
  steps,
  gray = false,
  id,
  children,
}: {
  heading: string
  steps: Step[]
  gray?: boolean
  id?: string
  children?: React.ReactNode
}) {
  // The ring around each number matches the section background, so the line looks like it passes behind
  const ring = gray ? "ring-[#E5F1FE]" : "ring-white"
  const cols = steps.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
  const line = steps.length === 4 ? "left-[12.5%] right-[12.5%]" : "left-[16.5%] right-[16.5%]"

  return (
    <section id={id} className={`scroll-mt-4 ${gray ? "bg-[#BDDDFC]/40 " : ""}px-6 py-16`}>
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{heading}</h2>
        {children && <div className="mx-auto mt-6 max-w-3xl [&>*:first-child]:mt-0">{children}</div>}

        <div className="relative mt-12">
          <div className={`absolute ${line} top-7 hidden h-0.5 bg-[#6A89A7]/40 md:block`} aria-hidden="true" />
          <ol className={`relative grid gap-10 md:gap-6 ${cols}`}>
            {steps.map((step, i) => (
              <li key={step.text} className="relative flex flex-col items-center">
                <span className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#384959] text-xl font-bold text-[#BDDDFC] ring-8 ${ring}`}>
                  {i + 1}
                </span>
                {step.title && <p className="mt-4 text-xl font-bold text-[#384959]">{step.title}</p>}
                <p className={`${step.title ? "mt-1 text-gray-600" : "mt-4 text-lg text-[#384959]"}`}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
