'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/academics', label: 'Academics' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/placements', label: 'Placements' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-lg">MCE</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-lg">Malnad College</p>
              <p className="text-xs text-blue-200">of Engineering</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-blue-200 transition duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 hover:bg-blue-700 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
