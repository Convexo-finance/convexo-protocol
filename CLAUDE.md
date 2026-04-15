# CLAUDE.md — Convexo Protocol Website

## Role
You are the development agent for the Convexo Protocol website. Your job is to build and maintain this Next.js site according to the design system and page specifications described here. **Always plan before executing.** For any non-trivial task, outline your approach and confirm before touching files.

---

## Project Overview

**Convexo Protocol** — Institutional DeFi infrastructure for Latin America.
**Tagline:** *Institutional DeFi Solutions for LATAM*
**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, next-intl (EN/ES bilingual)
**Model for execution:** claude-sonnet (always use Sonnet for code generation)

Full content and structure reference: `SITE_BRIEF.md`
Full design system reference: `stitch_convexo_design_strategy/convexo_institutional/DESIGN.md`
Brand identity reference: `branding.md`

---

## Current App Directory Structure

```
app/
  layout.tsx                        ← Root layout (fonts + metadata)
  globals.css                       ← Design tokens + Tailwind @layer utilities
  [locale]/
    layout.tsx                      ← NextIntlClientProvider
    page.tsx                        ← Home page
    about/page.tsx
    compliance/page.tsx             ← Unified Compliance Hub (Privacy + Terms + AML/CFT)
    privacy/page.tsx                ← Privacy Policy (standalone)
    terms/page.tsx                  ← Terms & Conditions (standalone)
    aml-cft/page.tsx                ← AML/CFT Policy (standalone)
    technology/page.tsx
    products/
      page.tsx                      ← Products Hub
      payments/page.tsx
      c-bonds/page.tsx
      real-estate/page.tsx
      eth-fund/page.tsx             ← Coming Soon
      p2p/page.tsx                  ← Coming Soon

components/
  Navbar.tsx                        ← Fixed nav with Products dropdown, language switcher (EN/ES), Launch App
  Footer.tsx                        ← 5-column footer with Akira brand wordmark + verification badges
  ComplianceHub.tsx                 ← Client component — tab-switching compliance hub (Privacy/Terms/AML)

stitch_convexo_design_strategy/     ← HTML prototypes from Stitch (READ ONLY — reference only)
public/branding/                    ← Logo and brand assets
messages/
  en.json
  es.json
```

---

## Design System

### Creative Direction: "The Sovereign Vault"
The aesthetic is institutional, heavy, and secure. It moves away from consumer crypto playfulness toward a high-finance editorial feel. Data is curated with authority. Think Bloomberg Terminal meets DeFi protocol.

### Colors

| Token | Value | Use |
|---|---|---|
| `--surface` | `#0A0D3A` | Page background — deep navy, never pure black |
| `--surface-container-low` | Slightly lighter than surface | Layout section backgrounds |
| `--surface-container-highest` | Darkest elevated layer | Interactive cards, data modules |
| `--primary` | `#B7C4FF` | CTAs, critical actions, high-visibility data |
| `--secondary` | `#D6BAFF` | Technical accents, sophisticated highlights |
| `--on-surface` | `#FFF9EF` | Warm white — all body text |

**Brand palette (from branding.md):**
- Morado Principal: `#401777` — hover states, deep accents
- Azul Oscuro: `#081F5C` — institutional backgrounds
- Azul Medio: `#334EAC` — supporting elements, buttons
- Azul Claro: `#BAD6EB` — section labels, contrast text
- Blanco Hueso: `#FFF9EF` — body text

### Typography

All fonts are loaded locally via `next/font/local` — no Google Fonts. Font files live in `public/branding/fonts/`.

