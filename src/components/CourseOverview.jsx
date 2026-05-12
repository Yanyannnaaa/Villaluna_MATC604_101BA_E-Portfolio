import React from 'react';
import { Book, GraduationCap, ListChecks } from 'lucide-react';

const CourseOverview = () => {
  const topics = [
    "Propositional & Predicate Logic",
    "Set Theory & Operations",
    "Functions & Relations",
    "Counting & Probability",
    "Graph Theory & Trees",
    "Boolean Algebra"
  ];

  return (
    <section id="overview" className="space-y-8 mt-16">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl text-crimson-depth tracking-wide drop-shadow-md">Course Overview</h2>
        <p className="text-xs text-warm-sand uppercase tracking-widest font-bold opacity-80">Subject Details & Learning Objectives</p>
      </div>

      <div className="space-y-6">
        {/* Subject Description */}
        <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-8 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Book className="text-crimson-depth" size={24} />
            <h3 className="font-serif text-2xl font-bold text-gray-900">Subject Description</h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            Discrete Structures (MATC604) provides the mathematical foundations for computer science and information technology. It covers discrete mathematical structures such as sets, relations, functions, graphs, and trees, along with the logic and reasoning necessary for algorithmic design and complexity analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Learning Objectives */}
          <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-crimson-depth" size={20} />
              <h3 className="font-serif text-xl font-bold text-gray-900">Learning Objectives</h3>
            </div>
            <ul className="text-sm text-gray-700 leading-relaxed font-medium list-disc list-inside space-y-2">
              <li>Analyze and construct logical arguments.</li>
              <li>Apply set theory to data organization.</li>
              <li>Develop combinatorial reasoning for probability.</li>
              <li>Model complex systems using graphs and trees.</li>
            </ul>
          </div>

          {/* Topics Covered */}
          <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks className="text-crimson-depth" size={20} />
              <h3 className="font-serif text-xl font-bold text-gray-900">Topics Covered</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span key={topic} className="px-3 py-1 bg-white/50 border border-warm-sand/30 text-[10px] font-bold uppercase tracking-wider text-obsidian-black rounded-full">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;