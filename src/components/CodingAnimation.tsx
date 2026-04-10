import React from 'react';

const CodingAnimation: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 h-auto flex items-center justify-center">
      <div className="relative w-full aspect-square max-w-2xl group">
        {/* Soft shadow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glass card effect */}
        <div className="relative w-full h-full rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-1 shadow-2xl shadow-primary/25 overflow-hidden group-hover:shadow-primary/40 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

          <video
            autoPlay
            loop
            muted
            playsInline
            className="relative w-full h-full object-contain rounded-lg"
            style={{ backfaceVisibility: 'hidden' }}
            width={672}
            height={672}
          >
            <source src="/uploads/coding-animation.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default CodingAnimation;
