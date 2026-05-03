import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Payments Convexo | Convexo Protocol',
  description: 'Institutional cross-border payments, international collections, and OTC agentic channels powered by Convexo Protocol.',
};

export default async function PaymentsPage() {
  const t = await getTranslations('payments');

  const channels = [
    {
      title: t('ch1Title'), tag: t('ch1Tag'), desc: t('ch1Desc'),
      stats: [{ label: t('ch1Stat1'), value: '~15 min' }, { label: t('ch1Stat2'), value: '24/7/365' }],
    },
    {
      title: t('ch2Title'), tag: t('ch2Tag'), desc: t('ch2Desc'),
      stats: [{ label: t('ch2Stat1'), value: '20+' }, { label: t('ch2Stat2'), value: '80%+' }],
    },
    {
      title: t('ch3Title'), tag: t('ch3Tag'), desc: t('ch3Desc'),
      stats: [{ label: t('ch3Stat1'), value: '1.5%' }, { label: t('ch3Stat2'), value: '$10k' }],
    },
    {
      title: t('ch4Title'), tag: t('ch4Tag'), desc: t('ch4Desc'),
      stats: [{ label: t('ch4Stat1'), value: '0.3%' }, { label: t('ch4Stat2'), value: 'Uniswap V4' }],
    },
    {
      title: t('ch5Title'), tag: t('ch5Tag'), desc: t('ch5Desc'),
      stats: [{ label: t('ch5Stat1'), value: 'CCIP' }, { label: t('ch5Stat2'), value: '<10 min' }],
    },
  ];

  const steps = [
    { step: '01', title: t('step1Title'), desc: t('step1Desc') },
    { step: '02', title: t('step2Title'), desc: t('step2Desc') },
    { step: '03', title: t('step3Title'), desc: t('step3Desc') },
    { step: '04', title: t('step4Title'), desc: t('step4Desc') },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative z-10 section-container pt-28 pb-24">
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="chip">{t('tagLive')}</span>
            <span className="chip">{t('tagApp')}</span>
          </div>
          <h1 className="heading-display text-[clamp(3rem,8vw,6rem)] text-on-surface mb-8 max-w-3xl">
            {t('heroTitle')}<br />
            <span className="text-primary">{t('heroTitleHighlight')}</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-14">
            {t('heroDesc')}
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="https://pay.convexo.xyz" target="_blank" rel="noopener noreferrer" className="btn-primary px-10 py-4">
              {t('openApp')}
            </a>
            <a href="https://t.me/convexoprotocol" target="_blank" rel="noopener noreferrer" className="btn-secondary px-10 py-4">
              {t('contactOtc')}
            </a>
          </div>
        </section>

        {/* ── KPI BAR ──────────────────────────────────────────── */}
        <section className="relative z-10 w-full bg-surface-container-lowest border-y border-outline-variant/10 py-14">
          <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '+3MM USD', label: t('kpiVolume') },
              { value: '~15 min',  label: t('kpiSettlement') },
              { value: '20',       label: t('kpiCountries') },
              { value: '80%+',     label: t('kpiSavings') },
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
            {t('channelsTitle')}
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
              {t('howTitle')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map((s) => (
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
