import TopBar from "./TopBar";
import LeftPanel from "./LeftPanel";
import RightNav from "./RightNav";
import BottomBar from "./BottomBar";
import RisingParticles from "./RisingParticles";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen w-full text-white font-sans overflow-hidden flex flex-col">
      <TopBar />

      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        <Image
          src="/asset/background3.jpg"
          alt="Background"
          fill
          className="object-cover transform scale-[1.05] saturate-[1.1] brightness-95 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/5 to-cyan-400/10" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/20" />
        <RisingParticles />
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 h-full relative">
        <div className="backdrop-blur-md z-20">
          <LeftPanel />
        </div>

        <main className="flex-1 overflow-y-auto px-4 md:px-6 py-6 z-10">
          {children}
        </main>

        <div className="backdrop-blur-md z-20">
          <RightNav />
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
