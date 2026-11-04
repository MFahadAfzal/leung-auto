// app/services/suspension/car-suspension-replacement/page.tsx
import Image from "next/image"
import Link from "next/link"
import LastUpdated from "@/components/LastUpdated"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"

export const metadata = {
  title: "Car Suspension Replacement Edmonton | Leung's Auto Service",
  description:
    "Car suspension replacement and suspension auto repair in West Edmonton: suspension inspection, shock and strut replacement, and ball joint replacement.",
  alternates: {
    canonical: "/services/suspension/car-suspension-replacement",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "How much does car suspension replacement cost?",
    answer:
      "The price of car suspension replacement depends on your vehicle, the type of parts, and whether they are replaced in pairs. We inspect the suspension first and give you a price before any work starts.",
  },
  {
    question: "How much does ball joint replacement cost?",
    answer:
      "Ball joint replacement cost depends on your vehicle and whether the ball joint can be replaced on its own or comes built into the control arm. A ball joint that is pressed in on its own usually costs less than replacing the whole control arm.",
  },
]

export default function CarSuspensionReplacement() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Car Suspension Replacement in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Your suspension keeps your tires on the road and your ride smooth and controlled. Leung's Auto Service does
          car suspension replacement and suspension auto repair on domestic and import vehicles at our shop in West
          Edmonton, including shocks, struts, ball joints, and control arms.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Suspension Inspection
        </Link>
        <LastUpdated date="2026-11-03" />
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/car-suspension-replacement.jpg"
            alt="Mechanic doing car suspension replacement and shock and strut replacement in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== SIGNS YOU NEED SUSPENSION REPAIR ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need Car Suspension Replacement</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The car bounces or keeps moving after going over bumps</li>
            <li>A clunking or knocking noise from the front end, especially over bumps</li>
            <li>The front end dips when you brake, or the back squats when you accelerate</li>
            <li>The car leans or sways in turns</li>
            <li>Loose, wandering, or vague steering, or the car pulls to one side</li>
            <li>Oil leaking from the shocks or struts</li>
            <li>Uneven or cupped tire wear</li>
          </ul>
          <p className="mt-4 text-lg">
            Worn tie rods or a power steering leak can also cause loose or wandering steering. If your symptoms are
            mostly in the steering, see{" "}
            <Link href="/services/suspension/steering-repair" className="text-[#2D3047] underline">steering repair</Link>.
          </p>
        </div>
      </section>

      {/* ===== SUSPENSION INSPECTION ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Suspension Inspection</h2>
          <p className="mt-4 text-lg">
            Every suspension auto repair starts with a suspension inspection. We lift the vehicle and check the
            shocks, struts, mounts, springs, ball joints, control arms, and bushings for wear, leaks, and play. Then
            we explain what we find, and you approve the work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== SHOCKS AND STRUTS ===== */}
      <section id="shock-strut-replacement" className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Shock and Strut Replacement</h2>
          <p className="mt-4 text-lg">
            Shocks and struts control how the car moves over bumps. When they wear out, the ride gets bouncy, the
            car dips under braking, and stopping distances can get longer. Shock and strut replacement is usually
            done in pairs, front or rear, so both sides handle the same. Because struts affect wheel alignment, we
            may recommend a{" "}
            <Link href="/services/maintenance/wheel-alignment" className="text-[#2D3047] underline">wheel alignment</Link>{" "}
            afterward.
          </p>
        </div>
      </section>

      {/* ===== BALL JOINTS AND CONTROL ARMS ===== */}
      <section id="ball-joint-replacement" className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Ball Joint Replacement</h2>
          <p className="mt-4 text-lg">
            Ball joints and control arms connect your wheels to the car and let them move with the road and the
            steering. Worn ball joints cause clunking over bumps, wandering steering, and uneven tire wear. A badly
            worn ball joint can separate and cause you to lose control of the vehicle, so ball joint replacement
            should not wait. If you hear clunking from the front end, have it checked soon.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <Faq title="Suspension Repair FAQ" faqs={faqs} gray />

      <BookingCta
        heading="Book Car Suspension Replacement in West Edmonton"
        text="Start with a suspension inspection, and we'll give you a price before any work starts."
        label="Get a Suspension Repair Quote"
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/suspension/car-suspension-replacement"
        also={[
          { title: "Wheel Alignment", href: "/services/maintenance/wheel-alignment" },
          { title: "Tire Change and Tire Rotation", href: "/services/maintenance/tire-change" },
        ]}
      />

    </main>
  )
}
