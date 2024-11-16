"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/favicon.png';

const SideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`bg-neutral-400 text-gray-900 dark:bg-gray-800 min-h-screen transition-all duration-300 ${isMenuOpen ? 'w-52' : 'w-16'} md:w-52`}>
      {/* Mobile Menu Button */}
      <div className={`md:hidden absolute left-2 top-2 z-30`}>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Logo - Mobile Positioning */}
      <div className={`md:block absolute left-0 bottom-20 z-10 p-2 md:top-0 md:left-0`}>
        <Image src={logo} alt="Powercut Robotics Team Logo" className={`w-16 md:w-24`} />
      </div>

      {/* Menu Content - Absolute positioning */}
      <div className={`md:block absolute top-24 md:top-24 left-0 w-full p-2 z-20 ${isMenuOpen ? 'block' : 'hidden md:block'} transition duration-300`}>
        <nav className="w-48">
          <div className="text-2xl font-bold w-full">
            <div className="py-1">
              <Link href="/" className="block py-2 px-3 text-gray-900 dark:text-zinc-200 hover:bg-gray-700 rounded-md">
                General
              </Link>
            </div>
            <div className="py-1">
              <Link href="/programming" className="block py-2 px-3 text-gray-900 dark:text-zinc-200 hover:bg-gray-700 rounded-md">
                Programming
              </Link>
            </div>
            <div className="py-1">
              <Link href="/design" className="block py-2 px-3 text-gray-900 dark:text-zinc-200 hover:bg-gray-700 rounded-md">
                Design
              </Link>
            </div>
            <div className="py-1">
              <Link href="/rules" className="block py-2 px-3 text-gray-900 dark:text-zinc-200 hover:bg-gray-700 rounded-md">
                Rules
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
