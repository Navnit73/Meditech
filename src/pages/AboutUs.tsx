import React from 'react';
import { Target, Heart, Award, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                MediTech Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              We're passionate about transforming healthcare through technology. 
              Our mission is to make digital healthcare solutions accessible to every practice, 
              regardless of size or budget.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">Our Story</h2>
            <div className="prose prose-sm sm:prose-lg mx-auto text-slate-600">
              <p>
                Founded in early 2024, MediTech Solutions was born from a shared vision among healthcare 
                technologists who saw the urgent need for affordable digital transformation in India's 
                medical practices.
              </p>
              <p>
                Our team of developers and healthcare consultants came together after witnessing how 
                smaller clinics were struggling with paper-based systems while larger hospitals 
                benefited from expensive enterprise solutions.
              </p>
              <p>
                In just a few months, we've already onboarded our first 12 healthcare partners 
                and are rapidly expanding our solution offerings based on real practitioner feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">Our Values</h2>
            <p className="text-lg sm:text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Our Early Impact</h2>
            <p className="text-lg sm:text-xl text-teal-100">
              The progress we've made since our founding
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center text-white">
            {[
              { number: '12+', label: 'Partner Clinics' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '2,500+', label: 'Patients Impacted' },
              { number: '2', label: 'Year of Operation' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-teal-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;