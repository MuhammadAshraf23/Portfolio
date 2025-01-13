export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 md:px-20 py-20"
    >
      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src="/images/Profile picture.png" 
          alt="Muhammad Ashraf"
          className="rounded-full shadow-lg w-72 h-72 object-cover max-sm:w-52 max-sm:h-52"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-lg md:text-xl mb-4">
        I am a passionate undergraduate student at UBIT, University of Karachi, pursuing a BS in Computer Science with a strong enthusiasm for programming and continuous learning. My academic journey has equipped me with a solid foundation in computer science, driving my ambition to become a proficient MERN stack (MongoDB, Express, React, Node.js) developer.</p>
          <p className="text-lg md:text-xl mb-4">
          With a focus on expanding my expertise, I aspire to contribute to impactful projects in the web development space. If you’re looking for a motivated and innovative intern eager to learn and grow, let’s connect and create something amazing together!</p>
      </div>
    </section>
  );
}
