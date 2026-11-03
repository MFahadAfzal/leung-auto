// app/services/layout.tsx
import Breadcrumbs from "@/components/Breadcrumbs"

// Every page under /services gets breadcrumbs above its content
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  )
}
