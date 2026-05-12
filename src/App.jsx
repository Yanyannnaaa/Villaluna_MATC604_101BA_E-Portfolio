import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';       
import StudentProfile from './components/StudentProfile';
import CourseOverview from './components/CourseOverview';
import Portfolio from './components/Portfolio'; 
import Certificates from './components/Certificates';
import Reflections from './components/Reflections';   
import Resume from './components/Resume';
import Navigation from './components/Navigation';
import TableOfContents from './components/TableOfContents';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const Divider = () => (
    <div className="flex items-center gap-4 my-12 opacity-50">
      <div className="h-px bg-warm-sand flex-1"></div>
      <div className="text-warm-sand text-xl">❦</div>
      <div className="h-px bg-warm-sand flex-1"></div>
    </div>
  );

  return (
    <div className="relative min-h-screen font-sans selection:bg-warm-sand selection:text-white overflow-x-hidden">
      
      {/* =========================================
          BACKGROUND IMAGE LAYER
         ========================================= */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/peonies.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(40%) contrast(110%)' 
        }}
      />

      <div className="fixed inset-0 z-0 bg-obsidian-black/20 mix-blend-multiply"></div>

      {/* =========================================
          MAIN CONTENT CARD
         ========================================= */}
      <main className="relative z-10 max-w-2xl mx-auto my-4 md:my-12 px-2 md:px-0">
        
        <Navigation />

        <div className="bg-soft-pearl/60 backdrop-blur-md shadow-2xl rounded-sm p-5 md:p-12 border-y-8 border-crimson-depth min-h-[60vh]">
          
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Divider />
                <TableOfContents />
              </>
            } />
            <Route path="/profile" element={<StudentProfile />} />
            <Route path="/overview" element={<CourseOverview />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/reflections" element={<Reflections />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

        </div>

        {/* Footer */}
        <footer className="mt-12 text-center relative z-10 pb-8">
            <p className="text-white text-xs uppercase tracking-[0.3em] font-medium drop-shadow-md">
              © 2026 Jullianna Villaluna
            </p>
        </footer>

      </main>
      <Analytics />
    </div>
  );
};

export default App;
