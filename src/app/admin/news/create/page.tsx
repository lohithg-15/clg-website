'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';

export default function AdminCreateNews() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    image: '',
    featured: false
  });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.content) {
      alert('Please fill out all required fields');
      return;
    }

    setSubmitting(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert('News article created successfully!');
        router.push('/admin/news');
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to create news article');
      }
    } catch (error) {
      console.error('Error creating news:', error);
      alert('Network error. Failed to create news.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/admin/news" 
            className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider mb-2 transition"
          >
            <ArrowLeft size={14} /> Back to News List
          </Link>
          <h1 className="text-3xl font-black text-gray-900">Create News Article</h1>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border border-gray-150 shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Title */}
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">
                Article Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. MCE Admissions 2026 Open"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none text-sm font-semibold transition"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">
                Brief Summary / Description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={2}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="A short snippet shown on card views (max 500 chars)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none text-sm font-semibold transition"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">
                Detailed Body Content <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={6}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Full article content text..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none text-sm font-semibold transition"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">
                Image Link / URL (Optional)
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="e.g. https://www.mcehassan.ac.in/.../slider3.jpg"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none text-sm font-semibold transition"
              />
              <p className="text-[10px] text-gray-400 font-bold mt-1">
                Leave blank to automatically apply a verified MCE default image.
              </p>
            </div>

            {/* Featured Checkbox */}
            <div className="flex items-center gap-2 border-t border-gray-100 pt-6">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="featured" className="text-xs font-black text-gray-500 uppercase tracking-wider select-none cursor-pointer">
                Feature on Homepage News Cards
              </label>
            </div>

            {/* Submit */}
            <div className="pt-6 border-t border-gray-100 flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold px-6 py-3.5 rounded-xl text-sm tracking-wider uppercase transition shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Save size={16} /> {submitting ? 'Creating...' : 'Save & Publish'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
