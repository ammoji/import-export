import type { Metadata } from "next";
import CategoryCard from "@/components/CategoryCard";
import QuoteSection from "@/components/QuoteSection";
import { categories } from "@/content/categories";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Our product categories — grains & pulses, spices, fruits & vegetables, dry fruits & nuts, textiles, and handicrafts.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Products</p>
          <h1>Our product range</h1>
          <p>
            Sourced from across India, cleaned and graded for export. Choose a
            category to explore products or send an inquiry.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="prod-grid">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
