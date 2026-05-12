import React, { useState } from 'react';
import { BookOpen, FileText, ClipboardList, ChevronRight, PenTool } from 'lucide-react';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const portfolioData = [
    // PRELIMS
    {
      term: "Prelims",
      type: "Activity",
      title: "Prelim Activity No.1 - Propositional Logic",
      institution: "MATC604 - Discrete Structures",
      description: "Explored the fundamentals of propositional logic, translating natural language into symbolic logic and analyzing truth values.",
      tags: ["Logic", "Propositions"],
      icon: <PenTool size={16} />,
      theme: "blue",
      image: "/assets/portfolio/Prelim_act1.jpg"
    },
    {
      term: "Prelims",
      type: "Activity",
      title: "PRELIM ACTIVITY NO.2 - SET OPERATION & SET IDENTITY",
      institution: "MATC604 - Discrete Structures",
      description: "Applied set operations such as union, intersection, and complement, and verified various set identities.",
      tags: ["Sets", "Operations", "Identities"],
      icon: <PenTool size={16} />,
      theme: "blue",
      image: "/assets/portfolio/Prelim_act2.jpg"
    },
    {
      term: "Prelims",
      type: "Quiz",
      title: "PRELIM QUIZ NO.1 SET OPERATIONS",
      institution: "MATC604 - Discrete Structures",
      description: "First assessment covering the properties and practical applications of set theory.",
      tags: ["Sets", "Quiz"],
      icon: <ClipboardList size={16} />,
      theme: "emerald",
      image: "/assets/portfolio/PrelimQuiz1.jpg"
    },
    {
      term: "Prelims",
      type: "Quiz",
      title: "PRELIM QUIZ NO. 2 Mathematical Statement & Propositional Equivalence",
      institution: "MATC604 - Discrete Structures",
      description: "Deep dive into mathematical statements and proving logical equivalences using laws of logic.",
      tags: ["Equivalence", "Logic"],
      icon: <ClipboardList size={16} />,
      theme: "emerald",
      image: "/assets/portfolio/PrelimQuiz2.jpg"
    },
    {
      term: "Prelims",
      type: "Project",
      title: "MAT C604 PRELIM PROJECT",
      institution: "MATC604 - Discrete Structures",
      description: "Culminating project for the preliminary term integrating logic and set theory concepts.",
      tags: ["Project", "Integration"],
      icon: <BookOpen size={16} />,
      theme: "yellow",
      image: "/assets/portfolio/PrelimProject.jpg"
    },
    {
      term: "Prelims",
      type: "Exam",
      title: "PRELIM EXAM MAT C604 - DISCRETE STRUCTURE",
      institution: "MATC604 - Discrete Structures",
      description: "Comprehensive examination of all topics covered during the Preliminary term.",
      tags: ["Exam", "Assessment"],
      icon: <FileText size={16} />,
      theme: "purple",
      image: "/assets/portfolio/PrelimExam.jpg"
    },
    // MIDTERMS
    {
      term: "Midterms",
      type: "Activity",
      title: "MIDTERM ACTIVITY NO.2 - PROBABILITY AND TREE DIAGRAMS",
      institution: "MATC604 - Discrete Structures",
      description: "Calculated probabilities and visualized outcomes using tree diagrams for complex events.",
      tags: ["Probability", "Tree Diagrams"],
      icon: <PenTool size={16} />,
      theme: "blue",
      image: "/assets/portfolio/MidtermAct2.jpg"
    },
    {
      term: "Midterms",
      type: "Seatwork",
      title: "MIDTERM SEATWORK - TREE DIAGRAM",
      institution: "MATC604 - Discrete Structures",
      description: "Focused practice on constructing and interpreting tree diagrams for counting and probability.",
      tags: ["Tree Diagrams", "Counting"],
      icon: <PenTool size={16} />,
      theme: "blue"
    },
    {
      term: "Midterms",
      type: "Quiz",
      title: "MIDTERM QUIZ NO.1 - WRITTEN",
      institution: "MATC604 - Discrete Structures",
      description: "Written assessment on midterm topics, focusing on probability theory foundations.",
      tags: ["Probability", "Quiz"],
      icon: <ClipboardList size={16} />,
      theme: "emerald",
      image: "/assets/portfolio/Midterm Quiz 1.png"
    },
    {
      term: "Midterms",
      type: "Quiz",
      title: "MAT C604- MIDTERM QUIZ NO.2",
      institution: "MATC604 - Discrete Structures",
      description: "Follow-up quiz covering advanced counting principles and probability applications.",
      tags: ["Counting", "Quiz"],
      icon: <ClipboardList size={16} />,
      theme: "emerald",
      image: "/assets/portfolio/MidtermQuiz2.jpg"
    },
    {
      term: "Midterms",
      type: "Exam",
      title: "MIDTERM EXAMINATION SY2526",
      institution: "MATC604 - Discrete Structures",
      description: "Comprehensive midterm exam evaluating proficiency in counting principles and probability.",
      tags: ["Exam", "Midterms"],
      icon: <FileText size={16} />,
      theme: "purple",
      image: "/assets/portfolio/Midterm Quiz 1.png"
    },
    // FINALS
    {
      term: "Finals",
      type: "Seatwork",
      title: "FINALTERM SEATWORK NO.1 - PIE PRINCIPLES",
      institution: "MATC604 - Discrete Structures",
      description: "Applied the Principle of Inclusion-Exclusion (PIE) to solve advanced counting problems.",
      tags: ["PIE", "Counting"],
      icon: <PenTool size={16} />,
      theme: "blue",
      image: "/assets/portfolio/FinalsSW1.jpg"
    },
    {
      term: "Finals",
      type: "Activity",
      title: "FINAL TERM ACTIVITY NO.1 - BINOMIAL THEOREM",
      institution: "MATC604 - Discrete Structures",
      description: "Explored the Binomial Theorem and its applications in expanding expressions and finding specific terms.",
      tags: ["Binomial Theorem", "Algebra"],
      icon: <PenTool size={16} />,
      theme: "blue",
      image: "/assets/portfolio/Final_act1.jpg"
    },
    {
      term: "Finals",
      type: "Project",
      title: "MATH C604 FINAL PROJECT",
      institution: "MATC604 - Discrete Structures",
      description: "Final culminating project for the course, applying advanced discrete mathematics to real-world scenarios.",
      tags: ["Project", "Finals"],
      icon: <BookOpen size={16} />,
      theme: "yellow",
      image: "/assets/portfolio/Finals exam.jpg"
    }
  ];

  const getGlowColor = (theme) => {
    switch (theme) {
      case 'purple': return "shadow-[0_0_30_px_rgba(168,85,247,0.3)] border-purple-300";
      case 'yellow': return "shadow-[0_0_30_px_rgba(234,179,8,0.3)] border-yellow-300";
      case 'blue':   return "shadow-[0_0_30_px_rgba(59,130,246,0.3)] border-blue-300";
      case 'emerald': return "shadow-[0_0_30_px_rgba(16,185,129,0.3)] border-emerald-300";
      case 'pink':   return "shadow-[0_0_30_px_rgba(236,72,153,0.3)] border-pink-300";
      default: return "";
    }
  };

  return (
    <section id="portfolio" className="space-y-8 my-16">
      <div className="text-center space-y-2 mb-12">
        <h2 className="font-serif text-3xl text-crimson-depth tracking-wide drop-shadow-md">Discrete Structures Portfolio</h2>
        <p className="text-xs text-warm-sand uppercase tracking-widest font-bold opacity-80">Assignments, Quizzes, and Exams per Term</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-24 top-2 bottom-2 w-0.5 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>

        <div className="space-y-8">
          {portfolioData.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                
                <div className="md:w-24 shrink-0 flex flex-row md:flex-col items-center md:items-end justify-start pt-1 pl-1.5 md:pl-0 gap-4">
                  <div className={`absolute left-[13px] md:left-[93px] w-3 h-3 rounded-full border-2 z-10 transition-all duration-300 ${isActive ? 'bg-white border-crimson-depth scale-125 shadow-lg' : 'bg-white/20 border-white'}`}></div>
                  
                  <span className={`font-serif font-bold text-lg ml-8 md:ml-0 transition-colors duration-300 drop-shadow-md ${isActive ? 'text-white' : 'text-gray-300'}`}>
                    {item.term}
                  </span>
                </div>

                <div className="flex-1 w-full pl-8 md:pl-0">
                  <div className={`p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500 ease-out relative overflow-hidden
                    ${isActive 
                      ? `bg-gradient-to-br from-white/90 to-white/70 ring-1 ring-white/50 scale-[1.02] ${getGlowColor(item.theme)}` 
                      : 'bg-gradient-to-br from-white/40 to-white/10 border-white/30 hover:bg-white/50 shadow-lg'
                    }`}
                  >
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm transition-colors duration-300
                          ${isActive ? 'bg-crimson-depth text-white border-crimson-depth' : 'bg-white/40 text-gray-800 border-white/40'}`}>
                          {item.icon}
                          {item.type}
                        </div>
                        
                        <ChevronRight size={16} className={`text-gray-700 transition-transform duration-300 ${isActive ? 'rotate-90 opacity-100' : 'opacity-40'}`} />
                    </div>

                    <h3 className={`font-serif text-xl font-bold mb-1 transition-colors ${isActive ? 'text-gray-900' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm font-bold mb-4 transition-colors ${isActive ? 'text-crimson-depth' : 'text-crimson-depth/80'}`}>
                      {item.institution}
                    </p>
                    
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-800 text-sm leading-relaxed mb-4 border-l-2 border-crimson-depth/20 pl-3 font-medium">
                        {item.description}
                      </p>

                      {item.image && (
                        <div className="mb-4 rounded-xl overflow-hidden border border-white/40 shadow-inner bg-black/5">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-auto object-contain max-h-[400px]"
                          />
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-wide px-2 py-1 bg-white/50 text-gray-800 rounded border border-white/40 font-bold shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;