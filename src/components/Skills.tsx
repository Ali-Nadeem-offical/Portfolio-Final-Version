import { skillsImages } from '@/data/mockData';
import OptimizedImage from './OptimizedImage';

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col items-center px-6 md:px-16 mb-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-foreground text-4xl font-bold hover:text-primary transition-colors duration-300">
          Skills 🔥
        </h2>
        <div className="w-24 h-1 bg-primary mt-3 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 w-full">
        {skillsImages.map((img, index) => {
          const rotation = (index * 47) % 360;
          const isDarkIcon = img.includes('icon-nextjs') || img.includes('icon-express') || img.includes('icon-github');
          return (
            <div key={index} className="flex justify-center items-center cursor-pointer group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative w-32 h-32 flex items-center justify-center hover:scale-110 hover:-translate-y-2 transition-all duration-300">
                {/* Background track ring */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120">
                  <circle
                    cx="60" cy="60" r="54"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="5"
                  />
                </svg>
                {/* Animated progress arc */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120" style={{ transform: `rotate(${rotation}deg)` }}>
                  <circle
                    cx="60" cy="60" r="54"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="5"
                    strokeDasharray={`${200 + (index * 13) % 80} 340`}
                    strokeLinecap="round"
                    className="group-hover:stroke-[hsl(var(--accent))] transition-colors duration-300"
                  />
                </svg>
                <OptimizedImage
                  src={img}
                  alt={`Skill ${index}`}
                  className={`relative h-16 w-16 object-contain group-hover:drop-shadow-[0_0_12px_hsl(270,70%,55%,0.6)] transition-all duration-300 brightness-90 group-hover:brightness-110 ${isDarkIcon ? 'invert' : ''}`}
                  loading="lazy"
                  decoding="async"
                  width={64}
                  height={64}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
