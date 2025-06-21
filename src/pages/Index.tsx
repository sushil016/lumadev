import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import AnimatedButton from '@/components/AnimatedButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '@/components/Testimonials';
import Capabilities from '@/components/Capabilities';
import About from '@/components/About';
import OurServices from '@/components/OurServices';
import { Do } from '@/components/Do';
import PlanWithUs from '@/components/PlanWithUs';
import WhyDifferent from '@/components/WhyDifferent';
import PremiumPathLayout from '@/components/PlanWithUs';


const Index = () => {
  // Change the document title
  useEffect(() => {
    document.title = 'Lumadev | Innovative Software Development';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-black">
      <Navbar />
      <BottomNav />
      
      {/* Hero Section with large typography */}
      <section className="hero-bg px-4 md:px-8 pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-space-grotesk tracking-tight text-black">
              Launch your idea into real product with us
            </h1>
            <p className="text-xl md:text-xl text-black/70 mb-12 mx-auto max-w-2xl">
            We’re full‑stack engineers who co‑found your vision—designing, building, and scaling web, mobile, AI, and hardware-integrated products so you can launch and grow with confidence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="rounded-full bg-black/5 hover:bg-black/10 text-black border-0 flex items-center gap-1 px-6 py-3" asChild>
                <Link to="/contact">Start your free product assessment <ChevronRight className="h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent hover:bg-black/5 text-black border border-black/20 flex items-center gap-1 px-6 py-3" asChild>
                <Link to="/product">See how we build products <ChevronRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Infinite Scroll Tag Section */}
      <section className="w-full overflow-x-hidden py-6 bg-white border-b border-gray-100">
        <div className="relative w-full">
          <div className="flex whitespace-nowrap animate-scroll-infinite text-xl font-space-grotesk text-black/80 gap-8">
            {Array(2).fill([
              'Web Design',
              'Interaction Design',
              'Product Strategy',
              'Product Design',
              'Apps & User Interface',
              'Ai Automation',
            ]).flat().map((tag, idx) => (
              <span key={idx} className="flex items-center">
                {tag}
                <span className="mx-3 text-luma-blue">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>
      
      <About />
      <Capabilities />
      <Do />
      <PremiumPathLayout />
      <OurServices />
      
      {/* <Testimonials /> */}
      <WhyDifferent />
      
      
      <Footer />
    </div>
  );
};

export default Index;
