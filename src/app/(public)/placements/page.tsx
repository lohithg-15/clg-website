'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Briefcase, Users, Award, ShieldAlert, GraduationCap, CheckCircle } from 'lucide-react';

export default function Placements() {
  const stats = [
    { label: 'Overall Placement Rate', value: '98%', icon: <TrendingUp className="text-mce-maroon" size={32} /> },
    { label: 'Average CTC Offered', value: '₹7.2 LPA', icon: <Briefcase className="text-mce-navy" size={32} /> },
    { label: 'Highest Package', value: '₹22.5 LPA', icon: <Users className="text-mce-gold" size={32} /> },
  ];

  const companies = [
    'TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant', 'Toyota', 'Bosch',
    'Tech Mahindra', 'Dell Technologies', 'Hewlett Packard', 'Capgemini', 'Deloitte'
  ];

  const trainingModules = [
    { title: 'Aptitude & Technical Prep', desc: 'Comprehensive modules covering quantitative aptitude, programming basics, and logic structures starting from the 5th semester.' },
    { title: 'Mock Interviews & GDs', desc: 'Special training sessions led by placement officers and industry veterans to boost communication skills.' },
    { title: 'Core Industry Internships', desc: 'Mandatory internship structures designed in collaboration with manufacturing, VLSI, and software firms.' },
    { title: 'Resume Writing Workshops', desc: 'Personalized guidance to build profiles, highlighting autonomous projects and lab innovations.' },
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mce-navy to-mce-navy-light text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-black mb-4">Placement Cell</h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              Empowering engineering aspirants with rich industry credentials, professional training modules, and top recruitment opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md text-center border border-gray-100 flex flex-col items-center group hover:border-mce-gold/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gray-55 flex items-center justify-center mb-6 shadow-inner bg-gray-50">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-extrabold text-mce-navy group-hover:text-mce-maroon transition">{stat.value}</h3>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mt-3">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Training Programs */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-mce-maroon font-bold text-xs uppercase tracking-widest block mb-2">
                Career Prep
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-mce-navy tracking-tight">
                Placement & Pre-Placement Training
              </h2>
              <div className="w-16 h-1 bg-mce-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingModules.map((module, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-mce-navy/5 text-mce-navy flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-mce-gold w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-mce-navy mb-2">{module.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{module.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recruiting Companies */}
          <div className="mb-20 bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-mce-navy mb-12 text-center">
              Our Core Recruiting Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {companies.map((company, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.03 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 border border-gray-100 p-6 rounded-xl text-center font-bold text-gray-700 hover:bg-mce-navy hover:text-white transition duration-300 hover:shadow-md select-none"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Placement Policy / Timeline */}
          <div className="bg-gradient-to-br from-mce-navy to-mce-navy-light p-8 sm:p-12 rounded-2xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10" />
            <h2 className="text-2xl sm:text-3xl font-black mb-8 text-mce-gold uppercase tracking-wider">
              Systematic Placement Procedure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: 'Registration & Database Entry', desc: 'Students register with the placement portal and create profiles.' },
                { title: 'Training & Skill Assessment', desc: 'Pre-placement tests, mock interviews, and assessment scores.' },
                { title: 'Placement Drive Schedule', desc: 'Companies visit campus for presentations, tests, and interviews.' },
                { title: 'Final Shortlisting & Offers', desc: 'Offer letters are rolled out via the placement cell.' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white text-mce-navy font-black text-lg mb-4 shadow-md border-4 border-mce-gold">
                    {idx + 1}
                  </div>
                  <h4 className="font-extrabold text-sm mb-2 text-white">{step.title}</h4>
                  <p className="text-xs text-blue-200 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
