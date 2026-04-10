import { projectsData } from '@/data/mockData';

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center px-6 md:px-16 mb-24 max-w-7xl mx-auto">
      <h2 className="text-foreground text-4xl font-bold mb-16 hover:text-primary transition-colors">
        Projects 💻
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projectsData.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-primary/15 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col border border-border hover:border-primary/40 group cursor-pointer"
          >
            <div className="overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-foreground text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{project.desc}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  {project.techStack.map((tech, i) => (
                    <img key={i} src={tech.icon} alt={tech.name} className="h-6 w-auto hover:scale-125 hover:drop-shadow-[0_0_6px_hsl(270,70%,55%,0.5)] transition-all" />
                  ))}
                </div>
                <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">View →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
