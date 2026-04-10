import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 pointer-events-auto">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo/icon */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary opacity-75 animate-spin" />
          
          {/* Middle rotating ring - slower */}
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-primary opacity-50 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
          
          {/* Inner glowing dot */}
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
        </div>

        {/* Loading text with animated dots */}
        <div className="text-center">
          <p className="text-foreground text-lg font-medium">
            Loading Portfolio
            <span className="inline-block ml-1 w-6 text-left">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
            </span>
          </p>
          <p className="text-muted-foreground text-sm mt-3">Please wait a moment</p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
