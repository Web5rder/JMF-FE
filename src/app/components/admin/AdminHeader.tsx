'use client';

import { ADMIN_TEXT, ALERT_TEXT } from '@/app/constants/admin';
import { useUser } from '@/app/hooks/useUser';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function AdminHeader({ isActive }: AdminHeaderProps) {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user && user.result && user.result.is_admin === false) {
      alert(ALERT_TEXT[8]);
      router.push('/');
    }
  }, [user, router]);

  const handleActiveChange = (page: string) => {
    router.push(`?page=${page}`);
  };

  return (
    <header className="bg-gray-0 p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <div
          className={`px-4 py-2 font-extrabold cursor-pointer ${isActive === 'quotation' ? 'bg-primary-1 text-white' : 'bg-white'}`}
          onClick={() => handleActiveChange('quotation')}
        >
          {ADMIN_TEXT[2]}
        </div>
        <div
          className={`px-4 py-2 font-extrabold cursor-pointer ${isActive === 'client' ? 'bg-primary-1 text-white' : 'bg-white'}`}
          onClick={() => handleActiveChange('client')}
        >
          {ADMIN_TEXT[0]}
        </div>
        <div
          className={`px-4 py-2 font-extrabold cursor-pointer ${isActive === 'product' ? 'bg-primary-1 text-white' : 'bg-white'}`}
          onClick={() => handleActiveChange('product')}
        >
          {ADMIN_TEXT[1]}
        </div>
        <div
          className={`px-4 py-2 font-extrabold cursor-pointer ${isActive === 'notices' ? 'bg-primary-1 text-white' : 'bg-white'}`}
          onClick={() => handleActiveChange('notices')}
        >
          {ADMIN_TEXT[3]}
        </div>
        <div
          className={`px-4 py-2 font-extrabold cursor-pointer ${isActive === 'faq' ? 'bg-primary-1 text-white' : 'bg-white'}`}
          onClick={() => handleActiveChange('faq')}
        >
          {ADMIN_TEXT[4]}
        </div>
      </div>
    </header>
  );
}
