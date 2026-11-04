import Image from "next/image"
import Link from "next/link"
import LastUpdated from "@/components/LastUpdated"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"

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

export default function BrakePadReplacement() {
  return (
    <main className="flex-1">
      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Brake Pad Replacement in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Brakes squealing, brakes grinding, or a soft brake pedal are signs your brake pads are wearing out.
          Leung's Auto Service does brake pad replacement and brake rotor replacement on domestic and import
          vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Brake Pad Replacement
        </Link>
        <LastUpdated date="2026-11-03" />
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/brake-pad-replacement.jpg"
            alt="Mechanic doing a brake pad replacement and brake rotor replacement in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== SIGNS YOU NEED NEW PADS ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need Brake Pad Replacement</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Brakes squealing: a high-pitched squeal when you brake, often from the pad wear indicator</li>
            <li>Brakes grinding: a grinding or scraping sound, which can mean the pads are worn down to metal</li>
            <li>A soft brake pedal, or the car takes longer to stop</li>
            <li>The car pulls to one side when braking</li>
            <li>A brake warning light on the dashboard</li>
          </ul>
          <p className="mt-4 text-lg">
            A soft brake pedal can also come from air in the brake lines or old brake fluid, so we check the pads,
            lines, and fluid to find the cause. If the fluid is the problem, a{" "}
            <Link href="/services/brakes/brake-fluid-flush" className="text-[#2D3047] underline">brake fluid flush</Link>{" "}
            may be what your car needs.
          </p>
        </div>
      </section>

      {/* ===== SIGNS YOU NEED NEW ROTORS ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need Brake Rotor Replacement</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The steering wheel or brake pedal shakes or pulses when you brake</li>
            <li>Grooves, scoring, or a blue tint on the rotor surface</li>
            <li>Brakes grinding even after new pads</li>
            <li>Longer stopping distances</li>
            <li>Rotors worn below the minimum thickness</li>
          </ul>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Brake Pad Replacement Involves</h2>
          <p className="mt-4 text-lg">
            We inspect the brake pads, measure the rotors, and check the calipers and brake fluid, then explain what
            we find. If you need brake pad replacement or brake rotor replacement, you approve the work and the price
            before we start.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <Faq title="Brake Pad Replacement FAQ" faqs={faqs} />

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
