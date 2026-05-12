import React from 'react';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const roles = [
    "Student Leader",
    "Business Analyst", 
    "Data Specialist",
    "Cloud Enthusiast",
    ];

  return (
    <header id="cover" className="space-y-6 animate-fade-in text-center md:text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-crimson-depth mb-2">
            Jullianna <br className="hidden md:block" /> Villaluna
          </h1>
          
          {/* THE TYPEWRITER EFFECT */}
          <div className="text-warm-sand font-medium text-base md:text-lg tracking-[0.2em] uppercase mt-2 h-7 md:h-6">
            <TypewriterEffect words={roles} />
          </div>
          
        </div>
        
        {/* --- PROFILE PICTURE --- */}
        <div className="mx-auto md:mx-0 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0 relative z-10">
            <img 
              src="/profile.jpg" 
              alt="Jullianna Villaluna" 
              className="w-full h-full object-cover"
            />
        </div>

      </div>

      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-warm-sand/20 mt-4">
        <div className="space-y-1">
          <p className="text-[10px] text-warm-sand uppercase tracking-widest font-bold opacity-60">Subject</p>
          <p className="text-crimson-depth font-bold text-xs uppercase">Discrete Structures (MATC604)</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] text-warm-sand uppercase tracking-widest font-bold opacity-60">Course & Year</p>
          <p className="text-crimson-depth font-bold text-xs uppercase">BSIT Major in Business Analytics - 1st Year</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] text-warm-sand uppercase tracking-widest font-bold opacity-60">Instructor</p>
          <p className="text-crimson-depth font-bold text-xs uppercase">Prof. Virginia Loyola</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] text-warm-sand uppercase tracking-widest font-bold opacity-60">Term & Semester</p>
          <p className="text-crimson-depth font-bold text-xs uppercase">SY 2025-2026 | 2nd Semester</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;