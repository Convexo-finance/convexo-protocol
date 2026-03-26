import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const akiraExpanded = localFont({
  src: "../public/branding/fonts/Akira Expanded Demo.otf",
  variable: "--font-akira",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "../public/branding/fonts/Poppins/Poppins-Light.ttf",    weight: "300" },
    { path: "../public/branding/fonts/Poppins/Poppins-Regular.ttf",  weight: "400" },
    { path: "../public/branding/fonts/Poppins/Poppins-Medium.ttf",   weight: "500" },
    { path: "../public/branding/fonts/Poppins/Poppins-SemiBold.ttf", weight: "600" },
    { path: "../public/branding/fonts/Poppins/Poppins-Bold.ttf",     weight: "700" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = localFont({
  src: "../public/branding/fonts/Nunito/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Convexo Protocol | Institutional DeFi Infrastructure",
  description: "Sovereign-grade digital asset infrastructure for institutional capital markets in Latin America. AI-powered financial products on Ethereum, Base, and UniChain.",
  keywords: "institutional DeFi, tokenized bonds, digital assets, LATAM, blockchain infrastructure, capital markets, AI finance, stablecoins",
  icons: {
    icon:     "/branding/logologo.png",
    shortcut: "/branding/logologo.png",
    apple:    "/branding/logologo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${akiraExpanded.variable} ${poppins.variable} ${nunito.variable}`}
    >
      <head>
        <script
          src="https://widgets.coingecko.com/gecko-coin-price-static-headline-widget.js"
          async
        />
      </head>
      <body className="font-sans antialiased bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
