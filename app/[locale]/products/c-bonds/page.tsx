import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tokenized C-Bonds | Convexo Protocol',
  description: 'On-chain corporate credit bonds for LATAM SMEs. Lenders earn 12%+ APY. Built on EIP-4626 with AI credit scoring.',
};

export default async function CBondsPage() {
  const t = await getTranslations('cbonds');

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-secondary/6 rounded-full blur-[120px] pointer-events-none" />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative z-10 section-container pt-28 pb-24">
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="chip">{t('tagLive')}</span>
            <span className="chip">{t('tagApp')}</span>
          </div>
          <h1 className="heading-display text-[clamp(3rem,8vw,6rem)] text-on-surface mb-8 max-w-3xl">
            {t('heroTitle')}<br />
            <span className="text-secondary">{t('heroTitleHighlight')}</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-14">
            {t('heroDesc')}
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="https://protocol.convexo.xyz" target="_blank" rel="noopener noreferrer" className="btn-primary px-10 py-4">
              {t('openApp')}
            </a>
            <a href="https://t.me/convexoprotocol" target="_blank" rel="noopener noreferrer" className="btn-secondary px-10 py-4">
              {t('learnMore')}
            </a>
          </div>
        </section>

        {/* ── KPI BAR ──────────────────────────────────────────── */}
        <section className="relative z-10 w-full bg-surface-container-lowest border-y border-outline-variant/10 py-14">
          <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '12%+',    label: t('kpiApy') },
              { value: '$2.5T',   label: t('kpiGap') },
              { value: '67%',     label: t('kpiConstrained') },
              { value: '15–25%',  label: t('kpiRates') },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span className="font-headline text-2xl font-black text-secondary tracking-tight">{s.value}</span>
                <span className="label-institutional">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <section className="relative z-10 section-container section-padding">
          <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
            <span className="section-rule" />
            {t('howTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lender side */}
            <div className="p-12 bg-surface-container-high rounded-xl metallic-edge">
              <span className="label-institutional text-primary block mb-6">{t('lendersLabel')}</span>
              <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-6">{t('lendersTitle')}</h3>
              <div className="space-y-4">
                {(['lenderStep1','lenderStep2','lenderStep3','lenderStep4'] as const).map((key, i) => (
                  <div key={key} className="flex gap-4 items-start">
                    <span className="label-institutional text-primary flex-shrink-0 mt-0.5">0{i + 1}</span>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">{t(key)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Borrower side */}
            <div className="p-12 bg-surface-container-high rounded-xl metallic-edge">
              <span className="label-institutional text-secondary block mb-6">{t('borrowersLabel')}</span>
              <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-6">{t('borrowersTitle')}</h3>
              <div className="space-y-4">
                {(['borrowerStep1','borrowerStep2','borrowerStep3','borrowerStep4'] as const).map((key, i) => (
                  <div key={key} className="flex gap-4 items-start">
                    <span className="label-institutional text-secondary flex-shrink-0 mt-0.5">0{i + 1}</span>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">{t(key)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TECHNOLOGY ───────────────────────────────────────── */}
        <section className="relative z-10 w-full bg-surface-container-low py-32">
          <div className="section-container">
            <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
              <span className="section-rule" />
              {t('builtOnTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: t('tech1Title'), desc: t('tech1Desc') },
                { title: t('tech2Title'), desc: t('tech2Desc') },
                { title: t('tech3Title'), desc: t('tech3Desc') },
              ].map((item) => (
                <div key={item.title} className="p-10 bg-surface-container-highest rounded-xl metallic-edge hover:bg-surface-variant transition-all">
                  <h3 className="font-headline text-base font-black uppercase tracking-tight text-on-surface mb-4">{item.title}</h3>
                  <p className="body-text leading-relaxed">{item.desc}</p>
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
