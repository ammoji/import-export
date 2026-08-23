import type { Metadata } from "next";
import QuoteSection from "@/components/QuoteSection";
import { company } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${company.name} — request a quote by form, email, or WhatsApp.`,
};

export default async function ContactPage(
  { searchParams }: { searchParams: Promise<{ product?: string; market?: string }> }
) {
  const { product, market } = await searchParams;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s talk trade</h1>
          <p>
            Tell us what you&apos;re looking to source and we&apos;ll respond
            within one business day.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="quality-grid">
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
                <a href={`mailto:${company.email}`} style={{ color: "var(--green-600)", fontWeight: 600 }}>
                  {company.email}
                </a>
                <br />
                {company.whatsappDisplay}
              </p>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection defaultProductSlug={product} defaultMarket={market} />
    </>
  );
}
