// app/services/maintenance/tire-change/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Tire Change & Tire Rotation Edmonton | Leung's Auto Service",
  description:
    "Winter tire change, summer tire change, and tire rotation in West Edmonton. Learn when to switch to winter tires and how often to rotate tires.",
}

// Questions shown in the FAQ section, also sent to Google as FAQ structured data
const faqs = [
  {
    question: "When should I switch to winter tires in Edmonton?",
    answer:
      "Put winter tires on once daytime temperatures stay around 7°C or colder. In Edmonton, that's usually by mid-October, before the first snow. Switch back to summer or all-season tires once it stays above 7°C in spring.",
  },
  {
    question: "How often should you rotate tires?",
    answer:
      "Many manufacturers recommend a tire rotation about every 8,000 to 12,000 km. An easy way to stay on schedule is to rotate your tires at each seasonal tire change.",
  },
  {
    question: "Can you rotate my tires during a tire change?",
    answer:
      "Yes. When we do your winter or summer tire change, we can put each tire in a new position so they wear evenly from season to season.",
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

export default function TireChange() {
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
        <h1 className="text-4xl font-bold md:text-5xl">Tire Change and Tire Rotation in Edmonton</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Edmonton winters call for winter tires, and summer driving calls for something else. Leung's Auto Service
          does winter tire changes, summer tire changes, and tire rotations on domestic and import vehicles at our
          shop in West Edmonton.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book a Tire Change
        </Link>
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

          <h2 className="mt-10 text-3xl font-bold">When to Switch to Winter Tires</h2>
          <p className="mt-4 text-lg">
            A common rule is to switch to winter tires once daytime temperatures stay around 7°C or colder. In
            Edmonton, that's usually by mid-October, before the first snow. Book early, since fall is one of the
            busiest times of year for tire changes.
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
            highway speeds.
          </p>

          <h2 className="mt-10 text-3xl font-bold">How Often to Rotate Tires</h2>
          <p className="mt-4 text-lg">
            Many manufacturers recommend a tire rotation about every 8,000 to 12,000 km. An easy way to stay on
            schedule is to rotate your tires at each seasonal tire change, so each set wears evenly from year to year.
            Check your owner's manual, or ask us what your vehicle needs.
          </p>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Tire Change and Tire Rotation Cost</h2>
          <p className="mt-4 text-lg">
            The price depends on your vehicle and whether your tires are already on rims or need to be mounted and
            balanced. Adding a tire rotation to your seasonal tire change is an easy way to get both done in one
            visit.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
            Book Your Winter Tire Change
          </Link>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Tire Change FAQ</h2>
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
          <Link href="/services/maintenance" className="text-[#2D3047] underline">Car Maintenance</Link>
          <Link href="/services/maintenance/wheel-alignment" className="text-[#2D3047] underline">Wheel Alignment</Link>
          <Link href="/services/maintenance/oil-change-services" className="text-[#2D3047] underline">Oil Change Services</Link>
          <Link href="/services/brakes" className="text-[#2D3047] underline">Brake Inspection</Link>
        </div>
      </section>

    </main>
  )
}
