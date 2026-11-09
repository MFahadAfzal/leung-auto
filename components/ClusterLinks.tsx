// components/ClusterLinks.tsx
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services"

type LinkItem = { title: string; href: string }

// Bottom-of-page links for a service subpage. Every page in a group (like Brake Repair) links up to
// its hub and across to each of its sibling pages, so the whole group feeds into itself.
// `also` is for at most a couple of closely related pages in other groups.
export default function ClusterLinks({ current, also = [] }: { current: string; also?: LinkItem[] }) {
  const hub = services.find((s) => s.spokes.some((spoke) => spoke.href === current))!
  const siblings = hub.spokes.filter((spoke) => spoke.href !== current)

  return (
    <section className="border-t border-[#BDDDFC] bg-[#BDDDFC]/20 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold">Related Services</h2>
        <p className="mt-2 text-center text-lg">
          Part of our{" "}
          <Link href={hub.href} className="text-[#384959] underline">{hub.title}</Link>{" "}
          services.
        </p>

        {/* Sibling pages in the same group */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {siblings.map((spoke) => (
            <Link
              key={spoke.href}
              href={spoke.href}
              className="group flex items-start gap-4 rounded-lg border border-[#BDDDFC] bg-white p-6 transition hover:border-[#384959] hover:shadow-md"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#384959]">{spoke.title}</h3>
                <p className="mt-2 text-gray-600">{spoke.blurb}</p>
              </div>
              <ArrowRight className="mt-1 shrink-0 text-[#384959] transition group-hover:translate-x-1" size={20} />
            </Link>
          ))}
        </div>

        {also.length > 0 && (
          <p className="mt-6 text-center text-lg">
            You may also need:{" "}
            {also.map((item, i) => (
              <span key={item.href}>
                {i > 0 && " · "}
                <Link href={item.href} className="text-[#384959] underline">{item.title}</Link>
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  )
}
