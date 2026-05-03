import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About | Convexo Protocol',
  description: 'Learn about Convexo Protocol — institutional DeFi infrastructure for Latin America.',
};

export default async function AboutPage() {
  const t = await getTranslations('about');

  const values = [
    { label: '01', titleKey: 'value1Title', descKey: 'value1Desc' },
    { label: '02', titleKey: 'value2Title', descKey: 'value2Desc' },
    { label: '03', titleKey: 'value3Title', descKey: 'value3Desc' },
    { label: '04', titleKey: 'value4Title', descKey: 'value4Desc' },
    { label: '05', titleKey: 'value5Title', descKey: 'value5Desc' },
    { label: '06', titleKey: 'value6Title', descKey: 'value6Desc' },
  ];

  const pillars = [
    { titleKey: 'pillar1Title', descKey: 'pillar1Desc' },
    { titleKey: 'pillar2Title', descKey: 'pillar2Desc' },
    { titleKey: 'pillar3Title', descKey: 'pillar3Desc' },
  ];

  const locations = [
    { cityKey: 'loc1City', countryKey: 'loc1Country', regionKey: 'loc1Region' },
    { cityKey: 'loc2City', countryKey: 'loc2Country', regionKey: 'loc2Region' },
    { cityKey: 'loc3City', countryKey: 'loc3Country', regionKey: 'loc3Region' },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Radial glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-secondary/8 rounded-full blur-[140px] pointer-events-none" />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden py-32">
          <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none" />
          <div className="relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-container/30 border border-primary/20 rounded-sm mb-10">
              <span className="label-institutional text-primary">{t('badge')}</span>
            </div>
            <h1 className="heading-display text-[clamp(3rem,8vw,6rem)] text-on-surface mb-8">
              {t('heroTitle')}<br />
              <span className="text-primary">{t('heroTitleHighlight')}</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto">
              {t('heroDesc')}
            </p>
          </div>
        </section>

        {/* ── MISSION & VISION ─────────────────────────────────── */}
        <section className="section-container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-high p-12 rounded-xl metallic-edge">
              <span className="label-institutional text-primary block mb-6">{t('missionLabel')}</span>
              <h2 className="font-headline text-2xl font-black uppercase tracking-tight text-on-surface mb-6">
                {t('missionTitle')}
              </h2>
              <p className="body-text leading-relaxed">{t('missionDesc')}</p>
            </div>
            <div className="bg-surface-container-high p-12 rounded-xl metallic-edge">
              <span className="label-institutional text-secondary block mb-6">{t('visionLabel')}</span>
              <h2 className="font-headline text-2xl font-black uppercase tracking-tight text-on-surface mb-6">
                {t('visionTitle')}
              </h2>
              <p className="body-text leading-relaxed">{t('visionDesc')}</p>
            </div>
          </div>
        </section>

        {/* ── OUR APPROACH ─────────────────────────────────────── */}
        <section className="w-full bg-surface-container-low py-32">
          <div className="section-container">
            <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
              <span className="section-rule" />
              {t('approachTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p) => (
                <div key={p.titleKey} className="group p-10 bg-surface-container-highest rounded-xl metallic-edge hover:bg-surface-variant transition-all duration-300">
                  <h3 className="font-headline text-lg font-black uppercase tracking-tight text-on-surface mb-5 group-hover:text-primary transition-colors">
                    {t(p.titleKey as Parameters<typeof t>[0])}
                  </h3>
                  <p className="body-text leading-relaxed">{t(p.descKey as Parameters<typeof t>[0])}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ──────────────────────────────────────── */}
        <section className="section-container section-padding">
          <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
            <span className="section-rule" />
            {t('valuesTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.label} className="flex gap-6 p-8 bg-surface-container-high rounded-xl metallic-edge group hover:bg-surface-container-highest transition-all">
                <span className="label-institutional text-primary flex-shrink-0 mt-1">{v.label}</span>
                <div>
                  <h3 className="font-headline text-sm font-black uppercase tracking-tight text-on-surface mb-3 group-hover:text-primary transition-colors">
                    {t(v.titleKey as Parameters<typeof t>[0])}
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                    {t(v.descKey as Parameters<typeof t>[0])}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GLOBAL LOCATIONS ─────────────────────────────────── */}
        <section className="w-full bg-surface-container-lowest py-32">
          <div className="section-container">
            <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
              <span className="section-rule" />
              {t('presenceTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {locations.map((l) => (
                <div key={l.cityKey} className="p-10 bg-surface-container-high rounded-xl metallic-edge">
                  <span className="label-institutional text-primary block mb-4">
                    {t(l.regionKey as Parameters<typeof t>[0])}
                  </span>
                  <h3 className="font-headline text-2xl font-black uppercase tracking-tight text-on-surface mb-1">
                    {t(l.cityKey as Parameters<typeof t>[0])}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant">
                    {t(l.countryKey as Parameters<typeof t>[0])}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────── */}
        <section className="section-container section-padding">
          <div className="bg-gradient-to-br from-primary-container/15 to-secondary-container/15 rounded-3xl p-px metallic-edge">
            <div className="bg-surface-container-low rounded-3xl p-12 md:p-20">
              <h2 className="heading-display text-[clamp(2rem,4vw,3.5rem)] text-on-surface mb-6">
                {t('contactTitle')} <span className="text-primary">{t('contactTitleHighlight')}</span>
              </h2>
              <p className="body-text text-base max-w-xl mb-14">{t('contactDesc')}</p>
              <div className="flex flex-wrap gap-6">
                <a href="mailto:hello@convexo.xyz" className="btn-secondary">{t('emailBtn')}</a>
                <a href="https://t.me/convexoprotocol" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  {t('telegramBtn')}
                </a>
                <a href="https://wa.me/573186766035" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  {t('whatsappBtn')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
