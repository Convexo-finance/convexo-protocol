import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'Products | Convexo Protocol',
  description: 'The full Convexo Protocol product suite — institutional DeFi products for Latin America.',
};

export default async function ProductsHubPage() {
  const t = await getTranslations('productsHub');

  const products = [
    {
      name: t('product1Name'),
      href: '/products/payments',
      appUrl: 'pay.convexo.xyz',
      appHref: 'https://pay.convexo.xyz',
      status: 'Live',
      desc: t('product1Desc'),
      highlights: [t('product1H1'), t('product1H2'), t('product1H3'), t('product1H4')],
      accent: 'primary',
    },
    {
      name: t('product2Name'),
      href: '/products/c-bonds',
      appUrl: 'protocol.convexo.xyz',
      appHref: 'https://protocol.convexo.xyz',
      status: 'Live',
      desc: t('product2Desc'),
      highlights: [t('product2H1'), t('product2H2'), t('product2H3'), t('product2H4')],
      accent: 'secondary',
    },
    {
      name: t('product3Name'),
      href: '/products/real-estate',
      appUrl: 'realstate.convexo.xyz',
      appHref: 'https://realstate.convexo.xyz',
      status: 'Soon',
      desc: t('product3Desc'),
      highlights: [t('product3H1'), t('product3H2'), t('product3H3'), t('product3H4')],
      accent: 'tertiary',
    },
    {
      name: t('product4Name'),
      href: '/products/eth-fund',
      appUrl: 'fund.convexo.xyz',
      appHref: 'https://fund.convexo.xyz',
      status: 'Soon',
      desc: t('product4Desc'),
      highlights: [t('product4H1'), t('product4H2'), t('product4H3'), t('product4H4')],
      accent: 'primary',
    },
    {
      name: t('product5Name'),
      href: '/products/p2p',
      appUrl: 'p2p.convexo.xyz',
      appHref: 'https://p2p.convexo.xyz',
      status: 'Soon',
      desc: t('product5Desc'),
      highlights: [t('product5H1'), t('product5H2'), t('product5H3'), t('product5H4')],
      accent: 'secondary',
    },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Background */}
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-secondary/6 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/4" />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative z-10 section-container pt-28 pb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-container/30 border border-primary/20 rounded-sm mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="label-institutional text-primary">{t('badge')}</span>
          </div>
          <h1 className="heading-display text-[clamp(3rem,8vw,6rem)] text-on-surface mb-8 max-w-3xl">
            {t('heroTitle')}<br />
            <span className="text-primary">{t('heroTitleHighlight')}</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant font-light leading-relaxed max-w-2xl">
            {t('heroDesc')}
          </p>
        </section>

        {/* ── PRODUCTS GRID ────────────────────────────────────── */}
        <section className="relative z-10 section-container pb-40">
          <div className="space-y-6">
            {products.map((p) => (
              <div
                key={p.name}
                className={`group grid grid-cols-1 lg:grid-cols-12 rounded-xl metallic-edge overflow-hidden transition-all duration-300 ${
                  p.status === 'Soon'
                    ? 'bg-surface-container-high opacity-70 hover:opacity-100'
                    : 'bg-surface-container-highest hover:bg-surface-variant'
                }`}
              >
                {/* Left — info */}
                <div className="lg:col-span-7 p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${
                        p.status === 'Live'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-outline-variant/30 text-on-surface/40'
                      }`}>
                        {p.status}
                      </span>
                      <span className="label-institutional text-on-surface/30">{p.appUrl}</span>
                    </div>
                    <h2 className="font-headline text-2xl md:text-3xl font-black uppercase tracking-tight text-on-surface mb-5 group-hover:text-primary transition-colors">
                      {p.name}
                    </h2>
                    <p className="body-text text-base leading-relaxed max-w-xl">{p.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-10">
                    <Link href={p.href} className="btn-primary py-3">
                      {t('learnMore')}
                    </Link>
                    {p.status === 'Live' && (
                      <a href={p.appHref} target="_blank" rel="noopener noreferrer" className="btn-secondary py-3">
                        {t('openApp')}
                      </a>
                    )}
                  </div>
                </div>

                {/* Right — highlights */}
                <div className="lg:col-span-5 p-10 lg:p-12 bg-surface-container-lowest/50 border-t lg:border-t-0 lg:border-l border-outline-variant/10">
                  <span className="label-institutional text-primary block mb-6">{t('keyFeatures')}</span>
                  <ul className="space-y-4">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span className="text-primary mt-0.5 flex-shrink-0">◆</span>
                        <span className="font-body text-sm text-on-surface-variant leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
