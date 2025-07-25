import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-br from-[#0f0f1c] via-black to-[#0c0c17] text-white py-20 px-5 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-pink-600 opacity-20 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-yellow-500 opacity-10 blur-[100px] rounded-full animate-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-transparent bg-clip-text">
            Let’s Connect
          </h1>
          <p className="text-lg text-gray-300 mb-10">
            Got a project, idea, or opportunity? I’d love to hear from you. Whether it’s tech talk, game dev collab, or a freelance gig — let’s make it epic.
          </p>

          <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-8 rounded-xl border border-white/10 backdrop-blur-md shadow-md">
            <p className="text-md mb-2">📧 Email: <span className="text-cyan-400">Hello.ayoola@gmail.com</span></p>
            <p className="text-md">🐦 Twitter: <span className="text-cyan-400">@dev_ayoola</span></p>
            <p className="text-md">💼 LinkedIn: <span className="text-cyan-400">linkedin.com/in/ayoola</span></p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
