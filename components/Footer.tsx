import Link from "next/link";
import { company } from "@/config/site";
import { categories } from "@/content/categories";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="logo" style={{ marginBottom: 14 }}>
              {company.logo.prefix}
              <span>{company.logo.accent}</span>
            </div>
            {/* [Placeholder] final branding/company descriptor to be decided. */}
            <p>{company.description}</p>
          </div>

          <div>
            <h4>PRODUCTS</h4>
            <ul>
              {categories.slice(0, 4).map((c) => (
                <li key={c.slug}>
                  <Link href={`/products/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>COMPANY</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>CONTACT</h4>
            <ul>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><Link href="/contact">WhatsApp (placeholder)</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <p>© {year} {company.name} · Placeholder branding for development</p>
          <p>Design v1 — Trade Routes</p>
        </div>
      </div>
    </footer>
  );
}
