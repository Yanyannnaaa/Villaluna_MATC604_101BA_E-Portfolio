import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Users, ChevronRight } from 'lucide-react';

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const timelineData = [
    {
      year: "2025",
      type: "Leadership",
      title: "Operations Officer",
      institution: "AWS Learning Club - JRU Chapter",
      description: "Hosting and organizing workshops and events to promote AWS cloud learning. Collaborating with a team to create engaging content and foster a supportive learning environment for students interested in cloud technologies.",
      tags: ["AWS", "Community Building", "Event Planning"],
      icon: <Users size={16} />,
      theme: "purple"
    },
    {
      year: "2025",
      type: "Scholarship",
      title: "Data Engineering Pilipinas Scholar",
      institution: "DataCamp",
      description: "Sponsored by Data Engineering Pilipinas for a free DataCamp subscription to upskill in data engineering. Currently focused on mastering SQL, Python, and Snowflake to build scalable data solutions.",
      tags: ["Data Engineering", "SQL", "Snowflake"],
      icon: <Award size={16} />,
      theme: "yellow"
    },
    {
      year: "2025",
      type: "Education",
      title: "BS in Information Technology",
      institution: "José Rizal University",
      description: "Major in Business Analytics. Focusing on programming foundations, logic and data structures (Python), spreadsheet modeling, and data-driven strategies for business optimization.",
      tags: ["Python", "Business Intelligence"],
      icon: <GraduationCap size={16} />,
      theme: "blue"
    },
    {
      year: "2024",
      type: "Work",
      title: "Barista",
      institution: "Starbucks Philippines",
      description: "Optimized customer service workflows during peak hours, ensuring high accuracy in POS transactions while upholding strict quality control and safety standards.",
      tags: ["Process Optimization", "Customer Service"],
      icon: <Briefcase size={16} />,
      theme: "emerald"
    },
    {
      year: "2023",
      type: "Education",
      title: "BS in Medical Technology",
      institution: "National University MOA",
      description: "Executed precision-based tasks including specimen analysis and maintained rigorous standards in recording medical research and laboratory summaries.",
      tags: ["Lab Operations", "Data Accuracy"],
      icon: <GraduationCap size={16} />,
      theme: "blue"
    },
    {
      year: "",
      type: "Leadership",
      title: "Treasurer & Asst. Secretary",
      institution: "Student Organizations",
      description: "Managed annual budgets by tracking dues and event expenses with 100% transparency. Digitized historical records to simplify the transition for future executive teams.",
      tags: ["Finance", "Documentation"],
      icon: <Briefcase size={16} />,
      theme: "pink"
    }
  ];

  // Helper for that "Active Glow" color
  const getGlowColor = (theme) => {
    switch (theme) {
      case 'purple': return "shadow-[0_0_30px_rgba(168,85,247,0.3)] border-purple-300";
      case 'yellow': return "shadow-[0_0_30px_rgba(234,179,8,0.3)] border-yellow-300";
      case 'blue':   return "shadow-[0_0_30px_rgba(59,130,246,0.3)] border-blue-300";
      case 'emerald': return "shadow-[0_0_30px_rgba(16,185,129,0.3)] border-emerald-300";
      case 'pink':   return "shadow-[0_0_30px_rgba(236,72,153,0.3)] border-pink-300";
      default: return "";
    }
  };

  return (
    <section className="space-y-8 my-16">
      <div className="text-center space-y-2 mb-12">
        <h2 className="font-serif text-3xl text-crimson-depth tracking-wide drop-shadow-md">My Journey</h2>
        <p className="text-xs text-warm-sand uppercase tracking-widest font-bold opacity-80">Hover over a card to reveal details</p>
      </div>

      <div className="relative">
        {/* The Vertical Line */}
        <div className="absolute left-4 md:left-24 top-2 bottom-2 w-0.5 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>

        <div className="space-y-8">
          {timelineData.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                
                {/* Left Column: Year & Dot */}
                <div className="md:w-24 shrink-0 flex flex-row md:flex-col items-center md:items-end justify-start pt-1 pl-1.5 md:pl-0 gap-4">
                  {/* The Dot */}
                  <div className={`absolute left-[13px] md:left-[93px] w-3 h-3 rounded-full border-2 z-10 transition-all duration-300 ${isActive ? 'bg-white border-crimson-depth scale-125 shadow-lg' : 'bg-white/20 border-white'}`}></div>
                  
                  {/* The Year Text */}
                  <span className={`font-serif font-bold text-xl ml-8 md:ml-0 transition-colors duration-300 drop-shadow-md ${isActive ? 'text-white' : 'text-gray-300'}`}>
                    {item.year}
                  </span>
                </div>

                {/* Right Column: The Card */}
                <div className="flex-1 w-full pl-8 md:pl-0">
                  
                  {/* APPLE LIQUID GLASS EFFECT */}
                  <div className={`p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500 ease-out relative overflow-hidden
                    ${isActive 
                      ? `bg-gradient-to-br from-white/90 to-white/70 ring-1 ring-white/50 scale-[1.02] ${getGlowColor(item.theme)}` 
                      : 'bg-gradient-to-br from-white/40 to-white/10 border-white/30 hover:bg-white/50 shadow-lg'
                    }`}
                  >
                    
                    {/* Header: Badge & Title */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm transition-colors duration-300
                          ${isActive ? 'bg-crimson-depth text-white border-crimson-depth' : 'bg-white/40 text-gray-800 border-white/40'}`}>
                          {item.icon}
                          {item.type}
                        </div>
                        
                        {/* Interactive Hint Icon */}
                        <ChevronRight size={16} className={`text-gray-700 transition-transform duration-300 ${isActive ? 'rotate-90 opacity-100' : 'opacity-40'}`} />
                    </div>

                    <h3 className={`font-serif text-xl font-bold mb-1 transition-colors ${isActive ? 'text-gray-900' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm font-bold mb-4 transition-colors ${isActive ? 'text-crimson-depth' : 'text-crimson-depth/80'}`}>
                      {item.institution}
                    </p>
                    
                    {/* Content - Expands on Hover */}
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-800 text-sm leading-relaxed mb-4 border-l-2 border-crimson-depth/20 pl-3 font-medium">
                        {item.description}
                      </p>

                      {/* Tags */}
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

export default Journey;