# Farm to World — Pulses Export website

Marketing & lead-generation site for an India-based pulses/dal export company,
serving B2B buyers across global markets.

> **Branding note:** `Farm to World` (name, email, WhatsApp) is a **placeholder**
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
  products/[slug]/       Product detail (dynamic, prerendered per product)
  markets/               Markets (focus market + all markets)
  quality/               Quality process
  faqs/                  FAQs
  contact/               Contact (form + address/hours)
  api/inquiry/route.ts   Inquiry form handler (sends email via Resend)
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
| Products (pulses/dal: name, descriptions, specs) | `content/products.ts` |
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

The inquiry form POSTs to `app/api/inquiry/route.ts`, which sends a formatted
email using [Resend](https://resend.com). Configure via environment variables
(copy `.env.example` → `.env.local` locally; add them in Vercel → Project
Settings → Environment Variables):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key. **Required in production.** |
| `INQUIRY_FROM_EMAIL` | Verified sender address (defaults to Resend's `onboarding@resend.dev` sandbox). |
| `CONTACT_EMAIL` | Where inquiries are delivered (defaults to the address in `config/site.ts`). |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional: override the email shown on the site. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Optional: WhatsApp number in intl. format, digits only (e.g. `919999999999`), used for the `wa.me` link. |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata / Open Graph. |

**Without `RESEND_API_KEY`:** in development the API logs the inquiry to the
console and returns success (so you can exercise the UI); in production it
returns an error. To actually receive emails, add a Resend key and verify a
sending domain.

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
