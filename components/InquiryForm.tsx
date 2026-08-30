"use client";

import { useState } from "react";
import { categories } from "@/content/categories";
import { markets } from "@/content/markets";

type Status = { type: "idle" | "success" | "error"; message?: string };

interface Props {
  /** Pre-select the category interest dropdown. */
  defaultCategorySlug?: string;
  /** Prefill the message with a specific product of interest. */
  defaultProductName?: string;
  /** Pre-select / prefill the destination market. */
  defaultMarket?: string;
}

const OTHER = "Others";

export default function InquiryForm({
  defaultCategorySlug,
  defaultProductName,
  defaultMarket,
}: Props) {
  const defaultInterest =
    categories.find((c) => c.slug === defaultCategorySlug)?.name ?? "";
  // Market names available in the dropdown (excludes the generic "Others" entry;
  // we append our own "Others" option that reveals a free-text field).
  const marketNames = markets.map((m) => m.name).filter((n) => n !== OTHER);
  const defaultCountry =
    defaultMarket && marketNames.includes(defaultMarket) ? defaultMarket : "";

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    country: defaultCountry,
    countryOther: "",
    product: defaultInterest,
    message: defaultProductName ? `I'm interested in ${defaultProductName}. ` : "",
    website: "", // honeypot — must stay empty
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);

  const update = (key: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  function validate() {
    const next: Record<string, string> = {};
    if (!values.fullName.trim()) next.fullName = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email.";
    if (!values.country) next.country = "Please select your country.";
    if (values.country === OTHER && !values.countryOther.trim())
      next.countryOther = "Please enter your country.";
    if (!values.product) next.product = "Please select a product interest.";
    if (!values.message.trim()) next.message = "Please tell us what you need.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "idle" });
    if (!validate()) return;
    setSubmitting(true);
    const payload = {
      ...values,
      country: values.country === OTHER ? values.countryOther.trim() : values.country,
    };
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setStatus({
        type: "success",
        message: "Thanks — your inquiry has been sent. We'll reply within one business day.",
      });
      setValues({ fullName: "", email: "", company: "", phone: "", country: "", countryOther: "", product: "", message: "", website: "" });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error
            ? err.message
            : "We couldn't send your inquiry. Please email us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="inquiry" onSubmit={onSubmit} noValidate>
      {status.type !== "idle" && (
        <div className={`form-status ${status.type}`} role="status" aria-live="polite">
          {status.message}
        </div>
      )}

      {/* Honeypot: hidden from users; bots that fill it are rejected. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={values.website}
        onChange={update("website")}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="grid2">
        <div>
          <label htmlFor="f-name">Full name</label>
          <input id="f-name" type="text" placeholder="Your name" value={values.fullName} onChange={update("fullName")} aria-invalid={!!errors.fullName} />
          {errors.fullName && <p className="field-error">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="f-email">Email</label>
          <input id="f-email" type="email" placeholder="you@company.com" value={values.email} onChange={update("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>
      </div>

      <div className="grid2">
        <div>
          <label htmlFor="f-company">Company</label>
          <input id="f-company" type="text" placeholder="Company name" value={values.company} onChange={update("company")} />
        </div>
        <div>
          <label htmlFor="f-phone">Phone / WhatsApp <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span></label>
          <input id="f-phone" type="tel" placeholder="Include country code" value={values.phone} onChange={update("phone")} />
        </div>
      </div>

      <div className="grid2">
        <div>
          <label htmlFor="f-country">Country / market</label>
          <select id="f-country" value={values.country} onChange={update("country")} aria-invalid={!!errors.country}>
            <option value="">Select country</option>
            {marketNames.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
            <option value={OTHER}>Others</option>
          </select>
          {errors.country && <p className="field-error">{errors.country}</p>}
        </div>
        <div>
          <label htmlFor="f-product">Product interest</label>
          <select id="f-product" value={values.product} onChange={update("product")} aria-invalid={!!errors.product}>
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>{c.name}</option>
            ))}
          </select>
          {errors.product && <p className="field-error">{errors.product}</p>}
        </div>
      </div>

      {values.country === OTHER && (
        <div>
          <label htmlFor="f-country-other">Please specify your country</label>
          <input
            id="f-country-other"
            type="text"
            placeholder="Enter your country"
            value={values.countryOther}
            onChange={update("countryOther")}
            aria-invalid={!!errors.countryOther}
            autoFocus
          />
          {errors.countryOther && <p className="field-error">{errors.countryOther}</p>}
        </div>
      )}

      <div>
        <label htmlFor="f-message">Message</label>
        <textarea id="f-message" rows={4} placeholder="Quantity, packaging, timeline…" value={values.message} onChange={update("message")} aria-invalid={!!errors.message} />
        {errors.message && <p className="field-error">{errors.message}</p>}
      </div>

      <button type="submit" className="btn btn-green" disabled={submitting}>
        {submitting ? "Sending…" : "Request a Quote"}
      </button>
    </form>
  );
}
