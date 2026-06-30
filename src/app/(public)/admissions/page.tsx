'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Calendar, DollarSign } from 'lucide-react';

export default function Admissions() {
  const requirements = [
    { title: '12th Pass', description: 'From recognized board' },
    { title: 'JEE Rank', description: 'Valid JEE Main/Advanced score' },
    { title: 'Merit', description: 'Based on merit and entrance exam' },
    { title: 'Documents', description: 'Educational certificates and ID proof' },
  ];

  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-blue-100">Join MCE - Your Path to Excellence</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Requirements */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Eligibility Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {requirements.map((req, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  <CheckCircle className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{req.title}</h3>
                  <p className="text-gray-600">{req.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Programs Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Bachelor of Engineering', duration: '4 Years', seats: '700+' },
                { name: 'Master of Technology', duration: '2 Years', seats: '100+' },
                { name: 'Doctoral Research', duration: '3-5 Years', seats: 'Limited' },
              ].map((prog, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{prog.name}</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>📅 Duration: {prog.duration}</p>
                    <p>👥 Seats: {prog.seats}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Apply?</h2>
            <p className="text-gray-600 mb-8">Contact admissions office for more information and application process</p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
