import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, BookOpen, Layers, Award, MessageSquare, FileText } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/profile', label: 'Profile', icon: <User size={20} /> },
    { path: '/overview', label: 'Overview', icon: <BookOpen size={20} /> },
    { path: '/portfolio', label: 'Portfolio', icon: <Layers size={20} /> },
    { path: '/certificates', label: 'Certificates', icon: <Award size={20} /> },
    { path: '/reflections', label: 'Reflections', icon: <MessageSquare size={20} /> },
    { path: '/resume', label: 'Resume', icon: <FileText size={20} /> },
  ];

  return (
    <nav className="sticky top-4 md:top-6 z-50 mb-8 md:mb-12 flex justify-center w-full px-2 md:px-4 pointer-events-none">
      <div className="bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl py-2 md:py-3 px-3 md:px-6 rounded-full flex items-center justify-center overflow-visible pointer-events-auto">
        <ul className="flex items-center gap-2 sm:gap-6">
          {navItems.map((item) => (
            <li key={item.path} className="relative group">
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-crimson-depth text-white shadow-[0_0_15px_rgba(153,27,27,0.4)] scale-110' 
                      : 'bg-transparent text-gray-600 hover:bg-white/80 hover:text-crimson-depth hover:scale-110 hover:shadow-md'
                  }`
                }
              >
                <div className="scale-75 md:scale-100 flex items-center justify-center">
                  {item.icon}
                </div>
              </NavLink>
              
              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-50">
                <div className="bg-gray-900 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded shadow-lg whitespace-nowrap">
                  {item.label}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900"></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
