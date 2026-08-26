/** Content model types for Farms2World. */

export interface Category {
  slug: string;
  name: string;
  /** Short one-liner used on cards. */
  shortDescription: string;
  /** Full description used on the category page. */
  longDescription: string;
  /** Image path (Pexels URL or /public path). */
  image?: string;
}

export interface Product {
  slug: string;
  /** The category this product belongs to. */
  categorySlug: string;
  /** Display name, e.g. "Toor Dal". */
  name: string;
  /** Local / alternate name shown as a subtitle, e.g. "Arhar / Pigeon Pea". */
  localName?: string;
  /** Short one-liner used on cards. */
  shortDescription: string;
  /** Full description used on the product detail page. */
  longDescription: string;
  /** Image path (Pexels URL or /public path). */
  image?: string;
  /** [Placeholder] key specs shown on the detail page. */
  specs?: { label: string; value: string }[];
}

export interface Market {
  slug: string;
  name: string;
  /** Emoji flag for compact display. */
  flag: string;
  /** Whether this is the highlighted focus market. */
  focus?: boolean;
  /** Short blurb. */
  blurb: string;
  /** Selling points shown on the focus card. */
  points?: string[];
  /** Optional image path. */
  image?: string;
}

export interface Feature {
  /** Icon key rendered by the component. */
  icon: string;
  title: string;
  subtitle: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface QualityPoint {
  title: string;
  body: string;
}

export interface PolicyNotice {
  /** Short heading, e.g. "Policy Update – Sugar". */
  title: string;
  /** Body copy. */
  body: string;
  /** Optional effective date string. */
  effectiveDate?: string;
  /** Optional external reference link. */
  link?: string;
}
