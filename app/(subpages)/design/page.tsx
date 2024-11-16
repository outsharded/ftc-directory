"use client"
import { useState } from 'react'; // Import useState
import SideMenu from "../../sideMenu";
import Link from 'next/link';

export default function Home() {
  // Define the sections with unique IDs for each row
  const guidesSites = [
    { id: 1, name: "Linear Motion", url: "https://gm0.org/en/latest/docs/common-mechanisms/linear-motion-guide/index.html", description: "Advice on linear motion mechanisms" },
    { id: 2, name: "Drivetrains", url: "https://gm0.org/en/latest/docs/common-mechanisms/drivetrains/index.html", description: "Advice on drivetrain design" },
    { id: 3, name: "Silicone Molding", url: "https://linktr.ee/openflap_openmold", description: "Advice on molding silicone" },
  ];

  const toolsSites = [
    { id: 4, name: "Onshape", url: "https://www.onshape.com/en/", description: "Cloud based CAD software with a free plan for students and teachers. Common in FTC." }
  ];

  const onshapePartsSites = [
    { id: 5, name: "Simplified Parts Library", url: "https://cad.onshape.com/documents/d9be4433b7029ab5b4f75f10/w/1a5d73ef77f67b265c6b7836/e/2590571e0cdeb7a0d86b4935", description: "Simplified parts for faster performance." },
    { id: 6, name: "Pulley Gen", url: "https://cad.onshape.com/documents/a116695750b054564ac11cbb/w/2025d9645023834db075348e/e/87987a3f29f6075a645ceb7b", description: "3D Printable Pulleys." },
    { id: 7, name: "Belt Gen", url: "https://cad.onshape.com/documents/c163c756b5096bcd95e5692a/w/44c5f14084d55dd0388345f0/e/cf391d827826f30c60340bcc", description: "Generator for timing belts." },
    { id: 8, name: "Misumi Slide Insert", url: "https://cad.onshape.com/documents/4f3446e64b18f76af4773a36/w/84d84ca5d4800093934b8589/e/afcb59626f0f14a756e1ca55", description: "Generator for inserts for using MISUMI SAR2/3xx slides." },
    { id: 9, name: "Intake Centre Generator", url: "https://cad.onshape.com/documents/0267c13a508c61819e4973b4/w/670e913cf8aec1a5d4745c33/e/1dd12bd2829f9d7d9aa8783a", description: "Generator for mounting tube to an axle to intake." },
  ];
  
  const vendorsSites = [
    { id: 10, name: "REV Robotics", url: "https://www.revrobotics.com", description: "Common build system. Makes the control hub." },
    { id: 11, name: "GoBilda", url: "https://www.gobilda.com", description: "Common build system. Makes viper slides." },
    { id: 12, name: "AndyMark", url: "https://www.andymark.com", description: "Common build system. Makes the game field." },
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

        {/* Guides Section */}
        <h2 className="text-3xl font-bold text-stone-900 dark:text-zinc-100 mb-4">Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {renderSites(guidesSites)}
        </div>

        <div className="h-10"></div>

        {/* Tools Section */}
        <h2 className="text-3xl font-bold text-stone-900 dark:text-zinc-100 mb-4">Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {renderSites(toolsSites)}
        </div>

        <div className="h-10"></div>

        {/* Onshape Parts Section */}
        <h2 className="text-3xl font-bold text-stone-900 dark:text-zinc-100 mb-4">Onshape Parts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {renderSites(onshapePartsSites)}
        </div>

        <div className="h-10"></div>

{/* Vendors Section */}
        <h2 className="text-3xl font-bold text-stone-900 dark:text-zinc-100 mb-4">Vendors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {renderSites(vendorsSites)}
        </div>
      </div>
    </div>
  );
}
