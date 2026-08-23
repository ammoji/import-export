import type { Metadata } from "next";
import QuoteSection from "@/components/QuoteSection";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about ordering, packaging, documentation, and quality.",
};

export default function FaqsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">FAQs</p>
          <h1>Frequently asked questions</h1>
          <p>Common questions about ordering, packaging, documentation, and quality.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="faq-list">
            {faqs.map((f, i) => (
              <details className="faq-item" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <div className="faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
