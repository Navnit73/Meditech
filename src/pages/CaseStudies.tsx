import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, TrendingUp, Users, Clock } from 'lucide-react';

const caseStudies = [
  {
    id: 'smartemr-dental',
    title: 'SmartEMR – Dental Clinic Management',
    client: 'SmileCare Dental Clinic',
    description: 'Complete digital transformation of a dental clinic with custom EMR system, appointment scheduling, and patient management.',
    image: 'https://images.pexels.com/photos/6812418/pexels-photo-6812418.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'EMR System',
    results: [
      { metric: 'Efficiency Gain', value: '80%' },
      { metric: 'Patient Satisfaction', value: '95%' },
      { metric: 'Time Saved', value: '3hrs/day' }
    ],
    year: '2024'
  },
  {
    id: 'labconnect-pathology',
    title: 'LabConnect – Pathology Lab Dashboard',
    client: 'Advanced Diagnostics Lab',
    description: 'Automated report generation and lab management system for pathology labs with real-time tracking and quality control.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Lab Management',
    results: [
      { metric: 'Report Speed', value: '90% faster' },
      { metric: 'Labs Adopted', value: '15+' },
      { metric: 'Error Reduction', value: '95%' }
    ],
    year: '2024'
  }
];

const CaseStudies = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Case{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Studies
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Detailed insights into how we've helped healthcare practices transform 
              their operations through custom software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      {study.year}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-3">
                    {study.title}
                  </h2>

                  <div className="text-teal-600 font-medium mb-4">
                    {study.client}
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-lg font-bold text-teal-600">{result.value}</div>
                        <div className="text-xs text-slate-500">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/case-study/${study.id}`}
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Read Full Case Study</span>
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Let's discuss how we can help transform your healthcare practice 
              with custom software solutions.
            </p>
            <Link
              to="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-colors inline-block"
            >
              Schedule Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;