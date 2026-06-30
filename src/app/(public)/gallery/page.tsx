'use client';

import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

export default function Gallery() {
  const categories = ['Campus', 'Events', 'Infrastructure', 'Students', 'Faculty'];
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    title: `Campus Photo ${i + 1}`,
    category: categories[i % categories.length],
  }));

  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-blue-100">Explore MCE Campus & Events</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition h-48 bg-gradient-to-br from-blue-300 to-blue-600 flex items-center justify-center cursor-pointer"
              >
                <ImageIcon size={48} className="text-white opacity-50" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition flex items-end justify-start p-4">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm text-gray-300">{image.category}</p>
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
