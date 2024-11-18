"use client";
import { useState } from 'react'; // Import useState
import SideMenu from "../../sideMenu";
import Link from 'next/link';

interface Site {
  id: number;
  name: string;
  url: string;
  description: string;
}

export default function Vendors() {
  const buildSystems: Site[] = [
    { id: 1, name: "REV Robotics", url: "https://www.revrobotics.com", description: "Common build system. Makes the control hub." },
    { id: 2, name: "GoBilda", url: "https://www.gobilda.com", description: "Common build system. Makes viper slides." },
    { id: 3, name: "AndyMark", url: "https://www.andymark.com", description: "Common build system. Makes the game field." },
  ];

  const hardwareSites: Site[] = [
    { id: 4, name: "RS Components", url: "https://uk.rs-online.com/web/", description: "Lots of hardware." },
    { id: 5, name: "Misumi", url: "https://uk.misumi-ec.com", description: "Makes SAR2/3xx slides." },
    { id: 6, name: "CPC Farnel", url: "https://cpc.farnell.com", description: "General tinkering store." }
  ];

  const specialisedSuppliers: Site[] = [
    { id: 7, name: "Axon Robotics", url: "https://axon-robotics.com", description: "Sells strongest permitted servos." },
    { id: 8, name: "MelonBotics", url: "https://www.melonbotics.com", description: "Excellent value parts, high rpm servos." },
    { id: 9, name: "Optii", url: "https://optii.com.au/", description: "Highly popular odometry." },
    { id: 10, name: "Sparkfun", url: "https://www.sparkfun.com", description: "Electronics for FTC" }
  ];

  const resellers: Site[] = [
    { id: 11, name: "Plex Robotics", url: "https://plexrobotics.com/en", description: "Excellent for UK/European teams." },
  ];

  const [openSite, setOpenSite] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenSite(openSite === id ? null : id); // Toggle the dropdown
  };

  const renderSites = (sites: Site[]) => {
    return sites.map((site) => (
      <div
        key={site.id}
        className={`w-full group max-w-xs mx-auto transition-all duration-300 text-center ${openSite === site.id ? "row-span-2" : ""}`}
      >
        {/* Indigo Section with Dropdown Button */}
        <div
          className={`relative w-11/12 md:w-full bg-powercut_pink text-white text-center py-10 px-4 ${openSite === site.id ? "rounded-t-md" : "rounded-md"} flex items-center justify-between`}
        >
          <Link href={site.url}>
            <span className="text-xl font-extrabold tracking-tight opacity-100 w-full md:group-hover:opacity-0 md:text-center">{site.name}</span>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-25 dark:bg-opacity-75 opacity-0 md:group-hover:opacity-100 flex items-center justify-center rounded-md transition duration-300">
              <div className="text-center z-20 text-white p-4 max-w-xs">
                <h4 className="text-lg font-semibold">{site.name}</h4>
                <p className="text-sm">{new URL(site.url).hostname}</p> {/* Display hostname */}
                <p className="text-xs mt-2">{site.description}</p>
              </div>
            </div>
          </Link>
          <button
            className="absolute right-0 h-full w-12 flex items-center justify-center md:hidden bg-powercut_pink hover:bg-powercut_pink_contrast rounded-r-md"
            onClick={() => toggleDropdown(site.id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      
        {/* Dropdown Content */}
        <div
          className={`transition-all duration-300 overflow-hidden ${openSite === site.id ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
          style={{ maxHeight: openSite === site.id ? "200px" : "0px" }}
        >
          <div
            className="w-11/12 md:w-full bg-gray-600 dark:bg-gray-800 text-white p-4 rounded-b-md"
          >
            <h4 className="text-lg font-semibold">{site.name}</h4>
            <p className="text-sm">{new URL(site.url).hostname}</p>
            <p className="text-xs mt-2">{site.description}</p>
          </div>
        </div>
      </div>         
    ));
  };

  return (
    <div className="min-h-screen w-screen bg-zinc-100 dark:bg-gray-900 text-gray-900 dark:text-zinc-200 flex transition duration-300">
      <div className="fixed top-0 left-0 z-10 w-16 md:w-64 transition-width duration-300">
        <SideMenu />
      </div>
      <div className="ml-16 md:ml-64 p-5 md:p-10 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-zinc-100 mb-4">Vendors</h2>
        
        {/* Build Systems Section */}
        <h3 className="text-2xl font-semibold text-stone-900 dark:text-zinc-200 mb-4">Build Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {renderSites(buildSystems)}
        </div>

        {/* Hardware Sites Section */}
        <h3 className="text-2xl font-semibold text-stone-900 dark:text-zinc-200 mt-10 mb-4">Hardware Suppliers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {renderSites(hardwareSites)}
        </div>

        {/* Specialised Suppliers Section */}
        <h3 className="text-2xl font-semibold text-stone-900 dark:text-zinc-200 mt-10 mb-4">Specialised Suppliers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {renderSites(specialisedSuppliers)}
        </div>

        {/* Resellers Section */}
        <h3 className="text-2xl font-semibold text-stone-900 dark:text-zinc-200 mt-10 mb-4">Resellers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {renderSites(resellers)}
        </div>
      </div>
    </div>
  );
}
