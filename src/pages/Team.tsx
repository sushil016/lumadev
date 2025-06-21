import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Palette, Globe, Server, Cpu, BarChart3, Layers } from 'lucide-react';

interface Department {
  name: string;
  count: number;
  description: string;
  icon: React.ReactNode;
}

const departments: Department[] = [
  {
    name: "Design",
    count: 1,
    description: "Our design team creates intuitive and beautiful interfaces that delight users.",
    icon: <Palette className="h-8 w-8 text-blue-500" />
  },
  {
    name: "Frontend",
    count: 2,
    description: "Building responsive and performant user interfaces with modern technologies.",
    icon: <Globe className="h-8 w-8 text-indigo-500" />
  },
  {
    name: "Backend",
    count: 2,
    description: "Developing robust APIs and services that power our platform.",
    icon: <Server className="h-8 w-8 text-green-500" />
  },
  {
    name: "DevOps",
    count: 1,
    description: "Automating and optimizing our infrastructure and deployment pipelines.",
    icon: <Code className="h-8 w-8 text-orange-500" />
  },
  {
    name: "AI",
    count: 1,
    description: "Creating intelligent systems that understand and generate multimodal content.",
    icon: <Cpu className="h-8 w-8 text-purple-500" />
  },
  {
    name: "ML",
    count: 1,
    description: "Building and training models that power our advanced capabilities.",
    icon: <BarChart3 className="h-8 w-8 text-pink-500" />
  },
  {
    name: "Blockchain",
    count: 0,
    description: "Developing decentralized solutions for next-generation applications.",
    icon: <Layers className="h-8 w-8 text-cyan-500" />
  }
];

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex items-center gap-2 mb-12">
              <div className="h-px w-12 bg-gray-300"></div>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Our People</p>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Our Team
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mb-16">
              With over 8 experts across 7 departments, we're building the future of technology together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {departments.map((dept) => (
                <div key={dept.name} className="border-t border-gray-200 pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-gray-400">
                      {dept.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-1">{dept.name}</h3>
                      <div className="text-gray-500 text-sm mb-4">{dept.count} team members</div>
                      <p className="text-gray-600">{dept.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-24 border-t border-gray-200 pt-16">
              <h2 className="text-2xl font-bold mb-12 text-gray-900">Join Our Growing Team</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div>
                  <p className="text-3xl font-light text-gray-900 mb-2">8</p>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">Team Members</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-gray-900 mb-2">7</p>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">Departments</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-gray-900 mb-2">1</p>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">Countries</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-gray-900 mb-2">80%</p>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">Remote Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team; 