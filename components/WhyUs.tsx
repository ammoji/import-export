import { whyUs } from "@/content/whyUs";

export default function WhyUs() {
  return (
    <section>
      <div className="wrap">
        <div className="why-grid">
          {whyUs.map((item) => (
            <div className="why-item" key={item.num}>
              <p className="num">{item.num}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
