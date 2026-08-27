import Icon from "./Icon";
import { features } from "@/content/features";

export default function Features() {
  return (
    <section className="section-alt why-choose">
      <div className="wrap">
        <div className="section-head center">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Built on trust, quality and service</h2>
        </div>
        <div className="why-grid">
          {features.map((f) => (
            <div className="why-card" key={f.title}>
              <div className="fi">
                <Icon name={f.icon} />
              </div>
              <div>
                <b>{f.title}</b>
                <span>{f.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
