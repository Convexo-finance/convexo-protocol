import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Technology | Convexo Protocol',
  description: 'The sovereign technology stack powering Convexo Protocol — Digital IDs, Stablecoins, Vaults, OTC Agentic Channels, and 10 trusted infrastructure providers.',
};

const ownTech = [
  {
    id: 'digital-ids',
    label: '01',
    title: 'Digital Identity System',
    subtitle: 'zkPassport · Sumsub · Veriff',
    desc: 'A 3-tier identity infrastructure that balances privacy with compliance. From zero-knowledge anonymous verification to full enterprise KYB.',
    tiers: [
      { tier: 'Tier 1', name: 'zkPassport + OpenSanctions', detail: 'Privacy-preserving. No document upload required.' },
      { tier: 'Tier 2', name: 'Veriff / Sumsub', detail: 'Full KYC for individuals and enterprises.' },
      { tier: 'Tier 3', name: 'AI Credit Scoring', detail: 'E-Credit assessment. Unlocks Tokenized C-Bonds.' },
    ],
    accent: 'primary',
  },
  {
    id: 'stablecoins',
    label: '02',
    title: 'Local Stablecoins',
    subtitle: 'ECOP · Chainlink CCIP · Proof of Reserves',
    desc: 'LATAM-native stablecoins pegged to regional currencies. Fully collateral-backed with on-chain proof of reserves and cross-chain interoperability.',
    tiers: [
      { tier: 'ECOP', name: 'Colombian Peso Stablecoin', detail: 'USD/COP data feeds via Google Finance API.' },
      { tier: 'CCIP', name: 'Chainlink Cross-Chain', detail: 'Seamless cross-chain transfers and bridging.' },
      { tier: 'Reserves', name: 'Proof of Reserves', detail: 'Real-time on-chain collateral verification.' },
    ],
    accent: 'secondary',
  },
  {
    id: 'vaults',
    label: '03',
    title: 'EIP-4626 Vaults',
    subtitle: 'Yield Infrastructure · Tokenized Assets',
    desc: 'Standardized vault infrastructure powering all yield-bearing products. EIP-4626 ensures composability, transparency, and institutional-grade security.',
    tiers: [
      { tier: 'C-Bonds', name: 'Tokenized Credit Bonds', detail: '12%+ APY for lenders.' },
      { tier: 'Real Estate', name: 'Property Vaults', detail: '18% Annual APY via RWA tokenization.' },
      { tier: 'ETH Fund', name: 'Ethereum Yield', detail: 'Institutional-grade ETH exposure.' },
    ],
    accent: 'tertiary',
  },
  {
    id: 'otc',
    label: '04',
    title: 'OTC Agentic Channels',
    subtitle: 'AI-Driven · 24/7 · Multi-Channel',
    desc: 'AI-powered over-the-counter order routing and execution. Autonomous agents handle large-block trades across Telegram, WhatsApp, Signal, and DEX liquidity pools.',
    tiers: [
      { tier: 'OTC',  name: 'Direct OTC Orders', detail: '1.5% spread. Via Telegram/WhatsApp/Signal.' },
      { tier: 'DEX',  name: 'Uniswap V4 Swaps', detail: '0.3% spread. Private persistent pools.' },
      { tier: 'CCIP', name: 'Stablecoin Monetization', detail: 'Cross-chain via Chainlink CCIP.' },
    ],
    accent: 'primary',
  },
];

const providers = [
  { name: 'Chainlink',    category: 'Oracles & CCIP',         logo: '/providers/chainlink.png' },
  { name: 'Uniswap',     category: 'Decentralized Exchange',  logo: '/providers/uniswap.png' },
  { name: 'Sumsub',      category: 'KYB / Compliance',        logo: '/providers/sumsub.jpg' },
  { name: 'Veriff',      category: 'Identity Verification',   logo: '/providers/verifffondoblanco.png' },
  { name: 'zkPassport',  category: 'Privacy Identity',        logo: '/providers/zkpassportid.png' },
  { name: 'Safe',        category: 'Institutional Custody',   logo: '/providers/safe_logo.png' },
  { name: 'Circle USDC', category: 'Stablecoins',             logo: '/providers/acceptusdc.png' },
  { name: 'CoinGecko',   category: 'Price Oracles',           logo: '/providers/CoinGecko.png' },
  { name: 'HashKey',     category: 'Institutional Custody',   logo: '/providers/hashkey_logo.png' },
  { name: 'OKX',         category: 'Liquidity',               logo: '/providers/okx_logo.png' },
];

