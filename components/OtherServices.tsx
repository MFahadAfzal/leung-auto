// components/OtherServices.tsx
import Link from "next/link"
import { services } from "@/lib/services"

// Links from one service hub to all the others, so every section of the site links across to the rest
export default function OtherServices({ current }: { current: string }) {
  return (
    <section className="border-t border-[#BDDDFC] px-6 py-12 text-center">
      <h2 className="text-2xl font-bold">Other Automotive Services</h2>
      <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-3">
        {services
          .filter((service) => service.href !== current)
          .map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="rounded-full border border-[#6A89A7]/40 px-5 py-2 font-medium text-[#384959] transition hover:border-[#384959] hover:bg-[#384959] hover:text-white"
            >
              {service.title}
            </Link>
          ))}
      </div>
    </section>
  )
}
