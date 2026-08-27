import Image from "next/image";
import Icon from "./Icon";
import { px, photos } from "@/content/images";

const badges = [
  { title: "Quality Assured", sub: "Sortex-cleaned" },
  { title: "Timely Delivery", sub: "On-time, every time" },
  { title: "End-to-End Support", sub: "Docs handled" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-inner">
          <div>
            <h1>
              From Farm to World,
              <br />
              <em>Trust</em> in Every Shipment
            </h1>
            <p className="hero-sub">
              Premium quality pulses, spices, dry fruits, textiles and
              handicrafts — sourced from India and delivered reliably to global
              markets.
            </p>
            <div className="hero-badges">
              {badges.map((b) => (
                <div className="hero-badge" key={b.title}>
                  <span className="check"><Icon name="check" /></span>
                  <span>
                    <b>{b.title}</b>
                    <span>{b.sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="img-main">
              <Image
                src={px(photos.shipSunset, 1200)}
                alt="Container ship at an international port"
                fill
                sizes="(max-width: 960px) 100vw, 560px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="img-inset">
              <Image
                src={px(photos.variety, 600)}
                alt="Assorted pulses"
                fill
                sizes="200px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
