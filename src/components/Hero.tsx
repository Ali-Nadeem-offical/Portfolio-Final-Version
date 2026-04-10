import { Suspense } from 'react';
import { heroData } from '@/data/mockData';
import AnimatedRole from './AnimatedRole';
import { ParticleCard } from './MagicBento';
import ProfileCard from './ProfileCard';

const Hero = () => {
  const { intro } = heroData;

  return (
    <section id="home" className="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 mb-24 max-w-7xl mx-auto gap-10">
      <div className="flex-1 flex flex-col items-start gap-6 animate-fade-in">
        <div>
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <span className="text-foreground text-4xl md:text-5xl font-bold">{intro.greeting}</span>
            <span className="text-4xl md:text-5xl animate-bounce">{intro.emoji}</span>
          </div>
          <AnimatedRole />
          <div className="flex flex-col gap-1 mb-8">
            {intro.description.map((line, index) => (
              <span key={index} className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                {line}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-5">
          <ParticleCard
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md border border-primary hover:bg-transparent hover:text-primary hover-scale transition-all duration-300 shadow-lg shadow-primary/20 font-medium"
            enableMagnetism
          >
            <a href="https://github.com/ali-itexpert" target="_blank" rel="noopener noreferrer" className="w-full block">
              View on Github
            </a>
          </ParticleCard>
          <ParticleCard
            className="bg-transparent text-primary px-6 py-2.5 rounded-md border border-primary hover:bg-primary hover:text-primary-foreground hover-scale transition-all duration-300 font-medium"
            enableMagnetism
          >
            <a href="https://www.linkedin.com/in/ali-nadeem-74bb523b6/" target="_blank" rel="noopener noreferrer" className="w-full block">
              View on LinkedIn
            </a>
          </ParticleCard>
          <ParticleCard
            className="bg-transparent text-primary px-6 py-2.5 rounded-md border border-primary hover:bg-primary hover:text-primary-foreground hover-scale transition-all duration-300 font-medium"
            enableMagnetism
          >
            <a href="https://www.fiverr.com/ali_nadeem_4665" target="_blank" rel="noopener noreferrer" className="w-full block">
              View on Fiverr
            </a>
          </ParticleCard>
          <ParticleCard
            className="bg-transparent text-primary px-6 py-2.5 rounded-md border border-primary hover:bg-primary hover:text-primary-foreground hover-scale transition-all duration-300 font-medium"
            enableMagnetism
          >
            <a href="https://www.upwork.com/freelancers/~016de85ce8f7ef22e7" target="_blank" rel="noopener noreferrer" className="w-full block">
              View on Upwork
            </a>
          </ParticleCard>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl pt-2">
          {[
            { title: 'Fast Delivery', desc: 'Quick turnaround' },
            { title: 'Clean UI', desc: 'Polished layouts' },
            { title: 'Responsive', desc: 'All screen sizes' },
            { title: 'Freelance Ready', desc: 'Available to hire' }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm shadow-lg shadow-primary/5"
            >
              <div className="text-primary text-sm font-semibold">{item.title}</div>
              <div className="text-muted-foreground text-xs mt-1 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <ProfileCard
        avatarUrl="/uploads/avatar.webp"
        miniAvatarUrl="/uploads/avatar.webp"
        name="Ali Nadeem"
        title="Full Stack Developer"
        handle="ali-nadeem"
        status="Available"
        contactText="Get in Touch"
        contactUrl="#contact"
        showUserInfo={true}
        enableTilt={true}
        behindGlowEnabled={true}
        behindGlowColor="rgba(154, 57, 242, 0.5)"
        innerGradient="linear-gradient(145deg, rgba(96, 73, 110, 0.55) 0%, rgba(113, 196, 255, 0.27) 100%)"
      />
    </section>
  );
};

export default Hero;
