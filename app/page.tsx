"use client"
import { useState } from 'react'; // Import useState
import SideMenu from "./sideMenu";
import Link from 'next/link';

interface Site {
  name: string;
  url: string;
  description: string;
}

export default function Home() {
  const sites: Site[] = [
    { name: "FTC Discord", url: "https://discord.com/invite/first-tech-challenge/", description: "Community of students in FTC. Exceptionally useful." },
    { name: "Game Manual 0", url: "https://gm0.org/", description: "Information on almost all aspects of FTC." },
    { name: "FTC Docs", url: "https://ftc-docs.firstinspires.org/", description: "Information on many aspects of the competition, from FIRST." },
    { name: "Portfolio Archive", url: "https://portfolios.hivemindrobotics.net", description: "An archive of award winning Engineering Portfolios." },
    { name: "FTC Scout", url: "https://ftcscout.org/", description: "Information about teams and events." },
    { name: "Cookbook", url: "https://cookbook.dairy.foundation", description: "Common issues" }
  ];

  const [openSite, setOpenSite] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    if (openSite === index) {
      setOpenSite(null); // Close if already open
    } else {
      setOpenSite(index); // Open the clicked site
    }
  };

  return (
    <div className="min-h-screen w-screen bg-stone-200 dark:bg-gray-900 text-gray-900 dark:text-zinc-200 flex">
      <div className="fixed top-0 left-0 z-10 w-16 md:w-64 transition-width duration-300">
        <SideMenu />
      </div>
      <div className="ml-16 md:ml-64 p-5 md:p-10 w-full">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-zinc-100 mb-4">General</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {sites.map((site, index) => (
            <div key={index} className="relative group w-full max-w-xs mx-auto">
              <Link href={site.url}>
                <div className="bg-indigo-700 text-white text-center py-10 px-4 rounded-md cursor-pointer hover:bg-indigo-800 transition duration-300">
                  <span className="text-xl opacity-100 md:group-hover:opacity-0 font-extrabold tracking-tight transition duration-300">{site.name}</span>
                  {/* Hover overlay with background box */}
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-75 opacity-0 md:group-hover:opacity-100 flex items-center justify-center rounded-md transition duration-300">
                    <div className="text-center text-white p-4 max-w-xs">
                      <h4 className="text-lg font-semibold">{site.name}</h4>
                      <p className="text-sm">{site.url}</p>
                      <p className="text-xs mt-2">{site.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Mobile Dropdown Button */}
              <button
                className={`absolute top-0 right-0 text-white bg-indigo-700 hover:bg-indigo-800 h-full w-12 rounded-r flex items-center justify-center md:hidden`} 
                onClick={() => toggleDropdown(index)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Mobile Dropdown Content */}
              {openSite === index && (
                <div className="z-20 absolute w-full bg-gray-800 text-white p-4 rounded-b-md transition duration-300">
                  <h4 className="text-lg font-semibold">{site.name}</h4>
                  <p className="text-sm">{site.url}</p>
                  <p className="text-xs mt-2">{site.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
