# Convexo Protocol — Website Content & Structure Brief

## Brand Overview

**Convexo Protocol** is an institutional DeFi infrastructure company focused on Latin America. It bridges traditional finance and Web3 by providing compliant, AI-powered financial products built on Ethereum, Base, and UniChain.

**Tagline:** *Institutional DeFi Solutions for LATAM*

**Core values:** Compliance-first, AI-powered, Enterprise-grade, LATAM-native

---

## Tech Stack (for context)

- Next.js 15 (App Router), TypeScript
- Tailwind CSS
- Bilingual: English & Spanish (next-intl)

---

## Site Structure — All Pages

### 1. Home (`/`)

**Purpose:** Main landing page. Communicate what Convexo is, why it matters, and drive users to the app or products.

**Sections:**
1. **Navbar** — Logo left, nav links center (Products dropdown, Technology, About, Compliance), EN/ES language switcher pill + "Launch App" CTA right. Mobile: hamburger with slide-in panel.
2. **Hero** — Full-screen section. Headline: *"Institutional DeFi Solutions for LATAM"*. Subtitle about bridging TradFi and DeFi. Two CTAs: "Get Started" and "View Products". Bottom data bar with 4 KPIs: `+3MM USD Volume | ~15 min Settlement | 20 Countries | 24/7/365`
3. **Chain Deployments** — Strip showing chain logos: Base, Ethereum, UniChain
4. **Coin Price Widget** — Live prices: BTC, ETH, SOL, LINK, UNI, AAVE (CoinGecko embed)
5. **Products Grid** — 4 product cards (see Products section below)
6. **Crypto Rails** — "Why International Crypto Rails Matter" — 4 feature items: Instant Settlement, Lower Costs, Global Access, Full Transparency. Stats: ~15 min, 80%+ savings, 24/7, 20 countries
7. **LATAM Funding Gap** — "Bridging the LATAM Funding Gap" — Challenge vs. Solution split content. 3 stats: `$2.5T SME credit gap`, `67% credit constrained`, `15-25% interest rates`. CTA to get started.
8. **Footer** — 5 columns: Brand + socials, Products, Technology, Legal, Connect

---

### 2. Products Hub (`/products`)

**Purpose:** A dedicated landing page listing all 5 Convexo products. Each card links to its dedicated product page and/or its live app subdomain. This is the central entry point when users click "Products" in the navbar.

**Content:**
- Short intro headline + subtitle for the products suite
- 5 product cards, each with: name, one-line description, status (live / coming soon), and CTA link

| Product | App URL | Status |
|---|---|---|
| Payments Convexo | pay.convexo.xyz | Live |
| Tokenized C-Bonds | protocol.convexo.xyz | Live |
| Real Estate Vaults | realstate.convexo.xyz | Live |
| ETH Fund Convexo | fund.convexo.xyz | Coming Soon |
| P2P AI | p2p.convexo.xyz | Coming Soon |

---

### 3. Products — Payments Convexo (`/products/payments`)

**Purpose:** Institutional digital asset payments infrastructure.

**App URL:** `pay.convexo.xyz`

**Content:**
- Payments to international providers to China.
- Collections to international Clients
- OTC Agentic and tailred services

---

### 3. Products — Tokenized C-Bonds (`/products/c-bonds`)

**Purpose:** On-chain credit bonds for LATAM SMEs. Lenders earn yield; borrowers access affordable capital.

**App URL:** `protocol.convexo.xyz`

**Content:**
- Built on EIP-4626 vault standard
- E-Credits and E-Contracts (with legally binding documents)
- Minimum 12% APY for lenders
- Requires Digital ID Tier 3 (AI credit scoring)
- 4-step process: identity verification → credit scoring → bond agreement → disbursement

---

### 4. Products — Real Estate Vaults (`/products/real-estate`)

**Purpose:** Tokenized real estate investment product. Fractional ownership of LATAM commercial and residential properties.

**App URL:** `realstate.convexo.xyz`

