
import AnimatedSection from './AnimatedSection'; // Adjust the import path if needed
import { education } from '@/data/education';

const Education = () => {
  return (
    <section id="education" className="py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <ul className="space-y-6">
          {education.map((item, index) => (
            <AnimatedSection
              key={index}
              className="p-4 rounded shadow bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2, // Staggered animations
                type: 'spring',
                stiffness: 50,
              }}
            >
              <li>
                <h3 className="text-xl font-semibold">
                  {item.degree || item.certification}
                </h3>
                <p>{item.institution || item.provider}</p>
                <p>{item.year}</p>
              </li>
            </AnimatedSection>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
