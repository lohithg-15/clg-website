'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isLoginPage = pathname === '/admin/login';
    const token = localStorage.getItem('adminToken');
    const user = localStorage.getItem('adminUser');

    if (isLoginPage) {
      setAuthorized(true);
      return;
    }

    if (!token || !user) {
      setAuthorized(false);
      router.replace('/admin/login');
    } else {
      setAuthorized(true);
    }
  }, [pathname, router]);

  // Prevent flashing private admin console content during verification redirect
  if (!authorized && pathname !== '/admin/login') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="text-gray-400 font-bold text-xs uppercase tracking-wider animate-pulse mb-2">
          Verifying Credentials...
        </div>
        <div className="text-gray-300 text-[10px] font-medium">Please wait, checking authorization.</div>
      </div>
    );
  }

  return <>{children}</>;
}
