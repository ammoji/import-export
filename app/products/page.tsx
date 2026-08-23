import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import QuoteSection from "@/components/QuoteSection";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Our pulses & dal range — Toor, Chana, Masoor, Moong, Urad, Kabuli chickpeas, Black eye pea and more.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Products</p>
          <h1>Our pulses &amp; dal range</h1>
          <p>
            Machine-cleaned, graded, and export-ready. Select a product to see
            details or send an inquiry for a quote.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="prod-grid">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