const chains = ['Ethereum', 'Base', 'UniChain'];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-36 overflow-hidden">
          <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 text-center max-w-4xl">
            {/* Chain badges */}
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {[
                { name: 'Ethereum', logo: '/providers/chains/ethereum.png' },
                { name: 'Base',     logo: '/providers/chains/base_logo.svg' },
                { name: 'UniChain', logo: '/providers/chains/unichain.png' },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-2 px-4 py-1.5 bg-surface-container-highest metallic-edge">
                  <Image src={c.logo} alt={c.name} width={16} height={16} className="w-4 h-4 object-contain" />
                  <span className="text-secondary label-institutional">{c.name}</span>
                </div>
              ))}
            </div>
            <h1 className="heading-display text-[clamp(3rem,8vw,6rem)] text-on-surface mb-8">
              Sovereign<br />
              <span className="text-primary">Tech</span> Stack
            </h1>
            <p className="font-body text-lg text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto">
              Purpose-built primitives and best-in-class infrastructure providers,
              working together to deliver institutional-grade DeFi infrastructure
              across Latin America.
            </p>
          </div>
        </section>

        {/* ── OUR TECHNOLOGY ───────────────────────────────────── */}
        <section id="our-technology" className="section-container section-padding">
          <h2 className="heading-lg text-2xl mb-6 flex items-center gap-6">
            <span className="section-rule" />
            Our Technology
          </h2>
          <p className="body-text text-base max-w-2xl mb-20">
            Four core primitives built and owned by Convexo Protocol — the foundation
            powering every product in the ecosystem.
          </p>

          <div className="space-y-8">
            {ownTech.map((t) => (
              <div key={t.id} className="group grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface-container-high rounded-xl metallic-edge overflow-hidden hover:bg-surface-container-highest transition-all duration-300">
                {/* Left — label + title */}
                <div className="lg:col-span-4 p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-outline-variant/10">
                  <div>
                    <span className="label-institutional text-primary block mb-4">{t.label}</span>
                    <h3 className="font-headline text-2xl font-black uppercase tracking-tight text-on-surface mb-3 group-hover:text-primary transition-colors">
                      {t.title}
                    </h3>
                    <p className="font-body text-xs text-on-surface-variant font-light">{t.subtitle}</p>
                  </div>
                  <p className="body-text leading-relaxed mt-8 hidden lg:block">{t.desc}</p>
                </div>

                {/* Right — tier details */}
                <div className="lg:col-span-8 p-10 lg:p-12">
                  <p className="body-text leading-relaxed mb-8 lg:hidden">{t.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {t.tiers.map((tier) => (
                      <div key={tier.tier} className="p-5 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
                        <span className="label-institutional text-primary block mb-2">{tier.tier}</span>
                        <p className="font-label text-xs font-bold text-on-surface mb-2 uppercase tracking-tight">{tier.name}</p>
                        <p className="font-body text-[11px] text-on-surface-variant leading-relaxed">{tier.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── INFRASTRUCTURE PROVIDERS ─────────────────────────── */}
        <section id="providers" className="w-full bg-surface-container-low py-32">
          <div className="section-container">
            <h2 className="heading-lg text-2xl mb-6 flex items-center gap-6">
              <span className="section-rule" />
              Infrastructure Providers
            </h2>
            <p className="body-text text-base max-w-2xl mb-20">
              10 best-in-class protocols powering the Convexo stack. Each selected for
              institutional-grade security, reliability, and LATAM compatibility.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {providers.map((p) => (
                <div
                  key={p.name}
                  className="group flex flex-col items-center gap-4 p-8 bg-surface-container-highest rounded-xl metallic-edge hover:bg-surface-variant transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 bg-surface-container-lowest rounded-lg flex items-center justify-center metallic-edge overflow-hidden">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={40}
                      height={40}
                      className="w-9 h-9 object-contain"
                      onError={undefined}
                    />
                  </div>
                  <div>
                    <p className="font-label text-xs font-bold text-on-surface group-hover:text-primary transition-colors uppercase tracking-tight">
                      {p.name}
                    </p>
                    <p className="font-body text-[10px] text-on-surface-variant mt-1">{p.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARCHITECTURE PILLARS ─────────────────────────────── */}
        <section className="section-container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Security',    desc: 'Multi-sig custody via Safe, zero-knowledge proofs via zkPassport, and continuous smart contract auditing across all vaults and protocol layers.' },
              { title: 'Compliance',  desc: 'KYC/AML embedded at protocol level. 3-tier Digital ID system meets regulatory requirements across 20 LATAM jurisdictions.' },
              { title: 'Performance', desc: 'Built on Base L2 and Ethereum Mainnet for optimal throughput. ~15 minute settlement times. 99.9% uptime across the network.' },
            ].map((a) => (
              <div key={a.title} className="p-10 bg-surface-container-high rounded-xl metallic-edge hover:bg-surface-container-highest transition-all">
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-5">{a.title}</h3>
                <p className="body-text leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
