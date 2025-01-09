import Image from 'next/image';
import { skills } from '@/data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="w-16 h-16 mb-2">
              <Image
                src={skill.src}
                alt={skill.name}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
