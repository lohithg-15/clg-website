'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Users, Building2, Briefcase, Calendar, Bell, ChevronLeft, ChevronRight, FileText, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVideo, setActiveVideo] = useState('rSNmsje-R-8');

  const playlist = [
    { id: 'rSNmsje-R-8', title: 'Infrastructure | Malnad College of Engineering' },
    { id: 'OkdMhDnM49M', title: '66 Years of Academic Excellence at MCE' },
    { id: 'PsQ_Ep0Jkc4', title: 'Student Clubs & Campus Life Presentation' },
    { id: 'gAuLf7LGR8w', title: 'Tussle & Hussle 2026 Rotaract Flashmob' },
  ];

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

  // Slide definitions for the hero carousel
  const slides = [
    {
      title: "Malnad College of Engineering",
      subtitle: "Nurturing Innovation and Technical Leadership Since 1960",
      tag: "UGC Autonomous | VTU Affiliated | NAAC A+ Grade",
      desc: "One of the oldest and most prestigious engineering institutions in India, offering state-of-the-art autonomous programs.",
      gradient: "from-slate-950 via-slate-900 to-mce-navy",
      image: "https://www.mcehassan.ac.in/secure-file/images?path=slider3.jpg",
    },
    {
      title: "NAAC Accredited A+ Institution",
      subtitle: "Committed to Highest Quality in Technical Education",
      tag: "Excellence Certified",
      desc: "Accredited with an A+ Grade for our academic structure, faculty excellence, and student development modules.",
      gradient: "from-slate-950 via-slate-900 to-mce-maroon",
      image: "https://www.mcehassan.ac.in/secure-file/images?path=slider1.jpg",
    },
    {
      title: "Autonomous VTU Curriculum",
      subtitle: "Industry-Aligned Course Structures & Dynamic Syllabus",
      tag: "Outcome-Based Education",
      desc: "Academic programs tailored to meet the challenges of next-generation technology and global job markets.",
      gradient: "from-slate-950 via-slate-900 to-mce-navy-light",
      image: "https://www.mcehassan.ac.in/secure-file/images?path=slider2.jpg",
    }
  ];

  // Auto transition slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Years of Excellence', value: '60+' },
    { label: 'Accredited Intake', value: '1000+' },
    { label: 'Students Enrolled', value: '3500+' },
    { label: 'Expert Faculty', value: '200+' },
  ];

  const highlights = [
    {
      icon: <Award className="w-8 h-8 text-mce-gold" />,
      title: 'UGC Autonomy Status',
      description: 'Dynamic syllabus, custom exam structures, and outcome-oriented curriculum.',
      href: '/academics'
    },
    {
      icon: <Users className="w-8 h-8 text-mce-gold" />,
      title: 'Top Tier Faculty',
      description: 'Mentors with doctoral degrees, research publications, and rich industry backgrounds.',
      href: '/about'
    },
    {
      icon: <Building2 className="w-8 h-8 text-mce-gold" />,
      title: 'State-of-the-Art Labs',
      description: 'High-speed computing centers, VLSI, robotics, and advanced mechanical workshops.',
      href: '/academics'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-mce-gold" />,
      title: 'Outstanding Placements',
      description: 'Excellent recruitment records with premium MNCs, IT leaders, and core engineering firms.',
      href: '/placements'
    },
  ];

  const notices = [
    { title: "Admissions Open for B.E / M.Tech Programs 2026-27", tag: "New", link: "/admissions" },
    { title: "Semester End Examinations Schedule (Aug-Sept 2026)", tag: "Exam", link: "/academics" },
    { title: "Hostel Fee Payment & Room Allocation Notice", tag: "Hostel", link: "/contact" },
    { title: "Recruitment Drive: Bosch & Toyota Placement Registration", tag: "Placement", link: "/placements" },
  ];

  const quickLinks = [
    { label: 'Admissions Portal', href: '/admissions', bg: 'bg-mce-navy hover:bg-mce-navy-light' },
    { label: 'Academic Regulations', href: '/academics', bg: 'bg-mce-maroon hover:bg-red-800' },
    { label: 'Latest Circulars', href: '/events', bg: 'bg-gray-800 hover:bg-gray-700' },
    { label: 'Contact Helpdesk', href: '/contact', bg: 'bg-mce-gold hover:bg-mce-gold-hover text-mce-navy' },
  ];

  return (
    <div className="w-full bg-gray-50">
      
      {/* Hero Carousel Section */}
      <section className="relative h-[85vh] sm:h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.45)), url(${slides[currentSlide].image})` }}
            className="absolute inset-0 bg-cover bg-center flex items-center"
          >
            <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]" />
            <div className="absolute inset-0 bg-black/45" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
              <div className="max-w-3xl">
                <motion.span
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-mce-gold text-mce-navy px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md inline-block mb-6"
                >
                  {slides[currentSlide].tag}
                </motion.span>
                <motion.h1
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-tight text-white drop-shadow-md"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg sm:text-xl text-blue-100 mb-8 font-medium font-sans drop-shadow-sm"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.p
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed max-w-2xl hidden md:block"
                >
                  {slides[currentSlide].desc}
                </motion.p>

                <motion.div
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href="/admissions"
                    className="bg-mce-gold hover:bg-mce-gold-hover text-mce-navy px-8 py-4 rounded-xl font-bold transition shadow-lg inline-flex items-center gap-2 text-sm tracking-wider uppercase"
                  >
                    Apply Now <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/about"
                    className="border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-xl font-bold transition hover:bg-white/10 text-sm tracking-wider uppercase"
                  >
                    Explore Campus
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-mce-gold w-8' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Overlapping Info: Notice Ticker & Quick Portal Links */}
      <section className="relative z-20 -mt-16 sm:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Scrolling Announcements Board */}
          <motion.div 
            whileHover={{ y: -6, scale: 1.005 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 flex flex-col justify-between h-[280px] transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 text-mce-maroon border-b border-gray-100 pb-3">
                <Bell className="w-5 h-5 text-mce-gold animate-bounce" />
                <h2 className="font-extrabold text-sm uppercase tracking-wider text-mce-navy">
                  Important Notices & Announcements
                </h2>
              </div>
              <div className="overflow-y-auto h-[160px] space-y-3.5 pr-2 custom-scrollbar">
                {notices.map((notice, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-4 text-xs font-semibold border-b border-gray-50 pb-2.5 last:border-0 hover:translate-x-1 transition duration-200">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded font-extrabold text-[10px] text-white uppercase ${
                        notice.tag === 'New' ? 'bg-red-600' : 'bg-mce-navy'
                      }`}>
                        {notice.tag}
                      </span>
                      <Link href={notice.link} className="text-gray-700 hover:text-mce-maroon font-bold text-[13px] line-clamp-1">
                        {notice.title}
                      </Link>
                    </div>
                    <Link href={notice.link} className="text-[11px] text-mce-navy hover:text-mce-gold whitespace-nowrap">
                      Read Link →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links Grid */}
          <motion.div 
            whileHover={{ y: -6, scale: 1.005 }}
            className="bg-gradient-to-br from-mce-navy to-mce-navy-light rounded-2xl shadow-xl p-6 sm:p-8 text-white flex flex-col justify-between h-[280px] transition-all duration-300"
          >
            <div>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-mce-gold mb-2">
                Quick Access Portal
              </h3>
              <p className="text-xs text-blue-200 mb-6">
                Fast-track access to Admissions, Syllabus, fee payments, and academic helpdesk.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              {quickLinks.map((ql, idx) => (
                <Link
                  key={idx}
                  href={ql.href}
                  className={`p-3.5 rounded-xl font-bold text-xs text-center transition flex items-center justify-center shadow-md ${ql.bg}`}
                >
                  {ql.label}
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-white py-16 mt-16 sm:mt-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center p-4 border-r last:border-0 border-gray-100"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl sm:text-5xl font-black text-mce-maroon mb-2 drop-shadow-sm font-mono">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features: Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-mce-maroon font-extrabold text-xs uppercase tracking-widest block mb-2">
              Institution Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-mce-navy tracking-tight">
              Why Choose Malnad College?
            </h2>
            <div className="w-16 h-1 bg-mce-gold mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((hl, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 30px -5px rgb(0 0 0 / 0.15), 0 12px 16px -6px rgb(0 0 0 / 0.15)"
                }}
                className="h-full"
              >
                <Link
                  href={hl.href}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:border-mce-gold/45 h-full"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-mce-navy/5 text-mce-navy flex items-center justify-center mb-6 group-hover:bg-mce-navy group-hover:text-white transition duration-300 shadow-inner">
                      {hl.icon}
                    </div>
                    <h3 className="text-lg font-black text-mce-navy mb-3 group-hover:text-mce-maroon transition duration-200">
                      {hl.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{hl.description}</p>
                  </div>
                  <div className="mt-6 flex items-center text-xs font-bold text-mce-gold group-hover:translate-x-1.5 transition duration-200">
                    Read Info <ChevronRight size={14} />
                  </div>
                </Link>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Academic Circulars Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <span className="text-mce-maroon font-bold text-xs uppercase tracking-widest block mb-2">
                News Room
              </span>
              <h2 className="text-3xl font-extrabold text-mce-navy tracking-tight">
                Latest Campus News
              </h2>
            </div>
            <Link
              href="/news"
              className="mt-4 md:mt-0 bg-mce-navy hover:bg-mce-navy-light text-white font-bold px-6 py-3 rounded-lg text-xs tracking-wider uppercase transition shadow-md flex items-center gap-1.5"
            >
              All News Articles <ArrowRight size={14} />
            </Link>
          </div>

          {news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item: any, idx: number) => (
                <motion.div
                  key={item._id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:border-mce-gold/30 h-full"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 25px 30px -5px rgb(0 0 0 / 0.15), 0 12px 16px -6px rgb(0 0 0 / 0.15)"
                  }}
                >
                  <div>
                    {/* Visual card header */}
                    <div 
                      style={item.image ? { backgroundImage: `url(${item.image})` } : {}}
                      className={`h-44 ${item.image ? 'bg-cover bg-center' : 'bg-gradient-to-br from-mce-navy to-mce-maroon'} p-6 text-white flex flex-col justify-between relative`}
                    >
                      <div className="absolute inset-0 bg-black/45" />
                      <span className="bg-mce-gold text-mce-navy px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider relative z-10 w-fit">
                        Featured
                      </span>
                      <p className="text-xs text-blue-100 font-bold relative z-10 font-mono">
                        {new Date(item.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-black text-mce-navy mb-3 line-clamp-2 leading-snug group-hover:text-mce-maroon transition duration-200">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <Link
                      href={`/news/${item._id}`}
                      className="text-xs font-extrabold text-mce-maroon group-hover:text-mce-navy inline-flex items-center gap-1 transition"
                    >
                      Read Complete Story <ArrowRight size={14} />
                    </Link>
                  </div>
                  </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-gray-500 font-semibold text-sm">
              No news updates available. Check back soon!
            </div>
          )}
        </div>
      </section>

      {/* MCE YouTube Media Gallery */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-mce-maroon font-bold text-xs uppercase tracking-widest block mb-2">
              Campus Life & Media
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-mce-navy tracking-tight">
              Featured Videos from MCE
            </h2>
            <div className="w-16 h-1 bg-mce-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Main Video Embed Player */}
            <div className="lg:col-span-2 bg-slate-900 rounded-2xl overflow-hidden shadow-xl aspect-video border border-slate-800">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}`}
                title="MCE YouTube Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Video Playlist Selector */}
            <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-extrabold text-sm uppercase tracking-wider text-mce-navy border-b border-gray-200 pb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-650 rounded-full animate-ping" />
                  MCE Video Playlist
                </h3>
                
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                  {playlist.map((video) => (
                    <button
                      key={video.id}
                      onClick={() => setActiveVideo(video.id)}
                      className={`w-full text-left p-3 rounded-xl border transition flex gap-3 items-center ${
                        activeVideo === video.id
                          ? 'bg-mce-navy text-white border-mce-navy shadow'
                          : 'bg-white border-gray-100 hover:border-mce-gold/30 text-gray-700'
                      }`}
                    >
                      <span className="text-xs font-black bg-red-600 text-white rounded px-1.5 py-0.5 uppercase tracking-wider">
                        Play
                      </span>
                      <span className="text-xs font-bold line-clamp-2 leading-snug">
                        {video.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 mt-6 text-center">
                <a
                  href="https://www.youtube.com/@MalnadCollegeofEngineering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-lg shadow-md transition"
                >
                  Visit YouTube Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Partners Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-mce-maroon font-bold text-xs uppercase tracking-widest block mb-2">
            Industry Connections
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-mce-navy mb-12">
            Our Top Recruiting Partners
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-65 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300">
            {['TCS', 'Infosys', 'Cognizant', 'Toyota', 'Bosch', 'Wipro'].map((brand, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-4 font-black text-xl text-mce-navy font-mono shadow-inner tracking-wider select-none">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action admissions block */}
      <section className="bg-gradient-to-br from-mce-navy to-mce-navy-light text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black mb-4 tracking-tight">Ready to Begin Your Engineering Career?</h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Applications for B.E autonomous branches and postgraduate admissions are open for the academic year 2026. Secure your seat at one of Karnataka's leading engineering colleges.
          </p>
          <Link
            href="/admissions"
            className="bg-mce-gold hover:bg-mce-gold-hover text-mce-navy font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 inline-flex items-center gap-2 text-sm tracking-wider uppercase"
          >
            Apply Online Portal <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
