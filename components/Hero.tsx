import Link from "next/link";
import { categories } from "@/content/categories";

/**
 * Homepage hero with background video + legibility overlay.
 * The overlay is intentionally kept light on the right side so the footage
 * stays visible (see mockup). Text-shadow provides the legibility fallback.
 *
 * [Placeholder] video: swap for owned footage at launch. Uses Pexels stock.
 */
const HERO_VIDEO =
  "https://videos.pexels.com/video-files/6618031/6618031-uhd_2560_1440_24fps.mp4";

export default function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline poster="">
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div>
          <p className="eyebrow">{"/// Import & export, done right"}</p>
          <h1>
            Sourcing the world.
            <br />
            <em>Delivering</em> trust.
          </h1>
          <p>
            We connect Indian producers with buyers across the globe — spices,
            fruits, grains, textiles and more, handled with the reliability
            serious trade partners expect.
          </p>
          <div className="btn-row">
            <Link href="/contact" className="btn-primary">
              Request a quote
            </Link>
            <Link href="/products" className="btn-ghost">
              View products
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <p>{String(categories.length).padStart(2, "0")}</p>
              <p>product categories</p>
            </div>
            <div>
              <p>2</p>
              <p>markets served: domestic + global</p>
            </div>
            <div>
              <p>24h</p>
              <p>average inquiry response</p>
            </div>
          </div>
        </div>
      </div>
      <p className="video-credit">
        Placeholder footage via Pexels — swap for owned footage at launch
      </p>
    </section>
  );
}
