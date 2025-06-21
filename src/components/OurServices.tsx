import React, { useState } from 'react';

const processSteps = [
  {
    label: 'Discover',
    description: "We kick things off by listening. Together, we'll dig into your goals, unpack your vision, and map out what success looks like. No assumptions—just curiosity.",
    points: [
      'Clarify objectives and challenges',
      'Research your audience and industry landscape',
      'Build a clear, actionable roadmap',
    ],
  },
  {
    label: 'Define',
    description: 'Data meets intuition. We study trends, dissect competitors, and talk to real users to ensure every decision is rooted in purpose.',
    points: [
      'Analyze market gaps and opportunities',
      'Explore user behaviors and pain points',
      'Shape a strategy that balances logic and creativity',
    ],
  },
  {
    label: 'Design',
    description: "This is where ideas take shape. We sketch, prototype, and refine until every pixel feels intentional and every interaction sparks joy.",
    points: [
      'Craft wireframes and user journeys',
      'Design visually stunning, intuitive interfaces',
      "Test, tweak, and perfect (we're obsessed with details)",
    ],
  },
  {
    label: 'Develop',
    description: 'Turning blueprints into reality. We code with care, ensuring your product is as robust behind the scenes as it is beautiful upfront.',
    points: [
      'Build responsive, scalable digital experiences',
      'Seamlessly integrate frontend and backend tech',
      'Rigorously test for speed, security, and reliability',
    ],
  },
  {
    label: 'Deliver',
    description: 'Launch day is just the beginning. We stick around to optimize, support, and grow with you.',
    points: [
      'Deploy with precision and flair',
      'Offer ongoing maintenance and updates',
      'Learn from feedback and evolve together',
    ],
  },
];


const offerings = [
  {
    category: 'Design',
    items: [
      'Brand Identity & Visual Storytelling',
      'UI/UX Design for Web & Mobile Apps',
      'Product Design & Prototyping',
    ],
  },
  {
    category: 'Development',
    items: [
      'Custom Website Development',
      'Frontend Magic (React, Vue, etc.)',
      'Headless CMS & E-commerce',
    ],
  },
  {
    category: 'Strategy',
    items: [
      'Digital Experience Audits',
      'User-Centered Content Strategy',
      'Conversion Optimization',
    ],
  },
];

const closingQuote =
  "At Lumadev, we're not just building products—we're crafting partnerships. Let's create something that feels authentically you and works brilliantly for the world.";

const OurServices = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Process Navigation */}
        <aside className="md:col-span-1 flex flex-col items-start md:sticky md:top-24">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Our Process</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-12 font-sans leading-tight">
            Our Services<br />
            <span className="text-gray-400">& Process</span>
          </h1>
          <nav className="space-y-6 w-full border-l border-gray-800 pl-6">
            {processSteps.map((step, idx) => (
              <div 
                key={step.label} 
                className={`flex items-center group cursor-pointer ${activeStep === idx ? '' : 'opacity-60 hover:opacity-100'}`}
                onClick={() => setActiveStep(idx)}
              >
                <span className={`text-lg font-medium ${activeStep === idx ? 'text-white' : 'text-gray-400'}`}>{step.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Right: Content */}
        <main className="md:col-span-2 space-y-12">
          {/* How We Work Intro */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gray-700"></div>
              <h2 className="text-xl font-medium text-gray-300">How We Work</h2>
            </div>
            <p className="text-lg text-gray-400">Structured creativity, delivered with heart</p>
          </section>

          {/* Process Steps Details */}
          <section className="border-t border-gray-800 pt-8">
            <div>
              {processSteps.map((step, idx) => (
                <div 
                  key={step.label} 
                  className={`${activeStep === idx ? 'block' : 'hidden'}`}
                >
                  <h3 className="text-2xl font-bold mb-6">{step.label}</h3>
                  
                  <div>
                    <p className="text-gray-300 mb-8 leading-relaxed">{step.description}</p>
                    <div className="space-y-4">
                      {step.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="text-gray-500 font-mono">0{i+1}</div>
                          <div className="text-gray-300">{point}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>



          {/* What We Offer */}
          <section className="border-t border-gray-800 py-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gray-700"></div>
              <h2 className="text-xl font-medium text-gray-300">What We Offer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {offerings.map((offering) => (
                <div key={offering.category}>
                  <h3 className="text-xl font-bold mb-6 text-white">{offering.category}</h3>
                  <ul className="space-y-4">
                    {offering.items.map((item, i) => (
                      <li key={i} className="text-gray-400 border-l border-gray-700 pl-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Closing Quote */}
          <section className="border-t border-gray-800 py-12">
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">{closingQuote}</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default OurServices; 