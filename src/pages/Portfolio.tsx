import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, TrendingUp, Users, Clock, Calendar, Database, Shield, Smartphone } from 'lucide-react';

const projects = [
  {
    id: 'smartemr-dental',
    title: 'SmartEMR – Dental Clinic Management',
    description: 'A comprehensive EMR system designed specifically for dental clinics with appointment scheduling, patient records, treatment planning, and billing integration.',
    image: 'https://images.pexels.com/photos/6812418/pexels-photo-6812418.jpeg?auto=compress&cs=tinysrgb&w=800',
    metrics: [
      { icon: TrendingUp, label: 'Faster appointments', value: '80%' },
      { icon: Users, label: 'Patient satisfaction', value: '95%' },
      { icon: Clock, label: 'Time saved daily', value: '3hrs' }
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'Chart.js'],
    category: 'EMR System',
    client: 'SmileCare Dental Clinic',
    duration: '6 weeks',
    year: '2024'
  },
  {
    id: 'labconnect-pathology',
    title: 'LabConnect – Pathology Lab Dashboard',
    description: 'Automated PDF report generator and comprehensive dashboard for pathology labs with real-time result tracking, quality control, and patient management.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
    metrics: [
      { icon: TrendingUp, label: 'Report generation speed', value: '90%' },
      { icon: Users, label: 'Labs using system', value: '15+' },
      { icon: Clock, label: 'Processing time reduced', value: '75%' }
    ],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'AWS', 'PDF-lib'],
    category: 'Lab Management',
    client: 'Advanced Diagnostics Lab',
    duration: '8 weeks',
    year: '2024'
  },
  
  
];

const Portfolio = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of healthcare software solutions. 
              Each project represents our commitment to improving healthcare delivery through technology.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '12+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '25+', label: 'Healthcare Clients' },
              { number: '2', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 "
              >
                <div className="relative overflow-hidden rounded-2xl  border-slate-100 hover:border-teal-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                   <div className="absolute top-4 left-4">
                    <span className="bg-white text-teal-600 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>

             <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                

                  {/* Metrics */}
                   <div className="grid grid-cols-3 gap-3 mb-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="flex justify-center mb-1">
                          <metric.icon className="text-teal-500" size={16} />
                        </div>
                        <div className="text-xs font-bold text-teal-600">{metric.value}</div>
                        <div className="text-[9px] text-slate-500 leading-tight mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                

                  <Link
                    to={`/case-study/${project.id}`}
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>View Case Study</span>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Let's discuss how we can help transform your healthcare practice with custom software solutions.
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

export default Portfolio;