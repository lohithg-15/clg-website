'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Mail, User, Clock, MessageSquare } from 'lucide-react';

export default function AdminContact() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchMessages();
  }, [router]);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/contact', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      setMessages(data.data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/admin/dashboard" 
            className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider mb-2 transition"
          >
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
          <h1 className="text-3xl font-black text-gray-900">Contact Helpdesk Messages</h1>
        </div>

        {/* List of Messages */}
        <div className="space-y-6">
          {loading ? (
            <div className="bg-white rounded-2xl border border-gray-150 p-16 text-center text-gray-500 font-semibold text-sm">
              Loading messages...
            </div>
          ) : messages.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-150 p-16 text-center text-gray-500 font-semibold text-sm">
              No contact messages received yet.
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div 
                key={msg._id || idx} 
                className="bg-white rounded-2xl border border-gray-150 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:shadow-md transition duration-200"
              >
                {/* Sender Details */}
                <div className="sm:w-1/3 space-y-3 border-b sm:border-b-0 sm:border-r border-gray-100 pb-4 sm:pb-0 sm:pr-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                    <User size={14} className="text-mce-maroon" />
                    <span className="text-gray-900 font-extrabold truncate">{msg.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                    <Mail size={14} className="text-mce-maroon" />
                    <a href={`mailto:${msg.email}`} className="text-blue-600 hover:underline truncate">{msg.email}</a>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                    <Clock size={14} />
                    <span>{new Date(msg.createdAt).toLocaleString('en-US')}</span>
                  </div>
                </div>

                {/* Message Content */}
                <div className="flex-1 space-y-3">
                  <span className="bg-blue-100 text-blue-700 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                    Subject: {msg.subject}
                  </span>
                  <div className="flex gap-2.5 items-start">
                    <MessageSquare size={16} className="text-mce-gold flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-gray-600 leading-relaxed whitespace-pre-line">
                      {msg.message}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
