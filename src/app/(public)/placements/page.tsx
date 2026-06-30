'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Briefcase, Users } from 'lucide-react';

export default function Placements() {
  const stats = [
    { label: 'Placement Rate', value: '98%', icon: <TrendingUp className="text-green-600" size={32} /> },
    { label: 'Avg. Package', value: '₹6.5 LPA', icon: <Briefcase className="text-blue-600" size={32} /> },
    { label: 'Top Package', value: '₹18 LPA', icon: <Users className="text-purple-600" size={32} /> },
  ];

  const companies = [
    'TCS', 'Infosys', 'Wipro', 'Accenture', 'Google', 'Microsoft', 'Amazon', 
    'Flipkart', 'Goldman Sachs', 'Morgan Stanley', 'JPMorgan', 'Deloitte'
  ];

  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Placements</h1>
          <p className="text-xl text-blue-100">Excellent Career Opportunities for Our Graduates</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Recruiting Companies */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Recruiting Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {companies.map((company, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 p-6 rounded-lg text-center font-semibold text-gray-700 hover:bg-blue-100 transition"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Placement Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {['Registration', 'Test/Interview', 'Offer Letter', 'Joining'].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-gray-900">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
