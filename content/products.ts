import type { Product } from "./types";
import { px, photos } from "./images";

/**
 * All products, grouped by category via `categorySlug`.
 * Descriptive copy is PLACEHOLDER (flagged in code) — replace before launch.
 */
export const products: Product[] = [
  // ─── Grains & Pulses ──────────────────────────────────────────────
  {
    slug: "toor-dal", categorySlug: "grains-pulses", name: "Toor Dal",
    localName: "Arhar / Pigeon Pea (split)", image: px(photos.toorDal),
    shortDescription: "Split pigeon peas, machine-cleaned and export-graded.",
    longDescription:
      "Toor Dal (Arhar) sourced from established growing belts, then machine-cleaned, sorted, and polished to consistent export grade. Available polished or unpolished, in bulk and retail-ready packs, with full documentation.",
    specs: [
      { label: "Type", value: "Split, polished / unpolished" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Sortex-cleaned" },
    ],
  },
  {
    slug: "chana-dal", categorySlug: "grains-pulses", name: "Chana Dal",
    localName: "Split Bengal Gram", image: px(photos.chanaDal),
    shortDescription: "Split, dehusked Bengal gram with uniform golden colour.",
    longDescription:
      "Chana Dal — split, dehusked Bengal gram — graded for uniform size and colour. Cleaned and packed to order for wholesalers, distributors, and food manufacturers.",
    specs: [
      { label: "Type", value: "Split, dehusked" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Sortex-cleaned" },
    ],
  },
  {
    slug: "masoor-dal", categorySlug: "grains-pulses", name: "Masoor Dal",
    localName: "Red Lentils", image: px(photos.masoorDal),
    shortDescription: "Vibrant red lentils, whole or split, quality-checked.",
    longDescription:
      "Masoor Dal (red lentils) available whole (sabut) or split (dhuli), cleaned and colour-sorted for a bright, consistent finish. Quick-cooking and in demand across global markets.",
    specs: [
      { label: "Type", value: "Whole / split" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Colour-sorted" },
    ],
  },
  {
    slug: "moong-dal", categorySlug: "grains-pulses", name: "Green Moong",
    localName: "Green Gram / Mung", image: px(photos.greenMoong),
    shortDescription: "Whole green gram, bold-sized and cleaned for export.",
    longDescription:
      "Whole Green Moong (green gram) selected for bold, uniform grain and cleaned to export standard. Also available split and dehusked on request.",
    specs: [
      { label: "Type", value: "Whole / split available" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Sortex-cleaned" },
    ],
  },
  {
    slug: "urad-dal", categorySlug: "grains-pulses", name: "Urad Dal",
    localName: "Black Gram", image: px(photos.uradDal),
    shortDescription: "Black gram — whole, split, or dehusked to order.",
    longDescription:
      "Urad Dal (black gram) supplied whole (sabut), split (chilka), or dehusked (dhuli). Cleaned and graded for consistency shipment after shipment.",
    specs: [
      { label: "Type", value: "Whole / split / dehusked" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Sortex-cleaned" },
    ],
  },
  {
    slug: "kabuli-chana", categorySlug: "grains-pulses", name: "Chickpeas (Kabuli)",
    localName: "Kabuli Chana / Garbanzo", image: px(photos.kabuliChana),
    shortDescription: "Bold, cream-coloured chickpeas in multiple calibres.",
    longDescription:
      "Kabuli Chana (chickpeas) available across calibres (e.g. 42/44 to 58/60 count) with a bold, cream-coloured finish. Machine-cleaned and sized for retail and industrial buyers.",
    specs: [
      { label: "Calibres", value: "42/44 – 58/60 count" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Sortex-cleaned" },
    ],
  },
  {
    slug: "black-eye-pea", categorySlug: "grains-pulses", name: "Black Eye Pea",
    localName: "Lobia / Cowpea", image: px(photos.blackEyePea),
    shortDescription: "Cowpeas with a clean, uniform look and reliable supply.",
    longDescription:
      "Black Eye Pea (Lobia / Cowpea) cleaned and graded for a uniform appearance and low foreign matter. Steady demand across South Asian and African markets.",
    specs: [
      { label: "Type", value: "Whole" },
      { label: "Packaging", value: "Bulk & retail-ready" },
      { label: "Grades", value: "Sortex-cleaned" },
    ],
  },
  {
    slug: "other-pulses", categorySlug: "grains-pulses", name: "Other Pulses",
    localName: "Rajma, Kidney Beans & more", image: px(photos.variety),
    shortDescription: "Rajma, kidney beans, and more — ask for availability.",
    longDescription:
      "Beyond our core range we can source a wider basket of pulses and beans — including rajma (kidney beans) and regional specialities — subject to season. Tell us what you need and we'll quote.",
  },

  // ─── Spices ───────────────────────────────────────────────────────
  {
    slug: "turmeric", categorySlug: "spices", name: "Turmeric",
    localName: "Haldi — whole / powder", image: px(photos.turmeric),
    shortDescription: "High-curcumin turmeric, fingers or ground to order.",
    longDescription:
      "Turmeric available as polished fingers or ground powder, selected for colour and curcumin content, cleaned and packed for export and retail.",
    specs: [
      { label: "Form", value: "Fingers / powder" },
      { label: "Packaging", value: "Bulk & retail-ready" },
    ],
  },
  {
    slug: "cumin-seeds", categorySlug: "spices", name: "Cumin Seeds",
    localName: "Jeera", image: px(photos.cumin),
    shortDescription: "Aromatic cumin seeds, machine-cleaned to export purity.",
    longDescription:
      "Cumin seeds (Jeera) cleaned to high purity (e.g. 99%+), selected for aroma and uniformity, packed in bulk or retail formats.",
    specs: [
      { label: "Purity", value: "99% / 99.5% available" },
      { label: "Packaging", value: "Bulk & retail-ready" },
    ],
  },
  {
    slug: "coriander-seeds", categorySlug: "spices", name: "Coriander Seeds",
    localName: "Dhania", image: px(photos.coriander),
    shortDescription: "Whole coriander seeds, bright and cleaned.",
    longDescription:
      "Coriander seeds (Dhania) — whole, cleaned, and colour-selected for a bright, consistent look. Available split and ground on request.",
    specs: [
      { label: "Form", value: "Whole / split / ground" },
      { label: "Packaging", value: "Bulk & retail-ready" },
    ],
  },
  {
    slug: "red-chilli", categorySlug: "spices", name: "Red Chilli",
    localName: "Lal Mirch — whole / powder", image: px(photos.redChilli),
    shortDescription: "Dried red chillies, whole or ground, by heat & colour.",
    longDescription:
      "Dried red chillies and chilli powder selected by variety, heat level, and colour value (ASTA). Stemmed / with-stem and multiple grades available.",
    specs: [
      { label: "Form", value: "Whole / powder" },
      { label: "Packaging", value: "Bulk & retail-ready" },
    ],
  },
  {
    slug: "black-pepper", categorySlug: "spices", name: "Black Pepper",
    localName: "Kali Mirch", image: px(photos.blackPepper),
    shortDescription: "Bold black peppercorns, cleaned and graded.",
    longDescription:
      "Black pepper (Kali Mirch) — bold, cleaned peppercorns graded by density and size. Whole or ground, packed for export and retail.",
    specs: [
      { label: "Form", value: "Whole / ground" },
      { label: "Packaging", value: "Bulk & retail-ready" },
    ],
  },

  // ─── Fruits & Vegetables ──────────────────────────────────────────
  {
    slug: "onions", categorySlug: "fruits-vegetables", name: "Onions",
    localName: "Fresh red / yellow", image: px(photos.onions),
    shortDescription: "Fresh onions, graded and packed for export.",
    longDescription:
      "Fresh red and yellow onions, size-graded and packed in mesh bags for export, with cold-chain and phytosanitary support.",
    specs: [
      { label: "Grades", value: "Size-graded" },
      { label: "Packaging", value: "Mesh bags / cartons" },
    ],
  },
  {
    slug: "potatoes", categorySlug: "fruits-vegetables", name: "Potatoes",
    localName: "Fresh table & processing", image: px(photos.potatoes),
    shortDescription: "Table and processing-grade potatoes, export-packed.",
    longDescription:
      "Fresh potatoes for table and processing use, sorted by size and packed to order, with logistics and documentation handled end to end.",
    specs: [
      { label: "Grades", value: "Table / processing" },
      { label: "Packaging", value: "Bags / cartons" },
    ],
  },
  {
    slug: "mangoes", categorySlug: "fruits-vegetables", name: "Mangoes",
    localName: "Seasonal varieties", image: px(photos.mangoes),
    shortDescription: "Seasonal Indian mangoes, packed for export freshness.",
    longDescription:
      "Seasonal Indian mango varieties selected at the right maturity and packed for export freshness, aligned to your market's import requirements.",
    specs: [
      { label: "Season", value: "Varies by variety" },
      { label: "Packaging", value: "Export cartons" },
    ],
  },
  {
    slug: "bananas", categorySlug: "fruits-vegetables", name: "Bananas",
    localName: "Cavendish & regional", image: px(photos.bananas),
    shortDescription: "Fresh bananas, graded and cold-chain handled.",
    longDescription:
      "Fresh bananas selected for size and finish, cold-chain handled and packed for domestic distribution and export.",
    specs: [
      { label: "Grades", value: "Size-graded" },
      { label: "Packaging", value: "Export cartons" },
    ],
  },

  // ─── Dry Fruits & Nuts ────────────────────────────────────────────
  {
    slug: "cashews", categorySlug: "dry-fruits-nuts", name: "Cashews",
    localName: "Kaju — multiple grades", image: px(photos.cashews),
    shortDescription: "Whole and split cashews across standard grades.",
    longDescription:
      "Cashew kernels across standard grades (e.g. W180–W320, splits, pieces), quality-checked for colour and moisture, packed to preserve freshness.",
    specs: [
      { label: "Grades", value: "W180 – W320, splits" },
      { label: "Packaging", value: "Vacuum / retail" },
    ],
  },
  {
    slug: "almonds", categorySlug: "dry-fruits-nuts", name: "Almonds",
    localName: "Badam", image: px(photos.almonds),
    shortDescription: "Whole almonds, graded and quality-checked.",
    longDescription:
      "Almonds (Badam) selected for size and finish, quality-checked for moisture and appearance, packed for retail and industrial use.",
    specs: [
      { label: "Form", value: "Whole / sliced" },
      { label: "Packaging", value: "Bulk & retail-ready" },
    ],
  },
  {
    slug: "raisins", categorySlug: "dry-fruits-nuts", name: "Raisins",
    localName: "Kishmish", image: px(photos.raisins),
    shortDescription: "Golden and green raisins, cleaned and graded.",
    longDescription:
      "Raisins (Kishmish) in golden and green varieties, cleaned and graded for size and colour, packed to preserve texture and freshness.",
    specs: [
      { label: "Varieties", value: "Golden / green" },
      { label: "Packaging", value: "Bulk & retail-ready" },
    ],
  },
  {
    slug: "pistachios", categorySlug: "dry-fruits-nuts", name: "Pistachios",
    localName: "Pista", image: px(photos.pistachios),
    shortDescription: "Roasted and raw pistachios, graded by size.",
    longDescription:
      "Pistachios (Pista) available roasted/salted or raw, graded by size and packed to preserve freshness for retail and gifting ranges.",
    specs: [
      { label: "Form", value: "Roasted / raw" },
      { label: "Packaging", value: "Bulk & retail-ready" },
    ],
  },
  {
    slug: "dates", categorySlug: "dry-fruits-nuts", name: "Dates",
    localName: "Khajoor", image: px(photos.dates),
    shortDescription: "Soft, premium dates, cleaned and packed.",
    longDescription:
      "Dates (Khajoor) selected for softness and size, cleaned and packed in retail and bulk formats for year-round supply.",
    specs: [
      { label: "Grades", value: "Premium / standard" },
      { label: "Packaging", value: "Bulk & retail-ready" },
    ],
  },

  // ─── Textiles ─────────────────────────────────────────────────────
  {
    slug: "cotton-fabric", categorySlug: "textiles", name: "Cotton Fabric",
    localName: "Greige & finished", image: px(photos.cottonFabric),
    shortDescription: "Cotton fabric in greige and finished forms.",
    longDescription:
      "Cotton fabric supplied greige or finished (dyed / printed) to specification, with quality control and export logistics handled end to end.",
    specs: [
      { label: "Form", value: "Greige / finished" },
      { label: "Packaging", value: "Rolls / bales" },
    ],
  },
  {
    slug: "readymade-garments", categorySlug: "textiles", name: "Readymade Garments",
    localName: "Apparel", image: px(photos.garments),
    shortDescription: "Apparel manufactured to your specification.",
    longDescription:
      "Readymade garments produced to your specification and quality standards, with sampling, production, and export coordination.",
    specs: [
      { label: "MOQ", value: "By style / order" },
      { label: "Packaging", value: "Poly-bag & cartons" },
    ],
  },
  {
    slug: "home-textiles", categorySlug: "textiles", name: "Home Textiles",
    localName: "Bed & bath linen", image: px(photos.homeTextiles),
    shortDescription: "Bed linen, towels and made-up home textiles.",
    longDescription:
      "Home textiles — bed linen, towels, and made-up ranges — produced to spec with consistent quality and predictable lead times.",
    specs: [
      { label: "Range", value: "Bed / bath / kitchen" },
      { label: "Packaging", value: "Retail & bulk" },
    ],
  },
  {
    slug: "cotton-yarn", categorySlug: "textiles", name: "Cotton Yarn",
    localName: "Ring-spun & OE", image: px(photos.cottonYarn),
    shortDescription: "Cotton yarn across counts for weaving & knitting.",
    longDescription:
      "Cotton yarn across a range of counts (ring-spun and open-end) for weaving and knitting, packed on cones for export.",
    specs: [
      { label: "Counts", value: "By requirement" },
      { label: "Packaging", value: "Cones / cartons" },
    ],
  },
  {
    slug: "scarves-stoles", categorySlug: "textiles", name: "Scarves & Stoles",
    localName: "Woven & printed", image: px(photos.scarves),
    shortDescription: "Woven and printed scarves and stoles.",
    longDescription:
      "Scarves and stoles in woven and printed designs, produced to your patterns and packed for retail and gifting.",
    specs: [
      { label: "Designs", value: "Woven / printed" },
      { label: "Packaging", value: "Retail & bulk" },
    ],
  },

  // ─── Handicrafts ──────────────────────────────────────────────────
  {
    slug: "pottery-ceramics", categorySlug: "handicrafts", name: "Pottery & Ceramics",
    localName: "Handmade earthenware", image: px(photos.pottery),
    shortDescription: "Handmade pottery and ceramic décor & tableware.",
    longDescription:
      "Handmade pottery and ceramics — décor and tableware — produced by skilled artisans, with sampling and consolidated export handled for you.",
    specs: [
      { label: "Type", value: "Décor / tableware" },
      { label: "Packaging", value: "Protective export packing" },
    ],
  },
  {
    slug: "brassware", categorySlug: "handicrafts", name: "Brassware",
    localName: "Brass & metal décor", image: px(photos.brass),
    shortDescription: "Brass and metal décor, gifting and utility items.",
    longDescription:
      "Brass and metal handicrafts — décor, gifting, and utility items — finished by hand and packed to travel safely to your market.",
    specs: [
      { label: "Type", value: "Décor / gifting" },
      { label: "Packaging", value: "Protective export packing" },
    ],
  },
  {
    slug: "wooden-handicrafts", categorySlug: "handicrafts", name: "Wooden Handicrafts",
    localName: "Carved wood", image: px(photos.woodcraft),
    shortDescription: "Hand-carved wooden décor and gift items.",
    longDescription:
      "Hand-carved wooden handicrafts and gift items produced by skilled artisans, sampled and consolidated for export.",
    specs: [
      { label: "Type", value: "Décor / gifting" },
      { label: "Packaging", value: "Protective export packing" },
    ],
  },
  {
    slug: "jute-products", categorySlug: "handicrafts", name: "Jute Products",
    localName: "Bags & home goods", image: px(photos.jute),
    shortDescription: "Eco-friendly jute bags and home goods.",
    longDescription:
      "Eco-friendly jute bags, sacks, and home goods — durable and sustainable — produced to your specification for retail and promotional use.",
    specs: [
      { label: "Type", value: "Bags / home goods" },
      { label: "Packaging", value: "Bulk & retail-ready" },
    ],
  },
  {
    slug: "handwoven-rugs", categorySlug: "handicrafts", name: "Handwoven Rugs",
    localName: "Rugs & dhurries", image: px(photos.rug),
    shortDescription: "Handwoven rugs and dhurries in traditional patterns.",
    longDescription:
      "Handwoven rugs and dhurries in traditional and contemporary patterns, produced by artisan weavers and packed for safe export.",
    specs: [
      { label: "Type", value: "Rugs / dhurries" },
      { label: "Packaging", value: "Rolled & wrapped" },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}
