import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ETH Fund Convexo | Convexo Protocol',
  description: 'Institutional Ethereum yield fund. Active yield optimization for large-scale ETH positions. Coming soon.',
};

export default function EthFundPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative z-10 section-container pt-28 pb-32 flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="chip">Coming Soon</span>
            <span className="chip">fund.convexo.xyz</span>
          </div>
          <h1 className="heading-display text-[clamp(3rem,8vw,6rem)] text-on-surface mb-8 max-w-3xl">
            ETH Fund<br />
            <span className="text-primary">Convexo</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-14">
            Institutional-grade Ethereum yield fund. Active yield optimization
            for large-scale ETH positions using proprietary institutional-grade vaults
            and AI-driven strategies.
          </p>

          {/* Waitlist CTA */}
          <div className="glass-panel rounded-2xl p-10 metallic-edge max-w-xl w-full">
            <p className="label-institutional text-primary mb-6">Join the Waitlist</p>
            <p className="body-text mb-8">
              Be among the first institutional clients to access Convexo&apos;s ETH Fund
              when it launches. Early access for Tier 2+ verified accounts.
            </p>
            <a
              href="https://t.me/convexoprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              Get Early Access
            </a>
          </div>
        </section>

        {/* ── WHAT TO EXPECT ───────────────────────────────────── */}
        <section className="relative z-10 w-full bg-surface-container-low py-32">
          <div className="section-container">
            <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
              <span className="section-rule" />
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Active Yield Strategies',    desc: 'Proprietary AI models optimize yield across ETH staking, lending protocols, and liquidity provision.' },
                { title: 'Institutional Custody',      desc: 'ETH positions secured via Safe multi-sig and HashKey institutional custody infrastructure.' },
                { title: 'Transparent Reporting',      desc: 'Real-time on-chain performance reporting. Full auditability of all vault positions and strategies.' },
              ].map((f) => (
                <div key={f.title} className="p-10 bg-surface-container-highest rounded-xl metallic-edge">
                  <h3 className="font-headline text-base font-black uppercase tracking-tight text-on-surface mb-4">{f.title}</h3>
                  <p className="body-text leading-relaxed">{f.desc}</p>
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
