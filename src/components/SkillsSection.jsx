import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { skills } from "@/data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 text-white">
      <AnimatedSection>
        <h2 className="text-center text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center"
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
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default SkillsSection;
