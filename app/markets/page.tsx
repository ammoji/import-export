import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import QuoteSection from "@/components/QuoteSection";
import { markets } from "@/content/markets";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Export markets we serve — Sri Lanka (focus), Myanmar, UAE, Bangladesh, Africa and more.",
};

export default function MarketsPage() {
  const focus = markets.find((m) => m.focus);
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Markets</p>
          <h1>Where we ship</h1>
          <p>
            From our base in India, we supply pulses to buyers across South Asia,
            the Gulf, Africa and beyond — with Sri Lanka as our current focus.
          </p>
        </div>
      </section>

      {focus && (
        <section>
          <div className="wrap">
            <div className="detail-grid" id={focus.slug}>
              <div className="detail-img">
                {focus.image && (
                  <Image src={focus.image} alt={`${focus.name} skyline`} fill sizes="(max-width: 960px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
                )}
              </div>
              <div className="detail-body">
                <p className="eyebrow">Focus Market</p>
                <h2 style={{ fontSize: 30, marginBottom: 10 }}>{focus.flag} {focus.name}</h2>
                <p className="lead">{focus.blurb}</p>
                <ul className="focus-list" style={{ padding: 0, marginBottom: 24 }}>
                  {focus.points?.map((p) => (
                    <li key={p}><Icon name="check" />{p}</li>
                  ))}
                </ul>
                <Link href={`/contact?market=${encodeURIComponent(focus.name)}`} className="btn btn-primary">
                  Request Rate for {focus.name}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head center">
            <p className="eyebrow">All markets</p>
            <h2>Markets we serve</h2>
          </div>
          <div className="market-grid">
            {markets.map((m) => (
              <div className={`market-card${m.focus ? " is-focus" : ""}`} key={m.slug} id={m.slug}>
                <div className="mc-img">
                  {m.image && (
                    <Image src={m.image} alt={m.name} fill sizes="(max-width: 620px) 100vw, (max-width: 960px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                  )}
                  <span className="mc-flag">{m.flag}</span>
                  {m.focus && <span className="mc-focus-tag">Focus market</span>}
                </div>
                <div className="mc-body">
                  <h3>{m.name}</h3>
                  <p>{m.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection defaultMarket={focus?.name} />
    </>
  );
}
