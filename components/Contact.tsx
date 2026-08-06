"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const [result, setResult] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult("Sending...");

        const form = e.currentTarget;
        const formData = new FormData(form);

        formData.append(
            "access_key",
            process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
        );

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("✅ Message sent successfully!");
            form.reset();
        } else {
            console.error(data);
            setResult("❌ Something went wrong. Please try again.");
        }
    }

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Let's Connect
                    </h2>

                    <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
                        Feel free to reach out regarding opportunities,
                        collaborations, or just to say hello!
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">
                                Contact Information
                            </h3>

                            <div className="flex items-center gap-4">
                                <Mail size={22} />
                                <a
                                    href="mailto:your-sjsrini@ucdavis.edu"
                                    className="hover:underline"
                                >
                                    sjsrini@ucdavis.edu
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaLinkedin size={22} />
                                <a
                                    href="https://www.linkedin.com/in/srijhanyaasrinivasan/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaGithub size={22} />
                                <a
                                    href="https://github.com/SriJhanyaa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>

                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-2 px-5 py-3 border rounded-lg hover:bg-gray-100"
                            >
                                <Download size={18} />
                                Download Resume
                            </a>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full rounded-lg border p-3"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full rounded-lg border p-3"
                            />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="w-full rounded-lg border p-3"
                            />

                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Your Message"
                                required
                                className="w-full rounded-lg border p-3"
                            />

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-black py-3 text-white hover:opacity-90"
                            >
                                Send Message
                            </button>

                            {result && (
                                <p className="text-center mt-4 text-sm">
                                    {result}
                                </p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}