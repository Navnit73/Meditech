import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-slate-800 mb-8">Cookie Policy</h1>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="text-sm text-slate-500 mb-8">Last updated: January 1, 2025</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">What Are Cookies</h2>
              <p>Cookies are small text files that are stored on your computer or mobile device when you visit our website.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">How We Use Cookies</h2>
              <p>We use cookies to:</p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our website functionality</li>
                <li>Provide personalized content</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Types of Cookies We Use</h2>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Managing Cookies</h2>
              <p>You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.</p>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Contact Us</h2>
              <p>If you have questions about our Cookie Policy, contact us at privacy@meditechsolutions.com.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;