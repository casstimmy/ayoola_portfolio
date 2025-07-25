import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-cyan-500 opacity-30 blur-3xl rounded-full animate-pulse z-0" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-blue-700 opacity-20 blur-3xl rounded-full animate-pulse z-0" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            whileHover={{ scale: 1.02, rotate: 1 }}
            className="shadow-2xl rounded-xl overflow-hidden"
          >
            <Image
              src="/asset/ay_img.png" // ✅ Replace this with your actual image
              alt="Developer working"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              I’m a creative and passionate web developer, driven by the desire to build useful,
              elegant, and high-performance web experiences. From UI/UX design to backend logic, I
              enjoy turning complex problems into simple, scalable solutions.
            </p>

            <div className="space-y-5">
              <Section
                title="👨‍💻 Expertise"
                content="React, Next.js, Tailwind CSS, Node.js, MongoDB, Express, Framer Motion, Vercel & AWS."
              />
              <Section
                title="🎯 Approach"
                content="Detail-oriented, user-first, clean code, modular architecture, and performance optimization."
              />
              <Section
                title="🌱 Personal Drive"
                content="Constantly learning, mentoring developers, and contributing to open-source tools and ideas."
              />
              <Section
                title="📬 Let’s Collaborate"
                content="Open to freelance projects, partnerships, and tech talks — reach out anytime."
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
      className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10 shadow-sm"
    >
      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-cyan-400">{title}</h2>
      <p className="text-sm sm:text-base text-gray-300">{content}</p>
    </motion.div>
  );
}
