'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Building2, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch featured news
    fetch('/api/news?featured=true&limit=3')
      .then(res => res.json())
      .then(data => setNews(data.data || []))
      .catch(err => console.error('Error fetching news:', err));

    // Fetch upcoming events
    fetch('/api/events?status=upcoming&limit=3')
      .then(res => res.json())
      .then(data => setEvents(data.data || []))
      .catch(err => console.error('Error fetching events:', err));
  }, []);

  const stats = [
    { label: 'Years of Excellence', value: '60+' },
    { label: 'Faculty Members', value: '200+' },
    { label: 'Students', value: '3000+' },
    { label: 'Companies Recruiting', value: '100+' },
  ];

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'NAAC Accredited',
      description: 'A+ Grade accreditation from NAAC for quality education',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Faculty',
      description: 'Experienced and dedicated faculty members with PhD qualifications',
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art labs, library, and computing facilities',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: '100% Placement',
      description: 'Strong industry connections ensuring excellent placements',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Malnad College of Engineering
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Excellence in Engineering Education Since 1960
            </motion.p>
            <motion.p
              className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Autonomous Institution | VTU Affiliated | NAAC A+ Accredited
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link
                href="/admissions"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2"
              >
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose MCE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Latest News
          </h2>
          {news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {news.map((item: any, idx: number) => (
                <motion.div
                  key={item._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <Link
                      href={`/news/${item._id}`}
                      className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center gap-2"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">No news available yet</div>
          )}
          <div className="text-center">
            <Link
              href="/news"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2"
            >
              View All News <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Upcoming Events
          </h2>
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {events.map((event: any, idx: number) => (
                <motion.div
                  key={event._id}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded inline-block text-sm font-semibold mb-4">
                    {event.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                    <p>🕐 {event.time}</p>
                    <p>📍 {event.location}</p>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <Link
                    href={`/events/${event._id}`}
                    className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center gap-2"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">No upcoming events</div>
          )}
          <div className="text-center">
            <Link
              href="/events"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2"
            >
              View All Events <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join MCE?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your journey towards excellence in engineering education at Malnad College of Engineering.
          </p>
          <Link
            href="/admissions"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2"
          >
            Explore Admissions <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
