// components/OtherServices.tsx
import Link from "next/link"
import { services } from "@/lib/services"

// Links from one service hub to all the others, so every section of the site links across to the rest
export default function OtherServices({ current }: { current: string }) {
  return (
    <section className="border-t border-gray-200 px-6 py-12 text-center">
      <h2 className="text-2xl font-bold">Other Automotive Services</h2>
      <div className="mt-4 flex flex-wrap justify-center gap-6">
        {services
          .filter((service) => service.href !== current)
          .map((service) => (
            <Link key={service.href} href={service.href} className="text-[#2D3047] underline">
              {service.title}
            </Link>
          ))}
      </div>
    </section>
  )
}