| Font | File | Role | Rules |
|---|---|---|---|
| **Akira Expanded** | `public/branding/fonts/Akira Expanded Demo.otf` | Hero headlines, major display titles, brand wordmark | Uppercase only. Never for body text. Never lowercase. |
| **Poppins SemiBold** | `public/branding/fonts/Poppins/Poppins-SemiBold.ttf` | Subtitles, section headings, emphasis | |
| **Poppins Regular** | `public/branding/fonts/Poppins/Poppins-Regular.ttf` | Body text, narrative copy, descriptions | |
| **Poppins Light** | `public/branding/fonts/Poppins/Poppins-Light.ttf` | Secondary notes, captions, fine print | |
| **Nunito** | `public/branding/fonts/Nunito/Nunito-VariableFont_wght.ttf` | Supporting font when needed | Variable font, full weight range |

**Hierarchy in practice:**
- Page hero headline → `Akira Expanded` via `.heading-display`, uppercase, `3rem–5rem`
- Section headings → `Poppins SemiBold`, `1.5rem–2.5rem`
- Body copy → `Poppins Regular`, `0.875rem–1rem`, line-height `1.6–1.75`
- Labels / tags / metadata → `.label-institutional` class — Poppins, uppercase, `0.65rem`, `tracking-[0.2em]`
- KPIs / numerical data → `Poppins SemiBold` or `.heading-display` depending on size

**Font loading (app/layout.tsx) — current implementation:**
```ts
import localFont from 'next/font/local'

const akiraExpanded = localFont({
  src: '../public/branding/fonts/Akira Expanded Demo.otf',
  variable: '--font-akira',
  display: 'swap',
})

const poppins = localFont({
  src: [
    { path: '../public/branding/fonts/Poppins/Poppins-Light.ttf', weight: '300' },
    { path: '../public/branding/fonts/Poppins/Poppins-Regular.ttf', weight: '400' },
    { path: '../public/branding/fonts/Poppins/Poppins-Medium.ttf', weight: '500' },
    { path: '../public/branding/fonts/Poppins/Poppins-SemiBold.ttf', weight: '600' },
    { path: '../public/branding/fonts/Poppins/Poppins-Bold.ttf', weight: '700' },
  ],
  variable: '--font-poppins',
  display: 'swap',
})

const nunito = localFont({
  src: '../public/branding/fonts/Nunito/Nunito-VariableFont_wght.ttf',
  variable: '--font-nunito',
  display: 'swap',
})
```

Apply all three variables to `<html>` and set `font-family: var(--font-poppins)` as the default body font in `globals.css`.

### Borders & Depth — Critical Rules

- **No 1px solid borders to define sections.** This is strictly prohibited.
- Boundaries are created by background color shifts (surface tier changes).
- "Ghost Border" fallback (accessibility only): `rgba(255,255,255,0.08)` — must feel like a catch-light, not a structural line.
- No standard Material Design drop shadows.
- **Ambient shadows** for floating modals only: `X:0 Y:12 Blur:40 Spread:0` at 6% opacity.
- **Radial Glows:** Secondary color at 5% opacity behind primary content blocks to guide the eye.

### Glassmorphism (floating elements only)
Apply `surface-variant` at 40% opacity + `backdrop-blur: 20px`. Use only for floating/overlay elements. Class: `.glass-panel`.

### Surface Hierarchy (layering = depth)
```
Level 0 → --surface (#0A0D3A)           Page background
Level 1 → --surface-container-low       Layout sections
Level 2 → --surface-container-highest   Cards, data modules
```

### Key Utility Classes (defined in globals.css)

| Class | Use |
|---|---|
| `.heading-display` | Akira Expanded, uppercase, tracking tight |
| `.label-institutional` | Uppercase metadata labels, 0.65rem, tracking 0.2em |
| `.body-text` | Poppins Regular, warm white at 70% opacity |
| `.glass-panel` | rgba(45,49,93,0.4) + backdrop-blur-xl |
| `.metallic-edge` | 1px ghost border rgba(183,196,255,0.15) |
| `.chip` | Small tag with tertiary-container background |
| `.btn-primary` | Primary action button |
| `.btn-secondary` | Secondary/ghost button |
| `.section-container` | max-w-[1600px] centered with horizontal padding |
| `.technical-grid` | Subtle 40px grid overlay for technical sections |

