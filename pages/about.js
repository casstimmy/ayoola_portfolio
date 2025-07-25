import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-br from-[#0f0f1c] via-black to-[#0c0c17] text-white py-20 px-5 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute -top-28 -left-24 w-72 h-72 bg-cyan-500 opacity-25 blur-[120px] rounded-full animate-pulse z-0" />
        <div className="absolute -bottom-28 -right-24 w-72 h-72 bg-purple-700 opacity-20 blur-[120px] rounded-full animate-pulse z-0" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 gap-10 items-center"
        >
          {/* Text Side */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              About Me
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              I’m a creative and passionate web developer, driven by the desire to build elegant,
              performant, and user-focused digital experiences. From intuitive UI/UX to scalable
              backend systems — I love solving problems with clean, modern code.
            </p>

            <div className="space-y-6">
              <Section
                title="🧠 Expertise"
                content="React, Next.js, Tailwind CSS, Node.js, MongoDB, Express, Framer Motion, Vercel & AWS."
              />
              <Section
                title="🎮 Approach"
                content="Detail-driven, pixel-perfect, modular, user-first, and optimized for performance like a boss battle."
              />
              <Section
                title="⚡ Personal Drive"
                content="Lifelong learner, open-source enthusiast, and dedicated to mentoring devs & building powerful tools."
              />
              <Section
                title="🤝 Let’s Collaborate"
                content="Open to freelance work, partnerships, and tech talks. Let’s build something legendary."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

function Section({ title, content }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl border border-white/10 backdrop-blur-md p-5 sm:p-6 shadow-md hover:shadow-cyan-500/20"
    >
      <h2 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">{title}</h2>
      <p className="text-sm sm:text-base text-gray-300">{content}</p>
    </motion.div>
  );
}
