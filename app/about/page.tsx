import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { company } from "@/config/site";
import { px, photos } from "@/content/images";

export const metadata: Metadata = {
  title: "About",
  description: `About ${company.name} — our story, mission, and the way we work with buyers and producers.`,
};

// [Placeholder] All copy on this page is provisional and will be replaced.
const trustPoints = [
  {
    title: "Direct sourcing",
    body: "We build relationships directly with growers and producers, so quality and pricing stay in our control — not lost across layers of middlemen.",
  },
  {
    title: "Transparent pricing",
    body: "Clear quotes with no hidden costs. You know what you're paying for, from unit price to logistics.",
  },
  {
    title: "Responsive support",
    body: "One dedicated contact per inquiry, reachable by email or WhatsApp, from first message through final delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">{"/// Who we are"}</p>
          <h1>A new trade partner, built the modern way</h1>
          <p>
            {company.name} connects Indian suppliers with buyers around the
            world — combining hands-on sourcing with modern, transparent
            communication.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="about-strip">
            <div>
              <p className="eyebrow mono" style={{ color: "var(--amber)" }}>
                {"/// Our story"}
              </p>
              <h2>Trade, done the honest way</h2>
              {/* [Placeholder] */}
              <p>
                We&apos;re a newly established import-export company based in
                India, starting with the commodities we know best — spices,
                fresh produce, grains and pulses, dry fruits and nuts, textiles,
                and handicrafts. While we&apos;re just getting started, our
                approach is built on decades of collective trade experience
                across our team.
              </p>
              {/* [Placeholder] */}
              <p>
                We believe global trade works best when it&apos;s simple and
                honest: source responsibly, price fairly, communicate clearly,
                and deliver on time. Every relationship we build is meant to last
                well beyond a single shipment.
              </p>
            </div>
            <div className="visual">
              <Image
                src={px(photos.warehouse)}
                alt="Warehouse and logistics operations"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="about-strip">
            <div className="visual">
              <Image
                src={px(photos.port)}
                alt="Cargo ship at an international port"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <p className="eyebrow mono" style={{ color: "var(--amber)" }}>
                {"/// Our mission"}
              </p>
              <h2>A trusted bridge to global markets</h2>
              {/* [Placeholder] */}
              <p>
                To become a trusted bridge between Indian producers and buyers
                worldwide — making it easy for serious partners to source
                high-quality goods with confidence, whatever their market.
              </p>
              <ul className="about-list">
                <li>Rooted in India, built for global buyers</li>
                <li>Modern, transparent communication end to end</li>
                <li>Long-term partnerships over one-off deals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow mono" style={{ color: "var(--amber)" }}>
              {"/// Why partners trust us"}
            </p>
            <h2>What you can count on</h2>
          </div>
          <div className="trust-grid">
            {trustPoints.map((p) => (
              <div className="trust-card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-24" style={{ fontSize: 15, color: "var(--slate)" }}>
            Want the specifics on a category?{" "}
            <Link href="/products" style={{ color: "var(--navy)", fontWeight: 600 }}>
              Browse our products &rarr;
            </Link>
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
