"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen bg-gray-900 text-white px-6 md:px-20">
      {/* Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Muhammad Ashraf
        </h1>
        <p className="text-lg md:text-xl mb-6">
          A passionate front-end developer skilled in building stunning web
          experiences using Next.js and Framer Motion.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 mb-6">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-200 text-2xl"
          >
            <FaGithub />
          </a>
          
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <motion.a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download My Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-2 flex items-center justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/Profile picture (1).png"
          alt="Muhammad Ashraf"
          width={400}
          height={400}
          className="rounded-full shadow-lg"
        />
      </motion.div>
      
    </section>
  );
}
