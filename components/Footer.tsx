import Link from "next/link";
import { company, nav } from "@/config/site";
import { categories } from "@/content/categories";
import BrandIcon from "./BrandIcon";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="brand" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <BrandIcon className="brand-icon" />
              <span className="brand-name">
                <span className="p">{company.logo.prefix}</span>
                <span className="a">{company.logo.accent}</span>
              </span>
            </span>
            {/* [Placeholder] descriptor */}
            <p>{company.description}</p>
          </div>

          <div>
            <h4>PRODUCTS</h4>
            <ul>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/products/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>COMPANY</h4>
            <ul>
              {nav
                .filter((n) => n.href !== "/")
                .map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h4>CONTACT</h4>
            <ul>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><Link href="/contact">WhatsApp (placeholder)</Link></li>
              <li>{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <p>© {year} {company.name} · Placeholder branding for development</p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
