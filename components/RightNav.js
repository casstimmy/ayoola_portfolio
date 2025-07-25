import NavOption from "./NavOption";
import {
  FaHome,
  FaUserAlt,
  FaCode,
  FaTools,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();

  // Handle screen size check on mount
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (label) => {
    const selected = options.find((opt) => opt.label === label);
    if (!selected) return;

    setIsZooming(true);
    setTimeout(() => {
      router.push(selected.path);
      setIsZooming(false);
      if (!isDesktop) setShowMenu(false);
    }, 500);
  };

  return (
    <>
      {/* Toggle button for mobile */}
      {!isDesktop && (
        <button
          className="fixed right-2 top-8 z-40 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full p-2 shadow-lg transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95 lg:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      )}

      {/* Navigation menu */}
      <AnimatePresence>
        {(showMenu || isDesktop) && (
          <motion.div
            key="menu"
            className="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, x: 50 }}
          >
            <motion.div
              className="relative flex flex-col items-center gap-8 p-4 lg:p-0 rounded-xl shadow-lg lg:shadow-none"
              variants={containerVariants}
            >
              {/* Vertical line (desktop only) */}
              {isDesktop && (
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-400 z-[-1]" />
              )}

              {/* Nav options */}
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
        )}
      </AnimatePresence>

      {/* Page zoom transition */}
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
