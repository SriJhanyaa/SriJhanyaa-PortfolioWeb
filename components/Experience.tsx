"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
    {
        company: "University of California, Davis - Department of Computer Science",
        role: "Lead Teaching Assistant (ECS 34)",
        duration: "Jan 2026 – Mar 2026",
        logo: "/ucdavis.png",
        points: [
            "Supported 150+ students through weekly office hours, resolving complex C++ and Unix issues while teaching low-level programming, debugging, and memory management.",

        ],
        technologies: ["C++", "Unix", "Git", "GitHub", "Debugging"],
    },

    {
        company: "California Department of Public Health",
        role: "AI Engineer Intern",
        duration: "Sep 2025 – Dec 2025",
        logo: "/cdph.png",
        points: [
            "Developed an AI-powered inspection prioritization system that leverages machine learning to identify high-risk facilities using historical inspection records, violation patterns, and geographic data. Designed and prototyped an end-to-end application that helps inspection officers prioritize facilities and generate optimized inspection routes, improving operational efficiency and data-driven decision-making across multiple California counties.",
        ],
        technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn","Geospatial Analysis", "Data Visualization"],
    },
    {
        company: "Koni Ameri Tech Services Inc.",
        role: "AI/ML Software Developer Intern",
        duration: "Jun 2025 – Sep 2025",
        logo: "/koni.png",
        points: [
            "Contributed to the development of an ONC-accredited Electronic Healthcare System by building structured healthcare databases and supporting clinical decision-making workflows. Helped design and implement an Adverse Event Database to improve patient safety, data accuracy, and evidence-based healthcare recommendations.",
        ],
        technologies: ["Python", "REST APIs", "PostgreSQL","RAG","C#"],
    },
    
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Experience
                </motion.h2>

                <div className="relative border-l-2 border-cyan-500 ml-8">

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.5,
                            }}
                            className="relative mb-14 ml-10"
                        >

                            
                            <div className="absolute -left-[52px] top-7 h-5 w-5 rounded-full bg-cyan-400 border-4 border-[#0B1120]" />

                            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/20">

                                <div className="flex items-start gap-5">

                                    <Image
                                        src={exp.logo}
                                        alt={exp.company}
                                        width={60}
                                        height={60}
                                        className="rounded-lg object-contain"
                                    />

                                    <div className="flex-1">

                                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                            <div>
                                                <h3 className="text-2xl font-semibold">
                                                    {exp.role}
                                                </h3>

                                                <p className="text-cyan-400 font-medium">
                                                    {exp.company}
                                                </p>
                                            </div>

                                            <p className="text-gray-300 mt-2 md:mt-0">
                                                {exp.duration}
                                            </p>
                                        </div>

                                        <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-200">
                                            {exp.points.map((point) => (
                                                <li key={point}>{point}</li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-3 mt-6">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-white transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-500/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}