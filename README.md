# Convexo Protocol

Institutional financial infrastructure. Sovereign-grade digital asset services on Ethereum-native architecture.

---

## Brand System

### Color Palette

| Token            | Hex         | Usage                                          |
|------------------|-------------|------------------------------------------------|
| Base             | `#0B0F3B`   | Primary background                             |
| Layer            | `#081F5C`   | Elevated surfaces, secondary backgrounds       |
| Accent Purple    | `#401777`   | Sparingly -- hover states, deep accents        |
| Authority Blue   | `#334EAC`   | Primary buttons, links, interactive elements   |
| Data Blue        | `#BAD6EB`   | Section headers, highlights, data emphasis     |
| Primary Text     | `#FFF9EF`   | Headlines, primary content                     |

### Functional Colors

| Token            | Value                      | Usage                        |
|------------------|----------------------------|------------------------------|
| Surface          | `rgba(255,255,255, 0.03)`  | Card backgrounds             |
| Surface Hover    | `rgba(255,255,255, 0.05)`  | Card hover states            |
| Border           | `rgba(255,255,255, 0.08)`  | 1px dividers, card borders   |
| Border Hover     | `rgba(255,255,255, 0.12)`  | Interactive border states    |
| Muted            | `rgba(186,214,235, 0.5)`   | Body text, secondary content |

### Typography

- **Font**: Space Grotesk (Google Fonts) -- geometric sans-serif
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Headings**: Medium weight (500), letter-spacing: -0.02em
- **Section headers**: Uppercase, tracking: 0.2em, 10-12px, Data Blue
- **Body**: 14px, Light/Regular, color: muted

### Design Principles

- **Dark institutional**: `#0B0F3B` base, never pure black
- **Subtle depth**: Gradient transitions from `#401777` to `#081F5C` fading into `#0B0F3B`
- **1px dividers**: `rgba(255,255,255, 0.08)` -- never heavier
- **Rounded corners**: 8-12px maximum
- **No heavy glass blur**: Minimal `backdrop-blur-sm` only on nav
- **Precision spacing**: Consistent 4px grid
- **Minimal animation**: Subtle fades, no bounce or spring
- **Cards**: Surface + border pattern, no shadows on dark theme
- **Buttons**: Solid Authority Blue fill, hover to Accent Purple
- **Grid system**: Products use `gap-px bg-border` technique for seamless borders

### Logo Assets

| File                    | Usage                     |
|-------------------------|---------------------------|
| `convexoblanco.png`     | Dark backgrounds (nav, footer) |
| `convexohorizontal.png` | Light backgrounds         |
| `logologo.png`          | Favicon / app icon        |

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Font**: Space Grotesk (Google Fonts)
- **Deployment**: Vercel

## Products

- **Digital IDs** -- Progressive KYC/KYB verification with on-chain identity
- **Treasury Services** -- Digital asset treasury, OTC, and stablecoin swaps
- **Stablecoins** -- ECOP (Colombia) powered by Uniswap V4 + Chainlink
- **E-LOANS** -- On-chain credit using EIP-4626 with AI scoring
- **Real Estate Vaults** -- Tokenized real estate investment
- **P2Pay** -- AI-agent P2P marketplace with automated escrow

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
  layout.tsx              Root layout (Space Grotesk, dark base)
  page.tsx                Home page
  globals.css             Design tokens, component classes
  about/                  About page
  products/               Product pages (6 products)
components/
  Navbar.tsx              Fixed nav, dark, uppercase tracking
  Hero.tsx                Full-screen dark hero, data bar
  ChainDeployments.tsx    Chain logos, subtle opacity
  CoinPriceWidget.tsx     CoinGecko dark mode widget
  CryptoRails.tsx         Feature cards, stats divider
  Products.tsx            3-col gap-px grid
  LatamFundingGap.tsx     Challenge/Solution split
  Footer.tsx              4-col dark footer
contexts/
  LanguageContext.tsx      EN/ES translations
tailwind.config.ts        Color tokens, animations
```

## Links

- **App**: [protocol.convexo.xyz](https://protocol.convexo.xyz)

---

Convexo Protocol &copy; 2024
