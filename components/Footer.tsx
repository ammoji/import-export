import Link from "next/link";
import Image from "next/image";
import { company, nav, whatsappLink } from "@/config/site";
import { categories } from "@/content/categories";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="foot-logo">
              <Image src="/logo.jpeg" alt={company.name} width={1254} height={1254} />
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
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {company.whatsappDisplay}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <p>© {year} {company.name}</p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
