import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-slate-800 mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="text-sm text-slate-500 mb-8">Last updated: January 1, 2025</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our services.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@meditechsolutions.com.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;