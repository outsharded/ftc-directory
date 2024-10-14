import Image from "next/image";
import SideMenu from "../../sideMenu";

export default function Home() {
  return (
   <div className="min-h-screen bg-gray-900">
    <div className="fixed top-0 left-0 z-10 h-screen w-64">
      <SideMenu />
    </div>
   </div>
  );
}
