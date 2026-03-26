# Convexo Protocol Website

Institutional DeFi infrastructure for Latin America. Sovereign-grade digital asset services on Ethereum-native architecture.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| i18n | next-intl — EN / ES bilingual, `localePrefix: always` |
| Fonts | Local fonts via `next/font/local` (no Google Fonts) |
| Deployment | Vercel |

---

## Design System

**Aesthetic:** "The Sovereign Vault" — institutional, editorial, high-finance. Bloomberg Terminal meets DeFi.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `surface` | `#0A0D3A` | Page background — deep navy, never pure black |
| `surface-container-low` | `#131742` | Layout section backgrounds |
| `surface-container` | `#171B46` | Mid-level containers |
| `surface-container-high` | `#222651` | Elevated containers |
| `surface-container-highest` | `#2D315D` | Cards, data modules |
| `surface-container-lowest` | `#040735` | Deepest background (inputs, dark panels) |
| `primary` | `#B7C4FF` | CTAs, high-visibility data, active states |
| `secondary` | `#D6BAFF` | Technical accents, sophisticated highlights |
| `on-surface` | `#FFF9EF` | Warm white — all body text |

**No pure black (#000000) anywhere. No opaque 1px section borders.**

### Typography

All fonts loaded locally from `public/branding/fonts/`:

| Font | Variable | Role |
|---|---|---|
| Akira Expanded | `--font-akira` | Hero headlines, brand wordmark — uppercase only |
| Poppins (300–700) | `--font-poppins` | Body copy, headings, labels — default font |
| Nunito (variable) | `--font-nunito` | Supporting font |

### Key Utility Classes

`.heading-display` · `.label-institutional` · `.body-text` · `.glass-panel` · `.metallic-edge` · `.chip` · `.btn-primary` · `.btn-secondary` · `.section-container`

---

## Project Structure

```
app/
  layout.tsx                  Root layout — font loading, metadata
  globals.css                 Design tokens, Tailwind @layer utilities
  [locale]/
    layout.tsx                NextIntlClientProvider
    page.tsx                  Home
    about/page.tsx
    compliance/page.tsx       Unified Compliance Hub
    privacy/page.tsx
    terms/page.tsx
    aml-cft/page.tsx
    technology/page.tsx
    products/
      page.tsx                Products Hub
      payments/page.tsx
      c-bonds/page.tsx
      real-estate/page.tsx
      eth-fund/page.tsx       Coming Soon
      p2p/page.tsx            Coming Soon

components/
  Navbar.tsx                  Fixed nav — Products dropdown, EN/ES switcher, Launch App
  Footer.tsx                  5-column footer — brand, products, tech, legal, connect
  ComplianceHub.tsx           Client component — tabbed Privacy/Terms/AML hub

messages/
  en.json                     English translations
  es.json                     Spanish translations

stitch_convexo_design_strategy/   HTML prototypes (read-only design reference)
public/branding/                  Logos, fonts, brand assets
```

---

## Products

| Product | Route | App | Status |
|---|---|---|---|
| Payments Convexo | `/products/payments` | pay.convexo.xyz | Live |
| Tokenized C-Bonds | `/products/c-bonds` | loans.convexo.xyz | Live |
| Real Estate Vaults | `/products/real-estate` | realstate.convexo.xyz | Live |
| ETH Fund Convexo | `/products/eth-fund` | fund.convexo.xyz | Coming Soon |
| P2P AI | `/products/p2p` | p2p.convexo.xyz | Coming Soon |

---

## Navigation

- **Navbar:** Logo → Products (dropdown) · Technology · About · Compliance → EN/ES switcher → Launch App
- **Footer:** Brand + socials · Products · Technology · Legal · Connect + Verification badges
- **Language routing:** `localePrefix: always` — all routes prefixed `/en/...` and `/es/...`
- Internal links use `Link` from `@/navigation` (locale-aware — never `next/link`)

---

## Development

```bash
npm install
npm run dev       # localhost:3000 → redirects to /en/
npm run build     # production build (must pass with zero errors)
```

---

## Agent Guide

See `CLAUDE.md` for the full agent specification: design system rules, page reference map to Stitch prototypes, code rules, and maintenance commands.

---

Convexo Protocol © 2025
