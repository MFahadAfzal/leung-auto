// app/services/layout.tsx
// Breadcrumbs for every page under /services are shown inside the page intro (components/PageHero.tsx),
// on top of the photo, so this layout just passes the page through.
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
