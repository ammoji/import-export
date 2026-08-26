/**
 * SINGLE SOURCE OF TRUTH FOR BRANDING & COMPANY INFO.
 *
 * "Farm to World" and all contact details below are PLACEHOLDERS used during
 * development. To rebrand the entire site, edit the values in this file —
 * nothing else hardcodes the brand name, email, or contact details.
 *
 * Contact email / WhatsApp number can be overridden at runtime via
 * environment variables (see .env.example) so they can differ per deployment.
 */

export interface CompanyInfo {
  /** Full brand name (metadata, footer, copyright). */
  name: string;
  /** Two-tone wordmark split. `prefix` is green, `accent` is navy. */
  logo: { prefix: string; accent: string };
  /** Short strapline shown under the logo. */
  logoTagline: string;
  /** Contact email. Overridable via NEXT_PUBLIC_CONTACT_EMAIL. */
  email: string;
  /** WhatsApp number, digits only, intl format. Overridable via env. */
  whatsappNumber: string;
  /** Human-readable WhatsApp display string. */
  whatsappDisplay: string;
  /** Human-readable phone. */
  phoneDisplay: string;
  /** [Placeholder] Postal / office address. */
  address: string;
  /** [Placeholder] Business hours. */
  businessHours: string;
  /** Short marketing tagline. */
  tagline: string;
  /** Longer one-line descriptor used in the footer / metadata. */
  description: string;
}

export const company: CompanyInfo = {
  name: "Farms2World",
  logo: { prefix: "Farms2", accent: "World" },
  logoTagline: "Quality · Trust · Timely Delivery",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@farms2world.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919599435956",
  whatsappDisplay: "+91 95994 35956",
  phoneDisplay: "+91 95994 35956",
  // [Placeholder] Replace with real registered address before launch.
  address: "123 Trade Avenue, Mumbai, Maharashtra 400001, India",
  // [Placeholder] Replace with real hours before launch.
  businessHours: "Mon – Sat · 9:30 AM – 6:30 PM IST",
  tagline: "Trust in Every Shipment",
  description:
    "Quality pulses, spices, produce, dry fruits, textiles and handicrafts — sourced from India and delivered reliably to global markets.",
};

/** Primary navigation used by the header and footer. */
export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Markets", href: "/markets" },
  { label: "Quality", href: "/quality" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;

/** Label for the primary header/nav call-to-action. */
export const ctaLabel = "Get a Quote";

/** Headline stats shown in the dark band on the homepage. */
export const stats = [
  { value: "100+", label: "Products Exported" },
  { value: "20+", label: "Countries Served" },
  { value: "5000+ MT", label: "Capacity Per Month" },
  { value: "100%", label: "Quality Commitment" },
] as const;

/** Canonical site URL (used for metadata / Open Graph). */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://farms2world.com";

/** Build a wa.me deep link, optionally with a prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${company.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
