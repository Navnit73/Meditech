import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, Key, AlertTriangle } from 'lucide-react';

const Security = () => {
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
              Security{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                First
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Your data security is our top priority. We implement multiple layers 
              of protection to keep your healthcare information safe.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: 'Data Encryption',
                description: 'AES-256 encryption for data at rest and TLS 1.3 for data in transit.'
              },
              {
                icon: Lock,
                title: 'Access Control',
                description: 'Multi-factor authentication and role-based access controls.'
              },
              {
                icon: Eye,
                title: 'Monitoring',
                description: '24/7 security monitoring and real-time threat detection.'
              },
              {
                icon: Server,
                title: 'Infrastructure',
                description: 'Secure cloud infrastructure with regular security updates.'
              },
              {
                icon: Key,
                title: 'Key Management',
                description: 'Secure key management and rotation policies.'
              },
              {
                icon: AlertTriangle,
                title: 'Incident Response',
                description: 'Rapid incident response and breach notification procedures.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
            className="max-w-4xl mx-auto prose prose-lg text-slate-600"
          >
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Security Certifications</h2>
            <p>Our security practices are validated by industry-standard certifications and regular audits:</p>
            <ul>
              <li>SOC 2 Type II compliance</li>
              <li>ISO 27001 certified processes</li>
              <li>Regular penetration testing</li>
              <li>Third-party security audits</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Data Protection</h2>
            <p>We implement comprehensive data protection measures:</p>
            <ul>
              <li>Encrypted databases with regular backups</li>
              <li>Secure API endpoints with rate limiting</li>
              <li>Network segmentation and firewalls</li>
              <li>Regular security patches and updates</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Incident Response</h2>
            <p>In the unlikely event of a security incident, we have procedures in place to:</p>
            <ul>
              <li>Immediately contain and assess the incident</li>
              <li>Notify affected parties within required timeframes</li>
              <li>Provide detailed incident reports</li>
              <li>Implement additional safeguards to prevent recurrence</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Contact Security Team</h2>
            <p>For security-related questions or to report a security concern, contact our security team at security@meditechsolutions.com.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Security;