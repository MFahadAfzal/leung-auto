// app/services/suspension/steering-repair/page.tsx
import Image from "next/image"
import Link from "next/link"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"

export const metadata = {
  title: "Power Steering Leak Repair Edmonton | Leung's Auto Service",
  description:
    "Power steering leak repair in West Edmonton. We fix leaking power steering, loose steering, clunking when turning, and a power steering warning light.",
  alternates: {
    canonical: "/services/suspension/steering-repair",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "What does the power steering warning light mean?",
    answer:
      "On cars with electric power steering, the power steering warning light means the system has found a fault, and the steering may suddenly feel heavy. We scan the system for fault codes and check the wiring, sensors, and steering motor to find the cause.",
  },
  {
    question: "How much does power steering leak repair cost?",
    answer:
      "The price depends on what's causing the problem. Replacing a leaking hose or a tie rod end costs much less than replacing a power steering pump or steering rack. Fixing a small leak early can save the pump.",
  },
]

export default function SteeringRepair() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Power Steering Leak Repair and Steering Repair in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Your steering keeps the car tracking straight and responding when you turn the wheel. Leung's Auto Service
          does power steering leak repair and fixes steering problems on domestic and import vehicles at our shop in
          West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Power Steering Leak Repair
        </Link>
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/power-steering-leak-repair.jpg"
            alt="Mechanic doing power steering leak repair and fixing a power steering fluid leak in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== SIGNS OF A STEERING PROBLEM ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Common Steering Problems</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Power steering fluid leaking under the car, or a fluid level that keeps dropping</li>
            <li>The power steering warning light is on</li>
            <li>Loose steering, or play in the steering wheel</li>
            <li>Clunking when turning, or popping and whining noises</li>
            <li>The steering feels heavy or hard to turn</li>
            <li>The car wanders or pulls to one side</li>
          </ul>
        </div>
      </section>

      {/* ===== POWER STEERING LEAKS ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Power Steering Fluid Leak Repair</h2>
          <p className="mt-4 text-lg">
            Power steering leaks usually come from worn hoses, loose fittings, a leaking pump, or a failing steering
            rack seal. A stop-leak product or topping up the fluid is not a lasting power steering fluid fix: the
            leak comes back, and running the system low can damage the pump. To fix leaking power steering, we find
            where the fluid is coming from, replace the failed part, and refill the system with the correct fluid.
          </p>

          <h2 id="power-steering-flush" className="mt-10 text-3xl font-bold">Power Steering Flush</h2>
          <p className="mt-4 text-lg">
            Old power steering fluid can make steering stiff and wear out the pump and rack, even without a leak.
            Signs you need a power steering flush include heavy steering, especially in the cold, a whining or
            groaning noise when you turn the wheel, jerky steering, and fluid that looks dark or dirty. We remove the
            old fluid, refill the system with fluid that meets your vehicle's specification, and check the hoses,
            pump, and rack for leaks. Some newer vehicles use electric steering and don't have steering
            fluid, so ask us if you're not sure which type your vehicle has.
          </p>
        </div>
      </section>

      {/* ===== LOOSE STEERING / CLUNKING ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Loose Steering and Clunking When Turning</h2>
          <p className="mt-4 text-lg">
            Loose steering often comes from worn tie rod ends or a worn steering rack. Clunking when turning can come
            from tie rods, ball joints, or{" "}
            <Link href="/services/suspension/car-suspension-replacement" className="text-[#2D3047] underline">worn suspension parts</Link>. We inspect the steering and front end to find which
            part is worn before we replace anything.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Steering Repair Involves</h2>
          <p className="mt-4 text-lg">
            We inspect the power steering pump, hoses, steering rack, tie rod ends, and other front end parts, and
            explain what we find. If parts need replacing, you approve the work and the price before we start. Many
            steering repairs are followed by a wheel alignment.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <Faq title="Steering Repair FAQ" faqs={faqs} gray />

      <BookingCta
        heading="Book Power Steering Leak Repair in West Edmonton"
        text="Tell us what your steering is doing and we'll give you a price before any work starts."
        label="Get a Steering Repair Quote"
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/suspension/steering-repair"
        also={[
          { title: "Wheel Alignment", href: "/services/maintenance/wheel-alignment" },
          { title: "Car Diagnostics", href: "/services/diagnostics" },
        ]}
      />

    </main>
  )
}
