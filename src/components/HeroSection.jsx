import Image from "next/image";
import AnimatedSection from "./AnimatedSection"; // Import your AnimatedSection component

export default function HeroSection() {
  return (
    <section className="flex md:h-[90vh] lg:h-[100vh] max-md:flex-col items-center justify-between text-white px-6 md:px-20 max-sm:px-2 pt-20 gap-8">
      {/* Image Section */}
      <AnimatedSection
        className="flex-2 flex items-center justify-center max-md:w-[50%] w-[30%] h-[70%]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/Profile picture.png"
          alt="Muhammad Ashraf"
          width={400}
          height={400}
          priority
          quality={100}
          className="rounded-full shadow-lg max-sm:w-[200px] max-sm:h-[200px] transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </AnimatedSection>

      {/* Text Section */}
      <AnimatedSection
        className="flex-1 text-center md:text-left max-sm:m-1 ml-24"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4 max-sm:text-3xl">
          Hi, I'm Muhammad Ashraf
        </h1>
        <p className="text-lg md:text-xl mb-6 max-sm:text-base">
          A passionate <span className="text-blue-500">MERN Stack Developer</span> dedicated to creating efficient, responsive, and visually stunning web applications.
        </p>
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 mb-6">
          <a
            href="https://linkedin.com/in/muhammadashraf23"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 text-2xl border-none"
          >
            <Image
              src="/images/linkedin.svg"
              width={40}
              height={40}
              alt="linkedin"
              className="bg-white rounded"
            />
          </a>
          <a
            href="https://github.com/muhammadashraf23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-200 text-2xl"
          >
            <Image
              src="/images/skills/github-color.svg"
              width={40}
              height={40}
              alt="github"
              className="bg-white rounded-full"
            />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
          >
            Download My Resume
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
