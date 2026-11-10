// app/services/maintenance/oil-change-services/page.tsx
import Link from "next/link"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"
import PageHero from "@/components/PageHero"
import StepsSection from "@/components/StepsSection"
import { Panel, PanelSection } from "@/components/Panels"

export const metadata = {
  title: "Quick Oil Change Services Edmonton | Leung's Auto Service",
  description:
    "Quick oil change services in West Edmonton with synthetic or conventional oil. Learn how often to get an oil change, and book your oil change today.",
  alternates: {
    canonical: "/services/maintenance/oil-change-services",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "How often should you get an oil change?",
    answer:
      "About every 5,000 km with conventional oil, or every 8,000 to 16,000 km with full synthetic. How often to get an oil change depends on your vehicle and the oil it uses. Many newer cars have an oil life monitor that tells you when it's due. Short trips and cold Edmonton winters count as severe driving and can mean more frequent changes. Check your owner's manual, or ask us what your vehicle needs.",
  },
  {
    question: "Synthetic vs. conventional oil: which is better?",
    answer:
      "Synthetic oil protects better in cold weather and lasts longer, while conventional oil costs less. Conventional oil is refined from crude oil. Synthetic oil is engineered to flow better in the cold, resist breaking down under heat, and last longer between changes. In an Edmonton winter, that faster flow on a cold start means better protection for your engine. Many newer engines require synthetic oil. We use the oil your vehicle's manufacturer calls for, and explain your options if you have a choice.",
  },
  {
    question: "How much does an oil change cost?",
    answer:
      "The price depends on your vehicle, how much oil it takes, and whether it needs conventional or synthetic oil. Call us for a quote on your vehicle.",
  },
  {
    question: "Is the cheapest oil change the best deal?",
    answer:
      "Not always. A low price can mean cheap filters, the wrong oil for your engine, or a long list of upsells once your car is on the hoist. If you're shopping for the cheapest oil change, compare what's included. We use oil and filters that meet your vehicle's specification and quote the price up front.",
  },
]

export default function OilChangeServices() {
  return (
    <main className="flex-1">
      {/* ===== INTRO ===== */}
      <PageHero
        heading="Oil Change Services in Edmonton"
        cta="Book a Quick Oil Change"
        image={{ src: "/images/oil-change-services.jpg", alt: "Mechanic doing a quick oil change at Leung's Auto Service, offering oil change services in Edmonton" }}
      >
        Fresh oil protects your engine's moving parts from wear. Leung's Auto Service
          offers quick oil change services for domestic and import vehicles at our shop in West Edmonton, with
          synthetic or conventional oil to match your engine.
      </PageHero>

      <StepsSection
        heading="Quick Oil Change in West Edmonton"
        steps={[
          { text: "Draining the old oil and replacing the oil filter" },
          { text: "Refilling with synthetic or conventional oil that meets your vehicle's specification" },
          { text: "A quick check for leaks and anything else that needs attention" },
          { text: "Resetting your oil change reminder, and telling you when your next one is due" },
        ]}
      >
        <p className="mt-4 text-lg text-gray-700">
          An oil change shouldn't take your whole day. Book ahead and we'll have your car in and out quickly, with
          the same care we give every job. Our oil changing services include:
        </p>
      </StepsSection>

      <PanelSection gray aside>
        <Panel>
          <h2 className="accent-heading text-2xl font-bold md:text-3xl">Signs You Need an Oil Change</h2>
          <ul className="checks mt-6 text-lg text-brand-dark">
            <li>The oil change or maintenance reminder light is on</li>
            <li>The oil on the dipstick looks dark, gritty, or low</li>
            <li>The engine sounds louder or makes a ticking noise</li>
            <li>A burning oil smell inside or around the car</li>
            <li>You've driven past the kilometres on your last oil change sticker</li>
          </ul>
        </Panel>
        <Panel label="Good to know" dark>
          <p className="mt-4 text-lg text-white/90">
            Due for a{" "}
            <Link href="/services/maintenance/tire-change" className="text-brand-light underline">seasonal tire change</Link> too? Book both and we&apos;ll do them in
            one visit.
          </p>
        </Panel>
      </PanelSection>

      <Faq title="Oil Change FAQ" faqs={faqs} split />

      <BookingCta
        heading="Book a Quick Oil Change in West Edmonton"
        text="Book ahead and we'll have you in and out quickly, with the price up front."
        label="Get an Oil Change Quote"
        gray
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/maintenance/oil-change-services"
        also={[
          { title: "Antifreeze Coolant Flush", href: "/services/flushes/antifreeze-coolant-flush" },
          { title: "Transmission Service", href: "/services/flushes/transmission-service" },
        ]}
      />

    </main>
  )
}
