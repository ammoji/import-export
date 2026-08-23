import { stats } from "@/config/site";

export default function StatsBand() {
  return (
    <div className="stats-band">
      <div className="wrap">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="num">{s.value}</div>
            <div className="lbl">{s.label}</div>
          </div>
        ))}
        <p className="stats-quote">
          &ldquo;Bringing the best of India to your door, anywhere in the
          world.&rdquo;
        </p>
      </div>
    </div>
  );
}
