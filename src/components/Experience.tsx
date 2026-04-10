import { experienceData } from '@/data/mockData';

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col items-center px-6 md:px-16 mb-24 max-w-7xl mx-auto">
      <h2 className="text-foreground text-4xl font-bold mb-12 hover:text-primary transition-colors">
        Experience 💼
      </h2>

      <div className="flex flex-col gap-8 w-full">
        {experienceData.map((exp, index) => (
          <div 
            key={index}
            className="flex flex-col md:flex-row bg-card rounded-xl shadow-lg p-8 gap-8 hover:shadow-primary/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border hover:border-primary/40"
          >
            <div className="flex flex-col items-center md:w-1/4 flex-shrink-0">
              <img src={exp.logo} alt={exp.company} className="w-24 h-24 mb-4 object-contain hover-scale" />
              <span className="text-foreground text-xl font-bold mb-2">{exp.company}</span>
              <span className="text-muted-foreground text-sm">{exp.date}</span>
            </div>

            <div className="flex-1 flex flex-col items-start">
              <h3 className="text-foreground text-2xl font-bold mb-4">{exp.role}</h3>
              <div className="mb-6 space-y-1">
                {exp.desc.map((line, i) => (
                  <p key={i} className="text-muted-foreground text-sm md:text-base">{line}</p>
                ))}
              </div>
              <h4 className="text-foreground text-lg font-bold mb-3 border-b-2 border-primary pb-1">Responsibilities</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-muted-foreground text-sm md:text-base hover:text-primary transition-colors">{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
