import type { Category } from "./types";
import { px, photos } from "./images";

/**
 * Product categories. Each category has its own page listing products.
 * Descriptive copy is PLACEHOLDER and to be replaced before launch.
 */
export const categories: Category[] = [
  {
    slug: "grains-pulses",
    name: "Grains & Pulses",
    image: px(photos.variety),
    // [Placeholder]
    shortDescription: "Toor, chana, masoor, moong, urad, chickpeas and more.",
    // [Placeholder]
    longDescription:
      "Our flagship range: machine-cleaned, graded, export-ready pulses and dal sourced from established Indian growing belts. Available whole, split, and dehusked, in bulk and retail-ready packs with full documentation.",
  },
  {
    slug: "spices",
    name: "Spices",
    image: px(photos.redChilli),
    // [Placeholder]
    shortDescription: "Whole and ground spices from trusted regional growers.",
    // [Placeholder]
    longDescription:
      "Turmeric, cumin, coriander, chilli, pepper and more — cleaned, graded, and packed to order for both bulk export and retail. Documentation aligned to your destination market's requirements.",
  },
  {
    slug: "fruits-vegetables",
    name: "Fruits & Vegetables",
    image: px(photos.mangoes),
    // [Placeholder]
    shortDescription: "Fresh, seasonal produce packed for domestic and export.",
    // [Placeholder]
    longDescription:
      "Seasonal fruits and vegetables selected for freshness and shelf life, packed and cold-chain handled for domestic distribution and export, with guidance on grades, pack sizes, and phytosanitary paperwork.",
  },
  {
    slug: "dry-fruits-nuts",
    name: "Dry Fruits & Nuts",
    image: px(photos.nutsMix),
    // [Placeholder]
    shortDescription: "Premium dry fruits and nuts, graded and quality-checked.",
    // [Placeholder]
    longDescription:
      "Cashews, almonds, raisins, pistachios, dates and more — sorted by grade and packed to preserve freshness, quality-checked for size, colour, and moisture shipment after shipment.",
  },
  {
    slug: "textiles",
    name: "Textiles",
    image: px(photos.cottonFabric),
    // [Placeholder]
    shortDescription: "Fabric, home textiles and finished goods for wholesale.",
    // [Placeholder]
    longDescription:
      "Raw fabric, cotton yarn, home textiles and finished goods for wholesale and retail buyers. We coordinate production, quality control, and export logistics with predictable lead times.",
  },
  {
    slug: "handicrafts",
    name: "Handicrafts",
    image: px(photos.pottery),
    // [Placeholder]
    shortDescription: "Artisanal handmade goods with global market appeal.",
    // [Placeholder]
    longDescription:
      "Handmade décor, tableware, and gift lines produced by skilled artisans. We handle sampling, consolidation, and export so retailers can bring distinctive handmade ranges to their shelves.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
