import TopBar from "./TopBar";
import LeftPanel from "./LeftPanel";
import RightNav from "./RightNav";
import BottomBar from "./BottomBar";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen w-full text-white font-sans overflow-hidden flex flex-col">
      <TopBar />

      {/* Background Video */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover animate-fade-in"
        >
          <source src="/asset/background.mp4" type="video/mp4" />
          <source src="/asset/background.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-blue/60 backdrop-blur-xs" />
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
