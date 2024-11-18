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

export default function Programming() {
  const generalSites: Site[] = [
    { id: 1, name: "FTC Docs (Blocks)", url: "https://ftc-docs.firstinspires.org/en/latest/programming_resources/blocks/Blocks-Tutorial.html", description: "Starter guide to blocks programming" },
    { id: 2, name: "Cookbook", url: "https://cookbook.dairy.foundation", description: "Common issues" }
  ];

  const advancedSites: Site[] = [
    { id: 3, name: "CTRL ALT FTC", url: "https://www.ctrlaltftc.com", description: "Motor control and control theory." },
    { id: 4, name: "Road Runner", url: "https://rr.brott.dev", description: "Utility to assist with pathing in autonomous." },
    { id: 5, name: "Meep Meep", url: "https://github.com/rh-robotics/MeepMeep", description: "Visualise RoadRunner paths." },
    { id: 6, name: "Dashboard", url: "https://acmerobotics.github.io/ftc-dashboard/", description: "Live data from robot." },
    { id: 7, name: "Photon", url: "https://github.com/Eeshwar-Krishnan/PhotonFTC", description: "Library to speed up loop times." },
    { id: 8, name: "Dairy", url: "https://docs.dairy.foundation/introduction", description: "Libraries for FTC" },
    { id: 9, name: "FTCLib", url: "https://docs.ftclib.org/ftclib", description: "Libraries for FTC" }
  ];

  const visionSites: Site[] = [
    { id: 10, name: "EOCV-Sim", url: "https://deltacv.gitbook.io/eocv-sim", description: "Very useful tool in testing and creating vision pipelines." },
    { id: 11, name: "FTC Docs (Outdated)", url: "https://ftc-docs.firstinspires.org/en/latest/programming_resources/vision/vision_overview/vision-overview.html#", description: "Basics of how the camera system works, but somewhat outdated." },
    { id: 12, name: "PaperVision (Alpha)", url: "https://github.com/deltacv/PaperVision", description: "Visual system to create vision pipelines." }
  ];

  const [openSite, setOpenSite] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    if (openSite === id) {
      setOpenSite(null); // Close if already open
    } else {
      setOpenSite(id); // Open the clicked site
    }
  };

  const renderSites = (sites: Site[]) => {
    return sites.map((site, index) => (
      <div
        key={index}
        className={`w-full group max-w-xs mx-auto transition-all duration-300 text-center ${openSite === site.id ? "row-span-2" : ""}`}
      >
        {/* Indigo Section with Dropdown Button */}
        <div
          className={`relative w-11/12 md:w-full bg-powercut_pink text-white text-center py-10 px-4 ${openSite === site.id ? "rounded-t-md" : "rounded-md"} flex items-center justify-between`}
        >
          <Link href={site.url}>
            <span className="text-xl font-extrabold tracking-tight opacity-100 w-full md:group-hover:opacity-0 md:text-center">{site.name}</span>
            <div className="absolute inset-0 bg-opacity-25 bg-gray-800 dark:bg-opacity-75 opacity-0 md:group-hover:opacity-100 flex items-center justify-center rounded-md transition duration-300">
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
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-zinc-100 mb-4">Programming</h2>
        
        {/* General Sites Section */}
        <h3 className="text-2xl font-semibold text-stone-900 dark:text-zinc-200 mb-4">General Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {renderSites(generalSites)}
        </div>

        {/* Advanced Sites Section */}
        <h3 className="text-2xl font-semibold text-stone-900 dark:text-zinc-200 mt-10 mb-4">Advanced Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {renderSites(advancedSites)}
        </div>

        {/* Vision Sites Section */}
        <h3 className="text-2xl font-semibold text-stone-900 dark:text-zinc-200 mt-10 mb-4">Vision Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {renderSites(visionSites)}
        </div>
      </div>
    </div>
  );
}
