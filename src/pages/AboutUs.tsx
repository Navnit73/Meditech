import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Award, Lightbulb } from 'lucide-react';

const AboutUs = () => {
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
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                MediTech Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're passionate about transforming healthcare through technology. 
              Our mission is to make digital healthcare solutions accessible to every practice, 
              regardless of size or budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Story</h2>
            <div className="prose prose-lg mx-auto text-slate-600">
              <p>
                Founded in 2021, MediTech Solutions emerged from a simple observation: 
                small healthcare practices were being left behind in the digital transformation. 
                While large hospitals had access to expensive enterprise solutions, 
                small clinics and private practitioners struggled with outdated systems.
              </p>
              <p>
                Our founders, with backgrounds in both healthcare and technology, 
                recognized this gap and set out to create affordable, tailored solutions 
                that would empower every healthcare provider to deliver better patient care.
              </p>
              <p>
                Today, we've helped over 50 healthcare practices across India digitize 
                their operations, improve patient satisfaction, and grow their businesses.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Values</h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Patient-Centric',
                description: 'Every solution we build ultimately serves to improve patient care and experience.'
              },
              {
                icon: Target,
                title: 'Quality First',
                description: 'We never compromise on quality, security, or compliance in our solutions.'
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'We stay ahead of healthcare technology trends to provide cutting-edge solutions.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every project, no matter how big or small.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-xl text-teal-100">
              Numbers that reflect our commitment to healthcare transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '50+', label: 'Healthcare Practices Served' },
              { number: '98%', label: 'Client Satisfaction Rate' },
              { number: '10,000+', label: 'Patients Benefited' },
              { number: '3', label: 'Years of Excellence' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-teal-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;