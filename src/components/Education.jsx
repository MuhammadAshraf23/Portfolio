'use client'
import { motion } from "framer-motion";
import { education } from "@/data/education";

const Education = () => {
  // Animation variants for the education items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger animations
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <section id="education" className="py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {education.map((item, index) => (
            <motion.li
              key={index}
              className="p-4 rounded shadow bg-gray-800"
              variants={itemVariants}
              custom={index} // Pass the index to the animation
            >
              <h3 className="text-xl font-semibold">
                {item.degree || item.certification}
              </h3>
              <p>{item.institution || item.provider}</p>
              <p>{item.year}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Education;