### Components

**Buttons:**
- Primary: `#334EAC` background, `#FFF9EF` text, subtle 1px ghost border (lighter primary tint), hover → `#401777`
- Secondary: No background, uppercase label, `letter-spacing: 0.05em`

**Cards:**
- Zero divider lines inside cards
- `2rem` vertical gap between content groups
- `surface-container-highest` background
- Distinguish from page by background shift, not border

**Chips / Tags:**
- Small, sharp corners (`border-radius: 4px`)
- `tertiary-container` background with `on-tertiary-container` text
- Feel like blueprint metadata tags

### Layout Rules
- Max width: `max-w-[1600px]` (wide) or `max-w-7xl` (standard), centered, `px-6 sm:px-8 lg:px-12`
- Section padding: `py-24 md:py-32`
- Extreme white space between unrelated modules — breathing room is a premium feature
- Intentional asymmetry is encouraged: offset large headlines against dense data blocks
- Overlapping elements create high-end feel

---

## Page Reference Map

Each page has an HTML prototype from Stitch. Read these **before implementing or editing** any page. Extract layout, hierarchy, and content distribution — translate to Tailwind + the design system above (never copy inline styles verbatim).

| Page | Route | Stitch Reference |
|---|---|---|
| Home | `/` | `stitch_convexo_design_strategy/home_convexo_sovereign_vault_typography_aligned/code.html` |
| About | `/about` | `stitch_convexo_design_strategy/about_convexo_protocol/code.html` |
| Compliance Hub | `/compliance` | `stitch_convexo_design_strategy/compliance_hub_convexo_protocol/code.html` |
| Privacy Policy | `/privacy` | `stitch_convexo_design_strategy/compliance_hub_convexo_protocol/code.html` |
| Terms | `/terms` | `stitch_convexo_design_strategy/compliance_hub_convexo_protocol/code.html` |
| AML/CFT | `/aml-cft` | `stitch_convexo_design_strategy/compliance_hub_convexo_protocol/code.html` |
| Payments | `/products/payments` | `stitch_convexo_design_strategy/products/payments_convexo/code.html` |
| C-Bonds | `/products/c-bonds` | `stitch_convexo_design_strategy/products/e_loans_convexo_protocol/code.html` |
| Real Estate | `/products/real-estate` | `stitch_convexo_design_strategy/products/real_estate_vaults_convexo_protocol/code.html` |
| ETH Fund | `/products/eth-fund` | `stitch_convexo_design_strategy/products/eth_fund_convexo/code.html` |
| P2P AI | `/products/p2p` | `stitch_convexo_design_strategy/products/p2p_ai_convexo_protocol/code.html` |
| Technology | `/technology` | `stitch_convexo_design_strategy/technologies/code.html` |
| Products Hub | `/products` | No Stitch reference — consistent with site design system |

---

## Navigation

**Navbar (desktop):**
- Left: Logo (`convexoblanco.png`)
- Center: Products (dropdown with 5 products), Technology, About, Compliance
- Right: EN/ES language switcher pill + "Launch App" button → `https://protocol.convexo.xyz`
- Mobile: hamburger → slide-in panel from right (includes language switcher + all links)

**Language switching:** Built into `Navbar.tsx` using `useLocale()` from `next-intl` and `useRouter().replace(pathname, { locale })` from `@/navigation`. No separate LanguageSwitcher component.

**Internal links:** Always use `Link` from `@/navigation` (not `next/link`). This ensures locale prefix is preserved (`/en/...`, `/es/...`).

**Footer:**
1. Brand column — Akira wordmark in primary, logo image dimmed, social icon buttons
2. Products (all 5)
3. Technology
4. Legal (Compliance Hub, Privacy, Terms, AML/CFT)
5. Connect + Verification badges (SOC2, ISO 27001, zkPassport)

