import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import ContactSection from "@/components/ContactSection";
import { categories } from "@/content/categories";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our product categories — spices, fruits & vegetables, grains & pulses, dry fruits & nuts, textiles, and handicrafts.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">{"/// What we trade"}</p>
          <h1>Product categories</h1>
          <p>
            Starting with our most established lines — expanding steadily as we
            grow into new markets and commodities. Select a category to learn
            more or send an inquiry.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <ProductGrid items={categories} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
