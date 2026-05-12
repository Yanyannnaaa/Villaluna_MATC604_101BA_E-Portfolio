import React from 'react';
import { Lightbulb, PenTool, BrainCircuit, HelpCircle, TrendingUp } from 'lucide-react';

const Reflections = () => {
  const reflections = [
    {
      title: "Learning Journey: Logic & Foundations",
      icon: <BrainCircuit className="text-blue-500" size={24} />,
      content: "During the Prelims, I learned how to distill complex natural language into precise symbolic logic. Propositional Logic and Set Operations showed me that even the most abstract concepts have a rigorous structure. This foundation is essential for writing clean, bug-free code.",
      question: "What did I learn?",
      category: "PRELIMS"
    },
    {
      title: "Overcoming Challenges in Probability",
      icon: <HelpCircle className="text-yellow-500" size={24} />,
      content: "The Midterm focus on Probability and Tree Diagrams presented my biggest challenge: visualizing multi-stage events. By breaking these down into tree diagrams, I improved my problem-solving skills and learned to handle complex systems systematically.",
      question: "What challenges did I encounter?",
      category: "MIDTERMS"
    },
    {
      title: "Future Application: Counting & Theorems",
      icon: <TrendingUp className="text-crimson-depth" size={24} />,
      content: "Mastering the Binomial Theorem and PIE in the Finals has shown me the power of combinatorial thinking. I can apply these skills to optimize database queries, design efficient network topologies, and improve the logic of future software projects.",
      question: "How can I apply these skills?",
      category: "FINALS"
    }
  ];

  return (
    <section id="reflections" className="space-y-12 mt-16 mb-12">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl text-crimson-depth tracking-wide drop-shadow-md">Course Reflections</h2>
        <p className="text-xs text-warm-sand uppercase tracking-widest font-bold opacity-80">Insights from Discrete Structures per Term</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {reflections.map((item, index) => (
          <div 
            key={index} 
            className="group relative bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/50 rounded-xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-crimson-depth opacity-70">
                    {item.category} — {item.question}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {item.content}
                </p>
              </div>
            </div>
            
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-crimson-depth/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reflections;