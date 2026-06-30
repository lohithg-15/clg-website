'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowLeft, Users, ShieldAlert } from 'lucide-react';

export default function EventDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [event, setEvent] = useState<any>(null);
  const [otherEvents, setOtherEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch event details
    fetch(`/api/events`)
      .then((res) => res.json())
      .then((data) => {
        const found = (data.data || []).find((e: any) => e._id === id);
        setEvent(found);
        setOtherEvents((data.data || []).filter((e: any) => e._id !== id).slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching event details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 py-20 text-gray-500">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mce-navy mr-3" />
        <span className="font-semibold text-sm">Loading event details...</span>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 text-center">
        <div className="max-w-md">
          <Calendar className="mx-auto w-16 h-16 text-gray-300 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Event Not Found</h3>
          <p className="text-gray-500 mb-6">The campus event you are looking for does not exist or has been removed.</p>
          <Link href="/events" className="bg-mce-navy text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow hover:bg-opacity-95 transition">
            Back to Events List
          </Link>
        </div>
      </div>
    );
  }

  const eventDate = new Date(event.date);
  const isUpcoming = eventDate >= new Date();

  return (
    <div className="w-full bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          href="/events" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-mce-maroon hover:text-mce-navy uppercase tracking-wider mb-6 transition"
        >
          <ArrowLeft size={14} /> Back to Events Calendar
        </Link>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Event Card */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-gray-150 shadow-sm overflow-hidden"
            >
              {/* Image banner */}
              <div 
                style={event.image ? { backgroundImage: `url(${event.image})` } : {}}
                className={`h-72 w-full ${event.image ? 'bg-cover bg-center' : 'bg-gradient-to-br from-mce-navy to-mce-maroon'} relative flex items-end p-8 text-white`}
              >
                <div className="absolute inset-0 bg-black/55" />
                <span className={`absolute top-6 right-6 px-4.5 py-1.5 rounded-full text-xs font-bold shadow ${
                  isUpcoming ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                }`}>
                  {isUpcoming ? 'Upcoming Event' : 'Completed Event'}
                </span>
                
                <div className="relative z-10 space-y-2">
                  <span className="bg-mce-gold text-slate-900 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md">
                    {event.category || 'MCE general'}
                  </span>
                  <h1 className="text-3xl font-black tracking-tight drop-shadow-md mt-2">
                    {event.title}
                  </h1>
                </div>
              </div>

              {/* Event Body details */}
              <div className="p-8 space-y-6">
                
                {/* Description */}
                <div>
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Event Overview</h3>
                  <p className="text-sm font-semibold text-gray-700 leading-relaxed whitespace-pre-line">
                    {event.description}
                  </p>
                </div>

                {/* Logistics */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm font-semibold">
                  
                  {/* Date */}
                  <div className="flex gap-3 items-start">
                    <Calendar size={18} className="text-mce-maroon mt-0.5" />
                    <div>
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Date</p>
                      <p className="text-gray-800 mt-1">{eventDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                  </div>

                  {/* Time */}
                  {event.time && (
                    <div className="flex gap-3 items-start">
                      <Clock size={18} className="text-mce-maroon mt-0.5" />
                      <div>
                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Timings</p>
                        <p className="text-gray-800 mt-1">{event.time}</p>
                      </div>
                    </div>
                  )}

                  {/* Location */}
                  {event.location && (
                    <div className="flex gap-3 items-start">
                      <MapPin size={18} className="text-mce-maroon mt-0.5" />
                      <div>
                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Venue</p>
                        <p className="text-gray-800 mt-1">{event.location}</p>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </motion.div>
          </div>

          {/* Sidebar recommendations */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
                Other Events Calendar
              </h3>
              
              <div className="space-y-4">
                {otherEvents.length === 0 ? (
                  <p className="text-xs text-gray-400 font-medium">No other upcoming events scheduled.</p>
                ) : (
                  otherEvents.map((item) => (
                    <Link 
                      key={item._id} 
                      href={`/events/${item._id}`}
                      className="group block space-y-1 transition"
                    >
                      <p className="text-xs font-black text-gray-900 group-hover:text-mce-maroon line-clamp-2 transition leading-snug">
                        {item.title}
                      </p>
                      <span className="text-[10px] text-gray-400 font-bold block">
                        {new Date(item.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
