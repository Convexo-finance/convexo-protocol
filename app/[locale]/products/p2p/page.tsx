import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'P2P AI | Convexo Protocol',
  description: 'AI-powered peer-to-peer payment system with on-chain arbitration across LATAM currencies. 0.1% commission. Coming soon.',
};

const currencies = ['COP', 'ARS', 'MXN', 'BRL', 'CLP', 'PEN'];

export default async function P2PAIPage() {
  const t = await getTranslations('p2p');

  const steps = [
    { step: '01', title: t('step1Title'), desc: t('step1Desc') },
    { step: '02', title: t('step2Title'), desc: t('step2Desc') },
    { step: '03', title: t('step3Title'), desc: t('step3Desc') },
    { step: '04', title: t('step4Title'), desc: t('step4Desc') },
    { step: '05', title: t('step5Title'), desc: t('step5Desc') },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-secondary/6 rounded-full blur-[120px] pointer-events-none" />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative z-10 section-container pt-28 pb-24">
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="chip">{t('tagSoon')}</span>
            <span className="chip">{t('tagApp')}</span>
            <span className="chip">{t('tagAi')}</span>
          </div>
          <h1 className="heading-display text-[clamp(3rem,8vw,6rem)] text-on-surface mb-8 max-w-3xl">
            {t('heroTitle')}<br />
            <span className="text-secondary">{t('heroTitleHighlight')}</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-14">
            {t('heroDesc')}
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="https://t.me/convexoprotocol" target="_blank" rel="noopener noreferrer" className="btn-primary px-10 py-4">
              {t('joinWaitlist')}
            </a>
            <a href="https://t.me/convexobot" target="_blank" rel="noopener noreferrer" className="btn-secondary px-10 py-4">
              {t('botLabel')}
            </a>
          </div>
        </section>

        {/* ── KPI BAR ──────────────────────────────────────────── */}
        <section className="relative z-10 w-full bg-surface-container-lowest border-y border-outline-variant/10 py-14">
          <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '0.1%',     label: t('kpiCommission') },
              { value: 'ERC-8004', label: t('kpiReputation') },
              { value: '6',        label: t('kpiCurrencies') },
              { value: 'AI Agent', label: t('kpiArbitration') },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span className="font-headline text-2xl font-black text-secondary tracking-tight">{s.value}</span>
                <span className="label-institutional">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SUPPORTED CURRENCIES ─────────────────────────────── */}
        <section className="relative z-10 section-container pt-24 pb-8">
          <h2 className="heading-lg text-2xl mb-12 flex items-center gap-6">
            <span className="section-rule" />
            {t('currenciesTitle')}
          </h2>
          <div className="flex flex-wrap gap-4">
            {currencies.map((c) => (
              <div key={c} className="px-6 py-4 bg-surface-container-high rounded-xl metallic-edge">
                <span className="font-headline text-xl font-black text-secondary tracking-tight">{c}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5-STEP FLOW ──────────────────────────────────────── */}
        <section className="relative z-10 section-container section-padding">
          <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
            <span className="section-rule" />
            {t('howTitle')}
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent hidden md:block" />
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center metallic-edge z-10 group-hover:bg-surface-variant transition-all">
                    <span className="label-institutional text-primary">{s.step}</span>
                  </div>
                  <div className="flex-1 p-8 bg-surface-container-high rounded-xl metallic-edge group-hover:bg-surface-container-highest transition-all">
                    <h3 className="font-headline text-base font-black uppercase tracking-tight text-on-surface mb-3 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="body-text leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REPUTATION ───────────────────────────────────────── */}
        <section className="relative z-10 w-full bg-surface-container-low py-24">
          <div className="section-container">
            <div className="glass-panel rounded-2xl p-12 metallic-edge max-w-2xl">
              <p className="label-institutional text-secondary block mb-6">{t('reputationLabel')}</p>
              <h3 className="font-headline text-2xl font-black uppercase tracking-tight text-on-surface mb-5">
                {t('reputationTitle')}
              </h3>
              <p className="body-text leading-relaxed">{t('reputationDesc')}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
