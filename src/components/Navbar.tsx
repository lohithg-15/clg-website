'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Award, BookOpen, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const academicsLinks = [
    { href: '/academics', label: 'Overview & Autonomy' },
    { href: '/academics#undergraduate', label: 'Undergraduate (B.E)' },
    { href: '/academics#postgraduate', label: 'Postgraduate (M.Tech)' },
  ];

  const departmentsLinks = [
    { href: '/departments/cse', label: 'Computer Science (CSE)' },
    { href: '/departments/ise', label: 'Information Science (ISE)' },
    { href: '/departments/ece', label: 'Electronics & Comm (ECE)' },
    { href: '/departments/eee', label: 'Electrical & Electronics (EEE)' },
    { href: '/departments/me', label: 'Mechanical (ME)' },
    { href: '/departments/ce', label: 'Civil Engineering (CE)' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Utility Bar */}
      <div className="bg-mce-maroon text-white text-[11px] sm:text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+919449689093" className="flex items-center gap-1.5 hover:text-mce-gold transition">
              <Phone size={12} className="text-mce-gold" />
              <span>+91 9449689093</span>
            </a>
            <a href="mailto:office@mcehassan.ac.in" className="flex items-center gap-1.5 hover:text-mce-gold transition">
              <Mail size={12} className="text-mce-gold" />
              <span>office@mcehassan.ac.in</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white/40">|</span>
            <Link href="/admissions" className="font-bold hover:text-mce-gold transition uppercase tracking-wider text-[10px]">
              Admissions 2026
            </Link>
            <span className="text-white/40">|</span>
            <Link href="/admin" className="hover:text-mce-gold transition uppercase tracking-wider text-[10px]">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-gradient-to-r from-mce-navy to-mce-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 shadow-inner flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="MCE Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const textNode = document.createElement('span');
                      textNode.className = 'text-blue-950 font-black text-sm fallback-text';
                      textNode.innerText = 'MCE';
                      parent.appendChild(textNode);
                    }
                  }}
                />
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="font-black text-lg tracking-tight text-white">Malnad College</p>
                <p className="text-[11px] text-mce-gold font-bold uppercase tracking-wider">of Engineering</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-7">
              <Link href="/" className="hover:text-mce-gold transition font-semibold text-sm">
                Home
              </Link>
              <Link href="/about" className="hover:text-mce-gold transition font-semibold text-sm">
                About
              </Link>

              {/* Academics Dropdown */}
              <div className="relative py-4 group">
                <button className="flex items-center gap-1 group-hover:text-mce-gold font-semibold text-sm transition focus:outline-none">
                  Academics <ChevronDown size={14} className="group-hover:rotate-180 transition duration-300" />
                </button>
                <div className="absolute left-0 mt-1 w-56 rounded-xl bg-white text-gray-800 shadow-xl border border-gray-100 py-2 hidden group-hover:block transition duration-200">
                  {academicsLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2 text-xs font-semibold hover:bg-mce-navy/5 hover:text-mce-navy transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Departments Dropdown */}
              <div className="relative py-4 group">
                <button className="flex items-center gap-1 group-hover:text-mce-gold font-semibold text-sm transition focus:outline-none">
                  Departments <ChevronDown size={14} className="group-hover:rotate-180 transition duration-300" />
                </button>
                <div className="absolute left-0 mt-1 w-64 rounded-xl bg-white text-gray-800 shadow-xl border border-gray-100 py-2 hidden group-hover:block transition duration-200">
                  {departmentsLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2 text-xs font-semibold hover:bg-mce-navy/5 hover:text-mce-navy transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/admissions" className="hover:text-mce-gold transition font-semibold text-sm">
                Admissions
              </Link>
              <Link href="/placements" className="hover:text-mce-gold transition font-semibold text-sm">
                Placements
              </Link>
              <Link href="/gallery" className="hover:text-mce-gold transition font-semibold text-sm">
                Gallery
              </Link>
              <Link href="/news" className="hover:text-mce-gold transition font-semibold text-sm">
                News
              </Link>
              <Link href="/events" className="hover:text-mce-gold transition font-semibold text-sm">
                Events
              </Link>
              <Link href="/contact" className="hover:text-mce-gold transition font-semibold text-sm">
                Contact
              </Link>

              <Link
                href="/admissions"
                className="bg-mce-gold hover:bg-mce-gold-hover text-mce-navy font-bold px-4 py-2.5 rounded-lg text-xs tracking-wider uppercase transition shadow-md"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden pb-6 px-4 space-y-2 border-t border-white/10 bg-mce-navy py-4 animate-slide-down max-h-[85vh] overflow-y-auto">
            <Link
              href="/"
              className="block px-4 py-2.5 hover:bg-white/10 rounded-lg transition text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2.5 hover:bg-white/10 rounded-lg transition text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            {/* Academics mobile expandable */}
            <div className="border-b border-white/5 pb-2">
              <p className="px-4 py-1 text-xs font-bold uppercase text-mce-gold tracking-widest mt-2">Academics</p>
              {academicsLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="block px-6 py-2 hover:bg-white/5 rounded-lg text-xs font-medium text-blue-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Departments mobile expandable */}
            <div className="border-b border-white/5 pb-2">
              <p className="px-4 py-1 text-xs font-bold uppercase text-mce-gold tracking-widest mt-2">Departments</p>
              {departmentsLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="block px-6 py-2 hover:bg-white/5 rounded-lg text-xs font-medium text-blue-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/admissions"
              className="block px-4 py-2.5 hover:bg-white/10 rounded-lg transition text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Admissions
            </Link>
            <Link
              href="/placements"
              className="block px-4 py-2.5 hover:bg-white/10 rounded-lg transition text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Placements
            </Link>
            <Link
              href="/gallery"
              className="block px-4 py-2.5 hover:bg-white/10 rounded-lg transition text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/news"
              className="block px-4 py-2.5 hover:bg-white/10 rounded-lg transition text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link
              href="/events"
              className="block px-4 py-2.5 hover:bg-white/10 rounded-lg transition text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2.5 hover:bg-white/10 rounded-lg transition text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 px-4">
              <Link
                href="/admissions"
                className="block text-center bg-mce-gold hover:bg-mce-gold-hover text-mce-navy font-bold py-3 rounded-xl transition"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
