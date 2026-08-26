import type { Metadata } from "next";
import QuoteSection from "@/components/QuoteSection";
import { company } from "@/config/site";
import { getProduct } from "@/content/products";
import { getCategory } from "@/content/categories";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${company.name} — request a quote by form, email, or WhatsApp.`,
};

export default async function ContactPage(
  { searchParams }: { searchParams: Promise<{ product?: string; category?: string; market?: string }> }
) {
  const { product, category, market } = await searchParams;
  const p = product ? getProduct(product) : undefined;
  const categorySlug = p?.categorySlug ?? (category && getCategory(category) ? category : undefined);
  const productName = p?.name;

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

      <QuoteSection defaultCategorySlug={categorySlug} defaultProductName={productName} defaultMarket={market} />
    </>
  );
}
