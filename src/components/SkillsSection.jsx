import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { skills } from "@/data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 text-white">
      <h2 className="text-center text-3xl font-bold mb-8">Skills</h2>

      {/* Adding a staggered animation to the skill icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <AnimatedSection
            key={skill.name}
            delay={index * 0.1} // Delay each skill based on its index
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }} // Slight rotation and scaling down initially
            whileInView={{
              opacity: 1, // Fully visible when in view
              scale: 1, // Normal scale when in view
              rotate: 0, // Remove rotation when in view
            }}
            transition={{
              duration: 0.4, // Slightly faster transition
              type: "spring", // Spring effect for a bouncy feel
              stiffness: 120, // Adjust stiffness for a faster bounce
              damping: 20, // Reduced damping for a more lively effect
            }}
            viewport={{ once: true }} // Trigger the animation only once when in view
          >
            <div className="flex flex-col items-center">
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
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
