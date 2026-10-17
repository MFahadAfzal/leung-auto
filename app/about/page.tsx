// app/about/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "About Leung's Auto Service | Independent Auto Repair in Edmonton",
  description:
    "Leung's Auto Service is an independent, AMVIC certified auto repair shop in West Edmonton, serving domestic and import vehicles since 2002.",
}

export default function About() {
  return (
    <main className="flex-1">

      {/* ===== INTRO ===== */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">About Leung's Auto Service</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Leung's Auto Service is an independent auto repair shop in West Edmonton, run by owner Allan Leung
          and serving local drivers since 2002.
        </p>
      </section>

      {/* ===== STORY: photo beside text on desktop, stacked on phones ===== */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row">

          {/* Shop photo */}
          <div className="relative h-72 w-full md:h-96 md:w-1/2">
            <Image
              src="/images/front.jpeg"
              alt="Front of Leung's Auto Service on 149 Street in Edmonton"
              fill
              className="rounded object-cover"
            />
          </div>

          {/* Story text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold">Honest Repairs, Fair Prices</h2>
            <p className="mt-4 text-lg">
              We work on both domestic and import vehicles. Before any repair starts, we explain what is wrong
              and what it will take to fix, so you know what you are paying for.
            </p>
            <p className="mt-4 text-lg">
              The shop is AMVIC certified, and most of our customers come back or send their friends and family.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Visit Our Shop</h2>
        <p className="mt-4 text-lg md:text-xl">12025 149 St NW, Edmonton, AB T5L 2J2</p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-[#2D3047] px-6 py-3 font-bold text-white hover:opacity-90">
          Contact Us
        </Link>
      </section>

    </main>
  )
}