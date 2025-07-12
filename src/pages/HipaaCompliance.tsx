import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const HipaaCompliance = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              HIPAA{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Compliance
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We take healthcare data protection seriously. All our solutions are built 
              with HIPAA compliance at their core.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: 'Data Protection',
                description: 'All patient data is encrypted both in transit and at rest using industry-standard encryption protocols.'
              },
              {
                icon: Lock,
                title: 'Access Controls',
                description: 'Role-based access controls ensure only authorized personnel can access sensitive information.'
              },
              {
                icon: Eye,
                title: 'Audit Trails',
                description: 'Comprehensive logging and monitoring of all system access and data modifications.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="prose prose-lg max-w-none text-slate-600"
          >
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Our HIPAA Compliance Measures</h2>
            
            <div className="space-y-4">
              {[
                'End-to-end encryption of all patient data',
                'Regular security audits and vulnerability assessments',
                'Staff training on HIPAA requirements and best practices',
                'Business Associate Agreements (BAAs) with all clients',
                'Secure backup and disaster recovery procedures',
                'Multi-factor authentication for system access',
                'Regular software updates and security patches',
                'Incident response and breach notification procedures'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Compliance Documentation</h2>
            <p>We provide comprehensive documentation to help your practice maintain HIPAA compliance, including:</p>
            <ul>
              <li>Risk assessment documentation</li>
              <li>Policy and procedure templates</li>
              <li>Staff training materials</li>
              <li>Incident response procedures</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Contact Us</h2>
            <p>For questions about our HIPAA compliance measures or to request compliance documentation, contact us at compliance@meditechsolutions.com.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HipaaCompliance;