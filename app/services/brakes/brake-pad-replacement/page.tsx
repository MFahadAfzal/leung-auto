import Link from "next/link"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"
import PageHero from "@/components/PageHero"
import { business } from "@/lib/business"

export const metadata = {
  title: "Brake Pad Replacement Edmonton | Leung's Auto Service",
  description: "...",
  alternates: {
    canonical: "/services/brakes/brake-pad-replacement",
  },
  openGraph: {
    title: "Brake Pad Replacement in Edmonton",
    description: "...",
    url: "/services/brakes/brake-pad-replacement",
    type: "website",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "How long do brake pads last?",
    answer:
      "Most brake pads last somewhere between 40,000 and 70,000 km, but it varies a lot from car to car. Front pads usually wear out before the rear pads, because the front brakes do most of the stopping. Pads wear faster with stop-and-go city driving, hard braking, heavy vehicles or towing, and cheaper organic pads. Edmonton winters add road salt and moisture, which can rust the caliper slides and make pads wear unevenly. The best way to know how much life is left is to have them measured, and we can check them during your seasonal tire change.",
  },
  {
    question: "Why are my brakes squealing or grinding?",
    answer:
      "Brakes squealing usually means the pads are getting thin, often because the wear indicator is touching the rotor. It's time to book a brake pad replacement. Brakes grinding is more serious: the pad material may be gone, and metal is rubbing on the rotor. Driving on grinding brakes damages the rotors quickly, which can turn a brake pad replacement into a brake rotor replacement as well.",
  },
  {
    question: "Do I need new rotors when I replace my brake pads?",
    answer:
      "Only if the rotors are worn. If they're smooth and still above the minimum thickness, new pads can go on the old rotors. If they're grooved, warped, rusted, or worn too thin, we recommend brake rotor replacement at the same time so the new pads wear evenly and stop properly. We measure the rotors and show you what we find before you decide.",
  },
  {
    question: "How much does brake pad replacement cost?",
    answer:
      "Brake pad replacement cost depends on your vehicle, the type of brake pads and rotors, and whether you need brake rotor replacement along with the pads. Catching squealing brakes early, before they start grinding, often keeps the cost down because the rotors can be saved. Call us for a quote on your vehicle.",
  },
]

// Warning signs for each part, shown side by side
const padSigns = [
  "Brakes squealing: a high-pitched squeal when you brake, often from the pad wear indicator",
  "Brakes grinding: a grinding or scraping sound, which can mean the pads are worn down to metal",
  "A soft brake pedal, or the car takes longer to stop",
  "The car pulls to one side when braking",
  "A brake warning light on the dashboard",
]

const rotorSigns = [
  "The steering wheel or brake pedal shakes or pulses when you brake",
  "Grooves, scoring, or a blue tint on the rotor surface",
  "Brakes grinding even after new pads",
  "Longer stopping distances",
  "Rotors worn below the minimum thickness",
]

// The job in three steps, from the "What Brake Pad Replacement Involves" text
const steps = [
  { title: "Inspect and measure", text: "Pads, rotors, calipers, and brake fluid" },
  { title: "Explain what we find", text: "What's worn and what it will take to fix" },
  { title: "You approve, we start", text: "The work and the price, before we begin" },
]

export default function BrakePadReplacement() {
  return (
    <main className="flex-1">
      {/* ===== INTRO ===== */}
      <PageHero
        heading="Brake Pad Replacement in Edmonton"
        cta="Book Brake Pad Replacement"
        image={{ src: "/images/brake-pad-replacement.jpg", alt: "Mechanic doing a brake pad replacement and brake rotor replacement in Edmonton" }}
      >
        Brakes squealing, brakes grinding, or a soft brake pedal are signs your brake pads are wearing out.
        Leung&apos;s Auto Service does brake pad replacement and brake rotor replacement on domestic and import
        vehicles at our shop in West Edmonton.
      </PageHero>

      {/* ===== PADS vs ROTORS: the two sets of warning signs side by side ===== */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">

          {/* Pads: light panel */}
          <div className="rounded-2xl border border-[#BDDDFC] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-[#6A89A7]">Brake pads</p>
            <h2 className="accent-heading mt-2 text-2xl font-bold md:text-3xl">Signs You Need Brake Pad Replacement</h2>
            <ul className="checks mt-6 text-lg text-[#384959]">
              {padSigns.map((sign) => (
                <li key={sign}>{sign}</li>
              ))}
            </ul>
          </div>

          {/* Rotors: dark panel */}
          <div className="rounded-2xl bg-[#384959] p-8 text-white shadow-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#BDDDFC]">Brake rotors</p>
            <h2 className="accent-heading mt-2 text-2xl font-bold md:text-3xl">Signs You Need Brake Rotor Replacement</h2>
            <ul className="mt-6 divide-y divide-white/15 border-y border-white/15 text-lg">
              {rotorSigns.map((sign, i) => (
                <li key={sign} className="flex items-baseline gap-5 py-4">
                  <span className="w-6 shrink-0 text-sm font-bold text-[#BDDDFC]">{String(i + 1).padStart(2, "0")}</span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tip strip: a soft pedal isn't always the pads */}
        <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-[#BDDDFC] px-8 py-6">
          <p className="text-lg text-[#384959]">
            <span className="font-bold">Good to know: </span>
            A soft brake pedal can also come from air in the brake lines or old brake fluid, so we check the pads,
            lines, and fluid to find the cause. If the fluid is the problem, a{" "}
            <Link href="/services/brakes/brake-fluid-flush" className="font-bold underline">brake fluid flush</Link>{" "}
            may be what your car needs.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED: centred text, then the three steps in a row ===== */}
      <section className="bg-[#BDDDFC]/40 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What Brake Pad Replacement Involves</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
            We inspect the brake pads, measure the rotors, and check the calipers and brake fluid, then explain what
            we find. If you need brake pad replacement or brake rotor replacement, you approve the work and the price
            before we start.
          </p>

          <div className="relative mt-12">
            {/* Line joining the three numbers on desktop */}
            <div className="absolute left-[16.5%] right-[16.5%] top-7 hidden h-0.5 bg-[#6A89A7]/40 md:block" aria-hidden="true" />
            <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
              {steps.map((step, i) => (
                <li key={step.title} className="relative flex flex-col items-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#384959] text-xl font-bold text-[#BDDDFC] ring-8 ring-[#E5F1FE]">
                    {i + 1}
                  </span>
                  <p className="mt-4 text-xl font-bold text-[#384959]">{step.title}</p>
                  <p className="mt-1 text-gray-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== FAQ: heading on the left, questions on the right ===== */}
      <Faq
        title="Brake Pad Replacement FAQ"
        faqs={faqs}
        aside={
          <p>
            Have a question about your brakes that isn&apos;t answered here? Call us at{" "}
            <a href={business.phoneHref} className="font-bold text-[#384959] underline">{business.phone}</a>.
          </p>
        }
      />

      <BookingCta
        heading="Book Brake Pad Replacement in West Edmonton"
        text="Tell us what your brakes are doing and we'll give you a price before any work starts."
        label="Get a Brake Pad Replacement Cost Quote"
        gray
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/brakes/brake-pad-replacement"
        also={[
          { title: "Wheel Alignment", href: "/services/maintenance/wheel-alignment" },
          { title: "Tire Change and Tire Rotation", href: "/services/maintenance/tire-change" },
        ]}
      />

    </main>
  )
}
