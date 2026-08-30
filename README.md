# Farms2World — Export website

Marketing & lead-generation site for an India-based agri/commodity export
company (pulses, spices, produce, dry fruits & nuts, textiles, handicrafts),
serving B2B buyers across global markets. Domain: **farms2world.com**.

> **Branding note:** contact details (email/WhatsApp) are **placeholders**
> for development. All of it lives in a single config file — see
> [Rebranding](#rebranding) — so renaming later is a one-line change. Copy marked
> `[Placeholder]` in the source is provisional and meant to be replaced with real
> business content.

Built with **Next.js (App Router) + TypeScript**, plain CSS design tokens, and no
CMS/database. All editable content lives in typed data files under `content/`.

---

## Run locally

```bash
npm install
cp .env.example .env.local   # optional — see "Email & WhatsApp config"
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

---

## Project structure

```
app/                     App Router pages
  page.tsx               Home (hero, products, focus market, policy, stats)
  about/                 About Us
  products/              Products index
  products/[category]/           Category page (products in that category)
  products/[category]/[product]/ Product detail (dynamic, prerendered)
  markets/               Markets (focus market + all markets)
  quality/               Quality process
  faqs/                  FAQs
  contact/               Contact (form + address/hours)
  api/inquiry/route.ts   Inquiry form handler (Nodemailer via Titan SMTP)
components/               Reusable UI (Header, Footer, Hero, cards, form, …)
config/site.ts           SINGLE SOURCE for branding, nav, stats
content/                 Editable content (see below)
content/images.ts        Placeholder photo URLs (Pexels CDN)
app/globals.css          Design system (green/navy/teal tokens)
```

---

## Where to edit placeholder content

Everything editable is plain TypeScript — no CMS. Edit these files and the site
updates:

| What | File |
| --- | --- |
| Categories (6 top-level groups) | `content/categories.ts` |
| Products (per category via `categorySlug`) | `content/products.ts` |
| Markets (focus + list, flags, points) | `content/markets.ts` |
| "Why us" feature row | `content/features.ts` |
| FAQs | `content/faqs.ts` |
| Quality process steps | `content/quality.ts` |
| Policy notice (homepage card) | `content/policy.ts` |
| Testimonials | `content/testimonials.ts` |
| Placeholder photos (Pexels URLs) | `content/images.ts` |
| Brand name, email, WhatsApp, address, hours, nav, stats | `config/site.ts` |
| Type definitions for the above | `content/types.ts` |

Longer page copy (About story/mission, category highlights) lives inline in the
relevant page file and is flagged with `// [Placeholder]` comments.

### Rebranding

Open `config/site.ts` and edit the `company` object:

- `name` — full brand name (used in metadata, footer, copyright)
- `logo.prefix` / `logo.accent` — the two-tone wordmark (accent shown in amber)
- `email`, `whatsappNumber`, `whatsappDisplay`, `address`, `businessHours`,
  `tagline`, `description`

Navigation links live in the `nav` array in the same file.

---

## Email & WhatsApp config

The inquiry form POSTs to `app/api/inquiry/route.ts`, which uses **Nodemailer**
over your **Titan** mailbox (SMTP) to (1) send a notification to your inbox and
(2) send an auto-reply to the customer. The notification's `Reply-To` is the
customer's email, so hitting Reply in Titan goes straight to them.

Configure via environment variables (copy `.env.example` → `.env.local`
locally; add them in Netlify → Site configuration → Environment variables):

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | `smtp.titan.email` |
| `SMTP_PORT` | `465` (SSL) or `587` (STARTTLS) |
| `SMTP_USER` | Mailbox address, e.g. `support@farms2world.com` |
| `SMTP_PASS` | Mailbox password (**secret — never commit**) |
| `CONTACT_EMAIL` | Where notifications are delivered (defaults to `SMTP_USER`). |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional: override the email shown on the site. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Optional: WhatsApp number, digits only (e.g. `919999999999`). |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata / Open Graph. |

**Without SMTP vars set:** the API logs the inquiry to the console and returns
success, so the form UI is testable. Set the SMTP vars to actually send mail.

For inbox deliverability of the auto-reply, make sure the domain's **SPF**,
**DKIM** (added by Titan during mailbox setup) and a **DMARC** record are
present in GoDaddy DNS.

The WhatsApp button is a `wa.me` deep link built from `whatsappNumber` — update
that value (or `NEXT_PUBLIC_WHATSAPP_NUMBER`) before launch.

---

## Deploy to Vercel

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import it in Vercel — the framework is auto-detected (Next.js), no build
   config needed.
3. Add the environment variables above.
4. Deploy.

---

## Notes / out of scope for v1

- No CMS, database, accounts, payments, certifications, or multi-language.
- All photography is placeholder stock (Pexels CDN), referenced from
  `content/images.ts` — replace the URLs (or drop owned files in `/public`) with
  real photography before launch. Remote images are allowed via `next.config.ts`.
- Deployable to Vercel **or** Netlify (a `netlify.toml` is included).
- Motion respects `prefers-reduced-motion`; interactive elements have visible
  focus states.
