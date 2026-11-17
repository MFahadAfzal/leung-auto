// lib/spokeIcons.ts
// One icon per specific service, shown on the service cards on each hub page.
import {
  BatteryCharging,
  CarFront,
  Cog,
  Disc,
  Disc3,
  Droplet,
  Droplets,
  FileCheck,
  Gauge,
  LifeBuoy,
  MoveHorizontal,
  Search,
  Thermometer,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react"

export const spokeIcons: Record<string, LucideIcon> = {
  "/services/brake-repair/brake-pad-replacement": Disc,
  "/services/brake-repair/brake-fluid-flush": Droplet,
  "/services/brake-repair/abs-brake-repair": TriangleAlert,
  "/services/suspension/suspension-repair": CarFront,
  "/services/suspension/steering-repair": LifeBuoy,
  "/services/car-diagnostic#check-engine-light": Gauge,
  "/services/car-diagnostic#transmission-diagnostics": Cog,
  "/services/car-diagnostic#electrical-diagnostics": BatteryCharging,
  "/services/maintenance/oil-change-services": Droplets,
  "/services/maintenance/tire-change": Disc3,
  "/services/maintenance/wheel-alignment": MoveHorizontal,
  "/services/car-inspection/out-of-province-inspection": FileCheck,
  "/services/car-inspection/pre-purchase-inspection": Search,
  "/services/flushes/transmission-service": Cog,
  "/services/flushes/antifreeze-coolant-flush": Thermometer,
}

export function spokeIcon(href: string): LucideIcon {
  return spokeIcons[href] ?? Disc
}
