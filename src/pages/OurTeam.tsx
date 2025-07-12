import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'Navnit Rai',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Specializes in React and modern UI frameworks. Creates responsive and accessible healthcare interfaces.',
    linkedin: '#',
    github: '#',
    email: 'navnit@meditechsolutions.com'
  },
  {
    name: 'Sandeep Mandhisiya',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    bio: 'Expert in Node.js and database architecture. Builds secure and scalable healthcare APIs.',
    linkedin: '#',
    github: '#',
    email: 'sandeep@meditechsolutions.com'
  },
  {
    name: 'MD Saqib',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    bio: 'Focuses on performance optimization and clean component architecture.',
    linkedin: '#',
    github: '#',
    email: 'saqib@meditechsolutions.com'
  },
  {
    name: 'Abhisek Singh',
    role: 'DevOps Engineer',
    image: 'https://randomuser.me/api/portraits/men/68.jpg',
    bio: 'Implements CI/CD pipelines and cloud infrastructure for healthcare applications.',
    linkedin: '#',
    github: '#',
    email: 'abhisek@meditechsolutions.com'
  },
  {
    name: 'Durgesh Singh',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    bio: 'Specializes in microservices architecture and system integrations.',
    linkedin: '#',
    github: '#',
    email: 'durgesh@meditechsolutions.com'
  }
];

const OurTeam = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Expert Team
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              A diverse team of healthcare technology professionals dedicated to building transformative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="p-6 pb-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto object-cover border-4 border-white shadow-md"
                  />
                </div>

                <div className="p-6 pt-4 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">
                    {member.name}
                  </h3>

                  <div className="text-teal-600 font-medium text-sm sm:text-base mb-3">
                    {member.role}
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={`https://github.com/${member.github}`}
                      className="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-100 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-teal-100 mb-6 sm:mb-8">
              We're always looking for passionate individuals who want to make 
              a difference in healthcare technology.
            </p>
            <a
              href="/careers"
              className="bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-slate-50 transition-colors inline-block"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;