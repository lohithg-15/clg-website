'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const [filter, setFilter] = useState('all'); // 'all', 'upcoming', 'past'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching events:', err);
        setLoading(false);
      });
  }, []);

  const filteredEvents = events.filter((event) => {
    if (filter === 'all') return true;
    const isUpcoming = new Date(event.date) >= new Date();
    return filter === 'upcoming' ? isUpcoming : !isUpcoming;
  });

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mce-navy to-mce-navy-light text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-black mb-4">Events & Announcements</h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              Stay updated with academic conferences, college fests, seminars, and circulars happening at Malnad College of Engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center sm:justify-start gap-4">
          {['all', 'upcoming', 'past'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition duration-300 capitalize ${
                filter === tab
                  ? 'bg-mce-navy text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab} Events
            </button>
          ))}
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20 text-gray-500">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mce-navy mr-3" />
              <span>Loading events...</span>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow border border-gray-100 p-8">
              <Calendar className="mx-auto w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Events Found</h3>
              <p className="text-gray-500">There are no events listed under this category at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, idx) => {
                const eventDate = new Date(event.date);
                const isUpcoming = eventDate >= new Date();

                return (
                  <motion.div
                    key={event._id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col justify-between"
                  >
                    <div>
                      {/* Event Banner Placeholder */}
                      <div className="h-48 bg-gradient-to-br from-mce-navy to-mce-maroon relative flex items-center justify-center p-6 text-white text-center">
                        <div className="absolute inset-0 bg-black/20" />
                        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                          isUpcoming ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                        }`}>
                          {isUpcoming ? 'Upcoming' : 'Past Event'}
                        </span>
                        <div className="relative z-10">
                          <p className="text-xs uppercase tracking-widest text-mce-gold font-bold mb-1">
                            {event.category || 'MCE Event'}
                          </p>
                          <h3 className="font-extrabold text-lg line-clamp-2">
                            {event.title}
                          </h3>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-6">
                        <p className="text-sm text-gray-600 line-clamp-3 mb-6">
                          {event.description}
                        </p>

                        <div className="space-y-2 text-xs text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-mce-maroon" />
                            <span>{eventDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                          </div>
                          {event.time && (
                            <div className="flex items-center gap-2">
                              <Clock size={14} className="text-mce-maroon" />
                              <span>{event.time}</span>
                            </div>
                          )}
                          {event.location && (
                            <div className="flex items-center gap-2">
                              <MapPin size={14} className="text-mce-maroon" />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 p-6 pt-4 flex justify-between items-center bg-gray-50">
                      <span className="text-xs font-semibold text-mce-navy">Organized by MCE</span>
                      <Link href={`/events/${event._id}`} className="text-xs font-bold text-mce-maroon hover:text-mce-navy flex items-center gap-1 transition">
                        View Details <ArrowRight size={12} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
