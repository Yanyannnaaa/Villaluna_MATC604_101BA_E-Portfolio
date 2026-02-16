import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const roles = [
    "Student Leader",
    "Business Analyst", 
    "Data Specialist",
    "Cloud Enthusiast",
    ];

  return (
    <header className="space-y-6 animate-fade-in text-center md:text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-crimson-depth mb-2">
            Jullianna <br className="hidden md:block" /> Villaluna
          </h1>
          
          {/* THE TYPEWRITER EFFECT */}
          <div className="text-warm-sand font-medium text-lg tracking-[0.2em] uppercase mt-2 h-7 md:h-6">
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

      <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 pt-4">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} className="text-crimson-depth" />
          <span>Mandaluyong City</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Mail size={16} className="text-crimson-depth" />
          <a href="mailto:jullianna.villaluna12@gmail.com" className="hover:text-crimson-depth transition-colors">jullianna.villaluna12@gmail.com</a>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed text-lg pt-2 text-justify md:text-left">
        Blending analytical rigor <span className="font-bold text-crimson-depth font-serif italic">with creative insight</span>. I thrive on turning messy datasets into clear, actionable strategies.
        Driven by a <span className="font-bold text-crimson-depth font-serif italic">passion</span> for digital innovation and the <span className="font-bold text-crimson-depth font-serif italic">art of data storytelling</span>.
      </p>

      <div className="flex justify-center md:justify-start gap-4 pt-4">
        {/* UPDATED CONTACT BUTTON: Now using outline style to match LinkedIn */}
        <a href="mailto:jullianna.villaluna12@gmail.com" className="inline-flex items-center gap-2 border border-crimson-depth text-crimson-depth px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-crimson-depth hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          Contact
        </a>
        <a href="https://www.linkedin.com/in/jullianna-villaluna-b1aab6379/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-crimson-depth text-crimson-depth px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-crimson-depth hover:text-white transition-all">
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Hero;