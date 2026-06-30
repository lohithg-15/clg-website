'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Award } from 'lucide-react';

export default function About() {
  const departments = [
    { name: 'Computer Science & Engineering', code: 'CSE' },
    { name: 'Electronics & Communication', code: 'ECE' },
    { name: 'Mechanical Engineering', code: 'ME' },
    { name: 'Civil Engineering', code: 'CE' },
    { name: 'Electrical & Electronics', code: 'EEE' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About MCE</h1>
          <p className="text-xl text-blue-100">
            Leading Institution in Engineering Education Since 1960
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Institution
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Malnad College of Engineering (MCE), Hassan is a premier autonomous engineering institution 
                established in 1960. With over six decades of excellence, MCE has been a beacon of technical 
                education in Karnataka and India.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Affiliated with Visvesvaraya Technological University (VTU), Belagavi, and accredited by 
                NAAC with an A+ grade, MCE maintains the highest standards of academic excellence and 
                professional ethics.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our institution is committed to producing globally competent engineers equipped with 
                technical knowledge, practical skills, and values needed for sustainable development.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Established in 1960</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Autonomous Institution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">NAAC A+ Accredited</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">5 Departments & Research Centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">200+ Faculty Members</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">100% Placement Record</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Award className="text-blue-600" />
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To emerge as a globally recognized autonomous engineering institution committed to 
                advancing knowledge and values, producing competent engineers capable of meeting 
                the challenges of a rapidly changing world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Award className="text-blue-600" />
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To impart high-quality engineering education emphasizing excellence in academics, 
                research, and professional development while upholding ethical values and social responsibility.
              </p>
            </motion.div>
          </div>

          {/* Departments */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">Code: {dept.code}</p>
                  <Link
                    href={`/academics/${dept.code.toLowerCase()}`}
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
