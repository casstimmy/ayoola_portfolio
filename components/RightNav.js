// components/RightNav.jsx
import NavOption from "./NavOption";
import {
  FaHome,
  FaUserAlt,
  FaCode,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

const options = [
  { label: "Home", icon: <FaHome size={18} />, path: "/" },
  { label: "About Me", icon: <FaUserAlt size={18} />, path: "/about" },
  { label: "Projects", icon: <FaCode size={18} />, path: "/projects" },
  { label: "Skills", icon: <FaTools size={18} />, path: "/skills" },
  { label: "Contact", icon: <FaEnvelope size={18} />, path: "/contact" },
];

const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function RightNav() {
  const [isZooming, setIsZooming] = useState(false);
  const router = useRouter();

  const handleClick = (label) => {
    const selected = options.find((opt) => opt.label === label);
    if (!selected) return;

    setIsZooming(true);

    // Wait for animation before routing
    setTimeout(() => {
      router.push(selected.path);
    }, 500); // match the zoom animation duration
  };

  return (
    <>
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-30"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative flex flex-col items-center gap-8"
          variants={containerVariants}
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-400 z-[-1]" />
          {options.map((opt, i) => (
            <motion.div key={i} variants={itemVariants}>
              <NavOption
                label={opt.label}
                icon={opt.icon}
                index={i}
                onClick={handleClick}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Zoom out overlay animation */}
     <AnimatePresence>
  {isZooming && (
    <motion.div
      className="fixed inset-0 z-50 bg-black"
      initial={{ scale: 1, opacity: 0, y: 0, transformOrigin: "bottom center" }}
      animate={{ scale: 1.3, opacity: 1, y: 30 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  )}
</AnimatePresence>

    </>
  );
}
