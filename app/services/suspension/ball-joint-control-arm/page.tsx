// app/services/suspension/ball-joint-control-arm/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Ball Joint and Control Arm Repair Edmonton | Leung's Auto Service",
  description:
    "Ball joint and control arm repair in West Edmonton for domestic and import vehicles. Honest advice and fair pricing at Leung's Auto Service.",
}

export default function BallJointControlArm() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Ball Joint and Control Arm Repair in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Ball joints and control arms connect your wheels to the car and let them move with the road and the
          steering. Leung's Auto Service repairs ball joints and control arms on domestic and import vehicles at
          our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Ball Joint and Control Arm Repair
        </Link>
      </section>

      {/* ===== SIGNS OF WORN BALL JOINTS OR CONTROL ARMS ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs of Worn Ball Joints or Control Arms</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>A clunking or knocking noise from the front end, especially over bumps</li>
            <li>Loose, wandering, or vague steering</li>
            <li>The car pulls to one side</li>
            <li>Vibration in the steering wheel</li>
            <li>Uneven tire wear on the inside or outside edges</li>
          </ul>
          <p className="mt-4 text-lg">
            A badly worn ball joint can separate and cause you to lose control of the vehicle. If you hear clunking
            from the front end, have it checked soon.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Ball Joint and Control Arm Repair Involves</h2>
          <p className="mt-4 text-lg">
            We lift the vehicle and check the ball joints, control arms, and bushings for play and wear, then
            explain what we find. If parts need replacing, you approve the work and the price before we start. We
            may recommend a wheel alignment afterward.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Ball Joint and Control Arm Repair Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and whether the ball joint can be replaced on its own or comes as part
            of the control arm. Contact us for a quote.
          </p>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Suspension Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/suspension" className="text-[#2D3047] underline">Suspension Repair</Link>
          <Link href="/services/suspension/shock-strut-replacement" className="text-[#2D3047] underline">Shock and Strut Replacement</Link>
          <Link href="/services/suspension/steering-front-end-repair" className="text-[#2D3047] underline">Steering and Front End Repair</Link>
        </div>
      </section>

    </main>
  )
}
