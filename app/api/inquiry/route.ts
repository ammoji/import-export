import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { company, whatsappLink } from "@/config/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface InquiryPayload {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;
  product?: string;
  message?: string;
  /** Honeypot — must stay empty. Bots tend to fill every field. */
  website?: string;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(req: Request) {
  let body: InquiryPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: silently accept (so bots don't retry) but do nothing.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const fullName = body.fullName?.trim();
  const email = body.email?.trim();
  const country = body.country?.trim();
  const product = body.product?.trim();
  const message = body.message?.trim();
  const companyName = body.company?.trim() || "—";
  const phone = body.phone?.trim() || "—";

  if (!fullName || !email || !country || !product || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_EMAIL || user || company.email;

  const summaryText = [
    `Name: ${fullName}`,
    `Company: ${companyName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Country: ${country}`,
    `Product interest: ${product}`,
    "",
    "Message:",
    message,
  ].join("\n");

  // If SMTP isn't configured yet, don't fail — log and return success so the
  // UI is testable. Configure SMTP_* env vars (see .env.example) to send.
  if (!host || !user || !pass) {
    console.warn(
      "[inquiry] SMTP not configured — inquiry NOT emailed (logged only):\n" +
        summaryText
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = SSL, 587 = STARTTLS
    auth: { user, pass },
    // Fail fast with a clear error instead of hanging the function.
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });

  const fromName = `${company.name} Website`;
  const notifyHtml = `
    <h2 style="font-family:sans-serif;margin:0 0 12px">New inquiry from the ${escapeHtml(
      company.name
    )} website</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0"><strong>Name</strong></td><td>${escapeHtml(fullName)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Company</strong></td><td>${escapeHtml(companyName)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Country</strong></td><td>${escapeHtml(country)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Product interest</strong></td><td>${escapeHtml(product)}</td></tr>
    </table>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;margin-top:12px">${escapeHtml(message)}</p>
  `;

  const replyHtml = `
    <div style="font-family:sans-serif;font-size:14px;color:#14303F;line-height:1.6">
      <p>Hi ${escapeHtml(fullName)},</p>
      <p>Thank you for reaching out to <strong>${escapeHtml(company.name)}</strong>.
      We've received your inquiry and our team will get back to you within one business day.</p>
      <p><strong>Your inquiry</strong><br>
      Product interest: ${escapeHtml(product)}<br>
      Country: ${escapeHtml(country)}</p>
      <p style="white-space:pre-wrap;color:#5B6B72">${escapeHtml(message)}</p>
      <hr style="border:none;border-top:1px solid #E5EAE7;margin:16px 0">
      <p style="color:#5B6B72">In the meantime, reach us anytime:<br>
      Email: ${escapeHtml(company.email)}<br>
      WhatsApp: ${escapeHtml(company.whatsappDisplay)} (${whatsappLink()})</p>
      <p style="color:#5B6B72">— Team ${escapeHtml(company.name)}</p>
    </div>
  `;

  try {
    // 1) Notification to the business (must succeed).
    await transporter.sendMail({
      from: `"${fromName}" <${user}>`,
      to,
      replyTo: `"${fullName}" <${email}>`,
      subject: `New inquiry: ${product} — ${fullName}`,
      text: summaryText,
      html: notifyHtml,
    });
  } catch (err) {
    const detail =
      err instanceof Error ? `${(err as { code?: string }).code ?? ""} ${err.message}`.trim() : String(err);
    console.error("[inquiry] Failed to send notification:", detail, err);
    return NextResponse.json(
      {
        error: "We couldn't send your inquiry. Please email us directly.",
        // Only exposed when INQUIRY_DEBUG=1 (set temporarily in Netlify env).
        ...(process.env.INQUIRY_DEBUG === "1" ? { detail } : {}),
      },
      { status: 502 }
    );
  }

  // 2) Auto-reply to the customer (best-effort — don't fail the request).
  try {
    await transporter.sendMail({
      from: `"${company.name}" <${user}>`,
      to: `"${fullName}" <${email}>`,
      replyTo: company.email,
      subject: `Thanks for your inquiry — ${company.name}`,
      text:
        `Hi ${fullName},\n\n` +
        `Thank you for reaching out to ${company.name}. We've received your inquiry ` +
        `and will get back to you within one business day.\n\n` +
        `Product interest: ${product}\nCountry: ${country}\n\n` +
        `${message}\n\n` +
        `Email: ${company.email}\nWhatsApp: ${company.whatsappDisplay}\n\n` +
        `— Team ${company.name}`,
      html: replyHtml,
    });
  } catch (err) {
    console.error("[inquiry] Auto-reply failed (notification still sent):", err);
  }

  // 3) WhatsApp notification via CallMeBot (best-effort).
  //    One-time setup: https://www.callmebot.com/blog/free-api-whatsapp-messages/
  //    Set WA_CALLMEBOT_KEY in env vars once you have the API key.
  const waKey = process.env.WA_CALLMEBOT_KEY;
  if (waKey) {
    const waPhone = `+${company.whatsappNumber}`;
    const waText = [
      `New inquiry - ${company.name}`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Country: ${country}`,
      `Product: ${product}`,
      `Message: ${message}`,
    ].join("\n");
    try {
      const waUrl =
        `https://api.callmebot.com/whatsapp.php` +
        `?phone=${encodeURIComponent(waPhone)}` +
        `&text=${encodeURIComponent(waText)}` +
        `&apikey=${waKey}`;
      await fetch(waUrl, { signal: AbortSignal.timeout(8000) });
    } catch (err) {
      console.error("[inquiry] WhatsApp notification failed (non-fatal):", err);
    }
  }

  return NextResponse.json({ ok: true, delivered: true });
}
