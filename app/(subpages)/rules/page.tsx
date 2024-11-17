"use client"
import { useState } from 'react'; // Import useState
import SideMenu from "../../sideMenu";
import Link from 'next/link';

interface Site {
  id: number;
  name: string;
  url: string;
  description: string;
}

export default function Rules() {
  const resourcesSites: Site[] = [
    { id: 1, name: "Competition Manual", url: "https://ftc-resources.firstinspires.org/file/ftc/game/manual", description: "Definition of rules" },
    { id: 2, name: "Q&A", url: "https://ftc-qa.firstinspires.org", description: "Clarification on rules" },
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
    <div className="min-h-screen w-screen bg-stone-200 dark:bg-gray-900 text-gray-900 dark:text-zinc-200 flex transition duration-300">
      <div className="fixed top-0 left-0 z-10 w-16 md:w-64 transition-width duration-300">
        <SideMenu />
      </div>
      <div className="ml-16 md:ml-64 p-5 md:p-10 w-full">
        <h2 className="text-5xl font-bold text-stone-900 dark:text-zinc-100 mb-4">Team Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {resourcesSites.map((site, index) => (
            <div
              key={site.id}
              className={`w-full group max-w-xs mx-auto transition-all duration-300 text-center ${openSite === index ? "row-span-2" : ""}`}
            >
              {/* Indigo Section with Dropdown Button */}
              <div
                className={`relative w-full bg-indigo-700 text-white text-center py-10 px-4 ${openSite === index ? "rounded-t-md" : "rounded-md"} flex items-center justify-between`}
              >
                <Link href={site.url}>
                  <span className="text-xl font-extrabold tracking-tight opacity-100 w-full md:group-hover:opacity-0 md:text-center">{site.name}</span>
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-75 opacity-0 md:group-hover:opacity-100 flex items-center justify-center rounded-md transition duration-300">
                    <div className="text-center z-20 text-white p-4 max-w-xs">
                      <h4 className="text-lg font-semibold">{site.name}</h4>
                      <p className="text-sm">{new URL(site.url).hostname}</p> {/* Display hostname */}
                      <p className="text-xs mt-2">{site.description}</p>
                    </div>
                  </div>
                </Link>
                <button
                  className="absolute right-0 h-full w-12 flex items-center justify-center md:hidden bg-indigo-700 hover:bg-indigo-800 rounded-r-md"
                  onClick={() => toggleDropdown(index)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Dropdown Content */}
              <div
                className={`transition-all duration-300 overflow-hidden ${openSite === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
                style={{ maxHeight: openSite === index ? "200px" : "0px" }}
              >
                <div
                  className="bg-gray-800 text-white p-4 rounded-b-md border-t-2 border-indigo-700"
                >
                  <h4 className="text-lg font-semibold">{site.name}</h4>
                  <p className="text-sm">{site.url}</p>
                  <p className="text-xs mt-2">{site.description}</p>
                </div>
              </div>
            </div>         
          ))}
        </div>
      </div>
    </div>
  );
}
