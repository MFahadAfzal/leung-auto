// app/services/brakes/brake-fluid-flush/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Brake Fluid Flush Edmonton | Leung's Auto Service",
  description:
    "Brake fluid flush in West Edmonton. Learn the signs you need a brake fluid flush, how often to change brake fluid, and brake fluid flush cost. Book today.",
}

export default function BrakeFluidFlush() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Brake Fluid Flush in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Brake fluid absorbs moisture over time, which lowers its performance and can damage brake parts from the
          inside. A brake fluid flush replaces the old fluid with fresh fluid. Leung's Auto Service changes brake
          fluid on domestic and import vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Brake Fluid Flush
        </Link>
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/brake-fluid-flush.jpg"
            alt="Mechanic doing a brake fluid flush to change brake fluid at Leung's Auto Service in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== SIGNS YOU NEED A FLUSH ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Signs You Need a Brake Fluid Flush</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>A soft or spongy brake pedal</li>
            <li>Brake fluid that looks dark or dirty instead of clear or light amber</li>
            <li>The brakes feel less responsive than they used to</li>
            <li>A brake warning light on the dashboard</li>
            <li>It has been two to three years or more since you last had the brake fluid changed</li>
          </ul>
          <p className="mt-4 text-lg">
            Some of these signs can also come from worn brake pads. When we check your brakes, we look at both, so
            you only pay for what your car needs. See{" "}
            <Link href="/services/brakes/brake-pad-replacement" className="text-[#2D3047] underline">brake pad replacement</Link>{" "}
            for more on worn pads.
          </p>
        </div>
      </section>

      {/* ===== WHY CHANGE BRAKE FLUID ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Why Change Brake Fluid?</h2>
          <p className="mt-4 text-lg">
            Brake fluid passes the force from your foot on the pedal to the brakes at each wheel. As it absorbs
            moisture, its boiling point drops, which can make the pedal feel soft under hard braking. The moisture
            can also cause corrosion inside the brake lines, calipers, and ABS unit. Changing brake fluid on schedule
            helps your brakes work as they should and protects those parts.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What a Brake Fluid Flush Involves</h2>
          <p className="mt-4 text-lg">
            During the service, we remove the old brake fluid from the system, refill it with fresh fluid that
            meets your vehicle's specification, and check the brakes for leaks. You approve the work and the price
            before we start.
          </p>
        </div>
      </section>

      {/* ===== HOW OFTEN ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How Often to Change Brake Fluid</h2>
          <p className="mt-4 text-lg">
            Many manufacturers recommend fresh brake fluid every two to three years, but how often to change brake
            fluid varies by vehicle. Check your owner's manual, or ask us what your vehicle needs. We can also test
            your brake fluid to see whether it is due.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Brake Fluid Flush Cost</h2>
          <p className="mt-4 text-lg">
            Brake fluid flush cost depends on your vehicle and the type of brake fluid it uses. A flush
            usually costs much less than repairing brake parts damaged by old, corroded fluid.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Get a Brake Fluid Flush Cost Quote
          </Link>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/brakes" className="text-[#2D3047] underline">Brake Repair</Link>
          <Link href="/services/brakes/brake-pad-replacement" className="text-[#2D3047] underline">Brake Pad Replacement</Link>
          <Link href="/services/brakes/abs-brake-repair" className="text-[#2D3047] underline">ABS Brake Repair</Link>
          <Link href="/services/flushes/antifreeze-coolant-flush" className="text-[#2D3047] underline">Antifreeze Coolant Flush</Link>
        </div>
      </section>

    </main>
  )
}
