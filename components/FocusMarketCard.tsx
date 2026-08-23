import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { markets } from "@/content/markets";

export default function FocusMarketCard() {
  const focus = markets.find((m) => m.focus);
  if (!focus) return null;
  return (
    <div className="focus-card">
      <div className="fc-head">
        <p className="eyebrow">Focus Market</p>
        <h3>
          {focus.flag} {focus.name}
        </h3>
      </div>
      {focus.image && (
        <div className="focus-img">
          <Image src={focus.image} alt={`${focus.name} skyline`} fill sizes="360px" style={{ objectFit: "cover" }} />
        </div>
      )}
      <ul className="focus-list">
        {focus.points?.map((p) => (
          <li key={p}>
            <Icon name="check" />
            {p}
          </li>
        ))}
      </ul>
      <div className="fc-foot">
        <Link href={`/contact?market=${encodeURIComponent(focus.name)}`} className="btn btn-primary">
          Request Rate for {focus.name}
        </Link>
      </div>
    </div>
  );
}
