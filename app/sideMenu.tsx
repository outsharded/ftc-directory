"use client";

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
    <div
      className={`bg-zinc-50 text-gray-900 dark:bg-gray-800 min-h-screen transition-all duration-300 ${
        isMenuOpen ? 'w-52' : 'w-16'
      } md:w-52`}
    >
      {/* Mobile Menu Button */}
      <div className={`md:hidden absolute left-2 top-2 z-30`}>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Logo */}
      <div className={`md:block fixed w-16 md:w-24 left-0 bottom-0 z-10 p-2 md:top-0 md:left-0`}>
        <Link href="/" passHref>
          <Image
            src={logo}
            alt="Powercut Robotics Team Logo"
            className={`w-16 md:w-24`}
            priority
          />
        </Link>
      </div>

      {/* Menu Content */}
      <div
        className={`md:block absolute top-24 md:top-24 left-0 w-full p-2 z-20 ${
          isMenuOpen ? 'block' : 'hidden md:block'
        } transition duration-300`}
      >
        <nav className="w-48">
          <div className="text-2xl font-bold w-full">
            {['teams', 'programming', 'design', 'vendors', 'rules'].map((link) => (
              <div key={link} className="py-1">
                <Link
                  href={`/${link}`}
                  className="block py-2 px-3 text-gray-900 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-gray-700 rounded-md"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
