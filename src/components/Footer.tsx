'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">About MCE</h3>
            <p className="text-sm leading-relaxed">
              Malnad College of Engineering, Hassan - An autonomous institution established in 1960, affiliated with VTU.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/academics" className="hover:text-white transition">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition">Admissions</Link></li>
              <li><Link href="/placements" className="hover:text-white transition">Placements</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Hassan, Karnataka 573202</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 9449689093</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>office@mcehassan.ac.in</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 Malnad College of Engineering. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
