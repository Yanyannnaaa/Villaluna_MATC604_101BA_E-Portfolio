import React from 'react';
import { Link } from 'react-router-dom';
import { List, Home, User, BookOpen, Layers, Award, MessageSquare, FileText } from 'lucide-react';

const TableOfContents = () => {
  const sections = [
    { id: '/', label: 'Cover Page', icon: <Home size={20} /> },
    { id: '/profile', label: 'Student Profile', icon: <User size={20} /> },
    { id: '/overview', label: 'Course Overview', icon: <BookOpen size={20} /> },
    { id: '/portfolio', label: 'Laboratory & Activities', icon: <Layers size={20} /> },
    { id: '/certificates', label: 'Certificates & Trainings', icon: <Award size={20} /> },
    { id: '/reflections', label: 'Course Reflections', icon: <MessageSquare size={20} /> },
    { id: '/resume', label: 'Resume', icon: <FileText size={20} /> },
  ];

  return (
    <section id="toc" className="space-y-6 mt-16 pb-8">
      <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-8 rounded-2xl shadow-xl">
        <div className="flex items-center gap-3 mb-8">
          <List className="text-crimson-depth" size={24} />
          <h2 className="font-serif text-2xl font-bold text-gray-900">Table of Contents & Legend</h2>
        </div>
        
        <p className="text-sm text-gray-700 font-medium mb-6 border-l-2 border-crimson-depth/30 pl-3">
          Use the icons in the floating navigation bar above to explore the portfolio. Click on any section below to navigate directly to it.
        </p>

        <nav>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {sections.map((section, index) => (
              <li key={section.id} className="group">
                <Link 
                  to={section.id}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 border border-transparent hover:border-white/60 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/60 text-gray-600 group-hover:bg-crimson-depth group-hover:text-white transition-colors duration-300 shadow-sm">
                    {section.icon}
                  </div>
                  <div>
                    <div className="text-xs text-crimson-depth font-bold opacity-70 mb-0.5">0{index + 1}</div>
                    <div className="text-sm font-bold text-gray-800 uppercase tracking-wider group-hover:text-crimson-depth transition-colors">
                      {section.label}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default TableOfContents;
