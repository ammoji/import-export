import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { company } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${company.name} — send an inquiry, email us, or reach us on WhatsApp.`,
};

export default async function ContactPage(
  { searchParams }: { searchParams: Promise<{ product?: string }> }
) {
  const { product } = await searchParams;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">{"/// Let's talk trade"}</p>
          <h1>Get in touch</h1>
          <p>
            Tell us what you&apos;re looking to source and we&apos;ll get back
            within one business day. Prefer email or WhatsApp? Those work too.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="trust-grid">
            <div className="info-card">
              <h3>Office</h3>
              {/* [Placeholder] */}
              <p>{company.address}</p>
            </div>
            <div className="info-card">
              <h3>Business hours</h3>
              {/* [Placeholder] */}
              <p>{company.businessHours}</p>
            </div>
            <div className="info-card">
              <h3>Email &amp; WhatsApp</h3>
              <p>
                <a href={`mailto:${company.email}`} style={{ color: "var(--navy)", fontWeight: 600 }}>
                  {company.email}
                </a>
                <br />
                {company.whatsappDisplay}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection defaultCategorySlug={product} />
    </>
  );
}
