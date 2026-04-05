import React from 'react';

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-8">Disclaimer</h1>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>Last updated: April 5, 2026</p>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Earnings Disclaimer</h2>
          <p>The information provided on IncomePilot is for educational and informational purposes only. Any results, earnings, or income statements made by IncomePilot and its advertisers/sponsors are estimates of what is possible. There is no guarantee that you will make these levels of income and you accept the risk that the earnings and income statements differ by individual.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Affiliate Disclosure</h2>
          <p>Some of the links on this website are affiliate links, which means that I may earn a commission if you click on the link or make a purchase using the link. When you make a purchase, the price you pay will be the same whether you use the affiliate link or go directly to the vendor's website using a non-affiliate link.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Professional Advice</h2>
          <p>The information on this website is not intended as, and shall not be understood or construed as, professional advice. While the employees and/or owners of IncomePilot are professionals and the information provided on this website relates to issues within the company's area of professionalism, the information contained on this website is not a substitute for advice from a professional who is aware of the facts and circumstances of your individual situation.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. No Warranties</h2>
          <p>IncomePilot makes no representations, warranties, or assurances as to the accuracy, currency or completeness of the content contain on this website or any sites linked to this site.</p>
        </section>
      </div>
    </div>
  );
}