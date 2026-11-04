// components/LastUpdated.tsx
// Shows when a page's content was last reviewed. Change the date on a page whenever its content is updated.
export default function LastUpdated({ date }: { date: string }) {
  // Format "2026-11-03" as "November 3, 2026" (parsed as UTC so the day never shifts by time zone)
  const label = new Date(`${date}T00:00:00Z`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })

  return (
    <p className="mt-4 text-sm text-gray-500">
      Last updated <time dateTime={date}>{label}</time>
    </p>
  )
}
