// app/services/maintenance/tire-change/page.tsx
import Link from "next/link"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"
import PageHero from "@/components/PageHero"
import FeatureBand from "@/components/FeatureBand"
import StepsSection from "@/components/StepsSection"
import { Panel, PanelSection } from "@/components/Panels"

export const metadata = {
  title: "Tire Change & Tire Rotation Edmonton | Leung's Auto Service",
  description:
    "Winter tire change, summer tire change, and tire rotation in West Edmonton. Learn when to switch to winter tires and how often to rotate tires.",
  alternates: {
    canonical: "/services/maintenance/tire-change",
  },
}

// Questions shown in the FAQ section
const faqs = [
  {
    question: "When should I switch to winter tires in Edmonton?",
    answer:
      "Once temperatures stay at 7°C or colder, which is when the Tire and Rubber Association of Canada recommends switching. Below 7°C, all-season tires stiffen and lose grip. In Edmonton, that's usually by mid-October, before the first snow. Book early, since fall is one of the busiest times of year for tire changes. Switch back to summer or all-season tires once it stays above 7°C in spring.",
  },
  {
    question: "How often should you rotate tires?",
    answer:
      "Every 8,000 to 12,000 km, which is what many manufacturers recommend. An easy way to stay on schedule is to rotate your tires at each seasonal tire change, so each set wears evenly from year to year. Check your owner's manual, or ask us what your vehicle needs.",
  },
  {
    question: "Can you rotate my tires during a tire change?",
    answer:
      "Yes. When we do your winter or summer tire change, we can put each tire in a new position so they wear evenly from season to season.",
  },
  {
    question: "How much does a tire change cost?",
    answer:
      "The price depends on your vehicle and whether your tires are already on rims or need to be mounted and balanced. Adding a tire rotation to your seasonal tire change is an easy way to get both done in one visit.",
  },
]

export default function TireChange() {
  return (
    <main className="flex-1">
      {/* ===== INTRO ===== */}
      <PageHero
        heading="Tire Change and Tire Rotation in Edmonton"
        cta="Book a Tire Change"
        image={{ src: "/images/tire-change.jpg", alt: "Mechanic doing a winter tire change and tire rotation at Leung's Auto Service in Edmonton" }}
      >
        Edmonton winters call for winter tires, and summer driving calls for something else. Leung's Auto Service
          does winter tire changes, summer tire changes, and tire rotations on domestic and import vehicles at our
          shop in West Edmonton.
      </PageHero>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <h2 className="accent-heading text-3xl font-bold">When You Need a Tire Change</h2>
          </div>
          <div className="lg:col-span-3">
            <ul className="checks text-lg text-[#384959]">
              <li>The season is changing and it's time for a winter tire change or summer tire change</li>
              <li>The tread is worn down low</li>
              <li>Cracks, bulges, or cuts in the sidewall</li>
              <li>A tire keeps losing air</li>
              <li>More vibration or road noise than usual</li>
            </ul>
          </div>
        </div>
      </section>

      <PanelSection gray>
        <Panel>
          <h2 className="accent-heading text-2xl font-bold md:text-3xl">Winter Tire Change</h2>
          <p className="mt-4 text-lg text-gray-700">
            Winter tires use a softer rubber and deeper tread that grip on snow and ice, and stay flexible when
            all-season tires go hard in the cold. A winter tire change before the first snow keeps you safer on
            Edmonton roads and can lower your insurance with some providers.
          </p>
        </Panel>
        <Panel dark>
          <h2 className="accent-heading text-2xl font-bold text-white md:text-3xl">Summer Tire Change</h2>
          <p className="mt-4 text-lg text-white/90">
            Once it stays above 7°C in spring, it's time for a summer tire change. Winter tires wear out quickly on
            warm, dry pavement, so switching back to summer or all-season tires saves your winter set for next year
            and gives you better handling and braking in the warm months.
          </p>
        </Panel>
      </PanelSection>

      <StepsSection
        heading="What a Tire Change Involves"
        steps={[
          { title: "Swap the tires", text: "Your seasonal or new tires go on" },
          { title: "Set the pressure", text: "Every tire to the right pressure" },
          { title: "Torque to spec", text: "Wheel nuts tightened to spec" },
          { title: "Look at your brakes", text: "While the wheels are off" },
        ]}
      >
        <p className="mt-4 text-lg text-gray-700">
          We remove your current tires, install your seasonal or new tires, set the tire pressure, and torque the
          wheel nuts to spec. While the wheels are off, we can take a look at your brakes and let you know what we
          find.
        </p>
      </StepsSection>

      <FeatureBand heading="Tire Rotation" id="tire-rotation" gray>
        <p className="mt-4 text-lg text-gray-700">
          Rotating your tires helps them wear evenly, so they last longer and grip better. During a tire rotation,
          we move each tire to a different position following the right pattern for your vehicle, set the tire
          pressure, torque the wheel nuts to spec, and check the tread. Signs you need a tire rotation include
          front tires that are more worn than the back, uneven wear across the tread, and more vibration at
          highway speeds. If a tire is wearing down on one edge, you may need a{" "}
          <Link href="/services/maintenance/wheel-alignment" className="text-[#384959] underline">wheel alignment</Link> as well.
        </p>
      </FeatureBand>

      <Faq title="Tire Change FAQ" faqs={faqs} split />

      <BookingCta
        heading="Book a Tire Change in West Edmonton"
        text="Fall and spring book up fast. Reserve your seasonal tire change early."
        label="Book Your Winter Tire Change"
        gray
      />

      {/* ===== RELATED PAGES: the rest of this group, plus a couple of related pages elsewhere ===== */}
      <ClusterLinks
        current="/services/maintenance/tire-change"
        also={[
          { title: "Brake Inspection", href: "/services/brakes" },
        ]}
      />

    </main>
  )
}
