import React from 'react';
import { motion } from 'framer-motion';

const Disclaimer = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-slate-800 mb-8">Disclaimer</h1>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="text-sm text-slate-500 mb-8">Last updated: January 1, 2025</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">General Information</h2>
              <p>The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, MediTech Solutions excludes all representations, warranties, obligations, and liabilities.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Professional Advice</h2>
              <p>The content on this website is for informational purposes only and should not be considered as professional medical or legal advice. Always consult with qualified professionals for specific guidance.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Accuracy of Information</h2>
              <p>While we strive to keep the information up to date and correct, we make no representations or warranties about the completeness, accuracy, reliability, or suitability of the information.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">External Links</h2>
              <p>Our website may contain links to external websites. We have no control over the content and nature of these sites and are not responsible for their content or availability.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Limitation of Liability</h2>
              <p>In no event will MediTech Solutions be liable for any loss or damage including, without limitation, indirect or consequential loss or damage arising from the use of this website.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Contact Information</h2>
              <p>For questions about this disclaimer, contact us at legal@meditechsolutions.com.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;