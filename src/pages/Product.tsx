import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex items-center gap-2 mb-12">
              <div className="h-px w-12 bg-gray-300"></div>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Our Products</p>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Innovative Solutions
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mb-16">
              We build cutting-edge software solutions that solve real-world problems. Our products combine innovative technology with intuitive design to deliver exceptional user experiences.
            </p>
            
            {/* Product 1: CrewArcade */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 border-t border-gray-200 pt-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">CrewArcade</h2>
                <p className="text-gray-600 mb-6">
                  CrewArcade is a next-generation gaming platform that brings together players from around the world. With advanced matchmaking algorithms and seamless integration across devices, CrewArcade offers an unparalleled gaming experience.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">Cross-platform compatibility for seamless gaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">Advanced matchmaking for balanced gameplay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">Real-time analytics and performance tracking</span>
                  </li>
                </ul>
                <Button variant="outline" className="rounded-full bg-transparent hover:bg-black/5 text-black border border-black/20 flex items-center gap-1 px-6 py-3">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/crewarcade.png" 
                  alt="CrewArcade Platform" 
                  className="w-full h-auto rounded-lg shadow-sm border border-gray-100"
                />
              </div>
            </div>
            
            {/* Product 2: SolutionAI */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-t border-gray-200 pt-16">
              <div>
                <img 
                  src="/solutionai.png" 
                  alt="SolutionAI Platform" 
                  className="w-full h-auto rounded-lg shadow-sm border border-gray-100"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">SolutionAI</h2>
                <p className="text-gray-600 mb-6">
                  SolutionAI is an intelligent business automation platform that leverages the power of artificial intelligence to streamline operations and enhance decision-making. Our AI-driven solutions help businesses optimize processes, reduce costs, and improve efficiency.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">Predictive analytics for data-driven decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">Automated workflow optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">Customizable AI solutions for specific business needs</span>
                  </li>
                </ul>
                <Button variant="outline" className="rounded-full bg-transparent hover:bg-black/5 text-black border border-black/20 flex items-center gap-1 px-6 py-3">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Product;