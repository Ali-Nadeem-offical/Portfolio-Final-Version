import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OptimizedImage from "@/components/OptimizedImage";
import { ParticleCard } from "@/components/MagicBento";
import { AboutSkeleton, SkillsSkeleton, ProjectsSkeleton } from "@/components/LoadingSkeleton";
import { heroData } from "@/data/mockData";

// Lazy load ALL below-fold components
const CodingAnimation = lazy(() => import("@/components/CodingAnimation"));
const Skills = lazy(() => import("@/components/Skills"));
const EducationAssister = lazy(() => import("@/components/EducationAssister"));
const Contact = lazy(() => import("@/components/Contact"));
const FeaturedWork = lazy(() => import("@/components/FeaturedWork"));

const Screen = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        
        <Suspense fallback={<AboutSkeleton />}>
          <section id="about" className="flex flex-col md:flex-row items-center px-6 md:px-16 mb-24 max-w-7xl mx-auto gap-12">
             <div className="animate-fade-in-left">
               <CodingAnimation />
             </div>

             <div className="flex-1 animate-fade-in-right">
               <h2 className="text-foreground text-4xl font-bold mb-6 hover:text-primary transition-colors duration-300">About Me 👨‍💼</h2>
               <div className="space-y-4 mb-8">
                 <p className="text-muted-foreground text-lg leading-relaxed">
                   Hi, I'm a web developer passionate about building modern and responsive websites. I specialize in frontend development and CMS-based websites, working with tools like HTML, CSS, Bootstrap, WordPress and Drupal. I enjoy creating structured layouts, improving website performance and helping bring ideas to life on the web. 
                 </p>
                 <div className="pl-4 border-l-4 border-primary italic text-muted-foreground">
                   <p className="font-medium">For me, software development is more than just writing lines of code</p>
                   <p className="font-medium">it is about solving puzzles that improve people's lives.</p>
                 </div>
                 <p className="text-muted-foreground text-lg leading-relaxed">
                   I am driven by the challenge of taking a complex, manual process and transforming it into a high-speed, automated digital solution. My goal is to build software that is as reliable as it is innovative.
                 </p>
               </div>
               
               <h3 className="text-foreground text-xl font-bold mb-4">Communities</h3>
               <div className="flex gap-6">
                  {heroData.about.communities.map((src, i) =>
                <OptimizedImage key={i} src={src} className="w-14 h-14 hover:scale-125 hover:drop-shadow-[0_0_8px_hsl(270,70%,55%,0.5)] transition-all duration-300" alt="community" loading="lazy" decoding="async" width={56} height={56} />
                )}
               </div>
             </div>
          </section>
        </Suspense>

        <section id="what-i-do" className="bg-secondary py-16 px-6 md:px-16 mb-24">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
             <h2 className="text-foreground text-4xl font-bold mb-12 hover:text-primary transition-colors duration-300">What I Do? 👩‍💻</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {heroData.whatIDo.map((item, i) =>
              <ParticleCard
                key={i}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-primary/15 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex items-start gap-4 border border-border hover:border-primary/40 group"
                enableMagnetism
                clickEffect
              >
                    <span className="text-primary font-bold text-xl group-hover:scale-125 transition-transform">✔</span>
                    <p className="text-muted-foreground text-sm md:text-base group-hover:text-foreground transition-colors">{item.text}</p>
              </ParticleCard>
              )}
             </div>
          </div>
        </section>

        <Suspense fallback={<SkillsSkeleton />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<ProjectsSkeleton />}>
          <FeaturedWork />
        </Suspense>

        <Suspense fallback={<AboutSkeleton />}>
          <EducationAssister />
        </Suspense>

        <Suspense fallback={<div id="contact" className="min-h-[420px] px-6 md:px-16 mb-24 max-w-7xl mx-auto" /> }>
          <Contact />
        </Suspense>
      </main>
    </div>);
};

export default Screen;
