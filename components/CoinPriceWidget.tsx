'use client';

import { useEffect } from 'react';

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
  return (
    <section className="py-8 bg-convexo-navy border-y border-convexo-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-convexo-lightblue">Live Market Prices</h3>
        </div>
        <div className="overflow-x-auto">
          <gecko-coin-price-static-headline-widget 
            locale="en" 
            dark-mode="true" 
            outlined="true" 
            coin-ids="dogecoin,bitcoin,ethereum,zcash,solana,chainlink,uniswap,havven,aave,ripple,litecoin,filecoin,worldcoin-wld" 
            initial-currency="usd"
          ></gecko-coin-price-static-headline-widget>
        </div>
      </div>
    </section>
  );
}

