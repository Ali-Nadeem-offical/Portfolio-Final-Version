import React from 'react';

export const HeroSkeleton = () => (
  <section id="home" className="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 mb-24 max-w-7xl mx-auto gap-10">
    {/* Left side skeleton */}
    <div className="flex-1 flex flex-col items-start gap-6">
      {/* Greeting skeleton */}
      <div className="space-y-4 w-full">
        <div className="h-12 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-3/4 animate-pulse" />
        <div className="h-8 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-2/3 animate-pulse" />
        <div className="space-y-2">
          <div className="h-5 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-full animate-pulse" />
          <div className="h-5 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-5/6 animate-pulse" />
          <div className="h-5 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-4/5 animate-pulse" />
        </div>
      </div>

      {/* Buttons skeleton */}
      <div className="flex flex-wrap gap-5 pt-4">
        <div className="h-10 bg-gradient-to-r from-primary/50 to-primary/30 rounded-md w-32 animate-pulse" />
        <div className="h-10 bg-gradient-to-r from-muted to-muted/50 rounded-md w-32 animate-pulse" />
      </div>
    </div>

    {/* Right side - Profile card skeleton */}
    <div className="flex-1">
      <div className="aspect-[0.718] max-h-[450px] rounded-2xl bg-gradient-to-br from-muted to-muted/50 animate-pulse" />
    </div>
  </section>
);

export const AboutSkeleton = () => (
  <section id="about" className="flex flex-col md:flex-row items-center px-6 md:px-16 mb-24 max-w-7xl mx-auto gap-12">
    <div className="w-full md:w-1/2">
      <div className="aspect-square rounded-2xl bg-gradient-to-r from-muted to-muted/50 animate-pulse" />
    </div>

    <div className="flex-1 space-y-4">
      <div className="h-10 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-2/3 animate-pulse" />
      <div className="space-y-3">
        <div className="h-5 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-full animate-pulse" />
        <div className="h-5 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-full animate-pulse" />
        <div className="h-5 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-2/3 animate-pulse" />
      </div>
      <div className="h-24 bg-gradient-to-r from-muted to-muted/50 rounded-lg mt-6 animate-pulse" />
      <div className="flex gap-6 pt-4">
        <div className="h-14 w-14 bg-gradient-to-r from-muted to-muted/50 rounded-lg animate-pulse" />
        <div className="h-14 w-14 bg-gradient-to-r from-muted to-muted/50 rounded-lg animate-pulse" />
        <div className="h-14 w-14 bg-gradient-to-r from-muted to-muted/50 rounded-lg animate-pulse" />
      </div>
    </div>
  </section>
);

export const SkillsSkeleton = () => (
  <section className="py-24 px-6 md:px-16 mb-24 max-w-7xl mx-auto">
    <div className="h-10 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-1/3 mx-auto mb-12 animate-pulse" />
    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="h-16 bg-gradient-to-r from-muted to-muted/50 rounded-xl animate-pulse"
        />
      ))}
    </div>
  </section>
);

export const ProjectsSkeleton = () => (
  <section id="projects" className="flex flex-col items-center px-6 md:px-16 mb-24 max-w-7xl mx-auto">
    <div className="h-10 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-1/2 mx-auto mb-12 animate-pulse" />
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-muted to-muted/50 animate-pulse" />
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-2/3 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-full animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-muted to-muted/50 rounded-lg w-4/5 animate-pulse" />
            </div>
            <div className="flex gap-3 pt-4">
              <div className="h-10 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg flex-1 animate-pulse" />
              <div className="h-10 bg-gradient-to-r from-muted to-muted/50 rounded-lg flex-1 animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
