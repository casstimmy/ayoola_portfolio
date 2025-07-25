// components/RightNav.jsx
import NavOption from "./NavOption";
import {
  FaHome,
  FaUserAlt,
  FaCode,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const options = [
  { label: "Home", icon: <FaHome size={18} /> },
  { label: "About Me", icon: <FaUserAlt size={18} /> },
  { label: "Projects", icon: <FaCode size={18} /> },
  { label: "Skills", icon: <FaTools size={18} /> },
  { label: "Contact", icon: <FaEnvelope size={18} /> },
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
  return (
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
        {/* Background vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-400 z-[-1]" />

        {/* Nav Icons */}
        {options.map((opt, i) => (
          <motion.div key={i} variants={itemVariants}>
            <NavOption label={opt.label} icon={opt.icon} index={i} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
