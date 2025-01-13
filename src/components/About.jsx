import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 md:px-20 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Image Section */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/images/Profile picture.png"
          alt="Muhammad Ashraf"
          className="rounded-full shadow-lg w-72 h-72 object-cover max-sm:w-52 max-sm:h-52"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left mb-8 md:mb-0"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-lg md:text-xl mb-4">
          I am a passionate undergraduate student at UBIT, University of Karachi, pursuing a BS in Computer Science with a strong enthusiasm for programming and continuous learning. My academic journey has equipped me with a solid foundation in computer science, driving my ambition to become a proficient MERN stack (MongoDB, Express, React, Node.js) developer.
        </p>
        <p className="text-lg md:text-xl mb-4">
          With a focus on expanding my expertise, I aspire to contribute to impactful projects in the web development space. If you’re looking for a motivated and innovative intern eager to learn and grow, let’s connect and create something amazing together!
        </p>
      </motion.div>
    </motion.section>
  );
}
