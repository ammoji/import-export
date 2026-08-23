"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, nav, ctaLabel } from "@/config/site";
import BrandIcon from "./BrandIcon";

function Wordmark() {
  return (
    <span className="brand-name">
      <span className="p">{company.logo.prefix}</span>
      <span className="a">{company.logo.accent}</span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header>
      <nav className="nav" aria-label="Primary">
        <Link href="/" className="brand" aria-label={`${company.name} home`}>
          <BrandIcon className="brand-icon" />
          <span className="brand-text">
            <Wordmark />
            <span className="brand-tag">{company.logoTagline}</span>
          </span>
        </Link>

        <ul className="nav-links">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn btn-dark hide-mobile">
          {ctaLabel}
          <span aria-hidden="true">&rarr;</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`}>
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn btn-dark" onClick={() => setOpen(false)}>
              {ctaLabel}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
