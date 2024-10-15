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
    <div className={`bg-gray-800 h-screen text-zinc-200 ${isMenuOpen ? 'w-64' : 'w-24'}`}>

      <div className={`basis-1/2 flex items-center ${isMenuOpen ? 'hidden' : ''}`}>
      <Image src={logo} alt="Powercut Robotics Team Logo" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw" className='w-24 p-4'/>
        <h1 className={`absloute left-32 px-2 text-3xl font-bold align-middle ${isMenuOpen ? 'hidden' : ''}`}>FTC Directory</h1>
        
      </div>
      <div className="md:basis-3/5 justify-start w-full le">
        <div className={`p-5 w-full lg:w-auto ${isMenuOpen ? '' : 'hidden lg:flex'}`}>
          <nav className={`nav ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="text-2xl font-bold">
            <div className='py-1'>
              <Link href="/" className="p-2 hover:bg-gray-700 rounded outline-1" prefetch={true}>
                General
              </Link>
            </div> 
            <div className='py-1'>
              <Link href="/programming" className="p-2 hover:bg-gray-700 rounded outline-1" prefetch={true}>
                Programming
              </Link>
            </div>     
            <div className='py-1'>
              <Link href="/rules" className="p-2 hover:bg-gray-700 rounded outline-1" prefetch={true}>
                Rules
              </Link> 
            </div>
            <div className='py-1'>
              <Link href="/cad" className="p-2 hover:bg-gray-700 rounded outline-1" prefetch={true}>
                CAD
              </Link>
            </div>              
            </div>
          </nav>
          
        </div>
        <div className="lg:hidden absolute top-8 right-4">
          <button id='menu' aria-label="menu" onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      </div>
  );
};

export default SideMenu;
