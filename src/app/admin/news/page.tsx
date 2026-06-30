'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Trash2, Plus, Eye, Calendar, FileText } from 'lucide-react';

export default function AdminNews() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchNews();
  }, [router]);

  const fetchNews = async () => {
    try {
      const res = await fetch('/api/news?limit=100');
      const data = await res.json();
      setNews(data.data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this news article?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/news/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert('News deleted successfully');
        fetchNews();
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to delete news');
      }
    } catch (error) {
      console.error('Error deleting news:', error);
      alert('Network error. Failed to delete news.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <Link 
              href="/admin/dashboard" 
              className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider mb-2 transition"
            >
              <ArrowLeft size={14} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-black text-gray-900">Manage News Articles</h1>
          </div>
          <Link
            href="/admin/news/create"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-lg text-sm tracking-wider uppercase transition shadow flex items-center gap-1.5"
          >
            <Plus size={16} /> Create News Article
          </Link>
        </div>

        {/* Table/List */}
        <div className="bg-white rounded-2xl border border-gray-150 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-16 text-center text-gray-500 font-semibold text-sm">
              Loading news articles...
            </div>
          ) : news.length === 0 ? (
            <div className="p-16 text-center text-gray-500 font-semibold text-sm border-b border-gray-100">
              No news articles found. Click "Create News Article" to add one.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-150">
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Views</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm font-semibold text-gray-700">
                  {news.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50/50 transition">
                      <td className="px-6 py-4">
                        <div className="max-w-md">
                          <p className="font-extrabold text-gray-900 truncate">{item.title}</p>
                          <p className="text-xs text-gray-400 font-medium truncate mt-0.5">{item.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-bold text-gray-500">
                        {item.views || 0} views
                      </td>
                      <td className="px-6 py-4 text-xs font-bold text-gray-500">
                        {new Date(item.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Link 
                            href={`/news/${item._id}`}
                            target="_blank"
                            className="p-2 rounded hover:bg-gray-100 text-blue-600 transition"
                            title="View Public Link"
                          >
                            <Eye size={16} />
                          </Link>
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="p-2 rounded hover:bg-red-50 text-red-600 transition"
                            title="Delete Article"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
