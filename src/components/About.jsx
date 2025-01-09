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
          className="rounded-full shadow-lg w-72 h-72 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-lg md:text-xl mb-4">
          As a passionate undergraduate student at UBIT, University of Karachi,
          pursuing a BS in Computer Science, I am driven by a deep enthusiasm
          for programming and personal growth. My academic background has
          provided me with a strong foundation in computer science, and I am
          committed to leveraging this knowledge to become a proficient MERN
          stack (MongoDB, Express, React, Node.js) developer. 🚀 </p>
          <p className="text-lg md:text-xl mb-4">
          Focused on  expanding my expertise, I aim to contribute to impactful projects in the web development space. If you're seeking an enthusiastic and
          motivated intern with a strong desire for learning and innovation, I’d
          love to connect and explore how we can collaborate! 🌟</p>
      </div>
    </section>
  );
}
