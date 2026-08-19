import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  return (
    <section className="section-alt" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow mono" style={{ color: "var(--amber)" }}>
            {"/// Trusted by buyers"}
          </p>
          <h2>What partners say</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <div className="testi-card" key={t.name}>
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testi-who">
                <div className="avatar">{t.avatarInitials}</div>
                <div>
                  <p>{t.name}</p>
                  <p>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
