import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';

const metrics = [
  { value: '+3MM USD',   label: 'Accumulated Volume' },
  { value: '~15 min',   label: 'Settlement Time' },
  { value: '20 Countries', label: 'Global Reach' },
  { value: '24/7/365',  label: 'Network Uptime' },
];

const products = [
  {
    name: 'Cross-Border Payments',
    href: '/products/payments',
    appUrl: 'pay.convexo.xyz',
    desc: 'Institutional settlement layer for high-velocity international transfers with instant liquidity provisioning and OTC agentic channels.',
    tags: ['Instant', 'Compliant'],
    accent: 'primary',
    size: 'large', // md:col-span-8
  },
  {
    name: 'Tokenized C-Bonds',
    href: '/products/c-bonds',
    appUrl: 'loans.convexo.xyz',
    desc: 'Fractionalized corporate debt instruments secured by on-chain collateral and verified legal frameworks. 12%+ APY.',
    tags: ['12%+ APY'],
    accent: 'secondary',
    size: 'small', // md:col-span-4
  },
  {
    name: 'Real Estate Vaults',
    href: '/products/real-estate',
    appUrl: 'realstate.convexo.xyz',
    desc: 'On-chain exposure to premium LATAM commercial property yields via RWA tokenization. 18% Annual APY.',
    tags: ['Soon'],
    accent: 'tertiary',
    size: 'small',
  },
  {
    name: 'ETH Institutional Fund',
    href: '/products/eth-fund',
    appUrl: 'fund.convexo.xyz',
    desc: 'Active yield optimization for large-scale ETH positions using proprietary institutional-grade vaults.',
    tags: ['Soon'],
    accent: 'primary',
    size: 'small',
  },
  {
    name: 'P2P AI Agent',
    href: '/products/p2p',
    appUrl: 'p2p.convexo.xyz',
    desc: 'Autonomous matching engine for institutional counterparties, optimizing for slippage and privacy across LATAM currencies.',
    tags: ['Soon'],
    accent: 'secondary',
    size: 'small',
  },
];

const techPrimitives = [
  {
    icon: '◈',
    title: 'Digital Identity (zkPassport)',
    desc: 'Zero-knowledge identity verification that ensures regulatory compliance without compromising sovereign privacy.',
  },
  {
    icon: '◉',
    title: 'Local Stablecoins (ECOP)',
    desc: 'Collateral-backed digital currencies pegged to regional LATAM assets, minimizing FX volatility risks.',
  },
  {
    icon: '◫',
    title: 'EIP-4626 Vaults',
    desc: 'Standardized yield-bearing vault infrastructure powering C-Bonds, Real Estate, and ETH Fund products.',
  },
  {
    icon: '◬',
    title: 'Agentic OTC Desk',
    desc: 'AI-driven automated settlement for large-block trades, executing with institutional precision 24/7.',
  },
];

