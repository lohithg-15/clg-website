'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';

export default function AdminCreateEvent() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: 'other',
    image: ''
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
    if (!formData.title || !formData.description || !formData.date || !formData.time || !formData.location) {
      alert('Please fill out all required fields');
      return;
    }

    setSubmitting(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert('Event created successfully!');
        router.push('/admin/events');
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to create event');
      }
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Network error. Failed to create event.');
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
            href="/admin/events" 
            className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider mb-2 transition"
          >
            <ArrowLeft size={14} /> Back to Events List
          </Link>
          <h1 className="text-3xl font-black text-gray-900">Create Campus Event</h1>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border border-gray-150 shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Title */}
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">
                Event Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Malnad Fest 2K26 Cultural Night"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none text-sm font-semibold transition"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="A short overview of the event scheduling, requirements, fests, or targets..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none text-sm font-semibold transition"
              />
            </div>

            {/* Grid for Date, Time, Location */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Date */}
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">
                  Event Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none text-sm font-semibold transition text-gray-700"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">
                  Event Time <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  placeholder="e.g. 10:00 AM - 05:00 PM"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none text-sm font-semibold transition"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. MCE Open Air Theatre"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none text-sm font-semibold transition"
                />
              </div>
            </div>

            {/* Grid for Category, Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-50">
              {/* Category */}
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none text-sm font-semibold transition text-gray-700"
                >
                  <option value="academic">Academic</option>
                  <option value="cultural">Cultural</option>
                  <option value="technical">Technical</option>
                  <option value="placement">Placement</option>
                  <option value="sports">Sports</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="e.g. https://www.mcehassan.ac.in/.../slider1.jpg"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none text-sm font-semibold transition"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6 border-t border-gray-100 flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl text-sm tracking-wider uppercase transition shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Save size={16} /> {submitting ? 'Creating...' : 'Save & Publish Event'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
