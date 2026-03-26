import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComplianceHub from '@/components/ComplianceHub';

export const metadata: Metadata = {
  title: 'Compliance Hub | Convexo Protocol',
  description: 'Unified regulatory framework — Privacy Policy, Terms & Conditions, AML/CFT Policy. Institutional-grade compliance for sovereign DeFi.',
};

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />
      <main>
        <ComplianceHub />
      </main>
      <Footer />
    </div>
  );
}