const valueProps = [
  {
    title: 'Hardened Privacy',
    desc: 'Encrypted transactional data ensuring that institutional strategies remain confidential while remaining fully auditable on-chain.',
  },
  {
    title: 'Atomic Speed',
    desc: 'Eliminating traditional T+2 settlement windows. Convexo provides T+0 finality for all regional and cross-border assets.',
  },
  {
    title: 'Compliance-First',
    desc: 'Full KYC/AML stack with 3-tier Digital ID system. Built to meet regulatory requirements across 20 LATAM jurisdictions.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="relative pt-20">
        {/* Technical grid background */}
        <div className="absolute inset-0 technical-grid opacity-40 pointer-events-none" />
        {/* Radial glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/8 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-0 -translate-x-1/3 pointer-events-none" />

        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <section className="relative z-10 px-6 sm:px-8 lg:px-12 pt-28 pb-40 max-w-7xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-surface-container-high metallic-edge mb-10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(183,196,255,0.8)]" />
            <span className="label-institutional text-primary">Status: Live Operational Network</span>
          </div>

          {/* Headline */}
          <h1 className="heading-display text-[clamp(3rem,9vw,7rem)] text-on-surface mb-10 max-w-5xl">
            Institutional{' '}
            <span className="text-primary">DeFi</span>
            <br />
            Infrastructure
          </h1>

          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-14">
            Sovereign liquidity protocols for the next generation of LATAM financial
            institutions. Real-world assets meets decentralized settlement.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-5">
            <a
              href="https://loans.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-sm"
            >
              Open Terminal
            </a>
            <Link href="/products" className="btn-secondary px-10 py-4 text-sm">
              View Products
            </Link>
          </div>
        </section>

        {/* ── 2. METRICS BAR ──────────────────────────────────── */}
        <section className="relative z-10 w-full bg-surface-container-lowest border-y border-outline-variant/10 py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-2">
                <span className="font-headline text-3xl font-black text-primary tracking-tight">
                  {m.value}
                </span>
                <span className="label-institutional">{m.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. PRODUCT ECOSYSTEM ────────────────────────────── */}
        <section className="relative z-10 section-container section-padding">
          <h2 className="heading-lg text-2xl mb-20 flex items-center gap-6">
            <span className="section-rule" />
            Product Ecosystem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Payments — large feature card */}
            <Link
              href={products[0].href}
              className="md:col-span-8 group relative overflow-hidden bg-surface-container-highest p-12 rounded-xl metallic-edge flex flex-col justify-between hover:bg-surface-variant transition-all duration-500 min-h-[340px]"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {products[0].tags.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
                <h3 className="font-headline text-3xl font-black uppercase tracking-tight text-on-surface mb-4">
                  {products[0].name}
                </h3>
                <p className="font-body text-on-surface-variant max-w-md text-base leading-relaxed">
                  {products[0].desc}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <span className="label-institutional text-primary group-hover:text-primary transition-colors">
                  {products[0].appUrl}
                </span>
                <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* C-Bonds */}
            <Link
              href={products[1].href}
              className="md:col-span-4 group bg-surface-container-highest p-10 rounded-xl metallic-edge flex flex-col justify-between hover:bg-surface-variant transition-all duration-500"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {products[1].tags.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-4">
                  {products[1].name}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  {products[1].desc}
                </p>
              </div>
              <span className="label-institutional text-secondary mt-6 group-hover:text-primary transition-colors">
                {products[1].appUrl} →
              </span>
            </Link>

            {/* Real Estate */}
            <Link
              href={products[2].href}
              className="md:col-span-4 group bg-surface-container-high p-10 rounded-xl metallic-edge flex flex-col justify-between hover:bg-surface-variant transition-all duration-500 opacity-70 hover:opacity-100"
            >
              <div>
                <span className="chip mb-6 inline-block">Coming Soon</span>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-4">
                  {products[2].name}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  {products[2].desc}
                </p>
              </div>
              <span className="label-institutional text-tertiary mt-6 group-hover:text-primary transition-colors">
                {products[2].appUrl} →
              </span>
            </Link>

            {/* ETH Fund */}
            <Link
              href={products[3].href}
              className="md:col-span-4 group bg-surface-container-high p-10 rounded-xl metallic-edge flex flex-col justify-between hover:bg-surface-variant transition-all duration-500 opacity-70 hover:opacity-100"
            >
              <div>
                <span className="chip mb-6 inline-block">Coming Soon</span>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-4">
                  {products[3].name}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  {products[3].desc}
                </p>
              </div>
            </Link>

            {/* P2P AI */}
            <Link
              href={products[4].href}
              className="md:col-span-4 group bg-surface-container-high p-10 rounded-xl metallic-edge flex flex-col justify-between hover:bg-surface-variant transition-all duration-500 border-l-2 border-secondary opacity-70 hover:opacity-100"
            >
              <div>
                <span className="chip mb-6 inline-block">Coming Soon</span>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-4">
                  {products[4].name}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  {products[4].desc}
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* ── 4. TECHNOLOGY LAYER ─────────────────────────────── */}
        <section className="relative z-10 w-full py-36 bg-surface-container-low overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -rotate-6 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="heading-display text-[clamp(2.5rem,5vw,4rem)] text-on-surface mb-14">
                Sovereign<br />
                <span className="text-secondary">Technology</span><br />
                Layer
              </h2>
              <div className="space-y-12">
                {techPrimitives.map((t) => (
                  <div key={t.title} className="flex gap-7">
                    <div className="flex-shrink-0 w-14 h-14 bg-surface-container-highest rounded-full flex items-center justify-center metallic-edge text-primary text-xl">
                      {t.icon}
                    </div>
                    <div>
                      <h4 className="font-headline text-base font-black uppercase tracking-tight text-on-surface mb-2">
                        {t.title}
                      </h4>
                      <p className="body-text">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/technology" className="inline-flex items-center gap-3 mt-14 label-institutional text-primary hover:text-on-surface transition-colors group">
                Explore Infrastructure
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Network status panel */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative glass-panel rounded-2xl p-10 metallic-edge shadow-2xl">
                <div className="flex items-center justify-between mb-10">
                  <span className="label-institutional text-primary">Network Status: Optimized</span>
                  <span className="font-body text-xs font-bold text-on-surface/30 font-mono">LAT-092</span>
                </div>
                <div className="space-y-5">
                  {[80, 65, 50].map((w, i) => (
                    <div key={i} className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${i === 0 ? 'bg-primary shadow-[0_0_10px_rgba(183,196,255,0.6)]' : i === 1 ? 'bg-secondary shadow-[0_0_10px_rgba(214,186,255,0.4)]' : 'bg-primary/30'}`}
                        style={{ width: `${w}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-12 grid grid-cols-2 gap-5">
                  {[
                    { label: 'Settlement', value: '~15 min' },
                    { label: 'Countries',  value: '20' },
                    { label: 'Uptime',     value: '99.9%' },
                    { label: 'Volume',     value: '+3MM USD' },
                  ].map((s) => (
                    <div key={s.label} className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                      <span className="label-institutional block mb-1">{s.label}</span>
                      <span className="font-headline text-xl font-black text-on-surface tracking-tight">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. VALUE PROPOSITIONS ───────────────────────────── */}
        <section className="relative z-10 section-container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {valueProps.map((v) => (
              <div key={v.title} className="group">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center metallic-edge mb-8 group-hover:bg-surface-container-highest transition-colors">
                  <span className="text-primary text-lg">◆</span>
                </div>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-5">
                  {v.title}
                </h3>
                <p className="body-text leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. RWA + AI CALLOUT ─────────────────────────────── */}
        <section className="relative z-10 section-container pb-40">
          <div className="bg-gradient-to-br from-primary-container/15 to-secondary-container/15 rounded-3xl p-px metallic-edge">
            <div className="bg-surface-container-low rounded-3xl p-12 md:p-20 flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <h2 className="heading-display text-[clamp(2.5rem,5vw,4rem)] text-on-surface mb-10">
                  The Convergence<br />
                  of <span className="text-primary">RWA</span> &{' '}
                  <span className="text-secondary">AI</span>
                </h2>
                <p className="font-body text-lg text-on-surface-variant font-light leading-relaxed mb-12">
                  Our automated settlement layer uses proprietary AI to navigate complex
                  regulatory requirements, while our tokenization engine brings deep
                  liquidity to off-chain LATAM assets.
                </p>
                <ul className="space-y-6">
                  {[
                    'Automated Regulatory Compliance Matching',
                    'Predictive Liquidity Flow Analysis',
                    'On-chain Real-world Asset Provenance',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <span className="text-primary text-lg flex-shrink-0">✓</span>
                      <span className="font-label font-bold text-sm tracking-wide text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 flex flex-wrap gap-4">
                  <a
                    href="https://loans.convexo.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Access Platform
                  </a>
                  <Link href="/about" className="btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Stats card */}
              <div className="md:w-1/2 w-full">
                <div className="glass-panel rounded-2xl p-10 metallic-edge">
                  <p className="label-institutional text-primary mb-8">Protocol Metrics</p>
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { label: 'LATAM Credit Gap',   value: '$2.5T' },
                      { label: 'Credit Constrained', value: '67%' },
                      { label: 'Interest Reduction', value: '80%+' },
                      { label: 'Active Countries',   value: '20' },
                    ].map((s) => (
                      <div key={s.label} className="p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                        <span className="label-institutional block mb-2">{s.label}</span>
                        <span className="font-headline text-2xl font-black text-on-surface">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
