import type { Category } from "./types";
import { px, photos } from "./images";

/**
 * The six seed categories from the approved homepage mockup.
 *
 * All descriptive copy below is PLACEHOLDER text (flagged here in code) — the
 * site owners will replace it with real product/sourcing details before launch.
 * The `[Placeholder]` marker is intentionally kept out of the display strings
 * so the UI reads naturally while the source clearly flags what's provisional.
 */
export const categories: Category[] = [
  {
    slug: "spices",
    name: "Spices",
    thumbLabel: "SPICES · 001",
    heroImage: px(photos.spices),
    // [Placeholder]
    shortDescription:
      "Whole and ground spices sourced from trusted regional growers.",
    // [Placeholder]
    longDescription:
      "From turmeric and cumin to cardamom and pepper, we source whole and ground spices directly from established growing regions across India. Each lot is cleaned, graded, and packed to order for both bulk export and retail-ready formats, with documentation to match your destination market's requirements.",
  },
  {
    slug: "fruits-vegetables",
    name: "Fruits & Vegetables",
    thumbLabel: "PRODUCE · 002",
    heroImage: px(photos.fruitsVegetables),
    // [Placeholder]
    shortDescription:
      "Fresh and seasonal produce, packed for both domestic and export.",
    // [Placeholder]
    longDescription:
      "Seasonal fruits and vegetables selected for freshness and shelf life, packed and cold-chain handled for domestic distribution and export. We work with growers to align harvest windows with your order schedule and can advise on grades, pack sizes, and phytosanitary paperwork.",
  },
  {
    slug: "grains-pulses",
    name: "Grains & Pulses",
    thumbLabel: "GRAINS · 003",
    heroImage: px(photos.grainsPulses),
    // [Placeholder]
    shortDescription:
      "Rice, wheat, lentils and pulses in bulk and retail-ready formats.",
    // [Placeholder]
    longDescription:
      "A dependable supply of rice, wheat, lentils, chickpeas, and assorted pulses. Available in bulk sacks or retail-ready packaging, sorted and quality-checked for purity and moisture. Ideal for wholesalers, distributors, and food manufacturers seeking a consistent, traceable source.",
  },
  {
    slug: "dry-fruits-nuts",
    name: "Dry Fruits & Nuts",
    thumbLabel: "NUTS · 004",
    heroImage: px(photos.dryFruitsNuts),
    // [Placeholder]
    shortDescription: "Premium dry fruits and nuts, graded and quality-checked.",
    // [Placeholder]
    longDescription:
      "Premium dry fruits and nuts — almonds, cashews, raisins, dates, and more — sorted by grade and packed to preserve freshness. Every consignment is quality-checked for size, colour, and moisture so buyers receive a consistent product shipment after shipment.",
  },
  {
    slug: "textiles",
    name: "Textiles",
    thumbLabel: "TEXTILE · 005",
    heroImage: px(photos.textiles),
    // [Placeholder]
    shortDescription: "Fabric and finished textile goods for wholesale buyers.",
    // [Placeholder]
    longDescription:
      "Raw fabric and finished textile goods for wholesale and retail buyers. From cotton and linen yardage to made-up home textiles, we coordinate production, quality control, and export logistics so you can order with confidence and predictable lead times.",
  },
  {
    slug: "handicrafts",
    name: "Handicrafts",
    thumbLabel: "CRAFT · 006",
    heroImage: px(photos.handicrafts),
    // [Placeholder]
    shortDescription: "Artisanal handmade goods with global market appeal.",
    // [Placeholder]
    longDescription:
      "Artisanal, handmade goods that carry genuine craft appeal for international markets — décor, tableware, and gift lines produced by skilled makers. We handle sampling, consolidation, and export so retailers and importers can bring distinctive handmade ranges to their shelves.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
