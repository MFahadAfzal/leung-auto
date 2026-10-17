import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Leni Nievera",
    text: "Excellent service and very reasonable price. I finally found an honest and dependable repair shop. I will highly recommend this shop 👍",
  },
  {
    name: "DL Duffy",
    text: "Excellent experience with Leung’s Auto. They assessed my car quickly, explained the problem clearly, and had it repaired the next day. Cars are not my specialty, so I really appreciated that they took the time to show me the parts that were affected, explain what was wrong, and then show me the damaged parts again when the work was finished. Honest, reliable, efficient, and very easy to deal with. It’s reassuring to find a shop you feel you can trust. Highly recommend.",
  },
  {
    name: "Mac Rey",
    text: "Bought an old impala for work, wobbly and all that. Came out of his shop working and all that for just 600bucks.. Meanwhile I brought my Van in dealership and all they did was x-oil and I paid almost 600bucks.",
  },
]

export default function Home() {
  return (
    <main className="flex-1">

      {/* ===== HERO: shop photo with headline and buttons on top ===== */}
      <section className="relative flex min-h-[500px] items-center justify-center">

        {/* Background photo (file lives in public/images) */}
        <Image
          src="/images/front.jpeg"
          alt="Front of Leung's Auto Service, a car repair shop in West Edmonton"
          fill
          priority
          className="object-cover"
        />

        {/* Dark layer so the white text stays readable over the photo */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Headline, subtext, and buttons (z-10 keeps them above the dark layer) */}
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">Car Repair in Edmonton</h1>
          <p className="mt-4 text-lg md:text-xl">
            Honest, affordable car repair in West Edmonton for domestic and import vehicles since 2002.
          </p>

          {/* Buttons stack on phones, sit side by side from sm up */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded bg-white px-6 py-3 font-bold text-[#2D3047] hover:bg-gray-200">
              Book Car Repair
            </Link>
            <Link href="/services" className="rounded border border-white px-6 py-3 font-bold text-white hover:bg-white/10">
              Our Services
            </Link>
          </div>
        </div>
      </section>


      {/* ===== ABOUT: trust section (independent, trusted, affordable) ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">A Trusted Mechanic in West Edmonton</h2>
        <p className="mt-4 text-lg md:text-xl">
          Leung's Auto Service is an independent shop known for trusted mechanics, certified technicians, and
          affordable car repair in Edmonton. We explain the work before we do it, so you only pay for what your
          vehicle needs.
        </p>
      </section>

            {/* ===== TESTIMONIALS: real Google reviews ===== */}
      <section className="bg-gray-100 px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
        <p className="mt-4 text-lg md:text-xl">
          Here's what customers have said about their experience with Leung's Auto Service.
        </p>

        {/* 1 column on phones, 3 side by side from lg up */}
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="flex flex-col rounded bg-white p-6 text-left shadow">

              {/* Five filled stars */}
              <div className="flex gap-1 text-yellow-500" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="mt-4 flex-1 text-gray-700">“{review.text}”</p>

              <p className="mt-4 font-bold">{review.name}</p>
              <p className="text-sm text-gray-500">Google review</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BOOKING: closing call to action ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Book Car Repair in Edmonton</h2>
        <p className="mt-4 text-lg md:text-xl">
          Ready to get your vehicle looked at? Contact our West Edmonton shop to book an appointment.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Book Now
        </Link>
      </section>

    </main>
  )
}