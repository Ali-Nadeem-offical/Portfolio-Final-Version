import { educationAssisterData } from '@/data/mockData';
import OptimizedImage from './OptimizedImage';

const EducationAssister = () => {
  const { title, subtitle, desc, modules } = educationAssisterData;

  return (
    <section className="bg-secondary py-16 px-6 md:px-16 mb-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-12 text-center hover:text-primary transition-colors">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 mb-16 w-full">
          <div className="flex-1">
            <h3 className="text-foreground text-2xl font-bold mb-6">{subtitle}</h3>
            <div className="space-y-2">
              {desc.map((line, i) => (
                <p key={i} className="text-muted-foreground text-lg leading-relaxed">{line}</p>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <OptimizedImage
              src="/uploads/fcfbce39-7f1c-4ed9-8d38-2a185529d61f.png"
              alt="SEA Dashboard"
              className="w-full max-w-md object-contain hover-scale drop-shadow-[0_0_20px_hsl(270,70%,55%,0.3)]"
              loading="lazy"
              decoding="async"
            />
            <div className="w-48 h-1 bg-primary mt-10 shadow-[0px_20px_15px_hsl(270,70%,55%,0.4)]"></div>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-foreground text-2xl font-bold mb-8 text-center">Main Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-primary/15 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-primary border border-border"
              >
                <h4 className="text-foreground text-xl font-bold mb-4 pb-2 border-b border-border">{mod.title}</h4>
                <div className="space-y-1">
                  {mod.desc.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm md:text-base">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 w-full flex flex-col items-center">
          <h3 className="text-foreground text-2xl font-bold mb-8">Technologies Used</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "/uploads/a56f8516-58db-4fc4-a720-4625f14bc617.png",
              "/uploads/5e937936-9d56-4950-92f3-8c96b39553b1.png",
              "/uploads/c8fbfe79-b577-48b2-99b7-bc74b2669e53.png",
              "/uploads/icon-mongodb.svg",
              "/uploads/cb1ed9cc-7466-4967-ad80-4c663582b36d.png",
              "/uploads/7ce3182f-4e73-4d11-92b7-944ab1a8c51f.png",
              "/uploads/0dfe6f58-d9de-46e0-bb0a-4a66a0d45ada.png",
              "/uploads/3d5eae2a-1780-404d-b864-b9f9823c5cf4.png"
            ].map((src, i) => (
              <OptimizedImage key={i} src={src} alt="tech" className="w-12 h-12 object-contain hover:scale-125 hover:drop-shadow-[0_0_8px_hsl(270,70%,55%,0.5)] transition-all duration-300" loading="lazy" decoding="async" width={48} height={48} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAssister;
