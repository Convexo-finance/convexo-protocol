import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import CryptoRails from '@/components/CryptoRails';
import LatamFundingGap from '@/components/LatamFundingGap';
import CoinPriceWidget from '@/components/CoinPriceWidget';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CoinPriceWidget />
      <CryptoRails />
      <LatamFundingGap />
      <Products />
      <Footer />
    </main>
  );
}

