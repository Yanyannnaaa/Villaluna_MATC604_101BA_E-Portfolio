import React from 'react';

const Education = () => {
  return (
    <section className="space-y-8 mt-16">
        <h2 className="font-serif text-3xl text-crimson-depth text-center mb-8">Education</h2>
    
        <div className="grid gap-6">
          <div className="bg-white p-6 border border-warm-sand/20 hover:border-crimson-depth/30 transition-colors shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-obsidian-black">BS in Business Analytics</h3>
              <span className="text-sm text-warm-sand font-bold">Current</span>
            </div>
            <p className="text-crimson-depth text-sm mb-3">José Rizal University</p>
            <p className="text-sm text-gray-600">
              Focus: Python Programming, Data Logic, Business Intelligence Strategies.
            </p>
          </div>

          <div className="bg-white p-6 border border-warm-sand/20 hover:border-crimson-depth/30 transition-colors shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-obsidian-black">BS in Medical Technology</h3>
              <span className="text-sm text-warm-sand font-bold">2023-24</span>
            </div>
            <p className="text-crimson-depth text-sm mb-3">National University MOA</p>
            <p className="text-sm text-gray-600">
              Dean’s List. Focus on Laboratory Operations, Specimen Analysis, and Data Recording.
            </p>
          </div>
        </div>
    </section>
  );
};

export default Education;