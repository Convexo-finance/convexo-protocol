import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: "Convexo Protocol | Institutional DeFi Solutions",
  description: "Access international funding through tokenized corporate bonds, digital asset treasury services, and institutional-grade DeFi solutions for LATAM enterprises.",
  keywords: "DeFi, tokenized bonds, corporate bonds, stablecoins, digital assets, LATAM, blockchain, institutional finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

