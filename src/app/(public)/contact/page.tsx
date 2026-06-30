'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mce-navy to-mce-navy-light text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-black mb-4">Contact Admissions</h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              Get in touch with Malnad College of Engineering helpdesk. We are here to support your query.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm">
                <span className="text-mce-maroon font-bold text-xs uppercase tracking-widest block mb-2">
                  Find Us
                </span>
                <h3 className="text-2xl font-black text-mce-navy mb-8">Office Contacts</h3>
                
                <div className="space-y-6 text-sm">
                  <div className="flex gap-4">
                    <MapPin className="text-mce-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-extrabold text-mce-navy mb-1 text-[13px] uppercase tracking-wider">Address</h4>
                      <p className="text-gray-500 font-semibold leading-relaxed">
                        Malnad College of Engineering<br />
                        Hassan, Karnataka - 573202<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 border-t border-gray-50 pt-4">
                    <Phone className="text-mce-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-extrabold text-mce-navy mb-1 text-[13px] uppercase tracking-wider">Admissions Helpdesk</h4>
                      <p className="text-gray-500 font-semibold">+91 9449689093</p>
                    </div>
                  </div>

                  <div className="flex gap-4 border-t border-gray-50 pt-4">
                    <Mail className="text-mce-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-extrabold text-mce-navy mb-1 text-[13px] uppercase tracking-wider">Email Support</h4>
                      <p className="text-gray-500 font-semibold">office@mcehassan.ac.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-2xl border border-gray-150 shadow-sm"
            >
              <span className="text-mce-maroon font-bold text-xs uppercase tracking-widest block mb-2">
                Get In Touch
              </span>
              <h3 className="text-2xl font-black text-mce-navy mb-8">Send Us a Direct Message</h3>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3.5 rounded-xl font-semibold mb-6 text-sm">
                  ✔ Message sent successfully! Our helpdesk officers will respond to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 text-sm font-semibold text-gray-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-mce-navy shadow-inner"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-mce-navy shadow-inner"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-mce-navy shadow-inner"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-mce-navy shadow-inner"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-gray-400 uppercase tracking-wider">Message Description</label>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-mce-navy resize-none shadow-inner"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-mce-navy hover:bg-mce-navy-light text-white px-6 py-4 rounded-xl font-bold transition disabled:opacity-50 flex items-center justify-center gap-2 shadow-md uppercase tracking-wider text-xs mt-4"
                >
                  <Send size={16} />
                  {loading ? 'Sending Request...' : 'Send Query Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
