import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "🛍 Inventory Manager",
      desc: "A full-stack inventory system for smart retail control using Next.js, MongoDB & Tailwind.",
    },
    {
      title: "🎮 VR Arena Hub",
      desc: "Immersive multiplayer game platform built with WebXR, Three.js, and Node.js backend.",
    },
    {
      title: "🧾 Expense Tracker",
      desc: "Simple yet powerful expense manager with charts and export to PDF/Excel features.",
    },
  ];

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-br from-[#0f0f1c] via-black to-[#0c0c17] text-white py-20 px-5 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-indigo-600 opacity-10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500 opacity-10 blur-[120px] rounded-full animate-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">
            🚀 My Projects
          </h1>
          <p className="text-lg text-gray-300 mb-12">
            Here's a glimpse into the cool things I’ve built and collaborated on:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {projectList.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl border border-white/10 backdrop-blur-md p-6 shadow-md"
              >
                <h2 className="text-xl font-semibold text-indigo-400 mb-2">{project.title}</h2>
                <p className="text-sm text-gray-300">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
