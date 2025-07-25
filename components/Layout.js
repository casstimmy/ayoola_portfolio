import TopBar from "./TopBar";
import LeftPanel from "./LeftPanel";
import RightNav from "./RightNav";
import BottomBar from "./BottomBar";
import RisingParticles from "./RisingParticles";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen w-full text-white font-sans overflow-hidden flex flex-col">
      <TopBar />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        <img
          src="/asset/background3.jpg"
          alt="Background"
          className="w-full h-full object-cover transform scale-[1.05] saturate-[1.1] brightness-95 contrast-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(0, 255, 255, 0.05), rgba(0, 255, 255, 0.15))",
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/20" />

        {/* ✨ Particles rising upward */}
        <RisingParticles />
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 h-full">
        <LeftPanel />
        <main className="flex-1 overflow-y-auto">{children}</main>
        <RightNav />
      </div>

      <BottomBar />
    </div>
  );
}
