import React from 'react';
import { List } from 'lucide-react';

const TableOfContents = () => {
  const sections = [
    { id: 'cover', label: '1. Cover Page' },
    { id: 'profile', label: '2. Student Profile' },
    { id: 'overview', label: '3. Course Overview' },
    { id: 'portfolio', label: '4. Laboratory & Activities' },
    { id: 'certificates', label: '5. Certificates & Trainings' },
    { id: 'reflections', label: '6. Course Reflections' },
    { id: 'resume', label: '7. Resume' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="toc" className="space-y-6 mt-16">
      <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-8 rounded-2xl shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <List className="text-crimson-depth" size={24} />
          <h2 className="font-serif text-2xl font-bold text-gray-900">Table of Contents</h2>
        </div>
        <nav>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
            {sections.map((section) => (
              <li key={section.id}>
                <button 
                  onClick={() => scrollToSection(section.id)}
                  className="text-sm font-bold text-gray-700 hover:text-crimson-depth transition-colors uppercase tracking-wider text-left w-full"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default TableOfContents;