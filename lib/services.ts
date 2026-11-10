// lib/services.ts
export const services = [
  {
    title: "Brake Repair",
    href: "/services/brakes",
    blurb: "Brake repair, brake inspection, and brake service to keep you stopping safely.",
    spokes: [
      { title: "Brake Pad Replacement", href: "/services/brakes/brake-pad-replacement", blurb: "Brakes squealing or grinding, a soft brake pedal, or brake rotor replacement." },
      { title: "Brake Fluid Flush", href: "/services/brakes/brake-fluid-flush", blurb: "Signs you need a brake fluid flush: a soft pedal, or old, dark brake fluid." },
      { title: "ABS Brake Repair", href: "/services/brakes/abs-brake-repair", blurb: "An ABS warning light on the dashboard, or ABS acting up when you brake." },
    ],
  },
  {
    title: "Steering and Suspension Repair",
    href: "/services/suspension",
    blurb: "Fix steering problems, clunking, pulling, and bouncy rides.",
    spokes: [
      { title: "Suspension Repair", href: "/services/suspension/suspension-repair", blurb: "A bouncy ride, clunking over bumps, leaking shocks, or worn ball joints." },
      { title: "Steering Repair", href: "/services/suspension/steering-repair", blurb: "Power steering fluid leaks, a power steering flush, loose steering, or clunking when turning." },
    ],
  },
  {
    title: "Car Diagnostics",
    href: "/services/diagnostics",
    blurb: "Car diagnostic for check engine lights, transmission, and electrical problems.",
    spokes: [
      { title: "Check Engine Light Diagnosis", href: "/services/diagnostics#check-engine-light", blurb: "The check engine light is on or flashing." },
      { title: "Transmission Diagnostic", href: "/services/diagnostics#transmission-diagnostics", blurb: "Slipping, rough or delayed shifts, or a transmission warning light." },
      { title: "Car Electrical Diagnostic", href: "/services/diagnostics#electrical-diagnostics", blurb: "Dead batteries, flickering lights, or electrical parts that stop working." },
    ],
  },
  {
    title: "Car Maintenance",
    href: "/services/maintenance",
    blurb: "Regular upkeep to extend the life of your vehicle.",
    spokes: [
      { title: "Oil Change Services", href: "/services/maintenance/oil-change-services", blurb: "Quick oil change with synthetic or conventional oil, when your oil change is due." },
      { title: "Tire Change and Tire Rotation", href: "/services/maintenance/tire-change", blurb: "Winter tire change, summer tire change, and tire rotation." },
      { title: "Wheel Alignment", href: "/services/maintenance/wheel-alignment", blurb: "Wheel or tire alignment when the car pulls, the steering wheel is off-centre, or tires wear unevenly." },
    ],
  },
  {
    title: "Car Inspections",
    href: "/services/inspection",
    blurb: "Out of province inspections and pre-purchase used car inspections.",
    spokes: [
      { title: "Out of Province Inspection", href: "/services/inspection/out-of-province-inspection", blurb: "You are registering a vehicle from another province or country in Alberta." },
      { title: "Pre-Purchase Inspection", href: "/services/inspection/pre-purchase-inspection", blurb: "Have a used car checked before you buy it, from a dealer or a private seller." },
    ],
  },
  {
    title: "Fluid Flushes",
    href: "/services/flushes",
    blurb: "Fresh fluids to keep your systems running efficiently.",
    spokes: [
      { title: "Antifreeze Coolant Flush", href: "/services/flushes/antifreeze-coolant-flush", blurb: "Overheating, old or dirty antifreeze, or a radiator flush is due." },
      { title: "Transmission Service", href: "/services/flushes/transmission-service", blurb: "Transmission fluid change service or flush, or signs you need a transmission fluid change." },
    ],
  },
]