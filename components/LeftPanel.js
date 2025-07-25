import { useState, useEffect } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import QuickAccessCard from "./QuickAccessCard";

const items = [
  { title: "Projects", image: "/asset/portfolio1.jpg", new: true },
  { title: "Experience", image: "/asset/portfolio5.jpg", tier: 88 },
  { title: "Tech Stack", image: "/asset/portfolio3.jpg" },
];

export default function LeftPanel() {
  const [isMobile, setIsMobile] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      // Treat screen widths < 768px (Tailwind's md) as mobile
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {/* Toggle button only on mobile */}
      {isMobile && (
  <button
    className="fixed left-2 top-13 -translate-y-1/2 z-40 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full p-2 shadow-lg cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95"
    onClick={() => setShowCards(!showCards)}
  >
    {showCards ? <FaTimes size={18} /> : <FaPlus size={18} />}
  </button>
)}

      {/* Cards panel with animation */}
      <AnimatePresence>
        {(showCards || !isMobile) && (
          <motion.div
            key="panel"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`fixed ${isMobile ? "top-[40px]" : "top-1/2 -translate-y-1/2"} left-2 lg:left-6 z-30 space-y-5`}
          >
            {items.map((item, i) => (
              <QuickAccessCard key={i} {...item} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
