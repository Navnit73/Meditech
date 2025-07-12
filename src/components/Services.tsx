import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  Users,
  Stethoscope,
  Database
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Custom EMR/Clinic Management Systems',
    description: 'Streamlined electronic medical records tailored to your practice workflow.',
    features: ['Patient History', 'Prescription Management', 'Billing Integration']
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling Solutions',
    description: 'Smart scheduling systems that reduce no-shows and optimize your time.',
    features: ['Online Booking', 'SMS Reminders', 'Calendar Sync']
  },
  {
    icon: Shield,
    title: 'Secure Patient Portals',
    description: 'HIPAA-compliant portals for secure patient communication and data access.',
    features: ['Lab Results', 'Secure Messaging', 'Document Sharing']
  },
  {
    icon: BarChart3,
    title: 'Medical Report & Billing Automation',
    description: 'Automated report generation and billing systems to save time and reduce errors.',
    features: ['Auto Reports', 'Insurance Claims', 'Payment Tracking']
  },
  {
    icon: Database,
    title: 'Lab Reporting Dashboards',
    description: 'Comprehensive dashboards for pathology labs and diagnostic centers.',
    features: ['Real-time Results', 'Quality Control', 'Trend Analysis']
  },
  {
    icon: MessageSquare,
    title: 'Healthcare CRM & WhatsApp Integration',
    description: 'Patient relationship management with WhatsApp automation for better engagement.',
    features: ['Patient Follow-up', 'Automated Messages', 'Appointment Reminders']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Comprehensive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Healthcare Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From EMR systems to patient portals, we build custom software solutions 
            that help healthcare practices operate more efficiently and securely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6"
              >
                <service.icon className="text-white" size={28} />
              </motion.div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-teal-50 text-teal-600 py-3 rounded-xl font-semibold hover:bg-teal-100 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;