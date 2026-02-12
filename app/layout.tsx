import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Convexo Protocol | Institutional Financial Infrastructure",
  description: "Sovereign-grade digital asset infrastructure for institutional capital markets. AI-driven financial intelligence on Ethereum-native architecture.",
  keywords: "institutional DeFi, tokenized bonds, digital assets, LATAM, blockchain infrastructure, capital markets, AI finance",
  icons: {
    icon: '/branding/logologo.png',
    shortcut: '/branding/logologo.png',
    apple: '/branding/logologo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          src="https://widgets.coingecko.com/gecko-coin-price-static-headline-widget.js"
          async
        ></script>
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-base text-primary-text`}>
        {children}
      </body>
    </html>
  );
}
