export default function Projects() {
    return (
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Project 1</h3>
            <p>A brief description of the project.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Project 2</h3>
            <p>A brief description of the project.</p>
          </div>
        </div>
      </section>
    );
  }
  