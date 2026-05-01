'use client';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gecko-coin-price-static-headline-widget': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          locale?: string;
          outlined?: string;
          'initial-currency'?: string;
          'background-color'?: string;
          'font-color'?: string;
          'positive-color'?: string;
          'negative-color'?: string;
        },
        HTMLElement
      >;
    }
  }
}

export default function CoinWidget() {
  return (
    <gecko-coin-price-static-headline-widget
      locale="en"
      outlined="true"
      initial-currency="usd"
      background-color="#0a0d3a"
      font-color="#e0e0ff"
      positive-color="#b7c4ff"
      negative-color="#ffb4ab"
    />
  );
}
