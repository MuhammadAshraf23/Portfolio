import AnimatedSection from './AnimatedSection'; // Adjust the import path if needed

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Internee.pk",
    description:
      "Developed and maintained web applications using MongoDB, Express, React, and Node.js. Collaborated with cross-functional teams to deliver high-quality software.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Interns Pakistan",
    description: "Contributed to projects that involved the creation of a screening app and the development of a WordPress website as a frontend developer",
  },
  {
    title: "Web Developer",
    company: "LetsGrowMore",
    description: "Worked on various web development projects, focusing on creating responsive and user-friendly designs. Gained experience in modern web technologies such as React and Tailwind CSS.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 text-white bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-300"></div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`flex items-center justify-between space-x-12  ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Left Side (Text Section) */}
                <div className="flex-1 bg-gray-800 p-2 rounded">
                  <AnimatedSection
                    initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="text-xl font-semibold max-sm:text-base">{experience.title}</h3>
                    <p className="text-sm text-gray-400 max-sm:text-sm">{experience.company}</p>
                    <p className="mt-4 text-gray-300 max-sm:text-sm">{experience.description}</p>
                  </AnimatedSection>
                </div>

              
                <div className="flex-1">
                  <AnimatedSection
                    initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                   
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
