import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Technology | Convexo Protocol',
  description: 'The sovereign technology stack powering Convexo Protocol — Digital IDs, Stablecoins, Vaults, OTC Agentic Channels, and 10 trusted infrastructure providers.',
};

export default async function TechnologyPage() {
  const t = await getTranslations('technology');

  const ownTech = [
    {
      id: 'digital-ids',
      label: t('tech1Label'),
      title: t('tech1Title'),
      subtitle: t('tech1Subtitle'),
      desc: t('tech1Desc'),
      tiers: [
        { tier: t('tech1Tier1'), name: t('tech1Tier1Name'), detail: t('tech1Tier1Detail') },
        { tier: t('tech1Tier2'), name: t('tech1Tier2Name'), detail: t('tech1Tier2Detail') },
        { tier: t('tech1Tier3'), name: t('tech1Tier3Name'), detail: t('tech1Tier3Detail') },
      ],
    },
    {
      id: 'stablecoins',
      label: t('tech2Label'),
      title: t('tech2Title'),
      subtitle: t('tech2Subtitle'),
      desc: t('tech2Desc'),
      tiers: [
        { tier: t('tech2Tier1'), name: t('tech2Tier1Name'), detail: t('tech2Tier1Detail') },
        { tier: t('tech2Tier2'), name: t('tech2Tier2Name'), detail: t('tech2Tier2Detail') },
        { tier: t('tech2Tier3'), name: t('tech2Tier3Name'), detail: t('tech2Tier3Detail') },
      ],
    },
    {
      id: 'vaults',
      label: t('tech3Label'),
      title: t('tech3Title'),
      subtitle: t('tech3Subtitle'),
      desc: t('tech3Desc'),
      tiers: [
        { tier: t('tech3Tier1'), name: t('tech3Tier1Name'), detail: t('tech3Tier1Detail') },
        { tier: t('tech3Tier2'), name: t('tech3Tier2Name'), detail: t('tech3Tier2Detail') },
        { tier: t('tech3Tier3'), name: t('tech3Tier3Name'), detail: t('tech3Tier3Detail') },
      ],
    },
    {
      id: 'otc',
      label: t('tech4Label'),
      title: t('tech4Title'),
      subtitle: t('tech4Subtitle'),
      desc: t('tech4Desc'),
      tiers: [
        { tier: t('tech4Tier1'), name: t('tech4Tier1Name'), detail: t('tech4Tier1Detail') },
        { tier: t('tech4Tier2'), name: t('tech4Tier2Name'), detail: t('tech4Tier2Detail') },
        { tier: t('tech4Tier3'), name: t('tech4Tier3Name'), detail: t('tech4Tier3Detail') },
      ],
    },
  ];

  const providers = [
    { name: t('provider1Name'), category: t('provider1Cat'), desc: t('provider1Desc'), logo: '/providers/chainlink.png' },
    { name: t('provider2Name'), category: t('provider2Cat'), desc: t('provider2Desc'), logo: '/providers/uniswap.png' },
    { name: t('provider3Name'), category: t('provider3Cat'), desc: t('provider3Desc'), logo: '/providers/sumsub.jpg' },
    { name: t('provider4Name'), category: t('provider4Cat'), desc: t('provider4Desc'), logo: '/providers/verifffondoblanco.png' },
    { name: t('provider5Name'), category: t('provider5Cat'), desc: t('provider5Desc'), logo: '/providers/zkpassportid.png' },
    { name: t('provider6Name'), category: t('provider6Cat'), desc: t('provider6Desc'), logo: '/providers/safe_logo.png' },
    { name: t('provider7Name'), category: t('provider7Cat'), desc: t('provider7Desc'), logo: '/providers/acceptusdc.png' },
    { name: t('provider8Name'), category: t('provider8Cat'), desc: t('provider8Desc'), logo: '/providers/CoinGecko.png' },
    { name: t('provider9Name'), category: t('provider9Cat'), desc: t('provider9Desc'), logo: '/providers/hashkey_logo.png' },
    { name: t('provider10Name'), category: t('provider10Cat'), desc: t('provider10Desc'), logo: '/providers/okx_logo.png' },
  ];

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
              {t('heroTitle')}
            </h1>
            <p className="font-body text-lg text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto">
              {t('heroDesc')}
            </p>
          </div>
        </section>

        {/* ── OUR TECHNOLOGY ───────────────────────────────────── */}
        <section id="our-technology" className="section-container section-padding">
          <h2 className="heading-lg text-2xl mb-20 flex items-center gap-6">
            <span className="section-rule" />
            {t('ownTechTitle')}
          </h2>

          <div className="space-y-8">
            {ownTech.map((tech) => (
              <div key={tech.id} className="group grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface-container-high rounded-xl metallic-edge overflow-hidden hover:bg-surface-container-highest transition-all duration-300">
                {/* Left — label + title */}
                <div className="lg:col-span-4 p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-outline-variant/10">
                  <div>
                    <span className="label-institutional text-primary block mb-4">{tech.label}</span>
                    <h3 className="font-headline text-2xl font-black uppercase tracking-tight text-on-surface mb-3 group-hover:text-primary transition-colors">
                      {tech.title}
                    </h3>
                    <p className="font-body text-xs text-on-surface-variant font-light">{tech.subtitle}</p>
                  </div>
                  <p className="body-text leading-relaxed mt-8 hidden lg:block">{tech.desc}</p>
                </div>

                {/* Right — tier details */}
                <div className="lg:col-span-8 p-10 lg:p-12">
                  <p className="body-text leading-relaxed mb-8 lg:hidden">{tech.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {tech.tiers.map((tier) => (
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
              {t('providersTitle')}
            </h2>
            <p className="body-text text-base max-w-2xl mb-20">{t('providersDesc')}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {providers.map((p) => (
                <div
                  key={p.name}
                  className="group flex flex-col items-center gap-4 p-8 bg-surface-container-highest rounded-xl metallic-edge hover:bg-surface-variant transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 bg-surface-container-lowest rounded-lg flex items-center justify-center metallic-edge overflow-hidden">
                    <Image src={p.logo} alt={p.name} width={40} height={40} className="w-9 h-9 object-contain" />
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
      </main>

      <Footer />
    </div>
  );
}
