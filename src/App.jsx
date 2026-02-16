import React from 'react';
import Hero from './components/Hero';       
import Journey from './components/Journey'; 
import Skills from './components/Skills';   
import { Analytics } from "@vercel/analytics/react"

const App = () => {
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
      <main className="relative z-10 max-w-2xl mx-auto my-12 md:my-20">
        
        <div className="bg-soft-pearl/60 backdrop-blur-md shadow-2xl rounded-sm p-8 md:p-12 border-y-8 border-crimson-depth">
          
          <Hero />

          {/* Divider */}
          <div className="flex items-center gap-4 my-12 opacity-50">
            <div className="h-px bg-warm-sand flex-1"></div>
            <div className="text-warm-sand text-xl">❦</div>
            <div className="h-px bg-warm-sand flex-1"></div>
          </div>

          <Journey />
          <Skills />

        </div>

        {/* Footer */}
        <footer className="mt-12 text-center relative z-10">
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