import React, { useRef } from "react";

const Capabilites = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50" id="ai-capabilities" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="pulse-chip mb-4">
              <span>AI-Powered Knowledge</span>
            </div>
            <h2 className="section-title mb-6">Beyond Note-Taking to True Intelligence</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Second Brain doesn't just store information—it understands it. Using advanced AI models, 
              it analyzes your content, extracts meaning, identifies relationships, and presents insights 
              in ways that enhance your thinking process.
            </p>
            <ul className="space-y-4">
              {[
                "Automatically categorizes and tags content based on semantic understanding",
                "Creates knowledge graphs showing connections between ideas across sources",
                "Generates summaries of long documents with key insights highlighted",
                "Answers complex questions using information from across your knowledge base",
                "Suggests related content you might have forgotten about when working on projects",
                "Adapts to your organizational preferences and thinking style over time"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-pulse-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elegant relative">
            <div className="p-6 md:p-8 bg-white">
              <h3 className="text-xl font-semibold mb-4">AI-Generated Knowledge Example</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-pulse-100 mr-2 flex items-center justify-center">
                      <span className="text-pulse-500 text-xs">Q</span>
                    </div>
                    <p className="font-medium">What have I saved about climate solutions?</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-pulse-500 mr-2 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">AI</span>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2">I found 17 items related to climate solutions across your saved articles, notes, and bookmarks. Here's a summary of the main approaches mentioned:</p>
                      <ol className="list-decimal pl-4 space-y-1 text-gray-700">
                        <li>Carbon capture technologies (5 articles)</li>
                        <li>Renewable energy transitions (7 articles)</li>
                        <li>Regenerative agriculture (3 notes from your research)</li>
                        <li>Policy frameworks (2 PDF reports)</li>
                      </ol>
                      <p className="text-gray-700 mt-2">Would you like me to create a knowledge map connecting these concepts, or focus on a specific area?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilites; 