import React from 'react';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="space-y-8 mt-16 pb-12">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl text-crimson-depth tracking-wide drop-shadow-md">Resume</h2>
        <p className="text-xs text-warm-sand uppercase tracking-widest font-bold opacity-80">Curriculum Vitae Overview</p>
      </div>

      <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-8 rounded-2xl shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-warm-sand/20 pb-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-gray-900">Jullianna Villaluna</h3>
            <p className="text-xs text-crimson-depth font-bold uppercase tracking-widest">BSIT - Business Analytics Student</p>
          </div>
          <a 
            href="/assets/resume/resume.pdf" 
            download="Jullianna_Villaluna_Resume.pdf"
            className="flex items-center gap-2 bg-crimson-depth text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-obsidian-black transition-all shadow-md cursor-pointer"
          >
            <Download size={14} /> Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xs text-warm-sand font-bold uppercase tracking-tighter border-l-2 border-crimson-depth pl-2">Education</h4>
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-900">José Rizal University</p>
              <p className="text-xs text-gray-600 italic">BS in Information Technology (2025-Present)</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs text-warm-sand font-bold uppercase tracking-tighter border-l-2 border-crimson-depth pl-2">Summary</h4>
            <p className="text-xs text-gray-700 leading-relaxed font-medium">
              Aspiring Business Analyst with a strong foundation in logic and data structures. Passionate about leveraging technology to drive business intelligence and operational efficiency.
            </p>
          </div>
        </div>

        {/* Visual Resume Image */}
        <div className="mt-8 pt-8 border-t border-warm-sand/20">
          <div className="relative group cursor-zoom-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-crimson-depth/20 to-warm-sand/20 rounded-2xl blur opacity-10 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative bg-white/40 backdrop-blur-sm border border-white/40 rounded-xl overflow-hidden shadow-2xl transition-all duration-700 ease-out transform scale-95 opacity-40 blur-[1px] group-hover:scale-100 group-hover:opacity-100 group-hover:blur-0">
              <img 
                src="/assets/resume/resume.jpg" 
                alt="Jullianna Villaluna Resume" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Hover Indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-crimson-depth/20 flex items-center gap-2">
                <FileText size={16} className="text-crimson-depth" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-800">Hover to View Full Resume</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
