import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      'bg-transparent',
      scrolled ? 'py-4' : 'py-6'
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-10">
          <span className="text-2xl font-space-grotesk font-bold">
            <img src="/logo-101.png" alt="LumaDev Logo" className="h-12" />
          </span>
        </Link>

        {/* Desktop Schedule a Call Button */}
        <div className="hidden md:flex items-center">
          <a
            href="https://cal.com/sushilsahani"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 rounded-full bg-black text-white px-6 py-2 font-medium shadow hover:bg-black/80 transition-colors"
          >
            Schedule a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white p-4 animate-slide-up shadow-md">
            <nav className="flex flex-col space-y-4">
              <Link to="/product" className="text-black/70 hover:text-black py-2 transition-colors" onClick={() => setIsOpen(false)}>
                Product
              </Link>
              <Link to="/team" className="text-black/70 hover:text-black py-2 transition-colors" onClick={() => setIsOpen(false)}>
                Team
              </Link>
              <Link to="/contact" className="text-black/70 hover:text-black py-2 transition-colors" onClick={() => setIsOpen(false)}>
                Contact us
              </Link>
              <a
                href="https://cal.com/sushilsahani"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-black text-white px-6 py-2 font-medium shadow hover:bg-black/80 transition-colors text-center"
              >
                Schedule a Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
