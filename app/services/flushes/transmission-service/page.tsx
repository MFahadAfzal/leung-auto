// app/services/flushes/transmission-service/page.tsx
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"
import PageHero from "@/components/PageHero"
import StepsSection from "@/components/StepsSection"
import { Panel, PanelSection } from "@/components/Panels"

export const metadata = {
  title: "Transmission Service Edmonton | Fluid Change & Flush",
  description:
    "Transmission service in West Edmonton: transmission fluid change service and automatic transmission fluid flush. Learn how often to change transmission fluid.",
  alternates: {
    canonical: "/services/flushes/transmission-service",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "Is a transmission flush necessary?",
    answer:
      "Only for some vehicles. Many only need a regular transmission fluid change, and some manufacturers recommend against a flush. We check your vehicle's service schedule and the condition of the fluid, then recommend the fluid change or transmission flush your vehicle actually needs.",
  },
  {
    question: "How often should you change transmission fluid?",
    answer:
      "Every 50,000 to 100,000 km for most automatic transmissions, though some manufacturers list longer intervals. How often to change transmission fluid depends on your vehicle and transmission type. Towing, heavy loads, and short trips in Edmonton's cold winters count as severe driving and shorten the interval. Check your owner's manual, or ask us what your vehicle needs.",
  },
  {
    question: "How much does a transmission service cost?",
    answer:
      "The price depends on your vehicle, how much fluid it takes, the type of fluid it needs, and whether it needs a fluid change or a flush. A transmission service costs far less than a transmission rebuild.",
  },
]

export default function TransmissionService() {
  return (
    <main className="flex-1">
      {/* ===== INTRO ===== */}
      <PageHero
        heading="Transmission Service in Edmonton"
        cta="Book a Transmission Service"
        image={{ src: "/images/transmission-service.jpg", alt: "Automatic transmission gear shifter in a car that is due for a transmission service in Edmonton" }}
      >
        Transmission fluid cools and protects the parts inside your transmission, and it wears out with heat and
          time. Leung's Auto Service does transmission service, including transmission fluid change service and
          transmission flushes, on domestic and import vehicles at our shop in West Edmonton.
      </PageHero>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <h2 className="accent-heading text-3xl font-bold">Signs You Need a Transmission Fluid Change</h2>
          </div>
          <div className="lg:col-span-3">
            <ul className="checks text-lg text-brand-dark">
              <li>Transmission fluid that looks dark or smells burnt</li>
              <li>Rough, delayed, or slipping shifts</li>
              <li>The car hesitates before moving in drive or reverse</li>
              <li>A transmission warning light on the dashboard</li>
              <li>You tow, haul heavy loads, or do a lot of stop-and-go driving</li>
              <li>It has been a long time since your last transmission service</li>
            </ul>
          </div>
        </div>
      </section>

      <PanelSection gray heading="Transmission Fluid Change Service vs. Transmission Flush">
        <Panel label="Fluid change service">
          <p className="mt-4 text-lg text-gray-700">
            A transmission fluid change service drains the old fluid from the pan and refills it with fresh fluid.
            It replaces part of the fluid each time, so regular changes keep it in good shape.
          </p>
        </Panel>
        <Panel label="Transmission flush" dark>
          <p className="mt-4 text-lg text-white/90">
            A transmission service flush, also called an automatic transmission fluid flush, pushes out nearly all
            of the old fluid and replaces it with new fluid. It's a more complete change in one visit.
          </p>
        </Panel>
      </PanelSection>

      <StepsSection
        heading="What Our Transmission Service Includes"
        steps={[
          { title: "Check the old fluid", text: "Its condition tells us how the transmission is doing" },
          { title: "Replace the fluid", text: "Fluid that meets your vehicle's specification" },
          { title: "Check for leaks", text: "And explain anything we find before going further" },
        ]}
      >
        <p className="mt-4 text-lg text-gray-700">
          We check the condition of the old fluid, replace it with fluid that meets your vehicle's specification,
          and check for leaks. If the fluid points to a deeper problem, we explain what we find before going any
          further. You approve the work and the price before we start.
        </p>
      </StepsSection>

      <Faq title="Transmission Service FAQ" faqs={faqs} split gray />

      <BookingCta
        heading="Book a Transmission Service in West Edmonton"
        text="We'll check your transmission fluid and give you a price before any work starts."
        label="Get a Transmission Fluid Change Quote"
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/flushes/transmission-service"
        also={[
          { title: "Transmission Diagnostic", href: "/services/diagnostics#transmission-diagnostics" },
          { title: "Oil Change Services", href: "/services/maintenance/oil-change-services" },
        ]}
      />

    </main>
  )
}
