import { FaUserGroup, FaRegEnvelope } from "react-icons/fa6";
import { AiFillSetting, AiFillProduct } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TopBar() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 gap-4 md:gap-0"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      {/* Profile Info */}
      <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto backdrop-blur shadow-md border-b md:border-b-0 md:border-r-4 border-neutral-700 pb-2 md:pb-0 md:pr-6">
        <div className="relative w-14 h-14 md:w-16 md:h-16">
          <Image
            src="/asset/about_img1.jpg"
            alt="Avatar"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md border border-cyan-400 shadow-lg"
          />
        </div>

        <div className="space-y-1">
          <span
            className="font-bold tracking-widest text-sm md:text-lg uppercase"
            style={{
              WebkitTextStroke: "0.2px white",
              WebkitTextFillColor: "#22d3ee",
            }}
          >
            Ayoola_Ayo
          </span>

          {/* Level + XP bar */}
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-xs px-2 py-1 rounded-md bg-gradient-to-r from-cyan-600 to-cyan-400 text-black font-bold shadow-sm border border-cyan-200">
              LV. 85
            </span>

            <div className="relative w-28 md:w-32 h-2 rounded-full bg-neutral-700 overflow-hidden shadow-inner">
              <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-300 to-cyan-500 animate-xp w-[85%] shadow-[0_0_6px_#facc15]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Icons */}
      <div className="flex gap-5 md:gap-6 items-center text-white text-2xl md:text-3xl w-full md:w-auto justify-center md:justify-end">
        {[AiFillProduct, FaRegEnvelope, FaUserGroup, AiFillSetting].map(
          (Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.3, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-cyan-400 hover:text-white transition duration-300 drop-shadow-[0_0_6px_#06b6d4] hover:drop-shadow-[0_0_12px_#22d3ee] p-2 rounded-full hover:bg-white/10"
            >
              <Icon className="w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
}
