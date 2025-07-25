import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "🧠 React, Next.js, Node.js, Express",
    "🎨 Tailwind CSS, Framer Motion, GSAP",
    "📦 MongoDB, Firebase, SQL",
    "⚙️ Git, REST APIs, Vercel, Netlify",
    "🎮 Game Dev tools: Unity, WebXR",
    "🔐 Authentication (JWT, OAuth)",
  ];

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-br from-[#0f0f1c] via-black to-[#0c0c17] text-white py-20 px-5 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-600 opacity-10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 opacity-10 blur-[120px] rounded-full animate-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-emerald-400 to-purple-400 text-transparent bg-clip-text">
            🛠 My Skills
          </h1>
          <p className="text-lg text-gray-300 mb-12">
            I bring creativity, logic, and a builder’s mindset to everything I code.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl border border-white/10 backdrop-blur-md p-6 text-lg text-gray-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
