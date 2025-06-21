import React from 'react';

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950" id="about">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-12">
          <div className="h-px w-12 bg-gray-300"></div>
          <p className="text-gray-500 text-sm uppercase tracking-widest">About Us</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Mission */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-50">
              Our Mission
            </h2>
            
            <p className="text-lg text-neutral-200 leading-relaxed mb-12">
              At Lumadev, our mission is to transform ideas into real product through innovative software solution and development.
            </p>

            <div className="border-t border-neutral-50 pt-12">
              <h3 className="text-xl font-medium text-neutral-50 mb-6">Our Story</h3>
            </div>
          </div>

          {/* Right Column - Story */}
          <div>
            <div className="space-y-6">
              <p className="text-neutral-400 leading-relaxed">
                We're a tight-knit group of passionate creators dedicated to crafting meaningful work for brands that inspire us. At our core, we believe in the magic of collaboration—curating dream teams of experts tailored to each project's unique needs.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                By blending strategic thinking, bold branding, intuitive design, and cutting-edge technology, we shape immersive digital worlds that spark connection. Our mission? To reimagine how audiences engage with brands, turning every interaction into an opportunity for discovery and lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 