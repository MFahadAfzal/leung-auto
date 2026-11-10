// app/services/inspection/out-of-province-inspection/page.tsx
import Link from "next/link"
import ClusterLinks from "@/components/ClusterLinks"
import Faq from "@/components/Faq"
import PageHero from "@/components/PageHero"
import BookingCta from "@/components/BookingCta"
import { Panel, PanelSection } from "@/components/Panels"
import { business } from "@/lib/business"

export const metadata = {
  title: "Out of Province Inspection Edmonton | Leung's Auto Service",
  description:
    "Out of province inspection in West Edmonton. Find out if you need one in Alberta, what is checked, and how to book your inspection.",
  alternates: {
    canonical: "/services/inspection/out-of-province-inspection",
  },
}

// Places shown in the "Vehicles From Anywhere in Canada" section
const provinces = [
  "British Columbia (BC)",
  "Saskatchewan",
  "Manitoba",
  "Ontario",
  "Quebec",
  "New Brunswick",
  "Nova Scotia",
  "Prince Edward Island (PEI)",
  "Newfoundland and Labrador",
  "Yukon",
  "Northwest Territories",
  "Nunavut",
  "United States (imports)",
]

// Questions shown in the FAQ section
const faqs = [
  {
    question: "Do you need an out of province inspection in Alberta?",
    answer:
      "Yes, in most cases. A vehicle registered outside Alberta must pass one before you can get Alberta licence plates. You need one if you are moving to Alberta from another province or territory with your vehicle, you bought a used vehicle registered in another province, you are importing a vehicle from the United States or another country, or your vehicle was registered in Alberta before, was registered somewhere else, and is now coming back. Some vehicles are exempt, so check with an Alberta registry agent or call us if you are not sure.",
  },
  {
    question: "How long does an OOP inspection take?",
    answer:
      "About two hours for most vehicles.",
  },
  {
    question: "What happens if my vehicle fails?",
    answer:
      "You have 10 days to repair the failed items and come back for a re-inspection, where only those items are checked. That deadline comes from the Government of Alberta's rules, and after 10 days the whole vehicle has to be checked again. We give you a signed Record of Inspection listing each item that needs fixing. Alberta lets you have the repairs done at any shop you choose. We can do the repairs for you, such as brake repair or steering and suspension repair, and you approve the work and the price before we start.",
  },
  {
    question: "How long is the inspection certificate valid?",
    answer:
      "14 days. Under the Government of Alberta's rules, you must take your inspection certificate to an Alberta registry agent within 14 days. After that, the certificate is no longer accepted and the vehicle has to be checked again.",
  },
  {
    question: "How much does an OOP inspection cost?",
    answer: "Each shop sets its own price. Call us for ours.",
  },
]

export default function OutOfProvinceInspection() {
  return (
    <main className="flex-1">
      {/* ===== INTRO ===== */}
      <PageHero
        heading="Out of Province Inspection in Edmonton"
        cta="Book Your Inspection"
        image={{ src: "/images/out-of-province-inspection.jpg", alt: "Mechanic lying under a vehicle checking its underside during an Alberta out of province inspection" }}
      >
        Moving to Alberta or buying a vehicle from another province? You need an out of province (OOP) inspection before
          you can register it here. Leung&apos;s Auto Service does OOP inspections on domestic and import
          vehicles at our shop in West Edmonton.
      </PageHero>

      <PanelSection>
        <Panel>
          <h2 className="accent-heading text-2xl font-bold md:text-3xl">How It Works in Alberta</h2>
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
          <p className="mt-4 text-lg text-gray-700">
            Buying a used vehicle from out of province? Get a{" "}
            <Link href="/services/inspection/pre-purchase-inspection" className="text-brand-accent underline hover:text-brand-tint">pre-purchase inspection</Link> before you pay, so you
            know what you&apos;re buying.
          </p>
          <ol className="steps mt-6 text-lg text-brand-dark">
            <li>Buy a Request for Vehicle Inspection form from any Alberta registry agent.</li>
            <li>Book a time with us and bring the vehicle and the form to our shop.</li>
            <li>We inspect the vehicle against Alberta&apos;s safety and equipment standards. This usually takes about two hours.</li>
            <li>If the vehicle passes, we give you an inspection certificate.</li>
            <li>Take the certificate to a registry agent within 14 days to register the vehicle and get your plates.</li>
          </ol>
        </Panel>
        <Panel dark>
          <h2 className="accent-heading text-2xl font-bold text-white md:text-3xl">What an Out of Province Inspection Checks</h2>
          <p className="mt-4 text-lg text-white/90">
            We follow the province&apos;s inspection manual and check that the
            vehicle meets Alberta safety standards. This includes:
          </p>
          <ul className="checks mt-6 text-lg text-white/90">
            <li>Brakes, including pads, rotors, lines, and the parking brake</li>
            <li>Steering and suspension</li>
            <li>Tires and wheels</li>
            <li>Lights, signals, horn, and wipers</li>
            <li>Windshield, mirrors, and seatbelts</li>
            <li>Exhaust, fuel system, and frame</li>
          </ul>
        </Panel>
      </PanelSection>

      {/* ===== WHERE VEHICLES COME FROM: names the other provinces so those searches match ===== */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Vehicles From Anywhere in Canada</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            We do OOP inspections on vehicles coming to Alberta from any other province or territory, and on
            vehicles imported from the United States.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {provinces.map((place) => (
              <li
                key={place}
                className="rounded-full border border-brand-light bg-white px-4 py-2 font-semibold text-brand-dark shadow-sm"
              >
                {place}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq title="Common Questions" faqs={faqs} split gray />

      <BookingCta
        heading="Out of Province Inspection Near Me in Edmonton"
        text={
          <>
            Looking for a shop close to home? {business.name} is at {business.street} in West
              Edmonton, and has served Edmonton drivers since 2002. Call us at {business.phone} to book a
              time.
          </>
        }
        label="Book Your Inspection"
      />

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
