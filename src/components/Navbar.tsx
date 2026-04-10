import { useState } from 'react';
import { navLinks } from '@/data/mockData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-background/80 backdrop-blur-md py-3 px-4 md:px-16 mb-10 border-b border-border sticky top-0 z-50" style={{ willChange: 'transform' }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-primary text-3xl italic font-bold cursor-pointer hover-scale">
          ​Ali Nadeem
        </span>

        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>

        <div className="hidden md:flex items-center gap-6 story-link">
          {navLinks.map((link, index) =>
            <a
              key={index}
              href={link.href}
              className="text-foreground text-base font-medium hover:text-primary transition-colors duration-200">
              {link.name}
            </a>
          )}
          <button
            className="border border-primary text-primary px-4 py-1.5 rounded-md hover:bg-primary hover:text-primary-foreground hover-scale transition-all duration-300 animate-glow shadow"
            onClick={() => alert("Pressed!")}>
            Start a Project 🚀
          </button>
        </div>
      </div>

      {isMenuOpen &&
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 pb-4 bg-background animate-fade-in">
          {navLinks.map((link, index) =>
            <a
              key={index}
              href={link.href}
              className="text-foreground text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          )}
          <button
            className="border border-primary text-primary px-4 py-1 rounded-md hover:bg-primary hover:text-primary-foreground w-3/4 transition-all"
            onClick={() => alert("Pressed!")}>
            Start a Project 🚀
          </button>
        </div>
      }
    </nav>
  );
};

export default Navbar;
