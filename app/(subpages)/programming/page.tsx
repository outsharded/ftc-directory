"use client"
import { useState } from 'react'; // Import useState
import SideMenu from "../../sideMenu";
import Link from 'next/link';

export default function PageName() {
  // Define the sites for the page, grouped by category with unique IDs
  const generalSites = [
    { id: 1, name: "FTC Docs (Blocks)", url: "https://ftc-docs.firstinspires.org/en/latest/programming_resources/blocks/Blocks-Tutorial.html", description: "Starter guide to blocks programming" },
    { id: 2, name: "Cookbook", url: "https://cookbook.dairy.foundation", description: "Common issues" }
  ];

  const advancedSites = [
    { id: 3, name: "CTRL ALT FTC", url: "https://www.ctrlaltftc.com", description: "Motor control and control theory." },
    { id: 4, name: "Road Runner", url: "https://rr.brott.dev", description: "Utility to assist with pathing in autonomous." },
    { id: 5, name: "Meep Meep", url: "https://github.com/rh-robotics/MeepMeep", description: "Visualise RoadRunner paths." },
    { id: 6, name: "Dashboard", url: "https://acmerobotics.github.io/ftc-dashboard/", description: "Live data from robot." },
    { id: 7, name: "Photon", url: "https://github.com/Eeshwar-Krishnan/PhotonFTC", description: "Library to speed up loop times." },
    { id: 8, name: "Dairy", url: "https://docs.dairy.foundation/introduction", description: "Libraries for FTC" },
    { id: 9, name: "FTCLib", url: "https://docs.ftclib.org/ftclib", description: "Libraries for FTC" }
  ];

  const visionSites = [
    { id: 10, name: "EOCV-Sim", url: "https://deltacv.gitbook.io/eocv-sim", description: "Very useful tool in testing and creating vision pipelines." },
    { id: 11, name: "FTC Docs (Outdated)", url: "https://ftc-docs.firstinspires.org/en/latest/programming_resources/vision/vision_overview/vision-overview.html#", description: "Basics of how the camera system works, but somewhat outdated." },
    { id: 12, name: "PaperVision (Alpha)", url: "https://github.com/deltacv/PaperVision", description: "Visual system to create vision pipelines." }
  ];

  const [openDropdown, setOpenDropdown] = useState<number | null>(null); // Track the ID of the open dropdown

  const toggleDropdown = (id: number) => {
    setOpenDropdown((prevState) => (prevState === id ? null : id)); // Toggle dropdown based on ID
  };

  const renderSites = (sites: { id: number, name: string, url: string, description: string }[]) => {
    return sites.map((site) => (
      <div key={site.id} className="relative group w-full max-w-xs mx-auto">
        <Link href={site.url} passHref>
          <div className="bg-indigo-700 text-white text-center py-10 px-4 rounded-md cursor-pointer hover:bg-indigo-800 transition duration-300 w-full">
            <span className="text-xl font-extrabold tracking-tight opacity-100 md:group-hover:opacity-0">{site.name}</span>
            {/* Hover overlay with background box */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-75 opacity-0 md:group-hover:opacity-100 flex items-center justify-center rounded-md transition duration-300">
              <div className="text-center z-20 text-white p-4 max-w-xs">
                <h4 className="text-lg font-semibold">{site.name}</h4>
                <p className="text-sm">{new URL(site.url).hostname}</p> {/* Display hostname */}
                <p className="text-xs mt-2">{site.description}</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Mobile Dropdown Button */}
        <button
          className={`absolute top-0 right-0 text-white bg-indigo-700 hover:bg-indigo-800 h-full w-12 rounded-r flex items-center justify-center md:hidden`}
          onClick={() => toggleDropdown(site.id)} // Use unique ID to toggle dropdown
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Mobile Dropdown Content */}
        {openDropdown === site.id && ( // Only show dropdown for the clicked site by checking ID
          <div className="absolute w-full z-20 bg-gray-800 text-white p-4 rounded-b-md transition duration-300">
            <h4 className="text-lg font-semibold">{site.name}</h4>
            <p className="text-sm">{new URL(site.url).hostname}</p> {/* Display hostname */}
            <p className="text-xs mt-2">{site.description}</p>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="min-h-screen w-screen bg-stone-200 dark:bg-gray-900 text-gray-900 dark:text-zinc-200 flex">
      <div className="fixed top-0 left-0 z-10 w-16 md:w-64 transition-width duration-300">
        <SideMenu />
      </div>
      <div className="ml-16 md:ml-64 p-5 md:p-10 w-full">
        
        {/* General Section */}
        <h2 className="text-3xl font-bold text-stone-900 dark:text-zinc-100 mb-4">General</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {renderSites(generalSites)}
        </div>

        <div className="h-10"></div>

        {/* Advanced (Android Studio) Section */}
        <h2 className="text-3xl font-bold text-stone-900 dark:text-zinc-100 mb-4">Advanced (Android Studio)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {renderSites(advancedSites)}
        </div>

        <div className="h-10"></div>

        {/* Advanced (Vision) Section */}
        <h2 className="text-3xl font-bold text-stone-900 dark:text-zinc-100 mb-4">Advanced (Android Studio) - Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {renderSites(visionSites)}
        </div>
      </div>
    </div>
  );
}
