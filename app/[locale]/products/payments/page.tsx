import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Payments Convexo | Convexo Protocol',
  description: 'Institutional cross-border payments, international collections, and OTC agentic channels powered by Convexo Protocol.',
};

const channels = [
  {
    title: 'International Payments',
    tag: 'Outbound',
    desc: 'Send payments to international providers, including China and other high-friction corridors. Settle in minutes, not days.',
    stats: [{ label: 'Settlement', value: '~15 min' }, { label: 'Availability', value: '24/7/365' }],
  },
  {
    title: 'International Collections',
    tag: 'Inbound',
    desc: 'Receive funds from global clients into your Convexo account. Convert to stablecoins or local currency instantly.',
    stats: [{ label: 'Countries', value: '20+' }, { label: 'Cost Savings', value: '80%+' }],
  },
  {
    title: 'OTC Agentic Orders',
    tag: '1.5% Spread',
    desc: 'AI-driven OTC desk. Place large-block orders through Telegram, WhatsApp, or Signal. Agents execute with institutional precision.',
    stats: [{ label: 'Spread', value: '1.5%' }, { label: 'Min Size', value: '$10k' }],
  },
  {
    title: 'Uniswap V4 Swaps',
    tag: '0.3% Spread',
    desc: 'Swap directly through private persistent Uniswap V4 liquidity pools. Lower spread, deeper liquidity, fully on-chain.',
    stats: [{ label: 'Spread', value: '0.3%' }, { label: 'Protocol', value: 'Uniswap V4' }],
  },
  {
    title: 'Stablecoin Monetization',
    tag: 'Cross-Chain',
    desc: 'Convert and move stablecoins cross-chain via Chainlink CCIP. ECOP, USDC, and more — seamless interoperability.',
    stats: [{ label: 'Bridge', value: 'CCIP' }, { label: 'Latency', value: '<10 min' }],
  },
];

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative z-10 section-container pt-28 pb-24">
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="chip">Live</span>
            <span className="chip">pay.convexo.xyz</span>
          </div>
          <h1 className="heading-display text-[clamp(3rem,8vw,6rem)] text-on-surface mb-8 max-w-3xl">
            Payments<br />
            <span className="text-primary">Convexo</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-14">
            Institutional settlement infrastructure for cross-border payments. Send,
            receive, and trade digital assets across 20 countries with AI-powered
            execution and compliance baked in.
          </p>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://pay.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4"
            >
              Open App
            </a>
            <a
              href="https://t.me/convexoprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-10 py-4"
            >
              Contact OTC Desk
            </a>
          </div>
        </section>

        {/* ── KPI BAR ──────────────────────────────────────────── */}
        <section className="relative z-10 w-full bg-surface-container-lowest border-y border-outline-variant/10 py-14">
          <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '+3MM USD', label: 'Volume Settled' },
              { value: '~15 min',  label: 'Settlement Time' },
              { value: '20',       label: 'Countries' },
              { value: '80%+',     label: 'Cost Savings' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span className="font-headline text-2xl font-black text-primary tracking-tight">{s.value}</span>
                <span className="label-institutional">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CHANNELS ─────────────────────────────────────────── */}
        <section className="relative z-10 section-container section-padding">
          <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
            <span className="section-rule" />
            Payment Channels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {channels.map((c) => (
              <div key={c.title} className="group p-10 bg-surface-container-high rounded-xl metallic-edge hover:bg-surface-container-highest transition-all duration-300 flex flex-col gap-6">
                <div>
                  <span className="chip mb-4 inline-block">{c.tag}</span>
                  <h3 className="font-headline text-lg font-black uppercase tracking-tight text-on-surface mb-4 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="body-text leading-relaxed">{c.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {c.stats.map((s) => (
                    <div key={s.label} className="p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
                      <span className="label-institutional block mb-1">{s.label}</span>
                      <span className="font-headline text-lg font-black text-on-surface">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <section className="relative z-10 w-full bg-surface-container-low py-32">
          <div className="section-container">
            <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
              <span className="section-rule" />
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Verify Identity',  desc: 'Complete Digital ID Tier 1 or Tier 2 to access payment rails.' },
                { step: '02', title: 'Fund Your Account', desc: 'Deposit via OTC, DEX swap, or direct stablecoin transfer.' },
                { step: '03', title: 'Execute',          desc: 'Initiate payments via app, Telegram bot, or API.' },
                { step: '04', title: 'Settle',           desc: 'Funds arrive in ~15 minutes. Receive confirmation on-chain.' },
              ].map((s) => (
                <div key={s.step} className="p-8 bg-surface-container-highest rounded-xl metallic-edge">
                  <span className="label-institutional text-primary block mb-4">{s.step}</span>
                  <h3 className="font-headline text-base font-black uppercase tracking-tight text-on-surface mb-3">{s.title}</h3>
                  <p className="body-text text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
