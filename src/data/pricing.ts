// ────────────────────────────────────────────────────────────
// Central price list for Angavu Cleaners.
// Consumed by both the homepage Pricing section and the full
// /pricing page so the two never drift out of sync.
// ────────────────────────────────────────────────────────────

export type PriceRow = { unit: string; price: string }
export type ExtraRow = { service: string; price: string }

export type RoomCategory = {
  key: "bnb" | "standard" | "deep"
  label: string
  tagline: string
  rows: PriceRow[]
  extras?: ExtraRow[]
}

// Main cleaning categories (per room / unit)
export const roomCategories: RoomCategory[] = [
  {
    key: "bnb",
    label: "BnB Turnover",
    tagline: "Fast, guest-ready turnovers between stays",
    rows: [
      { unit: "Bedsitter", price: "KSh 500" },
      { unit: "1 Bedroom", price: "KSh 1,000" },
      { unit: "2 Bedrooms", price: "KSh 1,500" },
      { unit: "3 Bedrooms", price: "KSh 2,300" },
      { unit: "Same-Day Express Cleaning", price: "KSh 500" },
    ],
    extras: [
      { service: "Sofa Cleaning", price: "KSh 500 / seater" },
      { service: "Bedsheet & Towels", price: "KSh 300 / set" },
      { service: "Mattress Cleaning", price: "KSh 1,200 – 2,500" },
    ],
  },
  {
    key: "standard",
    label: "Standard Cleaning",
    tagline: "Regular cleaning for a fresh, tidy home",
    rows: [
      { unit: "Bedsitter", price: "KSh 1,000" },
      { unit: "1 Bedroom", price: "KSh 1,500" },
      { unit: "2 Bedrooms", price: "KSh 2,300" },
      { unit: "3 Bedrooms", price: "KSh 3,200" },
    ],
    extras: [
      { service: "Sofa Cleaning", price: "KSh 500 / seater" },
      { service: "Bedsheet & Towels", price: "KSh 350 / set" },
      { service: "Mattress Cleaning", price: "KSh 150 – 300" },
    ],
  },
  {
    key: "deep",
    label: "Deep Cleaning",
    tagline: "Intensive top-to-bottom deep clean for every corner",
    rows: [
      { unit: "Bedsitter", price: "KSh 2,000" },
      { unit: "1 Bedroom", price: "KSh 2,500" },
      { unit: "2 Bedrooms", price: "KSh 3,800" },
      { unit: "3 Bedrooms", price: "KSh 5,400" },
    ],
  },
]

// Convenient lookup by key
export const roomCategoryMap: Record<RoomCategory["key"], RoomCategory> =
  roomCategories.reduce((acc, c) => ({ ...acc, [c.key]: c }), {} as Record<RoomCategory["key"], RoomCategory>)

// ── Carpet cleaning (by size, in feet & material) ──
export const carpetCleaning: PriceRow[] = [
  { unit: "5 × 6 ft (Normal)", price: "KSh 450" },
  { unit: "7 × 5 ft (Normal)", price: "KSh 525" },
  { unit: "7 × 10 ft (Normal)", price: "KSh 1,050" },
  { unit: "5 × 6 ft (Fluffy)", price: "KSh 750" },
  { unit: "7 × 5 ft (Fluffy)", price: "KSh 875" },
  { unit: "7 × 10 ft (Fluffy)", price: "KSh 1,250" },
]

// ── Detailed add-on tables ──
export const mattressBySize: PriceRow[] = [
  { unit: "4 × 6 ft", price: "KSh 1,350" },
  { unit: "5 × 6 ft", price: "KSh 2,150" },
  { unit: "6 × 6 ft", price: "KSh 2,500" },
]

export const chesterBeds: PriceRow[] = [
  { unit: "4 × 6 ft", price: "KSh 1,000" },
  { unit: "5 × 6 ft", price: "KSh 1,500" },
  { unit: "6 × 6 ft", price: "KSh 2,000" },
]

export const diningSeats: PriceRow[] = [
  { unit: "Fabric", price: "KSh 300" },
  { unit: "Fabric + Backrest", price: "KSh 350" },
  { unit: "Full Upholstered", price: "KSh 500" },
]

export const curtains: PriceRow[] = [
  { unit: "Sheers", price: "KSh 150 – 250" },
  { unit: "Standard Curtains", price: "KSh 400 – 700" },
  { unit: "Blockout / Heavy Linen", price: "KSh 700 – 1,200" },
]

// A compact teaser used on the homepage right-hand column
export const addOnTeaser: ExtraRow[] = [
  { service: "Sofa Cleaning", price: "KSh 500 / seater" },
  { service: "Carpet Cleaning", price: "from KSh 450" },
  { service: "Mattress Cleaning", price: "from KSh 1,200" },
  { service: "Curtains", price: "from KSh 150" },
]
