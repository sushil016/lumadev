import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Since using Second Brain, I've reclaimed hours of my work week. Finding information I've saved is instant, and the AI suggestions have helped me connect ideas I would have missed.",
    author: "Aman Sahani",
    role: "Product Designer at Designify",
    gradient: "from-blue-700 via-indigo-800 to-purple-900",
    backgroundImage: "/background-section1.png"
  }, 
  {
    content: "As a researcher, I'm constantly collecting papers and notes. This tool has revolutionized how I organize my thinking, and the semantic search is uncannily accurate.",
    author: "Dr. Rohit Sharma",
    role: "Professor of Computer Science",
    gradient: "from-indigo-900 via-purple-800 to-orange-500",
    backgroundImage: "/background-section2.png"
  }, 
  {
    content: "The privacy-first approach sold me. Finally, an AI tool that doesn't compromise on security while still offering all the smart features I need for my creative work.",
    author: "Amara Patel",
    role: "Content Creator & Journalist",
    gradient: "from-purple-800 via-pink-700 to-red-500",
    backgroundImage: "/background-section3.png"
  }, 
  {
    content: "I've tried every note-taking app out there, but nothing compares to having all my inspiration, bookmarks, and notes in one searchable place with AI that actually understands context.",
    author: "Hitesh rane",
    role: "Startup Founder & Writer",
    gradient: "from-orange-600 via-red-500 to-purple-600",
    backgroundImage: "/background-section1.png"
  }
];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return (
    <div 
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" 
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">08</span>
            <span>Testimonials</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">What users say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
              role={testimonial.role} 
              gradient={testimonial.gradient} 
              backgroundImage={testimonial.backgroundImage} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
