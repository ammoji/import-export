"use client";

import { useState } from "react";
import { categories } from "@/content/categories";

type Status = { type: "idle" | "success" | "error"; message?: string };

interface Props {
  /** Pre-select the product interest dropdown (used by category detail CTA). */
  defaultCategorySlug?: string;
}

export default function InquiryForm({ defaultCategorySlug }: Props) {
  const defaultName =
    categories.find((c) => c.slug === defaultCategorySlug)?.name ?? "";

  const [values, setValues] = useState({
    fullName: "",
    company: "",
    country: "",
    product: defaultName,
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

      <input
        type="text"
        placeholder="Full name"
        aria-label="Full name"
        value={values.fullName}
        onChange={update("fullName")}
        aria-invalid={!!errors.fullName}
      />
      {errors.fullName && <p className="field-error">{errors.fullName}</p>}

      <input
        type="text"
        placeholder="Company name"
        aria-label="Company name"
        value={values.company}
        onChange={update("company")}
      />

      <input
        type="text"
        placeholder="Country"
        aria-label="Country"
        value={values.country}
        onChange={update("country")}
        aria-invalid={!!errors.country}
      />
      {errors.country && <p className="field-error">{errors.country}</p>}

      <select
        aria-label="Product interest"
        value={values.product}
        onChange={update("product")}
        aria-invalid={!!errors.product}
      >
        <option value="">Product interest</option>
        {categories.map((c) => (
          <option key={c.slug} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
      {errors.product && <p className="field-error">{errors.product}</p>}

      <textarea
        rows={3}
        placeholder="Tell us what you need"
        aria-label="Message"
        value={values.message}
        onChange={update("message")}
        aria-invalid={!!errors.message}
      />
      {errors.message && <p className="field-error">{errors.message}</p>}

      <button type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
