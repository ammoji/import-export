import type { GalleryImage } from "./types";
import { px, photos } from "./images";

/**
 * PLACEHOLDER gallery images (free Pexels stock). Swap for real, owned
 * photography before launch — replace the URLs here (and dimensions if needed).
 */
export const gallery: GalleryImage[] = [
  { src: px(photos.spices, 1000), alt: "Assorted spices at a market stall", width: 1000, height: 750 },
  { src: px(photos.fruitsVegetables, 1000), alt: "Fresh produce display", width: 1000, height: 750 },
  { src: px(photos.grainsPulses, 1000), alt: "Harvested grains in burlap sacks", width: 1000, height: 750 },
  { src: px(photos.dryFruitsNuts, 1000), alt: "Assortment of dry fruits and nuts", width: 1000, height: 750 },
  { src: px(photos.textiles, 1000), alt: "Colourful rolls of textile fabric", width: 1000, height: 750 },
  { src: px(photos.handicrafts, 1000), alt: "Handcrafted earthenware pottery", width: 1000, height: 750 },
  { src: px(photos.port, 1000), alt: "Cargo ship with containers at a shipping port", width: 1000, height: 750 },
  { src: px(photos.cranes, 1000), alt: "Container terminal cranes loading cargo", width: 1000, height: 750 },
  { src: px(photos.warehouse, 1000), alt: "Industrial warehouse with forklift and shelving", width: 1000, height: 750 },
];
