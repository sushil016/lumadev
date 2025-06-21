import React from 'react';

const steps = [
  {
    title: 'Idea Validation Call',
    description: 'We start with a collaborative call to understand your vision, sketch out the scope, and define what success looks like. This ensures we\'re building the right thing from day one.'
  },
  {
    title: 'Product Design Sprint',
    description: 'We rapidly visualize your app with user flows, wireframes, clickable prototypes, and clear UX direction—so you can see and test your product before a single line of code is written.'
  },
  {
    title: 'MVP Development',
    description: 'We build your minimum viable product end-to-end: React or React Native frontends, scalable backends, databases, APIs—all with automated testing and CI/CD pipelines for a fast, polished, production-ready launch.'
  },
  {
    title: 'Scale & Maintain',
    description: 'We provision production-grade infrastructure—load balancers, auto-scaling, monitoring, logging—manage deployments, optimize performance, and keep your product thriving as you grow.'
  }
];

const PremiumPathLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-6xl font-light text-center mb-16 tracking-tight">
          Your Path with Us
        </h1>
        
        {/* Layout Container */}
        <div className="relative">
          {/* Top Card - Emphasized */}
          <div>
            <div className="h-48 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 border border-zinc-700 p-8 flex flex-col justify-center items-center relative overflow-hidden">
              {/* Copper reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/10 via-orange-200/5 to-transparent opacity-60"></div>
              <div className="relative z-10 text-center">
                <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 bg-clip-text text-transparent">
                  Ready to build?
                </div>
                <div className="text-lg text-zinc-300 font-light">
                  We're your full-stack product team—design, code, launch, scale.
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Grid - 4 Cards */}
          <div className="grid grid-cols-2">
            {steps.map((step, index) => (
              <div key={index} className="h-64 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-800 p-6 relative overflow-hidden group hover:border-zinc-600 transition-all duration-300">
                {/* Copper reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/8 via-orange-200/4 to-transparent opacity-50"></div>
                
                {/* Hover copper effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/15 via-orange-200/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-xl font-semibold mb-4 text-center pb-4 border-b border-zinc-700 text-amber-100">
                    {index + 1}. {step.title}
                  </div>
                  <div className="text-zinc-300 text-sm leading-relaxed flex-1">
                    {step.description}
                  </div>
                </div>
                
                {/* Copper corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-amber-200/20 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPathLayout;