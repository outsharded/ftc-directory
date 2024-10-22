import SideMenu from "../../sideMenu";
import Link from 'next/link'

export default function Home() {
  return (
   <div className="min-h-screen bg-stone-200 text-gray-900 dark:bg-gray-900 dark:text-zinc-200">
    <div className="fixed top-0 left-0 z-10 h-screen w-64">
      <SideMenu />
    </div>
    <div className="absolute left-64 p-10 text-2xl">
    <h2 className="text-3xl font-bold py-2">General</h2>
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
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://ftc-docs.firstinspires.org/en/latest/programming_resources/blocks/Blocks-Tutorial.html">FTC Docs (Blocks Tutorial)</Link></td>
            <td className="px-2 border border-slate-700  underline"><Link href="https://ftc-docs.firstinspires.org/en/latest/programming_resources/blocks/Blocks-Tutorial.html">ftc-docs.firstinspires.org</Link></td>  
            <td className="px-2 border border-slate-700 ">Starter guide to blocks programming</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="px-2 border border-slate-700 font-bold"><Link href="https://cookbook.dairy.foundation">Cookbook</Link></td>
            <td className="px-2 border border-slate-700  underline"><Link href="https://cookbook.dairy.foundation">cookbook.dairy.foundation</Link></td>  
            <td className="px-2 border border-slate-700 ">Common issues</td>
          </tr>
        </tbody>
      </table>

      <div className="h-5"></div>

      <h2 className="text-3xl font-bold py-2">Advanced (Android Studio)</h2>
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
              <td className="px-2 border border-slate-700 font-bold"><Link href="https://www.ctrlaltftc.com">CTRL ALT FTC</Link></td>
              <td className="px-2 border border-slate-700  underline"><Link href="https://www.ctrlaltftc.com">ctrlaltftc.com</Link></td>  
              <td className="px-2 border border-slate-700 ">Motor control and control theory.</td>
            </tr>
            <tr>
              <td className="px-2 border border-slate-700  font-bold"><Link href="https://rr.brott.dev">Road Runner</Link></td>
              <td className="px-2 border border-slate-700 underline"><Link href="https://rr.brott.dev">rr.brott.dev</Link></td>
              <td className="px-2 border border-slate-700 ">Utility to assist with pathing in autonomous.</td>
            </tr>
            <tr>
              <td className="px-2 border border-slate-700  font-bold"><Link href="https://github.com/rh-robotics/MeepMeep">Meep Meep</Link></td>
              <td className="px-2 border border-slate-700  underline"><Link href="https://github.com/rh-robotics/MeepMeep">github.com</Link></td>
              <td className="px-2 border border-slate-700 ">Visualise RoadRunner paths.</td>
            </tr>
            <tr>
              <td className="px-2 border border-slate-700  font-bold"><Link href="https://acmerobotics.github.io/ftc-dashboard/">Dashboard</Link></td>
              <td className="px-2 border border-slate-700  underline"><Link href="https://acmerobotics.github.io/ftc-dashboard/">acmerobotics.github.io</Link></td>
              <td className="px-2 border border-slate-700 ">Live data from robot.</td>
            </tr>
            <tr>
              <td className="px-2 border border-slate-700  font-bold"><Link href="https://github.com/Eeshwar-Krishnan/PhotonFTC">Photon</Link></td>
              <td className="px-2 border border-slate-700  underline"><Link href="https://github.com/Eeshwar-Krishnan/PhotonFTC">github.com</Link></td>
              <td className="px-2 border border-slate-700 ">Library to speed up loop times.</td>
            </tr>
            <tr>
              <td className="px-2 border border-slate-700  font-bold"><Link href="https://docs.dairy.foundation/introduction">Dairy</Link></td>
              <td className="px-2 border border-slate-700  underline"><Link href="https://docs.dairy.foundation/introduction">dairy.foundation</Link></td>
              <td className="px-2 border border-slate-700 ">Libraries for FTC</td>
            </tr>
            <tr>
              <td className="px-2 border border-slate-700  font-bold"><Link href="https://docs.ftclib.org/ftclib">FTCLib</Link></td>
              <td className="px-2 border border-slate-700  underline"><Link href="https://docs.ftclib.org/ftclib">ftclib.org</Link></td>
              <td className="px-2 border border-slate-700 ">Libraries for FTC</td>
            </tr>
          </tbody>
        </table>

        <div className="h-5"></div>
        
        <h2 className="text-3xl font-bold py-2">Advanced (Android Studio) - Vision</h2>
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
              <td className="px-2 border border-slate-700 font-bold"><Link href="https://deltacv.gitbook.io/eocv-sim">EOCV-Sim</Link></td>
              <td className="px-2 border border-slate-700  underline"><Link href="https://deltacv.gitbook.io/eocv-sim">deltacv.gitbook.io</Link></td>  
              <td className="px-2 border border-slate-700 ">Very useful tool in testing and creating vision pipelines.</td>
            </tr>
            <tr>
              <td className="px-2 border border-slate-700  font-bold"><Link href="https://ftc-docs.firstinspires.org/en/latest/programming_resources/vision/vision_overview/vision-overview.html#">FTC Docs (Outdated)</Link></td>
              <td className="px-2 border border-slate-700 underline"><Link href="https://ftc-docs.firstinspires.org/en/latest/programming_resources/vision/vision_overview/vision-overview.html#">firstinspires.org</Link></td>
              <td className="px-2 border border-slate-700 ">Basics of how the camera system works, but somewhat outdated.</td>
            </tr>
            <tr>
              <td className="px-2 border border-slate-700  font-bold"><Link href="https://github.com/deltacv/PaperVision">PaperVision (Alpha, Very Unstable)</Link></td>
              <td className="px-2 border border-slate-700  underline"><Link href="https://github.com/deltacv/PaperVision">github.com</Link></td>
              <td className="px-2 border border-slate-700 ">Visual system to create vision pipelines.</td>
            </tr>
          </tbody>
        </table>
    </div>
   </div>
  );
}
