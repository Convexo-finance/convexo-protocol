'use client';

import { useLanguage } from '@/contexts/LanguageContext';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gecko-coin-price-static-headline-widget': {
        locale?: string;
        'dark-mode'?: string;
        outlined?: string;
        'coin-ids'?: string;
        'initial-currency'?: string;
      };
    }
  }
}

export default function CoinPriceWidget() {
  const { t } = useLanguage();

  return (
    <section className="py-5 border-b border-border bg-layer/20">
      <div className="section-container">
        <div className="flex items-center gap-6">
          <span className="heading-section text-[10px] whitespace-nowrap hidden sm:block">
            {t('coinWidget.title')}
          </span>
          <div className="overflow-x-auto flex-1">
            <gecko-coin-price-static-headline-widget
              locale="en"
              dark-mode="true"
              outlined="false"
              coin-ids="bitcoin,ethereum,solana,chainlink,uniswap,aave"
              initial-currency="usd"
            ></gecko-coin-price-static-headline-widget>
          </div>
        </div>
      </div>
    </section>
  );
}
