import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Real Estate Vaults | Convexo Protocol',
  description: 'Tokenized fractional real estate investment in LATAM. 18% Annual APY. Powered by ERC-7540 async vaults.',
};

export default async function RealEstatePage() {
  const t = await getTranslations('realEstate');

  const propertyTypes = [
    { typeKey: 'prop1Type', descKey: 'prop1Desc' },
    { typeKey: 'prop2Type', descKey: 'prop2Desc' },
    { typeKey: 'prop3Type', descKey: 'prop3Desc' },
  ];

  const steps = [
    { step: '01', titleKey: 'step1Title', descKey: 'step1Desc' },
    { step: '02', titleKey: 'step2Title', descKey: 'step2Desc' },
    { step: '03', titleKey: 'step3Title', descKey: 'step3Desc' },
    { step: '04', titleKey: 'step4Title', descKey: 'step4Desc' },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-tertiary/6 rounded-full blur-[140px] pointer-events-none translate-x-1/3" />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative z-10 section-container pt-28 pb-24">
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="chip">{t('tagSoon')}</span>
            <span className="chip">{t('tagApp')}</span>
            <span className="chip">{t('tagRwa')}</span>
          </div>
          <h1 className="heading-display text-[clamp(3rem,8vw,6rem)] text-on-surface mb-8 max-w-3xl">
            {t('heroTitle')}<br />
            <span className="text-tertiary">{t('heroTitleHighlight')}</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-14">
            {t('heroDesc')}
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="https://t.me/convexoprotocol" target="_blank" rel="noopener noreferrer" className="btn-primary px-10 py-4">
              {t('inquiry')}
            </a>
          </div>
        </section>

        {/* ── KPI BAR ──────────────────────────────────────────── */}
        <section className="relative z-10 w-full bg-surface-container-lowest border-y border-outline-variant/10 py-14">
          <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '18%',      label: t('kpiApy') },
              { value: '70%',      label: t('kpiFiveYear') },
              { value: 'Tier 2',   label: t('kpiIdentity') },
              { value: 'ERC-7540', label: t('kpiStandard') },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span className="font-headline text-2xl font-black text-tertiary tracking-tight">{s.value}</span>
                <span className="label-institutional">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROPERTY TYPES ───────────────────────────────────── */}
        <section className="relative z-10 section-container section-padding">
          <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
            <span className="section-rule" />
            {t('propertyTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {propertyTypes.map((p) => (
              <div key={p.typeKey} className="group p-10 bg-surface-container-high rounded-xl metallic-edge hover:bg-surface-container-highest transition-all">
                <h3 className="font-headline text-lg font-black uppercase tracking-tight text-on-surface mb-4 group-hover:text-tertiary transition-colors">
                  {t(p.typeKey as Parameters<typeof t>[0])}
                </h3>
                <p className="body-text leading-relaxed">{t(p.descKey as Parameters<typeof t>[0])}</p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <h2 className="heading-lg text-2xl mb-12 flex items-center gap-6">
            <span className="section-rule" />
            {t('howTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.step} className="p-8 bg-surface-container-highest rounded-xl metallic-edge">
                <span className="label-institutional text-tertiary block mb-4">{s.step}</span>
                <h3 className="font-headline text-sm font-black uppercase tracking-tight text-on-surface mb-3">
                  {t(s.titleKey as Parameters<typeof t>[0])}
                </h3>
                <p className="body-text text-xs leading-relaxed">
                  {t(s.descKey as Parameters<typeof t>[0])}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
