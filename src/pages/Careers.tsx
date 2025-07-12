import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';

const openPositions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹12-18 LPA',
    description: 'We are looking for an experienced full-stack developer to join our team and help build the next generation of healthcare software solutions.',
    requirements: [
      '5+ years of experience with Vue.js/React and Laravel/Node.js',
      'Experience with healthcare software development',
      'Knowledge of HIPAA compliance and security best practices',
      'Strong problem-solving and communication skills'
    ]
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹8-12 LPA',
    description: 'Join our design team to create intuitive and user-friendly interfaces for healthcare professionals and patients.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Experience with healthcare or medical software design',
      'Proficiency in Figma, Sketch, or similar tools',
      'Understanding of accessibility and usability principles'
    ]
  },
  {
    title: 'Healthcare Business Analyst',
    department: 'Product',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹10-15 LPA',
    description: 'Help bridge the gap between healthcare requirements and technical solutions by analyzing workflows and defining product requirements.',
    requirements: [
      'Healthcare industry experience (clinical or administrative)',
      'Strong analytical and documentation skills',
      'Experience with requirement gathering and process mapping',
      'Knowledge of healthcare regulations and compliance'
    ]
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹10-16 LPA',
    description: 'Manage our cloud infrastructure and deployment pipelines to ensure reliable and secure healthcare applications.',
    requirements: [
      '3+ years of DevOps experience',
      'Experience with AWS, Docker, and Kubernetes',
      'Knowledge of security best practices for healthcare data',
      'Experience with CI/CD pipelines and monitoring tools'
    ]
  }
];



const Careers = () => {
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
              Join Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Mission
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Help us transform healthcare through technology. Join a team that's 
              passionate about making healthcare more accessible and efficient for everyone.
            </p>
          </motion.div>
        </div>
      </section>

    

      {/* Open Positions */}
      <section className="py-2 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6">
       

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                      <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                      <div className="flex items-center space-x-1 ">
                        <MapPin size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign size={16} />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                    Apply Now
                  </button>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {position.description}
                </p>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Careers;