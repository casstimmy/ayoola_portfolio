"use client";

import { motion } from "framer-motion";

export default function CharacterPreview() {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="relative z-20 group w-[280px] h-[500px]"
    >
      {/* Glow Circle */}
      <div className="absolute inset-0 rounded-full blur-xl bg-cyan-500 opacity-30 animate-pulse" />

      {/* Replace Image with 3D Model */}
   <div className="relative z-10 w-full h-full overflow-visible">

</div>


      {/* Floating Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-2 rounded-full shadow-lg border border-cyan-500 hidden group-hover:block"
      >
        Need help?
      </motion.div>
    </motion.div>
  );
}
