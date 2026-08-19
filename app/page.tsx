import Hero from "@/components/Hero";
import RouteSection from "@/components/RouteSection";
import WhyUs from "@/components/WhyUs";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { categories } from "@/content/categories";
import { px, photos } from "@/content/images";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RouteSection />
      <WhyUs />

      <section className="section-alt" id="products">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow mono">{"/// What we trade"}</p>
            <h2>Product categories</h2>
            <p>
              Starting with our most established lines — expanding steadily as we
              grow into new markets and commodities.
            </p>
          </div>
          <ProductGrid items={categories} />
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <div className="about-strip">
            <div className="visual">
              <Image
                src={px(photos.port)}
                alt="Cargo containers at a shipping port"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="visual-badge">
                <p className="num">2</p>
                <p>markets served — domestic &amp; global</p>
              </div>
            </div>
            <div>
              <p className="eyebrow mono" style={{ color: "var(--amber)" }}>
                {"/// Who we are"}
              </p>
              <h2>A new trade partner, built the modern way</h2>
              {/* [Placeholder] copy */}
              <p>
                We&apos;re a growing import-export company connecting Indian
                suppliers with buyers around the world. Our focus is simple:
                reliable sourcing, fair pricing, and communication that actually
                keeps you informed.
              </p>
              <ul className="about-list">
                <li>Direct relationships with growers and producers</li>
                <li>Transparent pricing, no hidden costs</li>
                <li>Responsive, multi-channel support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactSection />
    </>
  );
}
