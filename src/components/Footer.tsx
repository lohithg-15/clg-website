'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t-4 border-mce-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* About MCE */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden flex-shrink-0">
                <img src="/logo.png" alt="MCE Logo" className="object-contain w-full h-full" />
              </div>
              <div>
                <h3 className="font-extrabold text-base tracking-tight text-white leading-tight">MCE Hassan</h3>
                <p className="text-[10px] text-mce-gold uppercase tracking-wider font-bold">Autonomous Inst.</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-semibold">
              Malnad College of Engineering, Hassan is an autonomous engineering institution established in 1960, affiliated with VTU, Belagavi, and accredited by NAAC with an A+ Grade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
              Academics
            </h3>
            <ul className="space-y-3.5 text-xs font-semibold">
              <li><Link href="/academics" className="text-gray-400 hover:text-mce-gold transition">Overview & Autonomy</Link></li>
              <li><Link href="/academics#undergraduate" className="text-gray-400 hover:text-mce-gold transition">Undergraduate (B.E)</Link></li>
              <li><Link href="/academics#postgraduate" className="text-gray-400 hover:text-mce-gold transition">Postgraduate (M.Tech)</Link></li>
              <li><Link href="/placements" className="text-gray-400 hover:text-mce-gold transition">Placement Statistics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
              Contact Helpdesk
            </h3>
            <ul className="space-y-3.5 text-xs font-semibold text-gray-400">
              <li className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-mce-gold flex-shrink-0 mt-0.5" />
                <span>Salagame Road, Hassan,<br />Karnataka 573202</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone size={16} className="text-mce-gold flex-shrink-0" />
                <span>+91 9449689093</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail size={16} className="text-mce-gold flex-shrink-0" />
                <span>office@mcehassan.ac.in</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
              Connect With Us
            </h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed font-semibold">
              Follow our official social media channels to stay updated on placements, fests, and research achievements.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/search/top/?q=Malnad%20College%20of%20Engineering" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-mce-gold hover:text-mce-navy flex items-center justify-center transition shadow-md">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/mcehassan" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-mce-gold hover:text-mce-navy flex items-center justify-center transition shadow-md">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/explore/tags/mcehassan/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-mce-gold hover:text-mce-navy flex items-center justify-center transition shadow-md">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/school/malnad-college-of-engineering-hassan/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-mce-gold hover:text-mce-navy flex items-center justify-center transition shadow-md">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-gray-500">
          <p>© 2026 Malnad College of Engineering, Hassan. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms & Conditions</Link>
            <Link href="/admin" className="text-mce-gold hover:text-white transition">Admin login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
