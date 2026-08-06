"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            SriJhanyaa
            <br />
            <span className="text-cyan-400">Srinivasan</span>
          </h1>

          {/* Title */}
          <p className="text-2xl mt-6 font-semibold text-purple-400">
            Software Engineer | AI & ML Engineer
          </p>

          {/* Currently Badge */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>
            Open to Full-Time Software Engineering & AI Opportunities
          </div>

          {/* Description */}
          <p className="mt-8 text-gray-300 leading-8 text-lg max-w-xl">
            Master's graduate in Computer Science from the University of
            California, Davis with experience building AI-driven applications,
            machine learning models, and scalable software systems. Passionate
            about solving real-world problems through intelligent technology.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 px-6 py-3 rounded-xl font-semibold text-black"
            >
              <Download size={18} />
              Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SriJhanyaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-800 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-white"
            >
              <FaGithub size={18} />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/srijhanyaasrinivasan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-800 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-white"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>

            {/* Email */}
            <a
              href="mailto:sjsrini@ucdavis.edu"
              className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-800 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-white"
            >
              <Mail size={18} />
              Email
            </a>

          </div>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Background Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            {/* Gradient Ring */}
            <div className="relative rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 p-1.5 shadow-2xl shadow-cyan-500/30">

              <Image
                src="/profile.jpeg"
                alt="SriJhanyaa Srinivasan"
                width={380}
                height={380}
                priority
                className="rounded-full object-cover bg-slate-900"
              />

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}