'use client';

import { motion } from 'framer-motion';
import { ImageIcon, Eye } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const categories = ['All', 'Campus', 'Infrastructure', 'Life at MCE'];
  const [activeCategory, setActiveCategory] = useState('All');

  const galleryItems = [
    {
      title: 'MCE Main Campus Landmark Building',
      category: 'Campus',
      image: 'https://www.mcehassan.ac.in/secure-file/images?path=slider3.jpg'
    },
    {
      title: 'MCE Library & Study Center',
      category: 'Infrastructure',
      image: 'https://www.mcehassan.ac.in/secure-file/images?path=slider1.jpg'
    },
    {
      title: 'MCE Administration Block',
      category: 'Campus',
      image: 'https://www.mcehassan.ac.in/secure-file/images?path=slider2.jpg'
    },
    {
      title: 'Graduation Ceremony & Achievements',
      category: 'Life at MCE',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600'
    },
    {
      title: 'Advanced Engineering Lab Centers',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=600'
    },
    {
      title: 'Digital Reference Library Hall',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?q=80&w=600'
    },
    {
      title: 'Interactive Student Hackathon Forums',
      category: 'Life at MCE',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600'
    },
    {
      title: 'Autonomous Student Lecture Theater',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600'
    }
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

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
            <h1 className="text-5xl font-black mb-4">Photo Gallery</h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              Explore MCE's historic campus landmarks, academic building infrastructures, and vibrant campus life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 justify-center sm:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition ${
                activeCategory === cat
                  ? 'bg-mce-navy text-white shadow-md'
                  : 'bg-gray-150 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-64 bg-slate-900 cursor-pointer"
              >
                {/* Background Campus Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-90 transition duration-300" />

                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                  <div className="flex justify-between items-start">
                    <span className="bg-mce-gold text-mce-navy font-black text-[9px] px-2 py-0.5 rounded uppercase tracking-wider shadow">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300">
                      <Eye size={16} />
                    </div>
                  </div>

                  <div className="text-white">
                    <h3 className="font-extrabold text-base leading-snug drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-gray-300 font-semibold uppercase mt-1.5 tracking-wider">
                      Malnad College of Engineering
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
