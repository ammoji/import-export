/** Content model types for SaraStackLabs. */

export interface Category {
  slug: string;
  name: string;
  /** Short one-liner used on cards. */
  shortDescription: string;
  /** Full description used on the category detail page. */
  longDescription: string;
  /** Mono label shown on the dark gradient thumbnail, e.g. "SPICES · 001". */
  thumbLabel: string;
  /** Optional hero/thumbnail image path under /public. Falls back to gradient. */
  heroImage?: string;
}

export interface Product {
  slug: string;
  categorySlug: string;
  name: string;
  description: string;
  /** Optional image path under /public. */
  image?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  avatarInitials: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
