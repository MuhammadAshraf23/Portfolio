"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react"; // Import useState for toggling the menu

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center p-4 bg-gray-800 text-white"
    >
      {/* Logo Section */}
      <div className="text-2xl font-bold">MyPortfolio</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#experience">Experience</Link>
        </li>
      </ul>

      {/* Mobile Hamburger Menu */}
      <div
        className="md:hidden flex items-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu on click
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white p-4`}
      >
        <ul className="space-y-4">
          <li>
            <Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
          </li>
          <li>
            <Link href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
