import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Heart, Zap, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Deep Medical Domain Knowledge',
    description: 'Our team understands healthcare workflows, regulations, and the unique challenges faced by medical practices.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Shield,
    title: 'HIPAA & Compliance Ready',
    description: 'All our solutions are built with HIPAA compliance and local health data protection laws in mind.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Heart,
    title: 'Human-Centered Design',
    description: 'We design intuitive interfaces that work for both healthcare providers and patients.',
    color: 'from-rose-500 to-rose-600'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising on quality. Most projects delivered within 4-8 weeks.',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: Clock,
    title: 'Proven Track Record',
    description: 'Over 50 successful healthcare projects with 98% client satisfaction rate.',
    color: 'from-emerald-500 to-emerald-600'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py- bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Why Healthcare Practices{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Choose Us
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're not just developers – we're healthcare technology specialists who understand 
            the unique needs of medical practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 cursor-pointer">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-50 rounded-2xl p-8 h-full hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}>
                  <reason.icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {reason.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Healthcare Projects' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
              { number: '4-8', label: 'Weeks Delivery' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-teal-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;