import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, CheckCircle, Target, Lightbulb, Cog, TestTube } from 'lucide-react';

const caseStudies = {
  'smartemr-dental': {
    title: 'SmartEMR – Dental Clinic Management System',
    client: 'SmileCare Dental Clinic',
    category: 'EMR System',
    duration: '6 weeks',
    year: '2024',
    image: 'https://images.pexels.com/photos/6812418/pexels-photo-6812418.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: 'SmileCare Dental Clinic needed a comprehensive EMR system to streamline their patient management, appointment scheduling, and treatment planning processes. The existing paper-based system was causing delays and inefficiencies.',
    challenge: 'The clinic was struggling with manual appointment booking, paper-based patient records, and lack of treatment history tracking. Staff spent 3+ hours daily on administrative tasks, reducing time available for patient care.',
    solution: 'We developed a custom EMR system with intuitive patient management, automated appointment scheduling, digital treatment planning, and integrated billing. The system was designed specifically for dental workflows.',
    results: [
      { metric: 'Appointment Efficiency', value: '80% faster', description: 'Reduced appointment booking time from 5 minutes to 1 minute' },
      { metric: 'Patient Satisfaction', value: '95% rating', description: 'Improved patient experience with online booking and reminders' },
      { metric: 'Time Saved', value: '3 hours daily', description: 'Staff can now focus more on patient care instead of paperwork' },
      { metric: 'Revenue Increase', value: '25% growth', description: 'Better scheduling led to more appointments and reduced no-shows' }
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'Chart.js', 'PDF Generator'],
    features: [
      'Patient Registration & History Management',
      'Appointment Scheduling with SMS Reminders',
      'Digital Treatment Planning & Notes',
      'Prescription Management',
      'Billing & Insurance Integration',
      'Dental Chart Visualization',
      'Report Generation & Analytics',
      'HIPAA Compliant Data Storage'
    ],
    testimonial: {
      text: "The SmartEMR system has transformed our clinic operations. What used to take hours now takes minutes. Our patients love the online booking system, and we've seen a significant reduction in no-shows.",
      author: "Dr. Aditi Mehta",
      role: "Lead Dentist, SmileCare Dental Clinic"
    }
  },
  'labconnect-pathology': {
    title: 'LabConnect – Pathology Lab Dashboard',
    client: 'Advanced Diagnostics Lab',
    category: 'Lab Management',
    duration: '8 weeks',
    year: '2024',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: 'Advanced Diagnostics Lab required an automated system for report generation, result tracking, and quality control management. Manual processes were causing delays and potential errors in critical medical reports.',
    challenge: 'The lab was manually generating PDF reports, tracking samples through spreadsheets, and struggling with quality control processes. Report generation took 2-3 hours per batch, and there was no real-time tracking system.',
    solution: 'We built a comprehensive lab management dashboard with automated PDF report generation, real-time sample tracking, quality control workflows, and integration with lab equipment for seamless data flow.',
    results: [
      { metric: 'Report Speed', value: '90% faster', description: 'Automated report generation reduced time from hours to minutes' },
      { metric: 'Labs Adopted', value: '15+ facilities', description: 'System now used across multiple diagnostic centers' },
      { metric: 'Processing Time', value: '75% reduction', description: 'Sample processing and result delivery significantly improved' },
      { metric: 'Error Reduction', value: '95% fewer errors', description: 'Automated processes eliminated manual transcription errors' }
    ],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'AWS', 'PDF-lib', 'Redis', 'Socket.io'],
    features: [
      'Automated PDF Report Generation',
      'Real-time Sample Tracking',
      'Quality Control Workflows',
      'Lab Equipment Integration',
      'Patient Result Portal',
      'Batch Processing Management',
      'Analytics & Performance Metrics',
      'Multi-location Support'
    ],
    testimonial: {
      text: "LabConnect has revolutionized our operations. The automated report generation saves us hours every day, and the quality control features have significantly improved our accuracy.",
      author: "Dr. Rajesh Kumar",
      role: "Chief Pathologist, Advanced Diagnostics Lab"
    }
  }
};

const CaseStudy = () => {
  const { id } = useParams();
  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Case Study Not Found</h1>
          <Link to="/portfolio" className="text-teal-600 hover:text-teal-700 inline-flex items-center">
            <ArrowLeft size={18} className="mr-1" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 mb-6 sm:mb-8 text-sm sm:text-base"
          >
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </Link> */}

          <div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                {caseStudy.category}
              </span>
              <span className="text-slate-600 text-sm sm:text-base">{caseStudy.year}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              {caseStudy.title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-start space-x-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                <Users className="text-teal-600 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <div className="font-semibold text-slate-800 text-sm sm:text-base">Client</div>
                  <div className="text-slate-600 text-sm sm:text-base">{caseStudy.client}</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                <Calendar className="text-teal-600 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <div className="font-semibold text-slate-800 text-sm sm:text-base">Duration</div>
                  <div className="text-slate-600 text-sm sm:text-base">{caseStudy.duration}</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                <TrendingUp className="text-teal-600 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <div className="font-semibold text-slate-800 text-sm sm:text-base">Year</div>
                  <div className="text-slate-600 text-sm sm:text-base">{caseStudy.year}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-auto sm:h-80 md:h-96 lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3 space-y-8 sm:space-y-12">
              {/* Overview */}
              <div>
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <Target className="text-teal-600 flex-shrink-0" size={20} />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Project Overview</h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  {caseStudy.overview}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <Lightbulb className="text-teal-600 flex-shrink-0" size={20} />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800">The Challenge</h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <Cog className="text-teal-600 flex-shrink-0" size={20} />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Our Solution</h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
                  {caseStudy.solution}
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {caseStudy.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-teal-600 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-slate-600 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <TestTube className="text-teal-600 flex-shrink-0" size={20} />
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Results & Impact</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="bg-slate-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <div className="text-xl sm:text-2xl font-bold text-teal-600 mb-1 sm:mb-2">
                        {result.value}
                      </div>
                      <div className="font-semibold text-slate-800 text-sm sm:text-base mb-1 sm:mb-2">
                        {result.metric}
                      </div>
                      <div className="text-slate-600 text-xs sm:text-sm">
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
                <div className="text-4xl sm:text-5xl text-teal-200 mb-3 sm:mb-4">"</div>
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                  {caseStudy.testimonial.text}
                </p>
                <div>
                  <div className="font-semibold text-base sm:text-lg">{caseStudy.testimonial.author}</div>
                  <div className="text-teal-200 text-sm sm:text-base">{caseStudy.testimonial.role}</div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6 sm:space-y-8">
              {/* Technologies */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {caseStudy.technologies.map((tech, index) => (
                    <div key={index} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs sm:text-sm">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">
                  Need a Similar Solution?
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mb-4 sm:mb-6">
                  Let's discuss how we can help transform your healthcare practice with custom software.
                </p>
                <Link
                  to="/contact"
                  className="w-full bg-teal-600 text-white py-2.5 sm:py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>Schedule Consultation</span>
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;