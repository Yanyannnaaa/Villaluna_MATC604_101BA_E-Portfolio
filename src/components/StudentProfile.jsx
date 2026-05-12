import React from 'react';
import { Target, Heart, Zap, User } from 'lucide-react';

const StudentProfile = () => {
  return (
    <section id="profile" className="space-y-8 mt-16">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl text-crimson-depth tracking-wide drop-shadow-md">Student Profile</h2>
        <p className="text-xs text-warm-sand uppercase tracking-widest font-bold opacity-80">Biography & Career Aspirations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Biography */}
        <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <User className="text-crimson-depth" size={20} />
            <h3 className="font-serif text-xl font-bold text-gray-900">Short Biography</h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            I am a first-year IT student at José Rizal University, specializing in Business Analytics. My journey is defined by a curiosity for how data shapes our world and a commitment to mastering the logical foundations of computing.
          </p>
        </div>

        {/* Career Goals */}
        <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-crimson-depth" size={20} />
            <h3 className="font-serif text-xl font-bold text-gray-900">Career Goals</h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            My goal is to become a Data Scientist who can translate complex mathematical models into actionable business strategies. I aim to bridge the gap between technical rigor and creative problem-solving.
          </p>
        </div>

        {/* Interests */}
        <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-crimson-depth" size={20} />
            <h3 className="font-serif text-xl font-bold text-gray-900">Interests in Tech</h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            I am deeply interested in Cloud Computing (AWS), Data Engineering, and the mathematical structures that power modern algorithms. I enjoy exploring how discrete math underpins everyday technology.
          </p>
        </div>

        {/* Skills & Strengths */}
        <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-crimson-depth" size={20} />
            <h3 className="font-serif text-xl font-bold text-gray-900">Skills & Strengths</h3>
          </div>
          <ul className="text-sm text-gray-700 leading-relaxed font-medium list-disc list-inside space-y-1">
            <li>Analytical Thinking & Logic</li>
            <li>Foundational Python & SQL</li>
            <li>Data Visualization & Storytelling</li>
            <li>Process Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;