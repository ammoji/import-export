/**
 * SINGLE SOURCE OF TRUTH FOR BRANDING & COMPANY INFO.
 *
 * "SaraStackLabs" is a PLACEHOLDER used only during development.
 * To rebrand the entire site, edit the values in this file — nothing else
 * hardcodes the brand name, email, or contact details.
 *
 * Contact email / WhatsApp number can be overridden at runtime via
 * environment variables (see .env.example) so they can differ per
 * deployment without a code change.
 */

export interface CompanyInfo {
  /** Full brand name, e.g. used in metadata, footer, copyright. */
  name: string;
  /** Two-tone wordmark split. `accent` is rendered in the amber accent color. */
  logo: { prefix: string; accent: string };
  /** Contact email. Overridable via NEXT_PUBLIC_CONTACT_EMAIL. */
  email: string;
  /**
   * WhatsApp number in international format WITHOUT "+" or spaces for the
   * wa.me deep link (e.g. "919999999999"). Overridable via
   * NEXT_PUBLIC_WHATSAPP_NUMBER.
   */
  whatsappNumber: string;
  /** Human-readable WhatsApp display string. */
  whatsappDisplay: string;
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
  name: "SaraStackLabs",
  logo: { prefix: "SaraStack", accent: "Labs" },
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "SaraStackLabs@gmail.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "910000000000",
  whatsappDisplay: "+91 XXXXX XXXXX (placeholder)",
  // [Placeholder] Replace with real registered address before launch.
  address: "123 Trade Avenue, Mumbai, Maharashtra 400001, India",
  // [Placeholder] Replace with real hours before launch.
  businessHours: "Mon – Sat · 9:30 AM – 6:30 PM IST",
  tagline: "Global Trade, Delivered",
  description:
    "Import and export, built on trust and quality — connecting Indian producers with buyers across the globe.",
};

/** Primary navigation used by the header and footer. */
export const nav = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

/** Canonical site URL (used for metadata / Open Graph). */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sarastacklabs.example.com";

/** Build a wa.me deep link, optionally with a prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${company.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
