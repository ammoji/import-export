export default function RouteSection() {
  return (
    <section className="route-section">
      <div className="wrap route-inner">
        <div>
          <p className="eyebrow mono">{"/// Global reach"}</p>
          <h2>Built for trade routes that actually move</h2>
          {/* [Placeholder] copy */}
          <p>
            From our base in India, we&apos;re setting up reliable lanes to key
            markets across the globe — with more destinations added as the
            business grows.
          </p>
        </div>
        <div className="route-map" aria-hidden="true">
          <svg viewBox="0 0 480 380" fill="none">
            <circle cx="240" cy="190" r="90" stroke="#1B3A5C" strokeWidth="1" />
            <circle cx="240" cy="190" r="150" stroke="#132B47" strokeWidth="1" />
            <path className="dash" d="M240,190 Q160,100 90,70" stroke="#00D9FF" strokeWidth="1.4" opacity="0.8" />
            <path className="dash" d="M240,190 Q320,120 400,85" stroke="#00D9FF" strokeWidth="1.4" opacity="0.8" />
            <path className="dash" d="M240,190 Q300,270 380,310" stroke="#FF8A3D" strokeWidth="1.4" opacity="0.8" />
            <path className="dash" d="M240,190 Q170,280 110,330" stroke="#00D9FF" strokeWidth="1.4" opacity="0.8" />
            <circle className="pulse" cx="240" cy="190" r="6" fill="#FF8A3D" />
            <circle cx="90" cy="70" r="4" fill="#00D9FF" />
            <circle cx="400" cy="85" r="4" fill="#00D9FF" />
            <circle cx="380" cy="310" r="4" fill="#FF8A3D" />
            <circle cx="110" cy="330" r="4" fill="#00D9FF" />
            <text x="240" y="215" fill="#7C8CA0" fontFamily="IBM Plex Mono" fontSize="11" textAnchor="middle">
              INDIA
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
