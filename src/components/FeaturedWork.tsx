import { projectsData } from '@/data/mockData';
import { ParticleCard } from '@/components/MagicBento';
import OptimizedImage from './OptimizedImage';

const FeaturedWork = () => {
  return (
    <section id="projects" className="flex flex-col items-center px-6 md:px-16 mb-24 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 hover:text-primary transition-colors duration-300">
          Featured Work 🚀
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore my latest projects combining modern design, clean code, and excellent user experience
        </p>
      </div>

      {/* Projects Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ParticleCard
            key={index}
            className={`group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-primary/20 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 ${
              index <= 2 ? 'animate-fade-in' : ''
            }`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
            enableMagnetism
            clickEffect
          >
            {/* Project Image Container */}
            <div className="relative overflow-hidden h-48 bg-secondary" style={{ aspectRatio: '2 / 1' }}>
              <OptimizedImage
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width={400}
                height={200}
              />
              {/* Image Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Title */}
              <h3 className="text-foreground text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="mb-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground font-semibold mb-3 uppercase tracking-wider">
                  Tech Stack
                </p>
                <div className="flex items-center flex-wrap gap-3">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 bg-secondary/60 rounded-full px-2.5 py-1 border border-border/50 hover:border-primary/40 hover:bg-secondary transition-colors duration-300 group/icon"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-5 w-5 object-contain"
                        style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
                        loading="lazy"
                        decoding="async"
                        width={20}
                        height={20}
                      />
                      <span className="text-xs text-muted-foreground group-hover/icon:text-foreground transition-colors font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 text-center group/btn hover:scale-105 active:scale-95"
                >
                  View Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-transparent border border-primary text-primary px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-primary/10 transition-all duration-300 text-center hover:scale-105 active:scale-95"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Floating Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500 blur-2xl" />
          </ParticleCard>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <p className="text-muted-foreground text-lg mb-6">
          Want to see more of my work?
        </p>
        <a
          href="https://github.com/ali-itexpert"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:translate-x-1"
        >
          Visit My GitHub
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default FeaturedWork;