**Content:**
- Property types: commercial, residential, mixed-use
- 18% Annual APY, 70% 5-year projected return
- ERC-4626 vault standard
- Requires Digital ID Tier 2
- On-chain ownership with legal backing

---

### 5. Products — ETH Fund Convexo (`/products/eth-fund`)

**Purpose:** Institutional Ethereum yield fund.

**App URL:** `fund.convexo.xyz` *(Coming Soon)*

**Content:**
- Status: Coming Soon
- Institutional-grade ETH exposure and yield generation
- Why Ethereum? 

---

### 5. Products — P2P AI (`/products/p2p`)

**Purpose:** AI-powered peer-to-peer payment system with on-chain arbitration.

**App URL:** `p2p.convexo.xyz` *(Coming Soon)*

**Content:**
- Status: Coming Soon
- AI agent arbitrator with Coinbase wallet integration
- Telegram bot: `@convexobot`
- ERC-8004 on-chain reputation system
- 0.1% commission
- 5-step transaction flow
- Supported currencies: COP, ARS, MXN, BRL, CLP, PEN

---

### 6. Technology (`/technology`)

**Purpose:** Explain the proprietary technology primitives Convexo has built, and the infrastructure providers powering the protocol.

**Sections:**

#### Our Technology
Four core primitives built by Convexo:

- **Stablecoins** — LATAM-native stablecoins (ECOP = Colombian Peso). Chainlink CCIP cross-chain, Proof of Reserves, USD/COP Data Feeds.
- **Digital IDs** — 3-tier identity system built with zkPassport, Sumsub, and Veriff:
  - Tier 1 — zkPassport + OpenSanctions (privacy-preserving, no document upload)
  - Tier 2 — Veriff (individuals) / Sumsub (enterprises)
  - Tier 3 — AI credit scoring (unlocks C-Bonds)
- **Vaults** — EIP-4626 standard vault infrastructure for yield-bearing products (C-Bonds, Real Estate, ETH Fund)
- **OTC Agentic Channels** — AI-driven order routing and execution across OTC desks and DEX liquidity

#### Infrastructure Providers
10 trusted third-party protocols powering the stack:

| Provider | Category |
|---|---|
| Chainlink | Oracles & CCIP |
| Uniswap | DEX |
| Sumsub | KYB |
| Veriff | Identity Verification |
| zkPassport | Privacy Identity |
| Safe | Custody |
| Circle USDC | Stablecoins |
| CoinGecko | Price Oracles |
| HashKey | Custody |
| OKX | Liquidity |

---

### 7. About (`/about`)

**Purpose:** Explain the company, team philosophy, locations, and how to reach them.

**Sections:**
1. Hero — headline and short description
2. Mission & Vision — two parallel content blocks
3. Our Approach — 3 pillars: Compliance-First, AI-Powered, Enterprise-Grade
4. Global Locations — United States, Colombia, Hong Kong
5. Contact — WhatsApp (`+57 318 6766035`), Telegram (`@convexoprotocol`), Email (`hello@convexo.xyz`)
6. CTA → Launch App

---

### 8. Compliance Hub (`/compliance`)

**Purpose:** Unified legal hub — a single page with tab-switching between all three legal documents. Institutional 3-column layout matching the Stitch design.

**Layout:**
- Left sidebar: Tab navigation (Privacy / Terms / AML-CFT) + Quick Actions (Download PDF, Version History, Contact DPO)
- Center canvas: Scrollable glass-panel document with Akira title, full content, Prev/Next navigation
- Right panel: Protocol Trust card (A+ audit score, SOC2, ISO 27001, zkPassport) + Network Health panel (KYC Latency, AML Coverage, Node Compliance, Uptime)
- Bottom: Document Registry (version history) + Governance Participation

**Stitch reference:** `stitch_convexo_design_strategy/compliance_hub_convexo_protocol/code.html`

---

### 9. Privacy Policy (`/privacy`)

**Purpose:** Legal — data privacy (standalone page, also accessible via Compliance Hub).

