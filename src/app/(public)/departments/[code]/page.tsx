'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, ChevronLeft, Calendar, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function DepartmentDetail() {
  const params = useParams();
  const router = useRouter();
  const code = (params?.code as string)?.toUpperCase();

  const deptData: Record<string, any> = {
    CSE: {
      name: 'Computer Science & Engineering',
      established: 1983,
      intake: 180,
      facultyCount: 28,
      labsCount: 8,
      hod: 'Dr. Ramesh B.',
      description: 'The Department of Computer Science & Engineering is committed to shaping engineering professionals with sound technical skills, research mindset, and high ethical values in Computing Sciences.',
      labs: ['Advanced Computing Lab', 'AI & Machine Learning Lab', 'Cloud Computing Lab', 'Network Simulation Lab'],
      subjects: ['Data Structures & Algorithms', 'Database Management Systems', 'Design and Analysis of Algorithms', 'Artificial Intelligence & ML', 'Computer Networks']
    },
    ISE: {
      name: 'Information Science & Engineering',
      established: 1999,
      intake: 120,
      facultyCount: 18,
      labsCount: 5,
      hod: 'Dr. Geetha M. N.',
      description: 'The Department of Information Science & Engineering offers excellent training in modern software engineering, cloud infrastructure, database management, and cybersecurity, bridging academic concepts with industry practices.',
      labs: ['Database Systems Lab', 'Software Engineering Lab', 'Web Technology Lab', 'Cybersecurity Research Lab'],
      subjects: ['Web Technologies', 'Software Engineering', 'Big Data Analytics', 'Operating Systems', 'Data Mining']
    },
    ECE: {
      name: 'Electronics & Communication Engineering',
      established: 1971,
      intake: 120,
      facultyCount: 24,
      labsCount: 7,
      hod: 'Dr. S. K. Prasad',
      description: 'Offering state-of-the-art training in VLSI design, signal processing, embedded systems, and communication hardware. The department prepares students for hardware and telecommunication industries.',
      labs: ['VLSI & HDL Lab', 'Digital Signal Processing Lab', 'Analog Electronics Lab', 'Microcontroller & Embedded Lab'],
      subjects: ['Analog & Digital Electronics', 'Microcontrollers', 'VLSI Design', 'Digital Signal Processing', 'Electromagnetics & Antennas']
    },
    EEE: {
      name: 'Electrical & Electronics Engineering',
      established: 1960,
      intake: 60,
      facultyCount: 16,
      labsCount: 6,
      hod: 'Dr. Anantha Krishna',
      description: 'One of the founding departments of the college, training students in power systems, electrical machinery, control systems, and industrial automation.',
      labs: ['Electrical Machines Lab', 'Power Electronics Lab', 'Control Systems Lab', 'High Voltage Engineering Lab'],
      subjects: ['Power System Analysis', 'Electrical Machines', 'Control Systems', 'Power Electronics', 'Renewable Energy Sources']
    },
    ME: {
      name: 'Mechanical Engineering',
      established: 1960,
      intake: 60,
      facultyCount: 22,
      labsCount: 9,
      hod: 'Dr. C. S. Venkatesh',
      description: 'A founding department offering rich training in thermal engineering, machine design, CAD/CAM, fluid power, and manufacturing technology.',
      labs: ['CIM & Robotics Lab', 'Heat Transfer Lab', 'Material Testing Lab', 'Fluid Mechanics Lab'],
      subjects: ['Thermodynamics', 'Design of Machine Elements', 'Fluid Mechanics', 'CAD/CAM', 'Manufacturing Processes']
    },
    CE: {
      name: 'Civil Engineering',
      established: 1960,
      intake: 60,
      facultyCount: 20,
      labsCount: 7,
      hod: 'Dr. H. S. Narayana',
      description: 'Established in 1960, the department trains students in structural engineering, geotechnical survey, hydraulics, environmental engineering, and modern GIS/CAD tools.',
      labs: ['Geotechnical Engineering Lab', 'Surveying Laboratory', 'Concrete & Highway Lab', 'Environmental Engineering Lab'],
      subjects: ['Strength of Materials', 'Structural Analysis', 'Geotechnical Engineering', 'Concrete Technology', 'Environmental Engineering']
    }
  };

  const dept = deptData[code];

  if (!dept) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-2xl font-bold text-mce-navy mb-4">Department Not Found</h2>
        <p className="text-gray-500 mb-8">The requested department code does not exist in our academic database.</p>
        <Link href="/academics" className="bg-mce-navy text-white px-6 py-3 rounded-lg font-bold transition">
          Back to Academics
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-mce-navy to-mce-navy-light text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-1.5 text-xs text-blue-200 hover:text-mce-gold font-bold uppercase tracking-wider mb-6 transition"
          >
            <ChevronLeft size={16} /> Back to previous page
          </button>
          <span className="bg-mce-gold text-mce-navy px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider">
            {code} Department
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 leading-tight tracking-tight">
            {dept.name}
          </h1>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: 'Established', value: dept.established },
              { label: 'Yearly Intake', value: `${dept.intake} seats` },
              { label: 'Core Faculty', value: `${dept.facultyCount} members` },
              { label: 'Advanced Labs', value: `${dept.labsCount} facilities` }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-2xl font-extrabold text-mce-maroon">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Overview & Core Syllabus */}
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-150 shadow-sm">
                <h2 className="text-2xl font-black text-mce-navy mb-6">Department Overview</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                  {dept.description}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Operating with academic autonomy granted by VTU and UGC, our syllabus is formulated in sync with industry boards. Our graduates are equipped with deep theoretical fundamentals and hands-on laboratory experience.
                </p>
              </div>

              {/* Core Subjects */}
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-150 shadow-sm">
                <h2 className="text-2xl font-black text-mce-navy mb-6">Autonomous Curriculum Focus</h2>
                <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                  Key core courses taught by our department under the VTU Outcome Based Education (OBE) model:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dept.subjects.map((sub: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100 text-sm">
                      <CheckCircle2 size={18} className="text-mce-gold flex-shrink-0" />
                      <span className="text-gray-700 font-semibold">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Details: HOD, Labs, CTA */}
            <div className="space-y-8">
              {/* HOD Info */}
              <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm text-center">
                <div className="w-20 h-20 bg-mce-navy/5 text-mce-navy rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                  <Users size={36} className="text-mce-gold" />
                </div>
                <h3 className="font-extrabold text-lg text-mce-navy">{dept.hod}</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Head of Department</p>
                <div className="w-10 h-0.5 bg-mce-maroon mx-auto mt-4 mb-4" />
                <p className="text-xs text-gray-500 leading-relaxed">
                  "Welcome to our department portal. Our goal is to train students to excel in research, logic building, and ethical engineering principles."
                </p>
              </div>

              {/* Lab details */}
              <div className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm">
                <h3 className="font-black text-lg text-mce-navy mb-6 border-b border-gray-50 pb-3 flex items-center gap-2">
                  <BookOpen size={18} className="text-mce-gold" /> Laboratory Centers
                </h3>
                <ul className="space-y-3.5 text-xs font-bold text-gray-600">
                  {dept.labs.map((lab: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-mce-maroon flex-shrink-0 mt-1.5" />
                      <span>{lab}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admissions CTA */}
              <div className="bg-gradient-to-br from-mce-maroon to-red-800 text-white p-8 rounded-2xl shadow-lg text-center">
                <h3 className="font-black text-lg mb-2">Want to Join this Department?</h3>
                <p className="text-red-100 text-xs leading-relaxed mb-6">
                  Check out the KCET / COMEDK cutoff ranks and fee structure for the {code} branch.
                </p>
                <Link href="/admissions" className="block bg-mce-gold hover:bg-mce-gold-hover text-mce-navy font-bold py-3.5 rounded-xl shadow text-xs uppercase tracking-wider transition">
                  Explore Admissions
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
