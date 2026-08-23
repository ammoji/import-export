import type { Metadata } from "next";
import QuoteSection from "@/components/QuoteSection";
import { qualityPoints } from "@/content/quality";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "How Farm to World ensures quality — sourcing, sortex cleaning, grading, inspection, packaging, and compliance.",
};

export default function QualityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Quality</p>
          <h1>Quality you can rely on</h1>
          <p>
            From selection to shipment, every step is built to deliver a
            consistent, export-grade product — batch after batch.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="quality-grid">
            {qualityPoints.map((q, i) => (
              <div className="q-card" key={q.title}>
                <div className="q-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{q.title}</h3>
                <p>{q.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
