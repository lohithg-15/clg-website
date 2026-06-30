'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function News() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, [page]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/news?page=${page}&limit=9`);
      const data = await res.json();
      setNews(data.data || []);
      setTotal(data.pagination?.total || 0);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-xl text-blue-100">Stay Updated with MCE</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : news.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {news.map((item: any, idx: number) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                  >
                    <div 
                      style={item.image ? { backgroundImage: `url(${item.image})` } : {}}
                      className={`h-48 ${item.image ? 'bg-cover bg-center' : 'bg-gradient-to-r from-blue-400 to-blue-600'} relative`}
                    >
                      {item.featured && (
                        <span className="absolute top-4 left-4 bg-mce-gold text-slate-900 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow">
                          Featured
                        </span>
                      )}
                    </div>
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

              {/* Pagination */}
              <div className="flex justify-center gap-2">
                {Array.from({ length: Math.ceil(total / 9) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPage(idx + 1)}
                    className={`px-4 py-2 rounded-lg transition ${
                      page === idx + 1
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-gray-600">
              <p>No news available yet</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
