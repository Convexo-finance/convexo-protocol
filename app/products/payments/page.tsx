import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payments | Convexo Protocol',
  description: 'Streamline business payments with stablecoins. Pay contractors and suppliers securely with automated scheduling and multi-currency support.',
};

export default function PaymentsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-convexo-navy via-convexo-blue to-convexo-lightblue py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">💳</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Business Payments
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Streamline your business payments with stablecoins - Fast, secure, and cost-effective
            </p>
            <Link
              href="https://fund.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-convexo-blue px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Paying with Crypto
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-convexo-navy mb-6">
                Modern Payment Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Transform how you handle business payments. Pay contractors, suppliers, and vendors using stablecoins with lower fees, faster settlement, and better tracking than traditional banking.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Save payment information securely, schedule recurring payments, and manage all your payables from one intuitive dashboard.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-6 py-3 shadow-md">
                  <div className="text-2xl font-bold text-convexo-purple">80%</div>
                  <div className="text-sm text-gray-600">Lower Fees</div>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-md">
                  <div className="text-2xl font-bold text-convexo-blue">Instant</div>
                  <div className="text-sm text-gray-600">Settlement</div>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-md">
                  <div className="text-2xl font-bold text-convexo-purple">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-convexo-blue">
              <h3 className="text-2xl font-bold text-convexo-navy mb-6">Key Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-convexo-blue/10 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-convexo-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy mb-1">Instant Transfers</h4>
                    <p className="text-gray-600 text-sm">No more waiting days for payments to clear</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-convexo-purple/10 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-convexo-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy mb-1">Lower Costs</h4>
                    <p className="text-gray-600 text-sm">Significantly reduced transaction fees</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-convexo-lightblue/20 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-convexo-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy mb-1">Global Reach</h4>
                    <p className="text-gray-600 text-sm">Pay anyone, anywhere, instantly</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-convexo-navy mb-12 text-center">Platform Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-blue/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-4">Secure Storage</h3>
              <p className="text-gray-700">
                Safely store payment information for contractors and suppliers with bank-grade encryption
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-4">Automated Scheduling</h3>
              <p className="text-gray-700">
                Set up recurring payments that execute automatically on your schedule
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-lightblue/20 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-4">Multi-Currency</h3>
              <p className="text-gray-700">
                Support for USDC, EURC, and local stablecoins for maximum flexibility
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-blue/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-4">Batch Payments</h3>
              <p className="text-gray-700">
                Pay multiple recipients at once with a single transaction
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-4">Real-time Tracking</h3>
              <p className="text-gray-700">
                Monitor all payments in real-time with comprehensive dashboards
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-lightblue/20 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-4">Export & Reporting</h3>
              <p className="text-gray-700">
                Generate detailed reports for accounting and compliance purposes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-convexo-navy mb-12 text-center">Perfect For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-convexo-navy mb-4 flex items-center">
                <span className="text-3xl mr-3">👨‍💼</span>
                Contractor Payments
              </h3>
              <p className="text-gray-700 mb-6">
                Pay freelancers and contractors globally with instant settlement. No more international wire fees or waiting periods.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Instant global payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Lower transaction costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Automated invoicing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Payment scheduling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-convexo-navy mb-4 flex items-center">
                <span className="text-3xl mr-3">🏭</span>
                Supplier Payments
              </h3>
              <p className="text-gray-700 mb-6">
                Streamline supplier payments with automated systems, better tracking, and faster settlement times.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Batch payment processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Supply chain optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Transparent tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Improved cash flow</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-convexo-navy mb-4 flex items-center">
                <span className="text-3xl mr-3">💰</span>
                Payroll Management
              </h3>
              <p className="text-gray-700 mb-6">
                Run payroll efficiently with automated scheduling, instant delivery, and comprehensive tracking.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Recurring payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Multi-currency support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Instant deposits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Detailed records</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-convexo-navy mb-4 flex items-center">
                <span className="text-3xl mr-3">📦</span>
                Operational Expenses
              </h3>
              <p className="text-gray-700 mb-6">
                Manage day-to-day operational expenses with easy categorization and real-time visibility.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Expense categorization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Budget tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Approval workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Audit trails</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-convexo-navy to-convexo-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Payments?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start paying with stablecoins and save time and money
          </p>
          <Link
            href="https://fund.convexo.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-convexo-blue px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

