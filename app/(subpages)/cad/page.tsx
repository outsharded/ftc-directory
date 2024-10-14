import SideMenu from "../../sideMenu";
import Link from 'next/link'

export default function Home() {
  return (
   <div className="min-h-screen bg-gray-900">
    <div className="fixed top-0 left-0 z-10 h-screen w-64">
      <SideMenu />
    </div>
    <div className="absolute left-64 p-10 text-2xl">
      <table className="table-auto border-collapse border border-slate-500">
        <thead>
          <tr className="text-3xl font-bold bg-slate-700">
            <th className="p-2 border border-slate-600">Name</th>
            <th className="p-2 border border-slate-600">Link</th>
            <th className="p-2 border border-slate-600">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 border border-slate-700 font-bold">Onshape</td>
            <td className="px-2 border border-slate-700 "><Link href="https://www.onshape.com/en/">onshape.com</Link></td>  
            <td className="px-2 border border-slate-700 ">Cloud based CAD software with a free plan for students ands teachers. Common in FTC</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700 ">Portfolio Archive</td>
            <td className="px-2 border border-slate-700"><Link href="https://portfolios.hivemindrobotics.net">portfolios.hivemindrobotics.net</Link></td>
            <td className="px-2 border border-slate-700 ">The Eagles</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700 ">FTC Scout</td>
            <td className="px-2 border border-slate-700 "><Link href="https://ftcscout.org/">ftcscout.org</Link></td>
            
            <td className="px-2 border border-slate-700 ">Get information about teams and events</td>
          </tr>
        </tbody>
      </table>
    </div>
   </div>
  );
}
