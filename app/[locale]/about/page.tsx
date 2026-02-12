import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: `${t('hero.title')} | Convexo Protocol`,
    description: t('hero.subtitle'),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding pt-32 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/8 via-base to-layer/30" />
          
          <div className="relative z-10 section-container">
            <div className="max-w-2xl">
              <div className="heading-section mb-6">{t('badge')}</div>
              <h1 className="heading-xl text-primary-text mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-base text-muted-light leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card p-8">
                  <div className="heading-section mb-4">{t('mission.badge')}</div>
                  <h2 className="text-xl font-medium text-primary-text mb-4">
                    {t('mission.title')}
                  </h2>
                  <p className="text-sm text-muted-light leading-relaxed">
                    {t('mission.description')}
                  </p>
                </div>
                <div className="card p-8">
                  <div className="heading-section mb-4">{t('vision.badge')}</div>
                  <h3 className="text-xl font-medium text-primary-text mb-4">{t('vision.title')}</h3>
                  <p className="text-sm text-muted-light leading-relaxed">
                    {t('vision.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-10 text-center">
              <div className="heading-section mb-4">{t('approach.badge')}</div>
              <h2 className="heading-lg text-primary-text">
                {t('approach.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">{t('approach.compliance.title')}</h3>
                <p className="text-sm text-muted-light leading-relaxed">
                  {t('approach.compliance.description')}
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">{t('approach.aiPowered.title')}</h3>
                <p className="text-sm text-muted-light leading-relaxed">
                  {t('approach.aiPowered.description')}
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">{t('approach.enterprise.title')}</h3>
                <p className="text-sm text-muted-light leading-relaxed">
                  {t('approach.enterprise.description')}
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Global Locations */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">{t('locations.badge')}</div>
              <h2 className="heading-lg text-primary-text mb-4">
                {t('locations.title')}
              </h2>
              <p className="body-text">
                {t('locations.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* United States */}
              <div className="card p-6">
                <h3 className="text-base font-medium text-primary-text mb-3">{t('locations.us.title')}</h3>
                <div className="space-y-1 text-sm text-muted-light">
                  <p>{t('locations.us.address1')}</p>
                  <p>{t('locations.us.address2')}</p>
                  <p className="text-primary-text font-medium">{t('locations.us.city')}</p>
                </div>
              </div>

              {/* Colombia */}
              <div className="card p-6">
                <h3 className="text-base font-medium text-primary-text mb-3">{t('locations.colombia.title')}</h3>
                <div className="space-y-1 text-sm text-muted-light">
                  <p>{t('locations.colombia.address1')}</p>
                  <p>{t('locations.colombia.address2')}</p>
                  <p className="text-primary-text font-medium">{t('locations.colombia.city')}</p>
                </div>
              </div>

              {/* Hong Kong */}
              <div className="card p-6">
                <h3 className="text-base font-medium text-primary-text mb-3">{t('locations.hongkong.title')}</h3>
                <div className="space-y-1 text-sm text-muted-light">
                  <p>{t('locations.hongkong.address1')}</p>
                  <p>{t('locations.hongkong.address2')}</p>
                  <p className="text-primary-text font-medium">{t('locations.hongkong.city')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding border-b border-border bg-layer/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="heading-section mb-4">{t('contact.badge')}</div>
              <h2 className="heading-lg text-primary-text mb-8">
                {t('contact.title')}
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/573186766035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-base border border-border rounded-lg px-6 py-4 hover:border-authority-blue transition-all duration-200 min-w-[200px]"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-authority-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted uppercase tracking-[0.1em]">{t('contact.whatsapp')}</div>
                    <div className="text-sm text-primary-text font-medium">+57 318 6766035</div>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/convexoprotocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-base border border-border rounded-lg px-6 py-4 hover:border-authority-blue transition-all duration-200 min-w-[200px]"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-authority-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted uppercase tracking-[0.1em]">{t('contact.telegram')}</div>
                    <div className="text-sm text-primary-text font-medium">@convexoprotocol</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@convexo.xyz"
                  className="flex items-center gap-3 bg-base border border-border rounded-lg px-6 py-4 hover:border-authority-blue transition-all duration-200 min-w-[200px]"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted uppercase tracking-[0.1em]">{t('contact.email')}</div>
                    <div className="text-sm text-primary-text font-medium">hello@convexo.xyz</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg text-primary-text mb-4">
                {t('cta.title')}
              </h2>
              <p className="body-text mb-8">
                {t('cta.subtitle')}
              </p>
              <a
                href="https://protocol.convexo.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                {t('cta.button')}
                <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

