'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LogOut, Menu, X, Home, FileText, Calendar, Mail, ArrowRight, BarChart3, Plus } from 'lucide-react';

export default function AdminDashboard() {
  const [admin, setAdmin] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [stats, setStats] = useState({ news: 0, events: 0, messages: 0 });
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('adminUser');
    if (user) {
      setAdmin(JSON.parse(user));
    }
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const responses = await Promise.all([
        fetch('/api/news?limit=1'),
        fetch('/api/events?limit=1'),
        fetch('/api/contact', { headers: { Authorization: `Bearer ${token}` } }),
      ]);

      const [news, events, contacts] = await Promise.all(responses.map(r => r.json()));
      
      setStats({
        news: news.pagination?.total || 0,
        events: events.pagination?.total || 0,
        messages: contacts.data?.length || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/admin/login');
  };

  const menuItems = [
    { icon: <Home size={18} />, label: 'Dashboard Overview', href: '/admin/dashboard' },
    { icon: <FileText size={18} />, label: 'News Articles', href: '/admin/news' },
    { icon: <Calendar size={18} />, label: 'Campus Events', href: '/admin/events' },
    { icon: <Mail size={18} />, label: 'Contact Messages', href: '/admin/contact' },
  ];

  if (!admin) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-slate-400 font-extrabold text-xs uppercase tracking-wider animate-pulse">
          Loading Admin Context...
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } bg-slate-900 text-slate-100 transition-all duration-300 overflow-hidden flex flex-col z-30 shadow-xl border-r border-slate-800`}
      >
        {/* Branding header */}
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center overflow-hidden p-1 shadow-md">
            <img src="/logo.png" alt="MCE" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-base font-black tracking-tight text-white uppercase leading-none">MCE Hassan</h1>
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mt-1 block">Admin CMS</span>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition font-semibold text-xs uppercase tracking-wider ${
                idx === 0 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer logout */}
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-950/40 hover:text-red-400 transition text-xs font-bold uppercase tracking-wider text-slate-400 cursor-pointer"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content Workspace */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <header className="bg-white border-b border-slate-150 px-6 py-4 flex items-center justify-between shadow-sm z-20">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-slate-500 hover:text-slate-800 p-1.5 rounded-lg hover:bg-slate-100 transition cursor-pointer"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
              Role: <span className="text-blue-600">{admin.role}</span>
            </span>
            <Link 
              href="/" 
              target="_blank"
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition flex items-center gap-1.5"
            >
              Live Website <ArrowRight size={12} />
            </Link>
          </div>
        </header>

        {/* Main Content Scroll Area */}
        <main className="flex-1 overflow-y-auto bg-slate-50/50 p-6 sm:p-8">
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Page Title banner */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-6 translate-y-6">
                <BarChart3 size={240} />
              </div>
              <h2 className="text-3xl font-black tracking-tight mb-2">Welcome Back, {admin.name}</h2>
              <p className="text-slate-300 text-sm font-medium">
                Manage your college's public news broadcasts, fests calendar events, and direct inquiry messages cleanly.
              </p>
            </div>

            {/* Quick Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Total News */}
              <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Total Broadcasts</span>
                  <h3 className="text-3xl font-black text-slate-900 mt-1">{stats.news}</h3>
                </div>
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
                  <FileText size={24} />
                </div>
              </div>

              {/* Total Events */}
              <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Active Events</span>
                  <h3 className="text-3xl font-black text-slate-900 mt-1">{stats.events}</h3>
                </div>
                <div className="bg-green-50 text-green-600 p-3 rounded-xl">
                  <Calendar size={24} />
                </div>
              </div>

              {/* Messages Inbox */}
              <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Helpdesk Messages</span>
                  <h3 className="text-3xl font-black text-slate-900 mt-1">{stats.messages}</h3>
                </div>
                <div className="bg-purple-50 text-purple-600 p-3 rounded-xl">
                  <Mail size={24} />
                </div>
              </div>

            </div>

            {/* Quick Actions CMS Portal */}
            <div className="bg-white border border-slate-150 rounded-3xl p-8 shadow-sm">
              <h3 className="text-base font-black text-slate-900 uppercase tracking-wider mb-6">CMS Content Management Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <Link
                  href="/admin/news/create"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-4 rounded-xl text-center text-xs uppercase tracking-wider transition shadow-md shadow-blue-600/10 flex items-center justify-center gap-1.5"
                >
                  <Plus size={14} /> Create News
                </Link>

                <Link
                  href="/admin/events/create"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold p-4 rounded-xl text-center text-xs uppercase tracking-wider transition shadow-md shadow-green-600/10 flex items-center justify-center gap-1.5"
                >
                  <Plus size={14} /> Create Event
                </Link>

                <Link
                  href="/admin/news"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold p-4 rounded-xl text-center text-xs uppercase tracking-wider transition flex items-center justify-center"
                >
                  Manage News
                </Link>

                <Link
                  href="/admin/events"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold p-4 rounded-xl text-center text-xs uppercase tracking-wider transition flex items-center justify-center"
                >
                  Manage Events
                </Link>

              </div>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
