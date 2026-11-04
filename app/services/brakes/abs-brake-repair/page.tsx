// app/services/brakes/abs-brake-repair/page.tsx
import Image from "next/image"
import Link from "next/link"
import LastUpdated from "@/components/LastUpdated"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"

export const metadata = {
  title: "ABS Brake Repair Edmonton | Leung's Auto Service",
  description:
    "ABS brake repair in West Edmonton. ABS light on? Learn what causes the ABS light to turn on, and book ABS sensor replacement and diagnostics with us.",
  alternates: {
    canonical: "/services/brakes/abs-brake-repair",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "Is it safe to drive with the ABS light on?",
    answer:
      "Usually, for a short drive. Your regular brakes still work with the ABS light on, but the anti-lock feature may not. That means the wheels can lock up if you brake hard on a slippery road. Have it checked soon, especially before winter driving. If the red brake warning light is on as well, stop driving and have the car checked right away.",
  },
  {
    question: "What causes the ABS light to turn on?",
    answer:
      "The most common cause is a faulty or dirty wheel speed sensor. Other causes include damaged or corroded wiring to an ABS sensor, a damaged tone ring on the wheel hub or axle, low brake fluid, and a failed ABS module or pump. We scan the system for the fault code to find which one it is.",
  },
  {
    question: "How much does ABS brake repair cost?",
    answer:
      "The price depends on what's causing the fault. ABS sensor replacement costs much less than replacing a failed ABS module. We find the cause first and give you a price before any work starts.",
  },
]

export default function AbsBrakeRepair() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">ABS Brake Repair in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          The anti-lock braking system (ABS) helps you keep control when you brake hard on wet, icy, or snowy
          roads. If your ABS light is on, Leung's Auto Service can find the cause. We do ABS brake repair and ABS
          sensor replacement on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book ABS Brake Repair
        </Link>
        <LastUpdated date="2026-11-03" />
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/abs-brake-repair.jpg"
            alt="Mechanic doing ABS brake repair and ABS sensor replacement at Leung's Auto Service in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== SIGNS OF AN ABS PROBLEM ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need ABS Brake Repair</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The ABS light is on</li>
            <li>The brake pedal pulses or feels different when you brake hard</li>
            <li>The brakes lock up on wet or icy roads</li>
            <li>The traction control light comes on along with the ABS light</li>
            <li>Longer stopping distances than usual</li>
          </ul>
          <p className="mt-4 text-lg">
            Longer stopping distances can also mean worn pads, so we check the whole brake system. See{" "}
            <Link href="/services/brakes/brake-pad-replacement" className="text-[#2D3047] underline">brake pad replacement</Link> for more on worn pads.
          </p>
        </div>
      </section>

      {/* ===== ABS SENSOR REPLACEMENT ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">ABS Sensor Replacement</h2>
          <p className="mt-4 text-lg">
            Each wheel has a speed sensor that tells the ABS how fast it is turning. Road salt, dirt, and moisture
            can damage these sensors and their wiring, which turns the ABS light on. If testing shows a sensor has
            failed, ABS sensor replacement is usually a quick repair that turns the light off and restores the
            anti-lock feature.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What ABS Brake Repair Involves</h2>
          <p className="mt-4 text-lg">
            We scan the system to find the fault code, then inspect the likely causes, such as wheel speed sensors,
            wiring, and the ABS module. We explain what we find, and you approve the work and the price before we
            start.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <Faq title="ABS Brake Repair FAQ" faqs={faqs} />

      <BookingCta
        heading="Book ABS Brake Repair in West Edmonton"
        text="ABS light on? We'll find the cause and give you a price before any work starts."
        label="Get Your ABS Light Checked"
        gray
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/brakes/abs-brake-repair"
        also={[
          { title: "Car Diagnostics", href: "/services/diagnostics" },
        ]}
      />

    </main>
  )
}
