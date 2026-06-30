'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Calendar, DollarSign, Award, Users2, ChevronRight } from 'lucide-react';

export default function Admissions() {
  const requirements = [
    { title: '12th (Pre-University)', description: 'Completion of 10+2 with Physics, Mathematics, and Chemistry/Computer Science.' },
    { title: 'KCET / COMEDK Rank', description: 'Valid rank in Karnataka CET or COMEDK entrance examinations.' },
    { title: 'Merit Allocation', description: 'Seat allocation through regular counseling rounds based on merit scores.' },
    { title: 'Required Documents', description: 'Marks cards, Transfer Certificate, Study Certificate, and Entrance Rank Card.' },
  ];

  const pgRequirements = [
    { title: 'B.E / B.Tech Pass', description: 'Graduation in engineering with minimum 50% marks in aggregate.' },
    { title: 'PGCET / GATE Score', description: 'Valid rank in Karnataka PGCET or qualified score in GATE examination.' }
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
            <h1 className="text-5xl font-black mb-4">Admissions 2026</h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              Begin your technical learning journey at Malnad College of Engineering. Join an legacy of autonomous academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eligibility Requirements */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-mce-maroon font-bold text-xs uppercase tracking-widest block mb-2">
                Undergraduate Eligibility
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-mce-navy tracking-tight">
                B.E Admission Requirements
              </h2>
              <div className="w-16 h-1 bg-mce-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {requirements.map((req, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300 flex flex-col justify-between group hover:border-mce-gold/30"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-mce-navy/5 text-mce-navy flex items-center justify-center mb-6 group-hover:bg-mce-navy group-hover:text-white transition duration-300">
                      <CheckCircle className="text-mce-gold w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-mce-navy mb-3">{req.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{req.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Programs Structure */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-mce-maroon font-bold text-xs uppercase tracking-widest block mb-2">
                Offered Programs
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-mce-navy tracking-tight">
                Academic Programs & Seat Matrix
              </h2>
              <div className="w-16 h-1 bg-mce-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Bachelor of Engineering (B.E)', duration: '4 Years', seats: '700+ Seats', type: 'Autonomous', link: '/academics' },
                { name: 'Master of Technology (M.Tech)', duration: '2 Years', seats: '100+ Seats', type: 'Autonomous', link: '/academics' },
                { name: 'Doctoral Programs (Ph.D)', duration: '3-5 Years', seats: 'Based on Guide', type: 'Research Centre', link: '/academics' },
              ].map((prog, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-gray-150 p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md transition group hover:border-mce-gold/20"
                >
                  <div>
                    <span className="bg-mce-maroon/5 text-mce-maroon font-black text-[10px] px-2.5 py-1 rounded inline-block mb-4 uppercase tracking-wider">
                      {prog.type}
                    </span>
                    <h3 className="text-xl font-black text-mce-navy mb-4 group-hover:text-mce-maroon transition">{prog.name}</h3>
                    <div className="space-y-3.5 text-xs text-gray-500 font-semibold border-t border-gray-50 pt-4">
                      <p className="flex items-center gap-2">📅 Duration: {prog.duration}</p>
                      <p className="flex items-center gap-2">👥 Total Seats: {prog.seats}</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href={prog.link}
                      className="text-xs font-bold text-mce-navy flex items-center gap-1 group-hover:text-mce-gold transition"
                    >
                      View Syllabus & Requirements <ChevronRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PG Eligibility */}
          <div className="bg-white rounded-2xl border border-gray-150 p-8 sm:p-12 shadow-sm mb-20">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-mce-navy mb-8 text-center">
              Postgraduate (M.Tech) Eligibility
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pgRequirements.map((req, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-mce-navy/5 text-mce-navy flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-mce-gold w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-mce-navy mb-1">{req.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Link block */}
          <div className="text-center bg-gradient-to-br from-mce-maroon to-red-800 text-white p-8 sm:p-12 rounded-2xl shadow-xl flex flex-col items-center">
            <h2 className="text-3xl font-black mb-3">Have Questions About Admissions?</h2>
            <p className="text-red-100 max-w-xl mb-8 leading-relaxed text-sm">
              Our helpdesk is available during working hours to answer your questions about fee structures, admission processes, and hosteling.
            </p>
            <Link
              href="/contact"
              className="bg-mce-gold hover:bg-mce-gold-hover text-mce-navy font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              Contact Admission Office
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
