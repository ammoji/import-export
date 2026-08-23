import Link from "next/link";
import Hero from "@/components/Hero";
import KeyMarketsBar from "@/components/KeyMarketsBar";
import ProductTile from "@/components/ProductTile";
import FocusMarketCard from "@/components/FocusMarketCard";
import PolicyCard from "@/components/PolicyCard";
import Features from "@/components/Features";
import StatsBand from "@/components/StatsBand";
import QuoteSection from "@/components/QuoteSection";
import { products } from "@/content/products";

export default function HomePage() {
  return (
    <>
      <Hero />
      <KeyMarketsBar />

      <section className="section-tight">
        <div className="wrap">
          <div className="home-grid">
            <div>
              <div className="row-head">
                <h2>Our Core Products</h2>
                <Link href="/products" className="view-all">View all &rarr;</Link>
              </div>
              <div className="tiles">
                {products.map((p) => (
                  <ProductTile key={p.slug} product={p} />
                ))}
              </div>
            </div>
            <aside className="home-aside">
              <FocusMarketCard />
              <PolicyCard />
            </aside>
          </div>
        </div>
      </section>

      <Features />
      <StatsBand />
      <QuoteSection />
    </>
  );
}
