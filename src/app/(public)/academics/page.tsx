'use client';

import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Academics() {
  const beCourses = [
    { code: 'CSE', name: 'Computer Science & Engineering', intake: 180 },
    { code: 'ISE', name: 'Information Science & Engineering', intake: 120 },
    { code: 'ECE', name: 'Electronics & Communication Engineering', intake: 120 },
    { code: 'EEE', name: 'Electrical & Electronics Engineering', intake: 60 },
    { code: 'ME', name: 'Mechanical Engineering', intake: 60 },
    { code: 'CE', name: 'Civil Engineering', intake: 60 },
  ];

  const pgCourses = [
    { code: 'M.Tech', name: 'Computer Science & Engineering', intake: 18 },
    { code: 'M.Tech', name: 'Digital Electronics & Communication', intake: 18 },
    { code: 'M.Tech', name: 'Industrial Automation & Robotics', intake: 18 },
  ];

  const autonomyHighlights = [
    { title: 'Outcome Based Education (OBE)', desc: 'Curriculum designed according to industry and global accreditation standards.' },
    { title: 'Choice Based Credit System (CBCS)', desc: 'Flexibility for students to choose elective courses across disciplines.' },
    { title: 'Continuous Assessment', desc: 'Continuous evaluation through quizzes, projects, and internal exams.' },
    { title: 'Industry Collaboration', desc: 'Syllabus updated dynamically in collaboration with top MNCs and research labs.' },
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
            <span className="bg-mce-gold text-mce-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Autonomous Institution
            </span>
            <h1 className="text-5xl font-black mt-4 mb-4 tracking-tight">Academic Programs</h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              Fostering innovation and technical excellence through our VTU-affiliated autonomous curriculum, designed to shape future leaders in engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Autonomous Status */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-mce-gold/5 rounded-full blur-3xl -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-mce-maroon font-bold text-sm uppercase tracking-widest flex items-center gap-2 mb-2">
                  <Award size={18} className="text-mce-gold" /> Accreditation & Status
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-mce-navy mb-6">
                  Academic Autonomy at MCE
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Malnad College of Engineering was granted academic autonomy by the UGC and VTU, allowing us to frame our own syllabus, conduct examinations, and evaluate students continuously. This freedom enables us to align our courses dynamically with modern technological demands.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-mce-navy/5 px-4 py-3 rounded-lg">
                    <p className="text-xs text-gray-500 font-semibold">Affiliation</p>
                    <p className="text-mce-navy font-bold text-sm">VTU Belagavi</p>
                  </div>
                  <div className="bg-mce-navy/5 px-4 py-3 rounded-lg">
                    <p className="text-xs text-gray-500 font-semibold">NAAC Grade</p>
                    <p className="text-mce-maroon font-bold text-sm">A+ Grade</p>
                  </div>
                  <div className="bg-mce-navy/5 px-4 py-3 rounded-lg">
                    <p className="text-xs text-gray-500 font-semibold">UGC Approved</p>
                    <p className="text-mce-navy font-bold text-sm">Yes (Since 2007)</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {autonomyHighlights.map((hl, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-mce-gold/30 transition duration-300">
                    <h3 className="font-bold text-mce-navy text-base mb-2 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-mce-gold flex-shrink-0" />
                      {hl.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{hl.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Undergrad B.E Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-mce-maroon w-8 h-8" />
              <h2 className="text-3xl font-bold text-mce-navy">Undergraduate Programs (B.E)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beCourses.map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-mce-navy/5 text-mce-navy flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-mce-navy group-hover:text-white transition duration-300">
                      {course.code}
                    </div>
                    <h3 className="text-lg font-bold text-mce-navy mb-2 group-hover:text-mce-maroon transition duration-200">
                      {course.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">Four-year full-time autonomous course affiliated with VTU.</p>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-xs font-semibold text-gray-600">
                    <span>Intake: {course.intake} seats</span>
                    <span className="text-mce-navy group-hover:text-mce-gold flex items-center gap-1 transition">
                      Autonomous Curriculum
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Postgrad M.Tech Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-mce-maroon w-8 h-8" />
              <h2 className="text-3xl font-bold text-mce-navy">Postgraduate Programs (M.Tech)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pgCourses.map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-mce-maroon/5 text-mce-maroon flex items-center justify-center font-bold text-sm mb-4">
                      {course.code}
                    </div>
                    <h3 className="text-lg font-bold text-mce-navy mb-2">
                      {course.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">Two-year full-time master course with state-of-the-art specialization.</p>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-xs font-semibold text-gray-600">
                    <span>Intake: {course.intake} seats</span>
                    <span className="text-gray-400">Regular VTU Intake</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Admission CTA */}
          <div className="bg-gradient-to-r from-mce-maroon to-red-800 text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-3xl font-extrabold mb-3">Join Malnad College of Engineering</h2>
              <p className="text-red-100 max-w-2xl">
                Admissions are open for the academic year 2026. Explore eligibility, fees structure, and apply online through our streamlined application portal.
              </p>
            </div>
            <Link href="/admissions" className="bg-mce-gold hover:bg-mce-gold-hover text-mce-navy font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 whitespace-nowrap">
              Apply For Admission
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
