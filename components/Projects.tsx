"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Feasibility Lens",
        category: "GENERATIVE AI • RAG SYSTEM",
        featured: true,
        image: "/feasibility-banner 2.png",
        description:
            "Built a RAG-powered research feasibility assessment system using LLMs and LangChain. Improved retrieval accuracy from 0.53 to 0.80 and classification accuracy from 0.50 to 0.90 by optimizing context retrieval and evaluation pipelines.",
        technologies: [
            "Python",
            "LangChain",
            "RAG",
            "LLMs",
            "FAISS",
            "NLP",
        ],
        github: "https://github.com/SriJhanyaa/FeasibilityLens",
    },

    {
        title: "Optimizing Donor–Patient Compatibility for Organ Allocation",
        category: "MACHINE LEARNING • OPTIMIZATION",
        featured: false,
        image: "/organ-banner 2.png",
        description:
            "Developed a machine learning-based kidney allocation optimization system to improve donor-recipient matching using healthcare compatibility factors. Processed and analyzed 40,000+ records and achieved 95% prediction accuracy through data-driven modeling.",
        technologies: [
            "Python",
            "Pandas",
            "SciPy",
            "Scikit-learn",
            "Optimization",
        ],
        github:
            "https://github.com/SriJhanyaa/OPTIMIZING-PATIENT-COMPATIBILITY-FOR-ORGAN-ALLOCATION--KIDNEY-TRANSPLANTATION",
    },

    {
        title: "Medical Mask Recognition using Deep Learning",
        category: "COMPUTER VISION • DEEP LEARNING",
        featured: false,
        image: "/mask-banner 2.png",
        description:
            "Built a real-time computer vision system for medical mask detection using deep learning models. Developed image classification pipelines with TensorFlow, Keras, and OpenCV, achieving 99% accuracy across 16,000 analyzed samples.",
        technologies: [
            "Python",
            "TensorFlow",
            "Keras",
            "OpenCV",
            "Deep Learning",
        ],
        github:
            "https://github.com/SriJhanyaa/MEDICAL-MASK-RECOGNITION-USING-DL",
    },
];


export default function Projects() {
    return (
        <section
            id="projects"
            className="py-24 px-6 max-w-7xl mx-auto"
        >

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >

                <p className="text-sm uppercase tracking-widest text-gray-400">
                    Portfolio
                </p>


                <h2 className="text-4xl md:text-5xl font-bold mt-3">
                    Featured Projects
                </h2>


                <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-lg leading-8">
                    A collection of AI, machine learning, and software
                    engineering projects involving LLMs, data-driven systems,
                    and scalable applications.
                </p>

            </motion.div>



            {/* Projects */}

            <div className="space-y-24">

                {projects.map((project, index) => (

                    <motion.div

                        key={project.title}

                        initial={{
                            opacity: 0,
                            y: 40,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                        }}

                        viewport={{
                            once: true,
                        }}

                        className={`group grid lg:grid-cols-2 gap-12 items-center 
                        hover:-translate-y-2 transition-all duration-300
                        ${index % 2 !== 0
                                ? "lg:[&>*:first-child]:order-2"
                                : ""
                            }`}

                    >


                        {/* Project Image */}

                        <motion.div

                            whileHover={{
                                scale: 1.02,
                            }}

                            transition={{
                                duration: 0.3,
                            }}

                            className="
                            relative overflow-hidden rounded-2xl
                            border border-white/10
                            group-hover:border-white/30
                            shadow-xl
                            "
                        >

                            {project.featured && (

                                <span
                                    className="
                                    absolute top-5 left-5 z-10
                                    px-4 py-1
                                    rounded-full
                                    bg-white/10
                                    backdrop-blur-md
                                    text-sm
                                    font-semibold
                                    "
                                >
                                    Featured
                                </span>

                            )}


                            <Image
                                src={project.image}
                                alt={project.title}
                                width={900}
                                height={650}
                                className="
                                w-full
                                h-[380px]
                                object-cover
                                group-hover:scale-105
                                transition-transform
                                duration-500
                                "
                            />

                        </motion.div>




                        {/* Project Details */}

                        <div>


                            <p className="
                            text-sm
                            font-semibold
                            tracking-widest
                            text-cyan-400
                            mb-3
                            ">
                                {project.category}
                            </p>



                            <h3 className="text-3xl font-bold mb-5">
                                {project.title}
                            </h3>



                            <p className="text-gray-400 leading-8">
                                {project.description}
                            </p>




                            {/* Technologies */}

                            <div className="flex flex-wrap gap-3 mt-8">

                                {project.technologies.map((tech) => (

                                    <span
                                        key={tech}
                                        className="
                                        px-4 py-2
                                        rounded-full
                                        bg-white/5
                                        border border-white/10
                                        text-sm
                                        text-gray-200
                                        hover:bg-white/10
                                        transition
                                        "
                                    >
                                        {tech}
                                    </span>

                                ))}

                            </div>




                            {/* Github */}

                            <div className="mt-10">

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"

                                    className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    px-6
                                    py-3
                                    rounded-xl
                                    bg-white/10
                                    hover:bg-white/20
                                    transition-all
                                    duration-300
                                    "
                                >

                                    <FaGithub size={20} />

                                    View on GitHub →

                                </a>

                            </div>


                        </div>


                    </motion.div>

                ))}

            </div>


        </section>
    );
}