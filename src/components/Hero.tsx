
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (deviceRef.current) {
        const scrollPosition = window.scrollY;
        deviceRef.current.style.transform = `translateY(${scrollPosition * 0.1}px) rotate(${scrollPosition * 0.02}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div className="absolute inset-0 bg-luma-navy">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(0,209,255,0.4)_0%,rgba(121,40,202,0.2)_40%,rgba(0,0,0,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div ref={heroRef} className="space-y-6 animate-fade-in">
            <h1 className="hero-text">
              <span className="gradient-text">Innovative</span> Software Development
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-lg">
              We build cutting-edge digital solutions that transform businesses and create exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="gradient-bg px-8 py-6">Get Started</Button>
              <Button variant="outline" size="lg" className="border-white/20">
                View Our Work
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            <div 
              ref={deviceRef} 
              className="relative w-full max-w-md aspect-[3/2] bg-gradient-to-br from-white/10 to-white/5 rounded-lg shadow-2xl p-2 backdrop-blur-sm animate-spin-slow"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-luma-blue/20 to-luma-purple/20 rounded-lg opacity-50"></div>
              <div className="h-full w-full bg-gray-900 rounded-md flex items-center justify-center">
                <div className="text-xs md:text-sm text-white/60 font-space-grotesk">
                  {`<Luma dev />`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="animate-bounce-light" />
      </button>
    </section>
  );
};

export default Hero;
