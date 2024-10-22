import SideMenu from "../../sideMenu";
import Link from 'next/link'

export default function Home() {
  return (
   <div className="min-h-screen bg-stone-200 text-gray-900 dark:bg-gray-900 dark:text-zinc-200">
    <div className="fixed top-0 left-0 z-10 h-screen w-64">
      <SideMenu />
    </div>
    <div className="absolute left-64 p-10 text-2xl">

    <h2 className="text-3xl font-bold py-2">Guides</h2>
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
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://gm0.org/en/latest/docs/common-mechanisms/linear-motion-guide/index.html">Linear Motion</Link></td>
            <td className="px-2 border border-slate-700 underline"><Link href="https://gm0.org/en/latest/docs/common-mechanisms/linear-motion-guide/index.html">gm0.org</Link></td>  
            <td className="px-2 border border-slate-700 ">Advice on linear motion mechanisms</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://gm0.org/en/latest/docs/common-mechanisms/drivetrains/index.html">Drivetrains</Link></td>
            <td className="px-2 border border-slate-700 underline"><Link href="https://gm0.org/en/latest/docs/common-mechanisms/drivetrains/index.html">gm0.org</Link></td>  
            <td className="px-2 border border-slate-700 ">Advice on drivetrain design</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://linktr.ee/openflap_openmold">Silcone Molding</Link></td>
            <td className="px-2 border border-slate-700 underline"><Link href="https://linktr.ee/openflap_openmold">linktr.ee</Link></td>  
            <td className="px-2 border border-slate-700 ">Advice on molding silicone</td>
          </tr>
        </tbody>
      </table>

      <div className="h-5"></div>

    <h2 className="text-3xl font-bold py-2">Tools</h2>
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
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://www.onshape.com/en/">Onshape</Link></td>
            <td className="px-2 border border-slate-700 underline"><Link href="https://www.onshape.com/en/">onshape.com</Link></td>  
            <td className="px-2 border border-slate-700 ">Cloud based CAD software with a free plan for students ands teachers. Common in FTC.</td>
          </tr>
        </tbody>
      </table>

      <div className="h-5"></div>
      
      <h2 className="text-3xl font-bold py-2">Onshape Parts</h2>
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
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://cad.onshape.com/documents/d9be4433b7029ab5b4f75f10/w/1a5d73ef77f67b265c6b7836/e/2590571e0cdeb7a0d86b4935">Simplifed Parts Library</Link></td>
            <td className="px-2 border border-slate-700 underline"><Link href="https://cad.onshape.com/documents/d9be4433b7029ab5b4f75f10/w/1a5d73ef77f67b265c6b7836/e/2590571e0cdeb7a0d86b4935">onshape.com</Link></td>  
            <td className="px-2 border border-slate-700 ">Simplified parts for faster performance.</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://cad.onshape.com/documents/a116695750b054564ac11cbb/w/2025d9645023834db075348e/e/87987a3f29f6075a645ceb7b">Pulley Gen</Link></td>
            <td className="px-2 border border-slate-700 underline"><Link href="https://cad.onshape.com/documents/a116695750b054564ac11cbb/w/2025d9645023834db075348e/e/87987a3f29f6075a645ceb7b">onshape.com</Link></td>
            <td className="px-2 border border-slate-700 ">3D Printable Pulleys.</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://cad.onshape.com/documents/c163c756b5096bcd95e5692a/w/44c5f14084d55dd0388345f0/e/cf391d827826f30c60340bcc">Belt Gen</Link></td>
            <td className="px-2 border border-slate-700 underline"><Link href="https://cad.onshape.com/documents/c163c756b5096bcd95e5692a/w/44c5f14084d55dd0388345f0/e/cf391d827826f30c60340bcc">onshape.com</Link></td>
            <td className="px-2 border border-slate-700 ">Generator for timing belts.</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://cad.onshape.com/documents/4f3446e64b18f76af4773a36/w/84d84ca5d4800093934b8589/e/afcb59626f0f14a756e1ca55">Misumi Slide Insert</Link></td>
            <td className="px-2 border border-slate-700 underline"><Link href="https://cad.onshape.com/documents/4f3446e64b18f76af4773a36/w/84d84ca5d4800093934b8589/e/afcb59626f0f14a756e1ca55">onshape.com</Link></td>
            <td className="px-2 border border-slate-700 ">Generator for inserts for using MISUMI SAR2/3xx slides.</td>
          </tr>
          <tr>
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://cad.onshape.com/documents/0267c13a508c61819e4973b4/w/670e913cf8aec1a5d4745c33/e/1dd12bd2829f9d7d9aa8783a">Intake Centre Generator</Link></td>
            <td className="px-2 border border-slate-700 underline"><Link href="https://cad.onshape.com/documents/0267c13a508c61819e4973b4/w/670e913cf8aec1a5d4745c33/e/1dd12bd2829f9d7d9aa8783a">onshape.com</Link></td>
            <td className="px-2 border border-slate-700 ">Generator for mounting tube to an axle to intake.</td>
          </tr>
          
        </tbody>
      </table>
    </div>
   </div>
  );
}
