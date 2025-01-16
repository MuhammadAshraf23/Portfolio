'use client'
import { motion } from "framer-motion";

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
    description: "Contributed to projects that involved the creation of a screeningapp and the development of a WordPress website as a frontend developer"
  },
  {
    title: "Web Developer",
    company: "LetsGrowMore",
    description: "Worked on various web development projects, focusing on creating responsive and user-friendly designs. Gained experience in modern web technologies such as React and Tailwind CSS.",
  },
];

const Experience = () => {
  const experienceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <section id="experience" className="py-12 text-white bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              variants={experienceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <p className="text-sm text-gray-400">
                {experience.company}
              </p>
              <p className="mt-4 text-gray-300">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