- 11 sections: data collection, use, sharing, blockchain data, security, user rights, cookies, retention, third parties, changes, contact
- Last updated: March 4, 2025
- Contact: `legal@convexo.xyz`

---

### 10. Terms & Conditions (`/terms`)

**Purpose:** Legal — terms of service (standalone page, also accessible via Compliance Hub).

- 15 sections: acceptance, eligibility, services, verification, risks, prohibited use, fees, IP, disclaimers, liability, indemnification, governing law, termination, changes, contact

---

### 11. AML/CFT Policy (`/aml-cft`)

**Purpose:** Legal — anti-money laundering and counter-terrorism financing compliance (standalone page, also accessible via Compliance Hub).

- Sections: Overview, AML Policy, CFT Policy, KYC Requirements (individual + enterprise), Monitoring & Reporting, Compliance & Updates, Contact

---

## Navigation Structure

```
Navbar
├── Products (dropdown → /products as hub)
│   ├── Payments Convexo     → /products/payments      (pay.convexo.xyz)     [Live]
│   ├── Tokenized C-Bonds    → /products/c-bonds       (protocol.convexo.xyz)   [Live]
│   ├── Real Estate Vaults   → /products/real-estate   (realstate.convexo.xyz) [Live]
│   ├── ETH Fund Convexo     → /products/eth-fund      (fund.convexo.xyz)    [Soon]
│   └── P2P AI               → /products/p2p           (p2p.convexo.xyz)     [Soon]
├── Technology               → /technology
│   ├── [section] Our Technology (Stablecoins, Digital IDs, Vaults, OTC)
│   └── [section] Infrastructure Providers
├── About                    → /about
├── Compliance               → /compliance
├── [EN/ES language switcher]
└── [Launch App CTA]         → https://protocol.convexo.xyz

Footer
├── Brand column (Akira wordmark, social icon buttons: X, LI, GH, TG)
├── Products column (all 5 products)
├── Technology column
├── Legal column
│   ├── Compliance Hub       → /compliance
│   ├── Privacy Policy       → /privacy
│   ├── Terms & Conditions   → /terms
│   └── AML/CFT Policy       → /aml-cft
└── Connect + Verification column
    ├── hello@convexo.xyz
    ├── WhatsApp
    ├── About Us
    └── SOC2 / ISO 27001 / zkPassport badges
```

---

## Key KPIs & Stats

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
| C-Bonds min APY for lenders | 12% |
| Real Estate APY | 18% annual |
| Real Estate 5-year return | 70% |
| OTC spread | 1.5% |
| DEX swap spread | 0.3% |
| P2P-AI commission | 0.1% |

---

## Social & External Links

| Platform | Link |
|---|---|
| Main App | `https://protocol.convexo.xyz` |
| Payments | `https://pay.convexo.xyz` |
| C-Bonds / Loans | `https://protocol.convexo.xyz` |
| Real Estate Vaults | `https://realstate.convexo.xyz` |
| ETH Fund | `https://fund.convexo.xyz` (soon) |
| P2P AI | `https://p2p.convexo.xyz` (soon) |
| Twitter/X | `https://x.com/convexoprotocol` |
| LinkedIn | `https://www.linkedin.com/company/convexo-protocol/` |
| GitHub | `https://github.com/Convexo-finance` |
| Telegram (community) | `https://t.me/convexoprotocol` |
| Telegram (P2P bot) | `https://t.me/convexobot` |
| WhatsApp | `+57 318 6766035` |
| Email | `hello@convexo.xyz` |
| Legal email | `legal@convexo.xyz` |

---

## Assets Available

- Logo: `convexoblanco.png`
- Chain logos: Base, Ethereum, UniChain (SVG/PNG)
- Partner logos: Chainlink, Uniswap, Sumsub, Veriff, zkPassport, Safe, USDC Circle, CoinGecko, HashKey, OKX, OpenSanctions
- Social icons: WhatsApp, Telegram, Signal
