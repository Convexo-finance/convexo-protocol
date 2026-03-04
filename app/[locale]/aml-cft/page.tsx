import { getTranslations } from 'next-intl/server';

export default async function AmlCftPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-base">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              {t('amlCft.title')}
            </h1>
            <p className="text-lg text-muted text-center max-w-2xl mx-auto">
              {t('amlCft.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pb-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              
              {/* Overview */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">{t('amlCft.overview.title')}</h2>
                <p className="text-muted mb-4">{t('amlCft.overview.description')}</p>
              </section>

              {/* AML Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">{t('amlCft.aml.title')}</h2>
                <div className="space-y-4">
                  <p className="text-muted">{t('amlCft.aml.description')}</p>
                  
                  <h3 className="text-xl font-medium mt-8 mb-4">{t('amlCft.aml.requirements.title')}</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• {t('amlCft.aml.requirements.req1')}</li>
                    <li>• {t('amlCft.aml.requirements.req2')}</li>
                    <li>• {t('amlCft.aml.requirements.req3')}</li>
                    <li>• {t('amlCft.aml.requirements.req4')}</li>
                  </ul>
                </div>
              </section>

              {/* CFT Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">{t('amlCft.cft.title')}</h2>
                <div className="space-y-4">
                  <p className="text-muted">{t('amlCft.cft.description')}</p>
                  
                  <h3 className="text-xl font-medium mt-8 mb-4">{t('amlCft.cft.measures.title')}</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• {t('amlCft.cft.measures.measure1')}</li>
                    <li>• {t('amlCft.cft.measures.measure2')}</li>
                    <li>• {t('amlCft.cft.measures.measure3')}</li>
                    <li>• {t('amlCft.cft.measures.measure4')}</li>
                  </ul>
                </div>
              </section>

              {/* KYC Requirements */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">{t('amlCft.kyc.title')}</h2>
                <div className="space-y-4">
                  <p className="text-muted">{t('amlCft.kyc.description')}</p>
                  
                  <h3 className="text-xl font-medium mt-8 mb-4">{t('amlCft.kyc.individual.title')}</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• {t('amlCft.kyc.individual.req1')}</li>
                    <li>• {t('amlCft.kyc.individual.req2')}</li>
                    <li>• {t('amlCft.kyc.individual.req3')}</li>
                  </ul>

                  <h3 className="text-xl font-medium mt-8 mb-4">{t('amlCft.kyc.enterprise.title')}</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• {t('amlCft.kyc.enterprise.req1')}</li>
                    <li>• {t('amlCft.kyc.enterprise.req2')}</li>
                    <li>• {t('amlCft.kyc.enterprise.req3')}</li>
                    <li>• {t('amlCft.kyc.enterprise.req4')}</li>
                  </ul>
                </div>
              </section>

              {/* Monitoring and Reporting */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">{t('amlCft.monitoring.title')}</h2>
                <div className="space-y-4">
                  <p className="text-muted">{t('amlCft.monitoring.description')}</p>
                  
                  <h3 className="text-xl font-medium mt-8 mb-4">{t('amlCft.monitoring.activities.title')}</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• {t('amlCft.monitoring.activities.activity1')}</li>
                    <li>• {t('amlCft.monitoring.activities.activity2')}</li>
                    <li>• {t('amlCft.monitoring.activities.activity3')}</li>
                    <li>• {t('amlCft.monitoring.activities.activity4')}</li>
                  </ul>
                </div>
              </section>

              {/* Compliance and Updates */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">{t('amlCft.compliance.title')}</h2>
                <p className="text-muted mb-4">{t('amlCft.compliance.description')}</p>
                <p className="text-muted">{t('amlCft.compliance.updates')}</p>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">{t('amlCft.contact.title')}</h2>
                <p className="text-muted mb-4">{t('amlCft.contact.description')}</p>
                <div className="bg-layer p-6 rounded-lg">
                  <p className="font-medium mb-2">{t('amlCft.contact.email.label')}</p>
                  <p className="text-muted mb-4">{t('amlCft.contact.email.value')}</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}