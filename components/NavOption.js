import { motion } from "framer-motion";

export default function NavOption({ icon, label, index, onClick }) {
  return (
    <motion.div
      className="relative group flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut",
      }}
      onClick={() => onClick(label)}
    >
      {/* Pulsing Dot */}
      <div className="w-1 h-1 rounded-full bg-white animate-ping absolute left-[-0.2px] top-1/2 -translate-y-1/2"></div>

      {/* Icon inside Fancy Hexagon */}
      <motion.div className="relative group flex flex-col items-center hover:scale-105 transition-transform duration-200">
        <div className="absolute w-20 h-20 rounded-full bg-cyan-400 opacity-10 blur-xl group-hover:opacity-20 transition" />

        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
          className="relative z-10 p-2"
        >
          <div className="relative flex items-center justify-center w-14 h-14">
            <svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full fill-black transition-all drop-shadow-md"
            >
              <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" />
            </svg>
            <svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full stroke-white group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] transition-all"
            >
              <polygon
                points="50,5 95,27 95,73 50,95 5,73 5,27"
                strokeWidth="4"
                fill="none"
              />
            </svg>
            <svg
              viewBox="0 0 100 100"
              className="absolute w-[85%] h-[85%] stroke-gray-400 transition-all"
            >
              <polygon
                points="50,5 95,27 95,73 50,95 5,73 5,27"
                strokeWidth="4"
                fill="none"
                strokeDasharray="35,30"
                strokeLinejoin="round"
              />
            </svg>

            <div className="text-white text-lg z-10">{icon}</div>
          </div>
        </motion.div>

        {/* Tooltip (Only one retained) */}
        <div className="absolute cursor-pointer right-19 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-150 transition-all duration-300 origin-right bg-black/70 text-white text-sm px-2 py-1 rounded shadow-lg border border-white group-hover:border-gray-300 font-semibold whitespace-nowrap">
          {label}
        </div>
      </motion.div>
    </motion.div>
  );
}
