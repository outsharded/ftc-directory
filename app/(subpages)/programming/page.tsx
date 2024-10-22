import SideMenu from "../../sideMenu";
import Link from 'next/link'

export default function Home() {
  return (
   <div className="min-h-screen bg-gray-900">
    <div className="fixed top-0 left-0 z-10 h-screen w-64">
      <SideMenu />
    </div>
    <div className="absolute left-64 p-10 text-2xl">
    <h2 className="text-3xl font-bold py-2">Beginner (Blocks)</h2>
      <table className="table-auto border-collapse border border-slate-500">
        <thead>
          <tr className="text-2xl font-bold bg-slate-700">
            <th className="p-2 border border-slate-600">Name</th>
            <th className="p-2 border border-slate-600">Link</th>
            <th className="p-2 border border-slate-600">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 border border-slate-700 font-bold">FTC Docs</td>
            <td className="px-2 border border-slate-700  underline"><Link href="https://ftc-docs.firstinspires.org/en/latest/programming_resources/blocks/Blocks-Tutorial.html">ftc-docs.firstinspires.org</Link></td>  
            <td className="px-2 border border-slate-700 ">Starter guide to blocks programming</td>
          </tr>
        </tbody>
      </table>
      <div className="h-5
      "></div>
      <h2 className="text-3xl font-bold py-2">Advanced (Android Studio) - Motor Control</h2>
      <table className="table-auto border-collapse border border-slate-500">
        <thead>
          <tr className="text-2xl font-bold bg-slate-700">
            <th className="p-2 border border-slate-600">Name</th>
            <th className="p-2 border border-slate-600">Link</th>
            <th className="p-2 border border-slate-600">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 border border-slate-700 font-bold">CTRL ALT FTC</td>
            <td className="px-2 border border-slate-700  underline"><Link href="https://www.ctrlaltftc.com">ctrlaltftc.com</Link></td>  
            <td className="px-2 border border-slate-700 ">Motor control and control theory.</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700  font-bold">Road Runner</td>
            <td className="px-2 border border-slate-700 underline"><Link href="https://rr.brott.dev">rr.brott.dev</Link></td>
            <td className="px-2 border border-slate-700 ">Utility to assist with pathing in autonomous.</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700  font-bold">Meep Meep</td>
            <td className="px-2 border border-slate-700  underline"><Link href="https://github.com/rh-robotics/MeepMeep">github.com</Link></td>
            <td className="px-2 border border-slate-700 ">Visualise RoadRunner paths.</td>
          </tr>
        </tbody>
      </table>
    </div>
   </div>
  );
}
