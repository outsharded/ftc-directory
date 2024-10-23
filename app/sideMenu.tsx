"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../public/favicon.png'
const SideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`bg-neutral-400 text-gray-900 dark:bg-gray-800 min-h-screen min-w-screen dark:text-zinc-200 ${isMenuOpen ? 'w-64' : 'w-16'} md:w-64`}>
       <div className={`md:hidden absolute left-2 top-1`}>
          <button id='menu' aria-label="menu" onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

      <div className={`basis-1/2 flex items-center ${isMenuOpen ? 'hidden' : ''}`}>
        <Image src={logo} alt="Powercut Robotics Team Logo" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw" className={`absolute top-12 md:top-1 w-16 md:w-24 p-2`}/>
        <h1 className={`absolute left-24 top-4 px-2 text-3xl font-bold align-middle invisible md:visible ${isMenuOpen ? 'invisible' : ''}`}>FTC Directory</h1>  
      </div>
      <div className="md:basis-3/5 justify-start w-full le">
        <div className={`absolute p-5 w-full md:w-auto md:top-24 ${isMenuOpen ? 'top-10' : 'hidden md:flex'}`}>
          <nav className={`nav ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
            <div className="text-2xl font-bold">
            <div className='py-1'>
              <Link href="/" className="p-2 hover:bg-gray-700 hover:border border-powercut_pink_contrast rounded outline-1" prefetch={true}>
                General
              </Link>
            </div> 
            <div className='py-1'>
              <Link href="/programming" className="p-2 hover:bg-gray-700 hover:border border-powercut_pink_contrast rounded outline-1" prefetch={true}>
                Programming
              </Link>
            </div>     
            <div className='py-1'>
              <Link href="/rules" className="p-2 hover:bg-gray-700 hover:border border-powercut_pink_contrast rounded outline-1" prefetch={true}>
                Rules
              </Link> 
            </div>
            <div className='py-1'>
              <Link href="/design" className="p-2 hover:bg-gray-700 hover:border border-powercut_pink_contrast rounded outline-1" prefetch={true}>
                Design
              </Link>
            </div>              
            </div>
          </nav>
          
        </div>
 
      </div>
      </div>
  );
};

export default SideMenu;
