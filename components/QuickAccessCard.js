import { FiUser } from "react-icons/fi";
import { AiOutlineProject } from "react-icons/ai";
import { MdEngineering } from "react-icons/md";

const iconMap = {
  Projects: <AiOutlineProject className="text-cyan-400 text-xl" />,
  Experience: <MdEngineering className="text-cyan-400 text-xl" />,
  "Tech Stack": <FiUser className="text-cyan-400 text-xl" />,
};

export default function QuickAccessCard({ title, image, new: isNew, tier }) {
  return (
    <div className="group relative w-64 p-4 rounded-xl border border-cyan-500/40 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur shadow-sm hover:shadow-cyan-500/60 transition-transform duration-300 hover:scale-105 animate-fade-in">
      <img
        src={image}
        alt={title}
        className="w-full h-28 object-cover rounded-lg mb-3 border border-white/10"
      />

      <div className="flex items-center gap-2 mb-1">
        {iconMap[title]}
        <h3 className="text-cyan-300 font-bold text-base tracking-widest uppercase">
          {title}
        </h3>
      </div>

      {isNew && (
        <span className="absolute top-2 right-2 text-[10px] font-bold text-black bg-cyan-300 px-2 py-0.5 rounded-full animate-pulse shadow-sm uppercase">
          NEW
        </span>
      )}

      {tier && (
        <span className="absolute bottom-2 right-2 text-[10px] font-semibold text-purple-100 bg-purple-700/60 px-2 py-0.5 rounded-full">
          Tier {tier}
        </span>
      )}

      {/* Glowing animated border */}
      <div className="absolute -inset-0.5 rounded-xl bg-cyan-500 opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300"></div>
    </div>
  );
}
