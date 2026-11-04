// app/services/maintenance/tire-change/page.tsx
import Image from "next/image"
import Link from "next/link"
import LastUpdated from "@/components/LastUpdated"
import ClusterLinks from "@/components/ClusterLinks"
import BookingCta from "@/components/BookingCta"
import Faq from "@/components/Faq"

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
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Tire Change and Tire Rotation in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Edmonton winters call for winter tires, and summer driving calls for something else. Leung's Auto Service
          does winter tire changes, summer tire changes, and tire rotations on domestic and import vehicles at our
          shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Tire Change
        </Link>
        <LastUpdated date="2026-11-03" />
      </section>

      {/* ===== PHOTO (file lives in public/images) ===== */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/tire-change.jpg"
            alt="Mechanic doing a winter tire change and tire rotation at Leung's Auto Service in Edmonton"
            width={1200}
            height={800}
            className="h-auto w-full rounded"
          />
        </div>
      </section>

      {/* ===== WHEN YOU NEED A TIRE CHANGE ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">When You Need a Tire Change</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            <li>The season is changing and it's time for a winter tire change or summer tire change</li>
            <li>The tread is worn down low</li>
            <li>Cracks, bulges, or cuts in the sidewall</li>
            <li>A tire keeps losing air</li>
            <li>More vibration or road noise than usual</li>
          </ul>
        </div>
      </section>

      {/* ===== WINTER TIRE CHANGE ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Winter Tire Change</h2>
          <p className="mt-4 text-lg">
            Winter tires use a softer rubber and deeper tread that grip on snow and ice, and stay flexible when
            all-season tires go hard in the cold. A winter tire change before the first snow keeps you safer on
            Edmonton roads and can lower your insurance with some providers.
          </p>
        </div>
      </section>

      {/* ===== SUMMER TIRE CHANGE ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Summer Tire Change</h2>
          <p className="mt-4 text-lg">
            Once it stays above 7°C in spring, it's time for a summer tire change. Winter tires wear out quickly on
            warm, dry pavement, so switching back to summer or all-season tires saves your winter set for next year
            and gives you better handling and braking in the warm months.
          </p>
        </div>
      </section>

      {/* ===== WHAT'S INVOLVED ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What a Tire Change Involves</h2>
          <p className="mt-4 text-lg">
            We remove your current tires, install your seasonal or new tires, set the tire pressure, and torque the
            wheel nuts to spec. While the wheels are off, we can take a look at your brakes and let you know what we
            find.
          </p>
        </div>
      </section>

      {/* ===== TIRE ROTATION ===== */}
      <section id="tire-rotation" className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Tire Rotation</h2>
          <p className="mt-4 text-lg">
            Rotating your tires helps them wear evenly, so they last longer and grip better. During a tire rotation,
            we move each tire to a different position following the right pattern for your vehicle, set the tire
            pressure, torque the wheel nuts to spec, and check the tread. Signs you need a tire rotation include
            front tires that are more worn than the back, uneven wear across the tread, and more vibration at
            highway speeds. If a tire is wearing down on one edge, you may need a{" "}
            <Link href="/services/maintenance/wheel-alignment" className="text-[#2D3047] underline">wheel alignment</Link> as well.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <Faq title="Tire Change FAQ" faqs={faqs} />

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
