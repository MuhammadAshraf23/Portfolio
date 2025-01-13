import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const SkillsSection = () => {
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <section id="skills" className="py-12 text-white">
      <h2 className="text-center text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <div className="w-16 h-16 mb-2">
              <Image
                src={skill.src}
                alt={skill.name}
                width={64}
                height={64}
                className="object-contain rounded-full bg-white"
              />
            </div>
            <p className="text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
