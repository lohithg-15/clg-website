'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Trash2, Plus, Eye } from 'lucide-react';

export default function AdminEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchEvents();
  }, [router]);

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data.data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert('Event deleted successfully');
        fetchEvents();
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Network error. Failed to delete event.');
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
            <h1 className="text-3xl font-black text-gray-900">Manage Events</h1>
          </div>
          <Link
            href="/admin/events/create"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-3 rounded-lg text-sm tracking-wider uppercase transition shadow flex items-center gap-1.5"
          >
            <Plus size={16} /> Create Event
          </Link>
        </div>

        {/* Table/List */}
        <div className="bg-white rounded-2xl border border-gray-150 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-16 text-center text-gray-500 font-semibold text-sm">
              Loading events...
            </div>
          ) : events.length === 0 ? (
            <div className="p-16 text-center text-gray-500 font-semibold text-sm border-b border-gray-100">
              No events found. Click "Create Event" to add one.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-150">
                    <th className="px-6 py-4">Event Details</th>
                    <th className="px-6 py-4">Date & Time</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm font-semibold text-gray-700">
                  {events.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50/50 transition">
                      <td className="px-6 py-4">
                        <div className="max-w-md">
                          <span className="bg-green-100 text-green-700 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                            {item.category || 'general'}
                          </span>
                          <p className="font-extrabold text-gray-900 truncate mt-1.5">{item.title}</p>
                          <p className="text-xs text-gray-400 font-medium truncate mt-0.5">{item.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-bold text-gray-500">
                        <p>{new Date(item.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                        <p className="text-gray-400 font-medium mt-0.5">{item.time}</p>
                      </td>
                      <td className="px-6 py-4 text-xs font-bold text-gray-500">
                        {item.location}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Link 
                            href="/events"
                            target="_blank"
                            className="p-2 rounded hover:bg-gray-100 text-blue-600 transition"
                            title="View Public Events Page"
                          >
                            <Eye size={16} />
                          </Link>
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="p-2 rounded hover:bg-red-50 text-red-600 transition"
                            title="Delete Event"
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
