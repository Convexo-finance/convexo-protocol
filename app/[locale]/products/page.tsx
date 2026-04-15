import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Products | Convexo Protocol',
  description: 'The full Convexo Protocol product suite — institutional DeFi products for Latin America.',
};

const products = [
  {
    name: 'Payments Convexo',
    href: '/products/payments',
    appUrl: 'pay.convexo.xyz',
    appHref: 'https://pay.convexo.xyz',
    status: 'Live',
    desc: 'Institutional settlement layer for cross-border payments, international collections, and OTC agentic channels.',
    highlights: ['International payments to China & beyond', 'Collections from global clients', 'OTC Agentic channels with AI routing', '1.5% OTC spread / 0.3% DEX spread'],
    accent: 'primary',
    size: 'large',
  },
  {
    name: 'Tokenized C-Bonds',
    href: '/products/c-bonds',
    appUrl: 'protocol.convexo.xyz',
    appHref: 'https://protocol.convexo.xyz',
    status: 'Live',
    desc: 'On-chain corporate credit bonds for LATAM SMEs. Lenders earn 12%+ APY. Borrowers access affordable institutional capital.',
    highlights: ['12%+ APY for lenders', 'EIP-4626 vault standard', 'AI credit scoring (Tier 3)', 'Legally binding E-Contracts'],
    accent: 'secondary',
    size: 'normal',
  },
  {
    name: 'Real Estate Vaults',
    href: '/products/real-estate',
    appUrl: 'realstate.convexo.xyz',
    appHref: 'https://realstate.convexo.xyz',
    status: 'Soon',
    desc: 'Tokenized fractional ownership of LATAM commercial and residential real estate. 18% Annual APY, 70% projected 5-year return.',
    highlights: ['18% Annual APY', '70% 5-year projected return', 'ERC-7540 async vault standard', 'Commercial, residential, mixed-use'],
    accent: 'tertiary',
    size: 'normal',
  },
  {
    name: 'ETH Fund Convexo',
    href: '/products/eth-fund',
    appUrl: 'fund.convexo.xyz',
    appHref: 'https://fund.convexo.xyz',
    status: 'Soon',
    desc: 'Institutional-grade Ethereum yield fund. Active yield optimization for large-scale ETH positions using proprietary vaults.',
    highlights: ['Institutional ETH exposure', 'Active yield optimization', 'Proprietary vault strategies', 'Requires Tier 2 identity'],
    accent: 'primary',
    size: 'normal',
  },
  {
    name: 'P2P AI',
    href: '/products/p2p',
    appUrl: 'p2p.convexo.xyz',
    appHref: 'https://p2p.convexo.xyz',
    status: 'Soon',
    desc: 'AI-powered peer-to-peer payment system with on-chain arbitration across LATAM currencies. 0.1% commission.',
    highlights: ['AI agent arbitrator', 'ERC-8004 reputation system', '0.1% commission', 'COP, ARS, MXN, BRL, CLP, PEN'],
    accent: 'secondary',
    size: 'normal',
  },
];

export default function ProductsHubPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Background */}
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-secondary/6 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/4" />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative z-10 section-container pt-28 pb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-container/30 border border-primary/20 rounded-sm mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="label-institutional text-primary">5 Products · 2 Live</span>
          </div>
          <h1 className="heading-display text-[clamp(3rem,8vw,6rem)] text-on-surface mb-8 max-w-3xl">
            Product<br />
            <span className="text-primary">Ecosystem</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant font-light leading-relaxed max-w-2xl">
            Institutional-grade DeFi products for LATAM capital markets. Each product
            operates on its own subdomain and is accessible via the Convexo Protocol
            identity stack.
          </p>
        </section>

        {/* ── PRODUCTS GRID ────────────────────────────────────── */}
        <section className="relative z-10 section-container pb-40">
          <div className="space-y-6">
            {products.map((p) => (
              <div
                key={p.name}
                className={`group grid grid-cols-1 lg:grid-cols-12 rounded-xl metallic-edge overflow-hidden transition-all duration-300 ${
                  p.status === 'Soon'
                    ? 'bg-surface-container-high opacity-70 hover:opacity-100'
                    : 'bg-surface-container-highest hover:bg-surface-variant'
                }`}
              >
                {/* Left — info */}
                <div className="lg:col-span-7 p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${
                        p.status === 'Live'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-outline-variant/30 text-on-surface/40'
                      }`}>
                        {p.status}
                      </span>
                      <span className="label-institutional text-on-surface/30">{p.appUrl}</span>
                    </div>
                    <h2 className="font-headline text-2xl md:text-3xl font-black uppercase tracking-tight text-on-surface mb-5 group-hover:text-primary transition-colors">
                      {p.name}
                    </h2>
                    <p className="body-text text-base leading-relaxed max-w-xl">{p.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-10">
                    <Link href={p.href} className="btn-primary py-3">
                      Learn More
                    </Link>
                    {p.status === 'Live' && (
                      <a
                        href={p.appHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary py-3"
                      >
                        Open App ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Right — highlights */}
                <div className="lg:col-span-5 p-10 lg:p-12 bg-surface-container-lowest/50 border-t lg:border-t-0 lg:border-l border-outline-variant/10">
                  <span className="label-institutional text-primary block mb-6">Key Features</span>
                  <ul className="space-y-4">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span className="text-primary mt-0.5 flex-shrink-0">◆</span>
                        <span className="font-body text-sm text-on-surface-variant leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
