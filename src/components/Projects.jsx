import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-10 text-white">
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-600">
                        Technologies:
                      </span>
                      <ul className="flex flex-wrap gap-2 mt-1">
                        {project.technologies.map((tech, i) => (
                          <li
                            key={i}
                            className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Projects;
