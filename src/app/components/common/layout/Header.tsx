'use client';

import { HEADER_TEXT } from '@/app/constants/common';
import { useUser } from '@/app/hooks/useUser';
import { HeaderCartIcon, HeaderHeartIcon } from '@/app/ui/iconPath';
import Image from 'next/image';
import Link from 'next/link';
import HeaderSearchBar from '../HeaderSearchBar';
import Icons from '../Icons';
import ProfileDropDown from '../ProfileDropDown';
import { usePathname } from 'next/navigation';

function Header() {
  const { user } = useUser();

  const pathname = usePathname();
  const showSearchBar = !pathname.startsWith('/sign-in');

  const handleLogout = async () => {
    document.cookie = `accessToken=; expires=0; path=/;`;
    window.location.href = '/';
  };

  const isClient = user?.category === 'CLIENT';
  const isCOMMON = user?.category === 'COMMON';

  return (
    <div className="absolute w-full pt-6 bg-white">
      <header className="relative w-full h-16 flex items-center px-[15%] justify-between">
        <div className="flex gap-x-2 cursor-pointer text-[#306317] text-2xl font-bold items-center">
          <Image src="/Images/JMF2.png" width={60} height={48} alt="logo" />
          <Link href="/">{HEADER_TEXT[0]}</Link>
        </div>
        {showSearchBar && <HeaderSearchBar />}
        {isClient || isCOMMON ? (
          <div className="flex gap-x-[54px]">
            <Link href="/">
              <Icons name={HeaderHeartIcon} hoverFill="#306317" />
            </Link>
            <ProfileDropDown user={user} logout={handleLogout} />
            <Link href="/pastorder">
              <Icons name={HeaderCartIcon} hoverFill="#306317" />
            </Link>
          </div>
        ) : (
          <div className="flex text-[14px] font-normal">
            <Link href="/sign-in/sign-up" className="w-[68px]">
              {HEADER_TEXT[1]}
            </Link>
            <Link href="/sign-in" className="w-[68px]">
              {HEADER_TEXT[2]}
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
