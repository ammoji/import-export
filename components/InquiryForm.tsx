"use client";

import { useState } from "react";
import { products } from "@/content/products";
import { markets } from "@/content/markets";

type Status = { type: "idle" | "success" | "error"; message?: string };

interface Props {
  /** Pre-select the product interest dropdown. */
  defaultProductSlug?: string;
  /** Pre-select / prefill the destination market. */
  defaultMarket?: string;
}

export default function InquiryForm({ defaultProductSlug, defaultMarket }: Props) {
  const defaultProduct =
    products.find((p) => p.slug === defaultProductSlug)?.name ?? "";

  const [values, setValues] = useState({
    fullName: "",
    company: "",
    country: defaultMarket ?? "",
    product: defaultProduct,
    message: "",
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
    if (!values.country.trim()) next.country = "Please enter your country.";
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
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setStatus({
        type: "success",
        message: "Thanks — your inquiry has been sent. We'll reply within one business day.",
      });
      setValues({ fullName: "", company: "", country: "", product: "", message: "" });
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

      <div className="grid2">
        <div>
          <label htmlFor="f-name">Full name</label>
          <input id="f-name" type="text" placeholder="Your name" value={values.fullName} onChange={update("fullName")} aria-invalid={!!errors.fullName} />
          {errors.fullName && <p className="field-error">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="f-company">Company</label>
          <input id="f-company" type="text" placeholder="Company name" value={values.company} onChange={update("company")} />
        </div>
      </div>

      <div className="grid2">
        <div>
          <label htmlFor="f-country">Country / market</label>
          <input id="f-country" type="text" list="markets" placeholder="Destination country" value={values.country} onChange={update("country")} aria-invalid={!!errors.country} />
          <datalist id="markets">
            {markets.map((m) => (
              <option key={m.slug} value={m.name} />
            ))}
          </datalist>
          {errors.country && <p className="field-error">{errors.country}</p>}
        </div>
        <div>
          <label htmlFor="f-product">Product interest</label>
          <select id="f-product" value={values.product} onChange={update("product")} aria-invalid={!!errors.product}>
            <option value="">Select a product</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>{p.name}</option>
            ))}
          </select>
          {errors.product && <p className="field-error">{errors.product}</p>}
        </div>
      </div>

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
