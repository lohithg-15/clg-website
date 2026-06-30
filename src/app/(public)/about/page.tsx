'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Target, Landmark, Users2, ChevronRight } from 'lucide-react';

export default function About() {
  const departments = [
    { name: 'Computer Science & Engineering', code: 'CSE', desc: 'Offering advanced coursework in AI, data structures, and computer networks.' },
    { name: 'Information Science & Engineering', code: 'ISE', desc: 'Focused on databases, cloud infrastructure, and software engineering.' },
    { name: 'Electronics & Communication', code: 'ECE', desc: 'Covering signal processing, VLSI systems, and embedded hardware.' },
    { name: 'Mechanical Engineering', code: 'ME', desc: 'Specializations in thermodynamics, manufacturing processes, and design.' },
    { name: 'Civil Engineering', code: 'CE', desc: 'Focusing on structural mechanics, fluid engineering, and survey.' },
    { name: 'Electrical & Electronics', code: 'EEE', desc: 'Specializations in power grids, electrical machinery, and automation.' },
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
            <h1 className="text-5xl font-black mb-4">About the Institution</h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              Six decades of technical leadership, shaping competent engineers, and driving global innovation in Hassan, Karnataka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-mce-maroon font-extrabold text-xs uppercase tracking-widest block mb-2">
                Legacy of Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-mce-navy mb-6">
                Malnad College of Engineering
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed text-sm sm:text-base">
                Malnad College of Engineering (MCE), Hassan is a premier autonomous engineering institution 
                established in 1960. With over six decades of excellence, MCE has been a beacon of technical 
                education in Karnataka and India, established under the auspices of the Malnad Technical Education Society.
              </p>
              <p className="text-gray-600 mb-5 leading-relaxed text-sm sm:text-base">
                Affiliated with Visvesvaraya Technological University (VTU), Belagavi, and accredited by 
                NAAC with an A+ grade, MCE maintains the highest standards of academic excellence, research initiatives, 
                and professional ethics.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Our institution is committed to producing globally competent engineers equipped with 
                technical knowledge, practical skills, and values needed for sustainable development.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-150 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-mce-maroon/5 rounded-full blur-3xl -z-10" />
              <h3 className="text-2xl font-black text-mce-navy mb-6 flex items-center gap-2">
                <Landmark className="text-mce-gold" /> Key Institutional Facts
              </h3>
              <ul className="space-y-4">
                {[
                  "Established in 1960 (64+ Years Legacy)",
                  "Academic Autonomy granted by VTU and UGC",
                  "Accredited by NAAC with 'A+' Grade",
                  "6 NBA Accredited Undergraduate Branches",
                  "Over 200+ Highly Qualified Faculty Members",
                  "Vibrant Campus with 3500+ Engineering Students"
                ].map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="text-mce-gold flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 font-semibold">{fact}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 sm:p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-mce-navy/5 text-mce-navy flex items-center justify-center mb-6 group-hover:bg-mce-navy group-hover:text-white transition duration-300">
                <Target size={24} className="text-mce-gold" />
              </div>
              <h3 className="text-2xl font-black text-mce-navy mb-4">
                Vision
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                To emerge as a globally recognized autonomous engineering institution committed to 
                advancing knowledge and values, producing competent engineers capable of meeting 
                the challenges of a rapidly changing world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 sm:p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-mce-maroon/5 text-mce-maroon flex items-center justify-center mb-6 group-hover:bg-mce-maroon group-hover:text-white transition duration-300">
                <Award size={24} className="text-mce-gold" />
              </div>
              <h3 className="text-2xl font-black text-mce-navy mb-4">
                Mission
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                To impart high-quality engineering education emphasizing excellence in academics, 
                research, and professional development while upholding ethical values and social responsibility.
              </p>
            </motion.div>
          </div>

          {/* Departments */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-mce-maroon font-bold text-xs uppercase tracking-widest block mb-2">
                Academic Units
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-mce-navy tracking-tight">
                Our Engineering Departments
              </h2>
              <div className="w-16 h-1 bg-mce-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-mce-gold/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <span className="bg-mce-navy/5 text-mce-navy font-black text-[10px] px-2 py-1 rounded inline-block mb-4 uppercase tracking-wider">
                      {dept.code} Department
                    </span>
                    <h3 className="text-lg font-black text-mce-navy mb-3 group-hover:text-mce-maroon transition duration-200">
                      {dept.name}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-6">
                      {dept.desc}
                    </p>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-xs font-bold text-mce-navy">
                    <span>Autonomous Syllabus</span>
                    <Link
                      href="/academics"
                      className="text-mce-maroon group-hover:text-mce-navy inline-flex items-center gap-1 transition"
                    >
                      Syllabus Details <ChevronRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
