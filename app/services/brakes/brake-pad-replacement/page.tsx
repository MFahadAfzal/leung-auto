import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Brake Pad Replacement Edmonton | Leung's Auto Service",
  description:
    "Brake pad replacement in West Edmonton. Brakes squealing, grinding, or a soft brake pedal? Brake rotor replacement too. Get a brake replacement cost quote.",
}

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
        </div>
      </section>

      {/* ===== SQUEALING / GRINDING / SOFT PEDAL ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Brakes Squealing or Grinding?</h2>
          <p className="mt-4 text-lg">
            Brakes squealing usually means the pads are getting thin and it is time to book a brake pad
            replacement. Brakes grinding is more serious: the pad material may be gone, and metal is rubbing on the
            rotor. Driving on grinding brakes damages the rotors quickly, which can turn a brake pad replacement
            into a brake rotor replacement as well.
          </p>

          <h2 className="mt-10 text-3xl font-bold">Soft Brake Pedal</h2>
          <p className="mt-4 text-lg">
            A soft brake pedal that sinks further than normal can come from worn brake pads, air in the brake lines,
            or old brake fluid. We check the pads, lines, and fluid to find the cause. If the fluid is the problem, a{" "}
            <Link href="/services/brakes/brake-fluid-flush" className="text-[#2D3047] underline">brake fluid flush</Link>{" "}
            may be what your car needs.
          </p>
        </div>
      </section>

      {/* ===== SIGNS YOU NEED NEW ROTORS ===== */}
      <section className="bg-gray-100 px-6 py-12">
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
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What Brake Pad Replacement Involves</h2>
          <p className="mt-4 text-lg">
            We inspect the brake pads, measure the rotors, and check the calipers and brake fluid, then explain what
            we find. If you need brake pad replacement or brake rotor replacement, you approve the work and the price
            before we start.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Brake Replacement Cost</h2>
          <p className="mt-4 text-lg">
            Brake replacement cost depends on your vehicle, the type of brake pads and rotors, and whether you need
            brake rotor replacement along with the pads. Catching squealing brakes early, before they start
            grinding, often keeps the cost down because the rotors can be saved.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Get a Brake Replacement Cost Quote
          </Link>
        </div>
      </section>

      {/* ===== RELATED PAGES: link back up and across ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/brakes" className="text-[#2D3047] underline">Brake Repair</Link>
          <Link href="/services/brakes/brake-fluid-flush" className="text-[#2D3047] underline">Brake Fluid Flush</Link>
          <Link href="/services/brakes/abs-brake-repair" className="text-[#2D3047] underline">ABS Brake Repair</Link>
          <Link href="/services/maintenance/tire-change" className="text-[#2D3047] underline">Tire Change and Tire Rotation</Link>
          <Link href="/services/maintenance/wheel-alignment" className="text-[#2D3047] underline">Wheel Alignment</Link>
        </div>
      </section>

    </main>
  )
}
