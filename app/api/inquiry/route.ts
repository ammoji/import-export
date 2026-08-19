import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/config/site";

export const runtime = "nodejs";

interface InquiryPayload {
  fullName?: string;
  company?: string;
  country?: string;
  product?: string;
  message?: string;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: InquiryPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = body.fullName?.trim();
  const country = body.country?.trim();
  const product = body.product?.trim();
  const message = body.message?.trim();
  const companyName = body.company?.trim() || "—";

  // Server-side validation (mirrors the client).
  if (!fullName || !country || !product || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_EMAIL || company.email;
  // Must be a verified sender/domain in Resend. Falls back to their sandbox.
  const from = process.env.INQUIRY_FROM_EMAIL || "onboarding@resend.dev";
  const apiKey = process.env.RESEND_API_KEY;

  const subject = `New inquiry: ${product} — ${fullName}`;
  const text = [
    `Name: ${fullName}`,
    `Company: ${companyName}`,
    `Country: ${country}`,
    `Product interest: ${product}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2 style="font-family:sans-serif">New inquiry from ${company.name} website</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0"><strong>Name</strong></td><td>${escapeHtml(fullName)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Company</strong></td><td>${escapeHtml(companyName)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Country</strong></td><td>${escapeHtml(country)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Product interest</strong></td><td>${escapeHtml(product)}</td></tr>
    </table>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  // If email isn't configured yet, don't fail — log the inquiry and return
  // success so the form is fully usable for review/testing. Set RESEND_API_KEY
  // (see .env.example / README) before launch to actually deliver emails.
  if (!apiKey) {
    console.warn(
      "[inquiry] RESEND_API_KEY not set — inquiry NOT emailed (logged only). Payload:\n" +
        text
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${company.name} Website <${from}>`,
      to,
      subject,
      text,
      html,
    });
    if (error) {
      console.error("[inquiry] Resend error:", error);
      return NextResponse.json({ error: "Failed to send inquiry." }, { status: 502 });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[inquiry] Unexpected error:", err);
    return NextResponse.json({ error: "Failed to send inquiry." }, { status: 500 });
  }
}
