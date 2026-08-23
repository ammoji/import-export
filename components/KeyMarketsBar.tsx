import Link from "next/link";
import { markets } from "@/content/markets";

export default function KeyMarketsBar() {
  return (
    <div className="markets-bar">
      <div className="wrap">
        <span className="label">Key Markets</span>
        <div className="market-chips">
          {markets.map((m) => (
            <Link
              key={m.slug}
              href={`/markets#${m.slug}`}
              className={`market-chip${m.focus ? " focus" : ""}`}
            >
              <span className="flag">{m.flag}</span>
              {m.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
