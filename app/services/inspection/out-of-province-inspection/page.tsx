// app/services/inspection/out-of-province-inspection/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Out of Province Inspection Edmonton | Leung's Auto Service",
  description:
    "Out of province inspection in West Edmonton. Find out if you need an out of province inspection in Alberta, what is checked, and book your inspection.",
}

// Questions shown in the FAQ section, also sent to Google as FAQ structured data
const faqs = [
  {
    question: "Do you need an out of province inspection in Alberta?",
    answer:
      "Yes, in most cases. A vehicle registered outside Alberta must pass an out of province inspection before you can get Alberta licence plates. This applies to vehicles coming from other provinces, territories, and countries, and to Alberta vehicles that were registered somewhere else and are coming back. Some vehicles are exempt, so check with an Alberta registry agent if you are not sure.",
  },
  {
    question: "How long does an out of province inspection take?",
    answer:
      "Most inspections take about two hours, depending on the vehicle.",
  },
  {
    question: "What happens if my vehicle fails the inspection?",
    answer:
      "You get a signed Record of Inspection listing what needs to be fixed. You have 10 days to complete the repairs and come back for a re-inspection, where only the failed items are checked. After 10 days, a full new inspection is required.",
  },
  {
    question: "How long is the inspection certificate valid?",
    answer:
      "You have 14 days to take your inspection certificate to an Alberta registry agent and register the vehicle. After 14 days, the certificate is no longer accepted and the vehicle needs a new inspection.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

export default function OutOfProvinceInspection() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

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

      {/* ===== DO YOU NEED ONE ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Do You Need an Out of Province Inspection in Alberta?</h2>
          <p className="mt-4 text-lg">
            In most cases, yes. Any vehicle registered outside Alberta must pass an out of province inspection before
            it can get Alberta licence plates. You will need one if:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>You are moving to Alberta from another province or territory and bringing your vehicle</li>
            <li>You bought a used vehicle that is registered in another province</li>
            <li>You are importing a vehicle from the United States or another country</li>
            <li>Your vehicle was registered in Alberta before, was registered somewhere else, and is now coming back</li>
          </ul>
          <p className="mt-4 text-lg">
            Some vehicles are exempt. If you are not sure whether your vehicle needs one,
            check with an Alberta registry agent or{" "}
            <Link href="/contact" className="text-[#2D3047] underline">ask our Edmonton shop</Link>.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">How the Alberta Out of Province Inspection Works</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-lg">
            <li>Buy a Request for Vehicle Inspection form from any Alberta registry agent.</li>
            <li>Book your inspection with us and bring the vehicle and the form to our shop.</li>
            <li>We inspect the vehicle against Alberta's safety and equipment standards. Most inspections take about two hours.</li>
            <li>If the vehicle passes, we give you an out of province inspection certificate.</li>
            <li>Take the certificate to a registry agent within 14 days to register the vehicle and get your plates.</li>
          </ol>
        </div>
      </section>

      {/* ===== WHAT'S CHECKED ===== */}
      <section className="bg-gray-100 px-6 py-12">
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

      {/* ===== IF IT FAILS ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">If Your Vehicle Fails the Inspection</h2>
          <p className="mt-4 text-lg">
            We give you a signed Record of Inspection and explain each item that needs fixing. You have 10 days to
            complete the repairs and bring the vehicle back for a re-inspection, where only the failed items are
            checked. We can do the repairs for you, such as{" "}
            <Link href="/services/brakes" className="text-[#2D3047] underline">brake repair</Link> or{" "}
            <Link href="/services/suspension" className="text-[#2D3047] underline">steering and suspension repair</Link>,
            and you approve the work and the price before we start.
          </p>
        </div>
      </section>

      {/* ===== NEAR ME / LOCATION ===== */}
      <section className="bg-gray-100 px-6 py-12">
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

      {/* ===== COST ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Out of Province Inspection Cost</h2>
          <p className="mt-4 text-lg">
            Prices are set by each inspection facility. Contact us for our current price.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Out of Province Inspection FAQ</h2>
          {faqs.map((faq) => (
            <div key={faq.question} className="mt-8">
              <h3 className="text-2xl font-bold">{faq.question}</h3>
              <p className="mt-2 text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <Link href="/services/inspection" className="text-[#2D3047] underline">Car Inspections</Link>
          <Link href="/services/inspection/pre-purchase-inspection" className="text-[#2D3047] underline">Pre-Purchase Inspection</Link>
          <Link href="/services/brakes" className="text-[#2D3047] underline">Brake Repair</Link>
          <Link href="/services/suspension" className="text-[#2D3047] underline">Steering and Suspension Repair</Link>
        </div>
      </section>

    </main>
  )
}
