import type { Product } from "./types";
import { px, photos } from "./images";

/**
 * Core pulses / dal product range.
 *
 * All descriptive copy below is PLACEHOLDER text (flagged here in code) — the
 * team will replace it with real product/sourcing details before launch.
 */
export const products: Product[] = [
  {
    slug: "toor-dal",
    name: "Toor Dal",
    localName: "Arhar / Pigeon Pea (split)",
    image: px(photos.toorDal),
    // [Placeholder]
    shortDescription: "Split pigeon peas, machine-cleaned and export-graded.",
    // [Placeholder]
    longDescription:
      "Our Toor Dal (Arhar) is sourced from established growing belts, then machine-cleaned, sorted, and polished to consistent export grade. Available polished or unpolished, in bulk and retail-ready packs, with full documentation for your destination market.",
    specs: [
      { label: "Type", value: "Split, polished / unpolished" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Sortex-cleaned" },
    ],
  },
  {
    slug: "chana-dal",
    name: "Chana Dal",
    localName: "Split Bengal Gram",
    image: px(photos.chanaDal),
    // [Placeholder]
    shortDescription: "Split, dehusked Bengal gram with uniform golden colour.",
    // [Placeholder]
    longDescription:
      "Chana Dal — split, dehusked Bengal gram — graded for uniform size and colour. Cleaned and packed to order for wholesalers, distributors, and food manufacturers seeking a consistent, traceable source.",
    specs: [
      { label: "Type", value: "Split, dehusked" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Sortex-cleaned" },
    ],
  },
  {
    slug: "masoor-dal",
    name: "Masoor Dal",
    localName: "Red Lentils",
    image: px(photos.masoorDal),
    // [Placeholder]
    shortDescription: "Vibrant red lentils, whole or split, quality-checked.",
    // [Placeholder]
    longDescription:
      "Masoor Dal (red lentils) available whole (sabut) or split (dhuli), cleaned and colour-sorted for a bright, consistent finish. Quick-cooking and in demand across global markets.",
    specs: [
      { label: "Type", value: "Whole / split" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Colour-sorted" },
    ],
  },
  {
    slug: "moong-dal",
    name: "Green Moong",
    localName: "Green Gram / Mung",
    image: px(photos.greenMoong),
    // [Placeholder]
    shortDescription: "Whole green gram, bold-sized and cleaned for export.",
    // [Placeholder]
    longDescription:
      "Whole Green Moong (green gram) selected for bold, uniform grain and cleaned to export standard. Also available split and dehusked on request. A versatile, high-protein staple for retail and processing.",
    specs: [
      { label: "Type", value: "Whole / split available" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Sortex-cleaned" },
    ],
  },
  {
    slug: "urad-dal",
    name: "Urad Dal",
    localName: "Black Gram",
    image: px(photos.uradDal),
    // [Placeholder]
    shortDescription: "Black gram — whole, split, or dehusked to order.",
    // [Placeholder]
    longDescription:
      "Urad Dal (black gram) supplied whole (sabut), split (chilka), or dehusked (dhuli) depending on your requirement. Cleaned and graded for consistency shipment after shipment.",
    specs: [
      { label: "Type", value: "Whole / split / dehusked" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Sortex-cleaned" },
    ],
  },
  {
    slug: "kabuli-chana",
    name: "Chickpeas (Kabuli)",
    localName: "Kabuli Chana / Garbanzo",
    image: px(photos.kabuliChana),
    // [Placeholder]
    shortDescription: "Bold, cream-coloured chickpeas in multiple calibres.",
    // [Placeholder]
    longDescription:
      "Kabuli Chana (chickpeas) available across calibres (e.g. 42/44 to 58/60 count) with a bold, cream-coloured finish. Machine-cleaned and sized for both retail and industrial buyers.",
    specs: [
      { label: "Calibres", value: "42/44 – 58/60 count" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Sortex-cleaned" },
    ],
  },
  {
    slug: "black-eye-pea",
    name: "Black Eye Pea",
    localName: "Lobia / Cowpea",
    image: px(photos.blackEyePea),
    // [Placeholder]
    shortDescription: "Cowpeas with a clean, uniform look and reliable supply.",
    // [Placeholder]
    longDescription:
      "Black Eye Pea (Lobia / Cowpea) cleaned and graded for a uniform appearance and low foreign matter. A staple with steady demand across South Asian and African markets.",
    specs: [
      { label: "Type", value: "Whole" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Sortex-cleaned" },
    ],
  },
  {
    slug: "other-pulses",
    name: "Other Pulses",
    localName: "Rajma, Kidney Beans & more",
    image: px(photos.variety),
    // [Placeholder]
    shortDescription: "Rajma, kidney beans, and more — ask for availability.",
    // [Placeholder]
    longDescription:
      "Beyond our core range we can source and supply a wider basket of pulses and beans — including rajma (kidney beans) and regional specialities — subject to season and availability. Tell us what you need and we'll quote.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
