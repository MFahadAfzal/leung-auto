// app/services/inspection/out-of-province-inspection/page.tsx
import Image from "next/image"
import Link from "next/link"
import LastUpdated from "@/components/LastUpdated"
import ClusterLinks from "@/components/ClusterLinks"
import Faq from "@/components/Faq"

export const metadata = {
  title: "Out of Province Inspection Edmonton | Leung's Auto Service",
  description:
    "Out of province inspection in West Edmonton. Find out if you need an out of province inspection in Alberta, what is checked, and book your inspection.",
  alternates: {
    canonical: "/services/inspection/out-of-province-inspection",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "Do you need an out of province inspection in Alberta?",
    answer:
      "Yes, in most cases. A vehicle registered outside Alberta must pass an out of province inspection before you can get Alberta licence plates. You need one if you are moving to Alberta from another province or territory with your vehicle, you bought a used vehicle registered in another province, you are importing a vehicle from the United States or another country, or your vehicle was registered in Alberta before, was registered somewhere else, and is now coming back. Some vehicles are exempt, so check with an Alberta registry agent or call us if you are not sure.",
  },
  {
    question: "How long does an out of province inspection take?",
    answer:
      "Most inspections take about two hours, depending on the vehicle.",
  },
  {
    question: "What happens if my vehicle fails the inspection?",
    answer:
      "You have 10 days to repair the failed items and come back for a re-inspection, where only those items are checked. That deadline comes from the Government of Alberta's inspection rules, and after 10 days a full new inspection is required. We give you a signed Record of Inspection listing each item that needs fixing. Alberta lets you have the repairs done at any shop you choose. We can do the repairs for you, such as brake repair or steering and suspension repair, and you approve the work and the price before we start.",
  },
  {
    question: "How long is the inspection certificate valid?",
    answer:
      "14 days. Under the Government of Alberta's rules, you must take your inspection certificate to an Alberta registry agent within 14 days of the inspection. After 14 days, the certificate is no longer accepted and the vehicle needs a new inspection.",
  },
  {
    question: "How much does an out of province inspection cost?",
    answer: "Prices are set by each inspection facility. Call us for our current price.",
  },
]

export default function OutOfProvinceInspection() {
  return (
    <main className="flex-1">
      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Out of Province Inspection in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Moving to Alberta or buying a vehicle from another province? You need an out of province inspection before
          you can register it here. Leung's Auto Service does out of province inspections on domestic and import
          vehicles at our shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book an Out of Province Inspection
        </Link>
        <LastUpdated date="2026-11-03" />
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/out-of-province-inspection.jpg"
            alt="Technician doing an Alberta out of province inspection at Leung's Auto Service in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How the Alberta Out of Province Inspection Works</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-lg">
            <li>Buy a Request for Vehicle Inspection form from any Alberta registry agent.</li>
            <li>Book your inspection with us and bring the vehicle and the form to our shop.</li>
            <li>We inspect the vehicle against Alberta's safety and equipment standards. Most inspections take about two hours.</li>
            <li>If the vehicle passes, we give you an out of province inspection certificate.</li>
            <li>Take the certificate to a registry agent within 14 days to register the vehicle and get your plates.</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            Source:{" "}
            <a
              href="https://www.alberta.ca/out-of-province-vehicle-inspections"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Government of Alberta, Out-of-province vehicle inspections
            </a>
          </p>
          <p className="mt-4 text-lg">
            Buying a used vehicle from out of province? Get a{" "}
            <Link href="/services/inspection/pre-purchase-inspection" className="text-[#2D3047] underline">pre-purchase inspection</Link> before you pay, so you
            know what you&apos;re buying.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S CHECKED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What an Out of Province Inspection Checks</h2>
          <p className="mt-4 text-lg">
            The inspection follows the province's inspection manual and checks that the
            vehicle meets Alberta safety standards. This includes:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>Brakes, including pads, rotors, lines, and the parking brake</li>
            <li>Steering and suspension</li>
            <li>Tires and wheels</li>
            <li>Lights, signals, horn, and wipers</li>
            <li>Windshield, mirrors, and seatbelts</li>
            <li>Exhaust, fuel system, and frame</li>
          </ul>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <Faq title="Out of Province Inspection FAQ" faqs={faqs} gray />

      {/* ===== NEAR ME / LOCATION ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Out of Province Inspection Near Me in Edmonton</h2>
          <p className="mt-4 text-lg">
            Looking for an out of province inspection near you? Leung's Auto Service is at 12025 149 St NW in West
            Edmonton, and has served Edmonton drivers since 2002. Call us at 780-452-0134 to set up
            your inspection.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Book Your Out of Province Inspection
          </Link>
        </div>
      </section>

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/inspection/out-of-province-inspection"
        also={[
          { title: "Brake Repair", href: "/services/brakes" },
          { title: "Steering and Suspension Repair", href: "/services/suspension" },
        ]}
      />

    </main>
  )
}
