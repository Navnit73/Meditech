import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-slate-800 mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="text-sm text-slate-500 mb-8">Last updated: January 1, 2025</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Use License</h2>
              <p>Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Disclaimer</h2>
              <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Limitations</h2>
              <p>In no event shall MediTech Solutions be liable for any damages arising out of the use or inability to use our services.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Contact Information</h2>
              <p>For questions about these Terms of Service, contact us at legal@meditechsolutions.com.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;