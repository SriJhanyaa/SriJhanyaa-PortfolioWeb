"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-white mb-6">
              From Algorithms to Real-World Applications
            </h3>

            <p className="text-lg leading-8 text-gray-300">
              I enjoy transforming complex problems into practical software solutions by combining strong foundations in computer science with hands-on experience in artificial intelligence, data-driven systems, and software development. Through academic research, internships, and engineering projects, I have worked on building solutions that improve decision-making, automate workflows, and create meaningful real-world impact
            </p>

            {/* Highlights */}
            <div className="mt-10 space-y-5">

              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="text-cyan-400 mt-1"
                  size={22}
                />
                <p className="text-gray-300">
                  AI Engineer Intern at the
                  <span className="text-white font-medium">
                    {" "}California Department of Public Health
                  </span>
                  , building AI-driven inspection prioritization systems.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Award
                  className="text-cyan-400 mt-1"
                  size={22}
                />
                <p className="text-gray-300">
                  Department Gold Medalist in
                  Computer Science & Engineering for academic excellence.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Cpu
                  className="text-cyan-400 mt-1"
                  size={22}
                />
                <p className="text-gray-300">
                  Experience building applications with
                  <span className="text-white">
                    {" "}LLMs, RAG, Machine Learning,
                    Backend Development, Data Engineering,
                    and Cloud Technologies.
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Briefcase
                  className="text-cyan-400 mt-1"
                  size={22}
                />
                <p className="text-gray-300">
                  Actively seeking
                  <span className="text-white">
                    {" "}Full-Time Software Engineering,
                    AI Engineering, and Machine Learning
                  </span>{" "}
                  opportunities.
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education Card */}
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 backdrop-blur-md p-6 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">

              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-cyan-400" size={26} />
                <h3 className="text-2xl font-semibold text-white">
                  Education
                </h3>
              </div>

              {/* UC Davis */}
              <div className="border-l-2 border-cyan-400 pl-5 pb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      M.S. Computer Science
                    </h4>

                    <p className="text-gray-300 mt-1">
                      University of California, Davis
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      Sep 2024 – Jun 2026
                    </p>
                  </div>

                  <div className="text-cyan-400 font-semibold">
                    GPA 3.71 / 4.0
                  </div>

                </div>
              </div>

              {/* SRM */}
              <div className="border-l-2 border-cyan-400 pl-5">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      B.E. Computer Science & Engineering
                    </h4>

                    <p className="text-gray-300 mt-1">
                      SRM Valliammai Engineering College
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      Sep 2020 – Apr 2024
                    </p>

                    {/* Gold Medalist Tag */}
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-400/40 text-yellow-300 text-sm font-semibold">
                        <Award size={16} />
                        Department Gold Medalist
                      </span>
                    </div>

                  </div>

                  <div className="text-cyan-400 font-semibold">
                    GPA 9.44 / 10.0
                  </div>

                </div>

              </div>

            </div>

            {/* Core Expertise */}
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 backdrop-blur-md p-6 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">

              <h3 className="text-2xl font-semibold text-white mb-6">
                Core Expertise
              </h3>

              <div className="flex flex-wrap gap-3">

                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Generative AI",
                  "LLMs",
                  "RAG",
                  "Python",
                  "Software Engineering",
                  "Backend Development",
                  "Data Engineering",
                  "Cloud Computing",
                  "SQL",
                  "APIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}