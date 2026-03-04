import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return {
    title: `${t('title')} | Convexo Protocol`,
    description: t('subtitle'),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  const sections = [
    'dataCollection',
    'dataUse',
    'dataSharing',
    'blockchain',
    'security',
    'userRights',
    'cookies',
    'retention',
    'thirdParty',
    'changes',
    'contact',
  ] as const;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative section-padding pt-32 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/8 via-base to-layer/30" />
          <div className="relative z-10 section-container">
            <div className="max-w-3xl">
              <div className="heading-section mb-6">{t('badge')}</div>
              <h1 className="heading-xl text-primary-text mb-4">{t('title')}</h1>
              <p className="text-sm text-muted-light leading-relaxed mb-4">{t('subtitle')}</p>
              <p className="text-xs text-muted">
                {t('lastUpdated')}: <span className="text-primary-text">March 4, 2025</span>
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="card p-8">
                <p className="text-sm text-muted-light leading-relaxed">{t('intro')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto space-y-10">
              {sections.map((key, index) => (
                <div key={key} className="border-b border-border pb-10 last:border-0 last:pb-0">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded bg-authority-blue/10 flex items-center justify-center text-xs font-semibold text-authority-blue">
                      {index + 1}
                    </span>
                    <h2 className="text-lg font-medium text-primary-text">
                      {t(`sections.${key}.title`)}
                    </h2>
                  </div>
                  <div className="ml-12 space-y-3">
                    <p className="text-sm text-muted-light leading-relaxed">
                      {t(`sections.${key}.content`)}
                    </p>
                    {(() => {
                      try {
                        const items = t.raw(`sections.${key}.items`) as string[];
                        if (!Array.isArray(items) || items.length === 0) return null;
                        return (
                          <ul className="space-y-2 mt-3">
                            {items.map((item: string, i: number) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-light">
                                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-authority-blue/60" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      } catch {
                        return null;
                      }
                    })()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding border-t border-border bg-layer/30">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg text-primary-text mb-4">{t('contactCta.title')}</h2>
              <p className="body-text mb-6">{t('contactCta.description')}</p>
              <a
                href="mailto:legal@convexo.xyz"
                className="btn-primary inline-flex items-center"
              >
                legal@convexo.xyz
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
