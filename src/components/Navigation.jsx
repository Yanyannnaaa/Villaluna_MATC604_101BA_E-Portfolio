import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, BookOpen, Layers, Award, MessageSquare, FileText } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/profile', label: 'Profile', icon: <User size={18} /> },
    { path: '/overview', label: 'Overview', icon: <BookOpen size={18} /> },
    { path: '/portfolio', label: 'Portfolio', icon: <Layers size={18} /> },
    { path: '/certificates', label: 'Certificates', icon: <Award size={18} /> },
    { path: '/reflections', label: 'Reflections', icon: <MessageSquare size={18} /> },
    { path: '/resume', label: 'Resume', icon: <FileText size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 mb-8 px-2 md:px-0">
      <div className="bg-white/60 backdrop-blur-md border-b border-white/40 shadow-sm py-3 px-4 rounded-b-2xl flex items-center justify-between overflow-x-auto no-scrollbar">
        <ul className="flex items-center gap-6 md:gap-8 mx-auto whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive 
                      ? 'text-crimson-depth scale-105 border-b-2 border-crimson-depth pb-1' 
                      : 'text-gray-500 hover:text-crimson-depth opacity-70 hover:opacity-100'
                  }`
                }
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
