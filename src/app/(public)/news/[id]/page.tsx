'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Eye, ArrowLeft, Clock, FileText } from 'lucide-react';

export default function NewsDetails() {
  const params = useParams();
  const id = params?.id as string;
  const [article, setArticle] = useState<any>(null);
  const [otherNews, setOtherNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch article details
    fetch(`/api/news/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching article:', err);
        setLoading(false);
      });

    // Fetch recommendations
    fetch('/api/news?limit=4')
      .then((res) => res.json())
      .then((data) => {
        setOtherNews((data.data || []).filter((n: any) => n._id !== id));
      })
      .catch((err) => console.error('Error fetching recommendation list:', err));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 py-20 text-gray-500">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mce-navy mr-3" />
        <span className="font-semibold text-sm">Loading article details...</span>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 text-center">
        <div className="max-w-md">
          <FileText className="mx-auto w-16 h-16 text-gray-300 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Article Not Found</h3>
          <p className="text-gray-500 mb-6">The news article you are looking for does not exist or has been removed.</p>
          <Link href="/news" className="bg-mce-navy text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow hover:bg-opacity-95 transition">
            Back to News List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          href="/news" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-mce-maroon hover:text-mce-navy uppercase tracking-wider mb-6 transition"
        >
          <ArrowLeft size={14} /> Back to Campus News
        </Link>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Article Body */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-sm overflow-hidden"
            >
              {/* Category & Stats */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-[10px] font-black">
                  Campus Announcement
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-mce-maroon" />
                  {new Date(article.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Eye size={13} />
                  {article.views || 0} Views
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-6">
                {article.title}
              </h1>

              {/* Cover Image */}
              {article.image && (
                <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden mb-8 relative shadow-inner bg-slate-100 border border-slate-200">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}

              {/* Description box */}
              <div className="bg-slate-50 border-l-4 border-mce-maroon p-5 rounded-r-xl mb-6 text-sm font-semibold text-slate-600 leading-relaxed italic">
                {article.description}
              </div>

              {/* Content Body */}
              <div className="text-sm font-semibold text-gray-700 leading-loose whitespace-pre-line border-t border-gray-100 pt-6">
                {article.content}
              </div>

            </motion.div>
          </div>

          {/* Sidebar Recommendations */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
                Other News Articles
              </h3>
              
              <div className="space-y-4">
                {otherNews.length === 0 ? (
                  <p className="text-xs text-gray-400 font-medium">No other recent announcements.</p>
                ) : (
                  otherNews.map((item) => (
                    <Link 
                      key={item._id} 
                      href={`/news/${item._id}`}
                      className="group block space-y-1.5 transition"
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
