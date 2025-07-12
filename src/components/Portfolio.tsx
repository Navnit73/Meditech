import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'SmartEMR – Dental Clinic Management',
    description: 'A lightweight EMR system designed specifically for dental clinics with appointment scheduling, patient records, and treatment planning.',
    image: 'https://images.pexels.com/photos/6812418/pexels-photo-6812418.jpeg?auto=compress&cs=tinysrgb&w=800',
    metrics: [
      { icon: TrendingUp, label: '80% faster appointments', value: '80%' },
      { icon: Users, label: 'Patient satisfaction', value: '95%' },
      { icon: Clock, label: 'Time saved daily', value: '3hrs' }
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
    category: 'EMR System'
  },
  {
    title: 'LabConnect – Pathology Lab Dashboard',
    description: 'Automated PDF report generator and dashboard for pathology labs with real-time result tracking and quality control.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
    metrics: [
      { icon: TrendingUp, label: 'Report generation speed', value: '90%' },
      { icon: Users, label: 'Labs using system', value: '15+' },
      { icon: Clock, label: 'Processing time reduced', value: '75%' }
    ],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'AWS'],
    category: 'Lab Management'
  },
  {
    title: 'MediSite – Rural Doctor Websites',
    description: 'Affordable, responsive websites for rural doctors with appointment booking, service listings, and patient testimonials.',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
    metrics: [
      { icon: TrendingUp, label: 'Online appointments', value: '200%' },
      { icon: Users, label: 'Patient reach increased', value: '150%' },
      { icon: Clock, label: 'Setup time', value: '2 days' }
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'Bootstrap'],
    category: 'Website Development'
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-teal-500 blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-blue-500 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
            <TrendingUp className="mr-2" size={16} />
            Proven Results
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Healthcare{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how our custom solutions have transformed healthcare practices and improved patient experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
             
              className="group"
            >
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-sm  transition-all duration-300 border border-slate-100 hover:border-teal-100">
                <div className="relative overflow-hidden h-48 rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-teal-600 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      {project.category}
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

                 

                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Portfolio;