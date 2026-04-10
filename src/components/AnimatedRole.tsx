import React, { useState, useEffect } from 'react';

const AnimatedRole: React.FC = () => {
  const roles = ['React Developer', 'UI Designer', 'Full Stack Developer', 'Web Developer'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 80;
    const delayBeforeDelete = 2000;

    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? fullText.substring(0, displayText.length - 1)
            : fullText.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <div className="flex flex-wrap items-center gap-4 mb-8">
      <span className="text-foreground text-2xl md:text-3xl">and I am</span>
      <div className="relative inline-block min-w-[200px]">
        <span className="text-primary text-2xl md:text-3xl font-semibold h-[1.4em] inline-block">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      </div>
    </div>
  );
};

export default AnimatedRole;
