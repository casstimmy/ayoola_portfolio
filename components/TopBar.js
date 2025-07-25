import { FaUserGroup, FaRegEnvelope } from "react-icons/fa6";
import { AiFillSetting, AiFillProduct } from "react-icons/ai";

import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <motion.div
      className="flex items-center justify-between px-6 py-4 "
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      {/* Profile Info */}
      <div className="flex items-center gap-4 pr-6 backdrop-blur  shadow-md border-r-4 border-neutral-700">
       <div className="bg-cyan-500/20 h-18 w-18 rounded-sm flex items-center justify-center">
  <img
    src="/asset/about_img1.jpg"
    alt="Avatar"
    className="w-15 h-15 rounded-md border border-cyan-400 shadow-lg"
  />
</div>

        
       <div className="space-y-1">
  {/* Username */}
 <span
  className="font-bold tracking-widest text-lg uppercase"
  style={{
    WebkitTextStroke: '0.2px white',
    WebkitTextFillColor: '#22d3ee',
  }}
>
  Ayoola_Ayo
</span>



  {/* Level + XP bar */}
  <div className="flex items-center gap-3">
    {/* Level Badge */}
    <span className="text-xs px-2 py-1 rounded-md bg-gradient-to-r from-cyan-600 to-cyan-400 text-black font-bold shadow-sm border border-cyan-200">
      LV. 85
    </span>

    {/* XP Bar */}
    <div className="relative w-32 h-2 rounded-full bg-neutral-700 overflow-hidden shadow-inner">
      <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-300 to-cyan-500 animate-xp w-[85%] shadow-[0_0_6px_#facc15]"></div>
    </div>
  </div>
</div>
      </div>

      {/* Action Icons */}
<div className="flex gap-6 items-center text-white text-3xl">
  {[AiFillProduct, FaRegEnvelope, FaUserGroup, AiFillSetting].map((Icon, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.3, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer text-cyan-400 hover:text-white transition duration-300 drop-shadow-[0_0_6px_#06b6d4] hover:drop-shadow-[0_0_12px_#22d3ee] p-2 rounded-full hover:bg-white/10"
    >
      <Icon className="w-8 h-8" /> {/* You can increase w/h to w-9 h-9 or w-10 h-10 if needed */}
    </motion.div>
  ))}
</div>


    </motion.div>
  );
}
