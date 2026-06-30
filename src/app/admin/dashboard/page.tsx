'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LogOut, Menu, X, Home, FileText, Calendar, Users, Building2, Mail, Grid, Settings, BarChart3 } from 'lucide-react';

export default function AdminDashboard() {
  const [admin, setAdmin] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [stats, setStats] = useState({ news: 0, events: 0, faculty: 0, messages: 0 });
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    const user = localStorage.getItem('adminUser');

    if (!token || !user) {
      router.push('/admin/login');
      return;
    }

    setAdmin(JSON.parse(user));
    fetchStats();
  }, [router]);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const responses = await Promise.all([
        fetch('/api/news?limit=1', { headers: { Authorization: `Bearer ${token}` } }),
        fetch('/api/events?limit=1', { headers: { Authorization: `Bearer ${token}` } }),
        fetch('/api/faculty?limit=1', { headers: { Authorization: `Bearer ${token}` } }),
        fetch('/api/contact', { headers: { Authorization: `Bearer ${token}` } }),
      ]);

      const [news, events, faculty, contacts] = await Promise.all(responses.map(r => r.json()));
      
      setStats({
        news: news.pagination?.total || 0,
        events: events.pagination?.total || 0,
        faculty: faculty.pagination?.total || 0,
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
    { icon: <Home size={20} />, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: <FileText size={20} />, label: 'News', href: '/admin/news' },
    { icon: <Calendar size={20} />, label: 'Events', href: '/admin/events' },
    { icon: <Users size={20} />, label: 'Faculty', href: '/admin/faculty' },
    { icon: <Building2 size={20} />, label: 'Departments', href: '/admin/departments' },
    { icon: <Mail size={20} />, label: 'Messages', href: '/admin/contact' },
    { icon: <Grid size={20} />, label: 'Gallery', href: '/admin/gallery' },
    { icon: <Users size={20} />, label: 'Users', href: '/admin/users' },
    { icon: <Settings size={20} />, label: 'Settings', href: '/admin/settings' },
  ];

  const statCards = [
    { label: 'Total News', value: stats.news, icon: <FileText className="text-blue-600" />, color: 'bg-blue-100' },
    { label: 'Total Events', value: stats.events, icon: <Calendar className="text-green-600" />, color: 'bg-green-100' },
    { label: 'Faculty Members', value: stats.faculty, icon: <Users className="text-purple-600" />, color: 'bg-purple-100' },
    { label: 'Messages', value: stats.messages, icon: <Mail className="text-orange-600" />, color: 'bg-orange-100' },
  ];

  if (!admin) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-gray-900 text-white transition-all duration-300 overflow-hidden flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center overflow-hidden p-1 shadow-md flex-shrink-0">
              <img
                src="/logo.png"
                alt="MCE Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const textNode = document.createElement('span');
                    textNode.className = 'text-blue-600 font-bold fallback-text';
                    textNode.innerText = 'MCE';
                    parent.appendChild(textNode);
                  }
                }}
              />
            </div>
            Admin
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition text-sm"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition text-sm font-medium"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← View Website
          </Link>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome, {admin.name}!</h1>
              <p className="text-gray-600">Here's your admin dashboard overview</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statCards.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 20 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-lg shadow p-6 flex items-center justify-between"
                >
                  <div>
                    <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-4 rounded-lg`}>
                    {stat.icon}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/admin/news/create"
                  className="p-4 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition text-center font-semibold text-blue-600"
                >
                  + Create News
                </Link>
                <Link
                  href="/admin/events/create"
                  className="p-4 border-2 border-green-600 rounded-lg hover:bg-green-50 transition text-center font-semibold text-green-600"
                >
                  + Create Event
                </Link>
                <Link
                  href="/admin/faculty/create"
                  className="p-4 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition text-center font-semibold text-purple-600"
                >
                  + Add Faculty
                </Link>
                <Link
                  href="/admin/news"
                  className="p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition text-center font-semibold text-gray-600"
                >
                  Manage News
                </Link>
                <Link
                  href="/admin/contact"
                  className="p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition text-center font-semibold text-gray-600"
                >
                  View Messages
                </Link>
                <Link
                  href="/admin/settings"
                  className="p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition text-center font-semibold text-gray-600"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
