"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h2 className="text-xl font-bold text-cyan-400">
          
        </h2>

        <div className="flex gap-6 text-gray-300">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
        <a href="#skills">Skills</a>
          <a href="#experience" className="hover:text-cyan-400">
            Experience
          </a>

          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}