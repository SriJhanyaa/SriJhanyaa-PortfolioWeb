"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Code2,
  BrainCircuit,
  Database,
  ServerCog,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      "Python",
      "JavaScript",
      "Java",
      "C++",
      "C",
      "SQL",
      "C#",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Keras",
      "OpenCV",
      "LangChain",
      "RAG",
      "NLP",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    icon: Database,
    skills: [
      "PostgreSQL",
      "PowerBI",
      "Tableau",
      "MongoDB",
      "AWS",
      "Azure",
      "Google Cloud",
      "Jupyter Notebook",
    ],
  },
  
  {
    title: "Backend & DevOps",
    icon: ServerCog,
    skills: [
      "Flask",
      "REST APIs",
      "TypeScript",
      "Next.js",
      "React.js",
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "Linux",
      "Unix",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Skills
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 max-w-2xl mx-auto mb-14"
        >
          Technologies and tools I use to build AI-powered applications,
          scalable software, and production-ready systems.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              

              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  p-6
                  shadow-lg
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:shadow-xl
                  hover:shadow-cyan-500/20
                "
              >
                <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6">
                  <Icon
                    size={28}
                    className="text-cyan-400"
                    strokeWidth={2}
                  />
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-cyan-400/30
                        bg-cyan-500/10
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        cursor-default
                        transition-all
                        duration-200
                        hover:-translate-y-1
                        hover:scale-105
                        hover:border-cyan-400
                        hover:bg-cyan-500/20
                        hover:shadow-lg
                        hover:shadow-cyan-500/25
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}