---

## Internationalization

- Locale prefix: `always` — all routes are prefixed (`/en/...`, `/es/...`)
- Translation files: `messages/en.json` and `messages/es.json`
- Default locale: `en`
- Internal links MUST use `Link` from `@/navigation` — never from `next/link`
- `usePathname` and `useRouter` MUST be imported from `@/navigation` — never from `next/navigation`
- Current pages use hardcoded strings (legal pages) or translation keys (home, about, technology)
- When adding new pages with translation keys, update BOTH `en.json` and `es.json`

---

## Brand Assets

Located in `public/branding/`:
- `convexoblanco.png` — white logo (Navbar logo + Footer dimmed)
- `logologo.png` — favicon/icon version

Chain logos in `public/`: `base_logo.svg`, `ethereum.png`, `unichain.png`
Partner logos in `public/`: Chainlink, Uniswap, Sumsub, Veriff, zkPassport, Safe, USDC, CoinGecko, HashKey, OKX

---

## Key Content & KPIs

| Stat | Value |
|---|---|
| Accumulated volume | +3MM USD |
| Settlement time | ~15 minutes |
| Countries covered | 20 |
| Availability | 24/7/365 |
| SME credit gap in LATAM | $2.5 Trillion |
| % SMEs credit constrained | 67% |
| Interest rates in LATAM | 15–25% |
| Cost savings via crypto rails | 80%+ |
| C-Bonds min APY | 12% |
| Real Estate APY | 18% annual |
| Real Estate 5-year return | 70% |
| OTC spread | 1.5% |
| DEX swap spread | 0.3% |
| P2P-AI commission | 0.1% |

**External links:**
- Main app: `https://protocol.convexo.xyz`
- Payments: `https://pay.convexo.xyz`
- C-Bonds: `https://protocol.convexo.xyz`
- Real Estate: `https://realstate.convexo.xyz`
- ETH Fund: `https://fund.convexo.xyz`
- P2P AI: `https://p2p.convexo.xyz`
- Twitter/X: `https://x.com/convexoprotocol`
- LinkedIn: `https://www.linkedin.com/company/convexo-protocol/`
- GitHub: `https://github.com/Convexo-finance`
- Telegram: `https://t.me/convexoprotocol`
- WhatsApp: `+57 318 6766035`
- Email: `hello@convexo.xyz`
- Legal email: `legal@convexo.xyz`

---

## Workflow Rules

### Always: Plan → Confirm → Execute
Never write code before outlining the plan. State exactly which files will be modified or created, then wait for confirmation before proceeding.

### Before touching any page
1. Read the relevant Stitch HTML prototype first
2. Read the current page file to understand what exists
3. Plan the changes — do not over-engineer

### Code Rules
- **Read the Stitch HTML first.** Before implementing any page, read the relevant `code.html`. Extract section order, content hierarchy, and layout structure.
- **Translate to Tailwind.** Never copy inline CSS from Stitch verbatim. Map to Tailwind classes using the design tokens defined above.
- **Internal links use `@/navigation`.** `Link`, `usePathname`, `useRouter` all come from `@/navigation`, never `next/link` or `next/navigation`.
- **Do not modify** `stitch_convexo_design_strategy/` — read-only reference files.
- **Mobile first.** Every page must be fully responsive. Navbar collapses to hamburger → slide-in panel from right.
- **No pure black.** Use `#0A0D3A` as the darkest surface. Never `#000000`.
- **No opaque 1px borders** to define sections. Background shifts only.
- **Update both `en.json` and `es.json`** for every new translation key added.

### Custom maintenance commands
Use these slash commands (defined in `.claude/commands/`) for common maintenance tasks:
- `/new-page` — scaffold a new page following site conventions
- `/new-product` — add a new product page + update Navbar dropdown + Footer
- `/translate` — add or sync translation keys across en.json and es.json
