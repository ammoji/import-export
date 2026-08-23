import type { Metadata } from "next";
import Image from "next/image";
import QuoteSection from "@/components/QuoteSection";
import { company } from "@/config/site";
import { px, photos } from "@/content/images";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${company.name} — our story, mission, and how we work with buyers and farmers.`,
};

const trust = [
  { title: "Direct sourcing", body: "[Placeholder] We build relationships directly with farmers and mandis, keeping quality and pricing in our control." },
  { title: "Transparent pricing", body: "[Placeholder] Clear quotes with no hidden costs — from unit price to logistics." },
  { title: "Responsive support", body: "[Placeholder] One dedicated contact per inquiry, by email or WhatsApp, through to delivery." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">About Us</p>
          <h1>From Indian farms to buyers worldwide</h1>
          <p>
            {company.name} connects Indian pulse growers with buyers across the
            globe — combining hands-on sourcing with modern, transparent
            communication.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="detail-grid">
            <div>
              <p className="eyebrow">Our story</p>
              <h2 style={{ fontSize: 30, marginBottom: 16 }}>Trade, done the honest way</h2>
              {/* [Placeholder] */}
              <p style={{ marginBottom: 16, color: "var(--slate)" }}>
                We&apos;re a growing export company based in India, focused on
                pulses and dal — toor, chana, masoor, moong, urad, chickpeas and
                more. We source from established growing belts, process to export
                grade, and ship reliably to global buyers.
              </p>
              {/* [Placeholder] */}
              <p style={{ color: "var(--slate)" }}>
                Our approach is simple: source responsibly, price fairly,
                communicate clearly, and deliver on time. Every relationship is
                built to last beyond a single shipment.
              </p>
            </div>
            <div className="detail-img">
              <Image src={px(photos.warehouse, 1000)} alt="Warehouse operations" fill sizes="(max-width: 960px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">Why partners trust us</p>
            <h2>What you can count on</h2>
          </div>
          <div className="quality-grid">
            {trust.map((t) => (
              <div className="q-card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
