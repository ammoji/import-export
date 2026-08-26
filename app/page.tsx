import Link from "next/link";
import Hero from "@/components/Hero";
import KeyMarketsBar from "@/components/KeyMarketsBar";
import CategoryTile from "@/components/CategoryTile";
import FocusMarketCard from "@/components/FocusMarketCard";
import PolicyCard from "@/components/PolicyCard";
import Features from "@/components/Features";
import StatsBand from "@/components/StatsBand";
import QuoteSection from "@/components/QuoteSection";
import { categories } from "@/content/categories";

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
                <h2>Our Product Range</h2>
                <Link href="/products" className="view-all">View all &rarr;</Link>
              </div>
              <div className="tiles">
                {categories.map((c) => (
                  <CategoryTile key={c.slug} category={c} />
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
