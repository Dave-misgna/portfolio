"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50">
      <div className="flex justify-between items-center h-16 ">
        
        <a href="#intro" className="text-xl font-bold text-white  px-8">
          Dawit
        </a>

        <div className="flex gap-8  px-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
            About
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}
