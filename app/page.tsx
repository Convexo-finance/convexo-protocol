import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ChainDeployments from '@/components/ChainDeployments';
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
      <ChainDeployments />
      <CoinPriceWidget />
      <CryptoRails />
      <LatamFundingGap />
      <Products />
      <Footer />
    </main>
  );
}

