import SideMenu from "./sideMenu";
import Link from 'next/link'

export default function Home() {
  return (
   <div className="min-h-screen h-screen max-w-screen w-screen flex bg-stone-200 text-gray-900 dark:bg-gray-900 dark:text-zinc-200">
    <div className="fixed top-0 left-0 z-10 h-screen w-24 md:w-64">
      <SideMenu />
    </div>
    <div className="absolute left-16 md:left-64 p-3 md:p-10 text-2xl">
    <h2 className="text-3xl font-bold py-2">General</h2>
      <table className="table-auto border-collapse border border-slate-500">
        <thead>
          <tr className="text-2xl font-bold bg-stone-300 dark:bg-slate-700">
            <th className="px-2 border border-slate-600">Name</th>
            <th className="px-2 border hidden lg:table-cell border-slate-600">Link</th>
            <th className="px-2 border border-slate-600">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 border border-slate-700 underline md:no-underline font-bold"><Link href="https://discord.com/invite/first-tech-challenge/">FTC Discord</Link></td>
            <td className="px-2 border border-slate-700 hidden lg:table-cell underline"><Link href="https://discord.com/invite/first-tech-challenge/">discord.com</Link></td>
            <td className="px-2 border border-slate-700 hidden md:table-cell">Community of students in FTC. Exceptionally useful.</td>
            <td className="px-2 border border-slate-700 table-cell md:hidden">Student community.</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700 underline md:no-underline font-bold"><Link href="https://gm0.org/">Game Manual 0</Link></td>
            <td className="px-2 border border-slate-700 hidden lg:table-cell underline"><Link href="https://gm0.org/">gm0.org</Link></td>  
            <td className="px-2 border border-slate-700 hidden md:table-cell">Information on almost all aspects of FTC.</td>
            <td className="px-2 border border-slate-700 table-cell md:hidden">General information.</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700 underline md:no-underline font-bold"><Link href="https://ftc-docs.firstinspires.org/">FTC Docs</Link></td>
            <td className="px-2 border border-slate-700 hidden lg:table-cell underline"><Link href="https://ftc-docs.firstinspires.org/">ftc-docs.firstinspires.org</Link></td>
            <td className="px-2 border border-slate-700 hidden md:table-cell hover:table-cell">Information on many aspects of the competition, from FIRST.</td>
            <td className="px-2 border border-slate-700 table-cell md:hidden hover:hidden">General information.</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700 underline md:no-underline font-bold"><Link href="https://portfolios.hivemindrobotics.net">Portfolio Archive</Link></td>
            <td className="px-2 border border-slate-700 hidden lg:table-cell underline"><Link href="https://portfolios.hivemindrobotics.net">portfolios.hivemindrobotics.net</Link></td>
            <td className="px-2 border border-slate-700 hidden md:table-cell">An archive of award winning Engineering Portfolios.</td>
            <td className="px-2 border border-slate-700 table-cell md:hidden">Example Portfolios.</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700 underline md:no-underline font-bold"><Link href="https://ftcscout.org/">FTC Scout</Link></td>
            <td className="px-2 border border-slate-700 hidden lg:table-cell underline"><Link href="https://ftcscout.org/">ftcscout.org</Link></td>
            <td className="px-2 border border-slate-700 hidden md:table-cell">Information about teams and events.</td>
            <td className="px-2 border border-slate-700 table-cell md:hidden">Team information.</td>
          </tr>
        </tbody>
      </table>
    </div>
   </div>
  );
}

