import { PhoneCall, Mail, MessageSquareText } from "lucide-react";

export default function BottomBar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-10 px-12 py-5 bg-[#0d0d0d]/90 backdrop-blur-xl rounded-xl border-2 border-cyan-500 shadow-[0_0_30px_#06b6d4] z-50 animate-fade-in font-mono">
      {/* WhatsApp */}
      <a
        href="https://wa.me/234xxxxxxxxxx"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 text-cyan-300 hover:text-white hover:scale-110 transition-all duration-300 font-bold text-[14px] tracking-wider uppercase"
      >
        <MessageSquareText className="w-6 h-6 group-hover:animate-ping-slow text-cyan-400 group-hover:text-white drop-shadow-[0_0_8px_#00f0ff]" />
        <span className="group-hover:drop-shadow-[0_0_8px_white]">
          WhatsApp
        </span>
      </a>

      {/* Phone Call */}
      <a
        href="tel:+234xxxxxxxxxx"
        className="group flex items-center gap-4 text-cyan-300 hover:text-white hover:scale-110 transition-all duration-300 font-bold text-[14px] tracking-wider uppercase"
      >
        <PhoneCall className="w-6 h-6 group-hover:animate-ping-slow text-cyan-400 group-hover:text-white drop-shadow-[0_0_8px_#00f0ff]" />
        <span className="group-hover:drop-shadow-[0_0_8px_white]">
          Call
        </span>
      </a>

      {/* Email */}
      <a
        href="mailto:you@example.com"
        className="group flex items-center gap-4 text-cyan-300 hover:text-white hover:scale-110 transition-all duration-300 font-bold text-[14px] tracking-wider uppercase"
      >
        <Mail className="w-6 h-6 group-hover:animate-ping-slow text-cyan-400 group-hover:text-white drop-shadow-[0_0_8px_#00f0ff]" />
        <span className="group-hover:drop-shadow-[0_0_8px_white]">
          Email
        </span>
      </a>
    </div>
  );
}
