import SideMenu from "../../sideMenu";
import Link from 'next/link'

export default function Home() {
  return (
   <div className="min-h-screen bg-stone-200 text-gray-900 dark:bg-gray-900 dark:text-zinc-200">
    <div className="fixed top-0 left-0 z-10 h-screen w-64">
      <SideMenu />
    </div>
    <div className="absolute left-64 p-10 text-2xl">
      <table className="table-auto border-collapse border border-slate-500">
        <thead>
          <tr className="text-2xl font-bold bg-stone-300 dark:bg-slate-700">
            <th className="px-2 border border-slate-600">Name</th>
            <th className="px-2 border border-slate-600">Link</th>
            <th className="px-2 border border-slate-600">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://ftc-resources.firstinspires.org/file/ftc/game/manual">Competition Manual</Link></td>
            <td className="px-2 border border-slate-700 underline"><Link href="https://ftc-resources.firstinspires.org/file/ftc/game/manual">firstinspires.org</Link></td>  
            <td className="px-2 border border-slate-700 ">Definition of rules.</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://ftc-qa.firstinspires.org">Q&A</Link></td>
            <td className="px-2 border border-slate-700 underline"><Link href="https://ftc-qa.firstinspires.org">firstinspires.org</Link></td>
            <td className="px-2 border border-slate-700 ">Clarification on rules.</td>
          </tr>

        </tbody>
      </table>
    </div>
   </div>
  );
}
