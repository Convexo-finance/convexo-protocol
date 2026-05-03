import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CoinWidget from '@/components/CoinWidget';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Convexo Protocol — Institutional DeFi Infrastructure for LATAM',
  description: 'Sovereign liquidity protocols for the next generation of LATAM financial institutions. Real-world assets meets decentralized settlement.',
};

export default async function HomePage() {
  const t = await getTranslations('home');

  const metrics = [
    { value: '+3MM USD',      label: t('metricVolumeLabel') },
    { value: '~15 min',       label: t('metricSettlementLabel') },
    { value: '20 Countries',  label: t('metricCountriesLabel') },
    { value: '24/7/365',      label: t('metricUptimeLabel') },
  ];

  const techPrimitives = [
    { icon: '◈', title: t('techIdentityTitle'),    desc: t('techIdentityDesc') },
    { icon: '◉', title: t('techStablecoinsTitle'), desc: t('techStablecoinsDesc') },
    { icon: '◫', title: t('techVaultsTitle'),      desc: t('techVaultsDesc') },
    { icon: '◬', title: t('techOtcTitle'),         desc: t('techOtcDesc') },
  ];

  const valueProps = [
    { title: t('valuePropPrivacyTitle'),    desc: t('valuePropPrivacyDesc') },
    { title: t('valuePropSpeedTitle'),      desc: t('valuePropSpeedDesc') },
    { title: t('valuePropComplianceTitle'), desc: t('valuePropComplianceDesc') },
  ];

  const rwaFeatures = [
    t('rwaFeature1'),
    t('rwaFeature2'),
    t('rwaFeature3'),
  ];

  const panelStats = [
    { label: t('panelSettlement'), value: '~15 min' },
    { label: t('panelCountries'),  value: '20' },
    { label: t('panelUptime'),     value: '99.9%' },
    { label: t('panelVolume'),     value: '+3MM USD' },
  ];

  const protocolStats = [
    { label: t('statCreditGap'),         value: '$2.5T' },
    { label: t('statCreditConstrained'), value: '67%' },
    { label: t('statInterestReduction'), value: '80%+' },
    { label: t('statActiveCountries'),   value: '20' },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="relative pt-20">
        {/* Technical grid background */}
        <div className="absolute inset-0 technical-grid opacity-40 pointer-events-none" />
        {/* Radial glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/8 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-0 -translate-x-1/3 pointer-events-none" />

        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <section className="relative z-10 px-6 sm:px-8 lg:px-12 pt-28 pb-40 max-w-7xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-surface-container-high metallic-edge mb-10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(183,196,255,0.8)]" />
            <span className="label-institutional text-primary">{t('badge')}</span>
          </div>

          {/* Headline */}
          <h1 className="heading-display text-[clamp(3rem,9vw,7rem)] text-on-surface mb-10 max-w-5xl">
            {t('headline')}{' '}
            <span className="text-primary">{t('headlineHighlight')}</span>
            <br />
            {t('headlineSuffix')}
          </h1>

          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-14">
            {t('subheadline')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-5">
            <a
              href="https://protocol.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-sm"
            >
              {t('cta1')}
            </a>
            <Link href="/products" className="btn-secondary px-10 py-4 text-sm">
              {t('cta2')}
            </Link>
          </div>
        </section>

        {/* ── 2. METRICS BAR ──────────────────────────────────── */}
        <section className="relative z-10 w-full bg-surface-container-lowest border-y border-outline-variant/10 py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-2">
                <span className="font-headline text-3xl font-black text-primary tracking-tight">
                  {m.value}
                </span>
                <span className="label-institutional">{m.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2b. CHAIN DEPLOYMENTS ───────────────────────────── */}
        <section className="relative z-10 w-full py-12 border-b border-outline-variant/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <p className="label-institutional text-center text-on-surface/30 mb-8">{t('deployedOn')}</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-3">
                <Image src="/providers/chains/ethereum.png" alt="Ethereum" width={28} height={28} className="w-7 h-7 object-contain" />
                <span className="font-label text-sm font-bold uppercase tracking-wider text-on-surface/70">Ethereum</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/providers/chains/base_logo.svg" alt="Base" width={28} height={28} className="w-7 h-7 object-contain" />
                <span className="font-label text-sm font-bold uppercase tracking-wider text-on-surface/70">Base</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/providers/chains/unichain.png" alt="UniChain" width={28} height={28} className="w-7 h-7 object-contain" />
                <span className="font-label text-sm font-bold uppercase tracking-wider text-on-surface/70">UniChain</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2c. COIN PRICE TICKER ───────────────────────────── */}
        <section className="relative z-10 w-full bg-surface-container-lowest py-6 border-b border-outline-variant/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <p className="label-institutional text-on-surface/30 mb-4">{t('marketPrices')}</p>
            <CoinWidget />
          </div>
        </section>

        {/* ── 3. PRODUCT ECOSYSTEM ────────────────────────────── */}
        <section className="relative z-10 section-container section-padding">
          <h2 className="heading-lg text-2xl mb-20 flex items-center gap-6">
            <span className="section-rule" />
            {t('productEcosystem')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Payments — large feature card */}
            <Link
              href="/products/payments"
              className="md:col-span-8 group relative overflow-hidden bg-surface-container-highest p-10 md:p-12 rounded-xl metallic-edge flex flex-col justify-between hover:bg-surface-variant transition-all duration-500 min-h-[300px] md:min-h-[340px]"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="chip">{t('prodPaymentsTag1')}</span>
                  <span className="chip">{t('prodPaymentsTag2')}</span>
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-black uppercase tracking-tight text-on-surface mb-4">
                  {t('prodPaymentsName')}
                </h3>
                <p className="font-body text-on-surface-variant max-w-md text-base leading-relaxed">
                  {t('prodPaymentsDesc')}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <span className="label-institutional text-primary group-hover:text-primary transition-colors">
                  pay.convexo.xyz
                </span>
                <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* C-Bonds */}
            <Link
              href="/products/c-bonds"
              className="md:col-span-4 group bg-surface-container-highest p-10 rounded-xl metallic-edge flex flex-col justify-between hover:bg-surface-variant transition-all duration-500"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="chip">{t('prodCbondsTag')}</span>
                </div>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-4">
                  {t('prodCbondsName')}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  {t('prodCbondsDesc')}
                </p>
              </div>
              <span className="label-institutional text-secondary mt-6 group-hover:text-primary transition-colors">
                protocol.convexo.xyz →
              </span>
            </Link>

            {/* Real Estate */}
            <Link
              href="/products/real-estate"
              className="md:col-span-4 group bg-surface-container-high p-10 rounded-xl metallic-edge flex flex-col justify-between hover:bg-surface-variant transition-all duration-500 opacity-70 hover:opacity-100"
            >
              <div>
                <span className="chip mb-6 inline-block">{t('comingSoon')}</span>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-4">
                  {t('prodRealEstateName')}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  {t('prodRealEstateDesc')}
                </p>
              </div>
              <span className="label-institutional text-tertiary mt-6 group-hover:text-primary transition-colors">
                realstate.convexo.xyz →
              </span>
            </Link>

            {/* ETH Fund */}
            <Link
              href="/products/eth-fund"
              className="md:col-span-4 group bg-surface-container-high p-10 rounded-xl metallic-edge flex flex-col justify-between hover:bg-surface-variant transition-all duration-500 opacity-70 hover:opacity-100"
            >
              <div>
                <span className="chip mb-6 inline-block">{t('comingSoon')}</span>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-4">
                  {t('prodEthFundName')}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  {t('prodEthFundDesc')}
                </p>
              </div>
            </Link>

            {/* P2P AI */}
            <Link
              href="/products/p2p"
              className="md:col-span-4 group bg-surface-container-high p-10 rounded-xl metallic-edge flex flex-col justify-between hover:bg-surface-variant transition-all duration-500 border-l-2 border-secondary opacity-70 hover:opacity-100"
            >
              <div>
                <span className="chip mb-6 inline-block">{t('comingSoon')}</span>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-4">
                  {t('prodP2pName')}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  {t('prodP2pDesc')}
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* ── 4. TECHNOLOGY LAYER ─────────────────────────────── */}
        <section className="relative z-10 w-full py-36 bg-surface-container-low overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -rotate-6 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="heading-display text-[clamp(2.5rem,5vw,4rem)] text-on-surface mb-14">
                {t('technologyLine1')}<br />
                <span className="text-secondary">{t('technologyLine2')}</span><br />
                {t('technologyLine3')}
              </h2>
              <div className="space-y-10 md:space-y-12">
                {techPrimitives.map((prim) => (
                  <div key={prim.title} className="flex gap-7">
                    <div className="flex-shrink-0 w-14 h-14 bg-surface-container-highest rounded-full flex items-center justify-center metallic-edge text-primary text-xl">
                      {prim.icon}
                    </div>
                    <div>
                      <h4 className="font-headline text-base font-black uppercase tracking-tight text-on-surface mb-2">
                        {prim.title}
                      </h4>
                      <p className="body-text">{prim.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/technology" className="inline-flex items-center gap-3 mt-14 label-institutional text-primary hover:text-on-surface transition-colors group">
                {t('exploreInfrastructure')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Network status panel */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative glass-panel rounded-2xl p-8 md:p-10 metallic-edge shadow-2xl">
                <div className="flex items-center justify-between mb-10">
                  <span className="label-institutional text-primary">{t('networkStatus')}</span>
                  <span className="font-body text-xs font-bold text-on-surface/30 font-mono">LAT-092</span>
                </div>
                <div className="space-y-5">
                  {[80, 65, 50].map((w, i) => (
                    <div key={i} className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${i === 0 ? 'bg-primary shadow-[0_0_10px_rgba(183,196,255,0.6)]' : i === 1 ? 'bg-secondary shadow-[0_0_10px_rgba(214,186,255,0.4)]' : 'bg-primary/30'}`}
                        style={{ width: `${w}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-10 md:mt-12 grid grid-cols-2 gap-4 md:gap-5">
                  {panelStats.map((s) => (
                    <div key={s.label} className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                      <span className="label-institutional block mb-1">{s.label}</span>
                      <span className="font-headline text-lg md:text-xl font-black text-on-surface tracking-tight">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. VALUE PROPOSITIONS ───────────────────────────── */}
        <section className="relative z-10 section-container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {valueProps.map((v) => (
              <div key={v.title} className="group">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center metallic-edge mb-8 group-hover:bg-surface-container-highest transition-colors">
                  <span className="text-primary text-lg">◆</span>
                </div>
                <h3 className="font-headline text-xl font-black uppercase tracking-tight text-on-surface mb-5">
                  {v.title}
                </h3>
                <p className="body-text leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. RWA + AI CALLOUT ─────────────────────────────── */}
        <section className="relative z-10 section-container pb-40">
          <div className="bg-gradient-to-br from-primary-container/15 to-secondary-container/15 rounded-3xl p-px metallic-edge">
            <div className="bg-surface-container-low rounded-3xl p-10 md:p-20 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
              <div className="w-full md:w-1/2">
                <h2 className="heading-display text-[clamp(2.5rem,5vw,4rem)] text-on-surface mb-10">
                  {t('rwaTitle')}<br />
                  <span className="text-primary">{t('rwaLabel1')}</span>{' '}&amp;{' '}
                  <span className="text-secondary">{t('rwaLabel2')}</span>
                </h2>
                <p className="font-body text-lg text-on-surface-variant font-light leading-relaxed mb-12">
                  {t('rwaDesc')}
                </p>
                <ul className="space-y-6">
                  {rwaFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <span className="text-primary text-lg flex-shrink-0">✓</span>
                      <span className="font-label font-bold text-sm tracking-wide text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 flex flex-wrap gap-4">
                  <a
                    href="https://protocol.convexo.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {t('accessPlatform')}
                  </a>
                  <Link href="/about" className="btn-secondary">
                    {t('learnMore')}
                  </Link>
                </div>
              </div>

              {/* Stats card */}
              <div className="w-full md:w-1/2">
                <div className="glass-panel rounded-2xl p-8 md:p-10 metallic-edge">
                  <p className="label-institutional text-primary mb-8">{t('protocolMetrics')}</p>
                  <div className="grid grid-cols-2 gap-4 md:gap-5">
                    {protocolStats.map((s) => (
                      <div key={s.label} className="p-4 md:p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                        <span className="label-institutional block mb-2">{s.label}</span>
                        <span className="font-headline text-xl md:text-2xl font-black text-on-surface">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
