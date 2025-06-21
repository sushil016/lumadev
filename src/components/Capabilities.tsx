import React from 'react';
import { Code2, Database, Globe, Lock, Server, Shield } from 'lucide-react';

const capabilities = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your specific business needs."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Ai-Automation & Ai-agent",
    description: "This is the world of AI Automation that we build from sctrach according to your need"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    description: "Responsive and dynamic web applications that deliver exceptional user experiences."
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Database management & Cloud Solutions",
    description: "Efficient data handling and optimization for improved performance and scalability , Scalable cloud infrastructure and deployment services for modern applications."
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Custom software with hardware integration",
    description: "We also offer Hardware and software merged system , this we can obiously discuss one on one "
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Quality Assurance",
    description: "Comprehensive testing and quality control to ensure reliable software delivery."
  }
];

const Capabilities = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center gap-2 mb-12">
          <div className="h-px w-12 bg-gray-300"></div>
          <p className="text-gray-500 text-sm uppercase tracking-widest">Our Capabilities</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          What we do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="border-t border-gray-200 pt-6">
              <div className="text-gray-400 mb-4">
                {capability.icon}
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                {capability.title}
              </h3>
              <p className="text-gray-600">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities; 