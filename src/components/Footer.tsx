import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main grid section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-12 border-b border-white/10">
          {/* Left section - Logo and tagline */}
          <div className="col-span-12 md:col-span-5 px-4 py-12 md:border-r border-white/10">
            <Link to="/" className="inline-block">
              <span className="text-5xl font-bold tracking-tighter text-[#D6F5D6]">LUMADEV<span className="text-purple-400">.</span></span>
            </Link>
          </div>
          
          {/* Right section - Contact info */}
          <div className="col-span-12 md:col-span-7 p-12 flex flex-col justify-between">
            <div className="mb-8">
              <div className="text-white/60 mb-1">For business </div>
              <a href="mailto:sushilsahani322@gmail.com" className="block text-white hover:text-purple-400 transition-colors">
                sushilsahani322@gmail.com
              </a>
              <a href="tel:+919967612372" className="block text-white hover:text-purple-400 transition-colors">
                +91 99676 12372
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-white">
              <span className='text-neutral-200'>Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
          
        {/* Bottom bar - grid layout */}
        <div className="grid grid-cols-12">
          {/* Left section - Legal links */}
          <div className="col-span-12 md:col-span-4 p-4 py-6 flex flex-col md:flex-row gap-4 text-xs">
            <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
              PRIVACY POLICY
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
              TERMS OF USE
            </Link>
          </div>
          
          {/* Middle section - External links */}
          <div className="col-span-12 md:col-span-4 p-4 py-6 flex flex-col md:flex-row justify-center gap-4 text-xs">
            <a href="https://github.com/sushil016" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center">
              GITHUB <ExternalLink className="ml-1 h-3 w-3" />
            </a>
            <a href="https://www.linkedin.com/company/107358023" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center">
              LINKEDIN <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        
          {/* Right section - Copyright */}
          <div className="col-span-12 md:col-span-4 p-4 py-6 text-xs md:text-right text-white/60">
            <div>© {year} LUMADEV® Inc</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
