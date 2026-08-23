import Icon from "./Icon";
import { features } from "@/content/features";

export default function Features() {
  return (
    <div className="features">
      <div className="wrap">
        {features.map((f) => (
          <div className="feature" key={f.title}>
            <div className="fi">
              <Icon name={f.icon} />
            </div>
            <b>{f.title}</b>
            <span>{f.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
