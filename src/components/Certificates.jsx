import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certificates = () => {
  const certs = [
    {
      title: "AI Forward with Cloud Basics: Kiro Workshop",
      issuer: "AWS Learning Club - JRU",
      date: "2026",
      type: "Workshop"
    },
    {
      title: "AWS Student Community Night",
      issuer: "AWS Community - BGC",
      date: "2026",
      type: "Community Event"
    },
    {
      title: "Gen AI to Z: A Career Summit",
      issuer: "VibeCoders - UP Diliman",
      date: "2026",
      type: "Career Summit"
    },
    {
      title: "Data and AI for Next Generation of Tech Startups",
      issuer: "AIM-Dado Banatao Incubator",
      date: "2026",
      type: "Event"
    },
    {
      title: "Breaking in Building Forward",
      issuer: "AWS User Group BuildHers+ Philippines - Infor BGC",
      date: "2026",
      type: "Event"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      date: "2025",
      type: "Training"
    },
    {
      title: "Data Engineering Pilipinas Scholar",
      issuer: "DataCamp",
      date: "2025",
      type: "Scholarship"
    }
  ];

  return (
    <section id="certificates" className="space-y-8 mt-16">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl text-crimson-depth tracking-wide drop-shadow-md">Certificates & Trainings</h2>
        <p className="text-xs text-warm-sand uppercase tracking-widest font-bold opacity-80">Professional Development & Recognition</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {certs.map((cert, index) => (
          <div key={index} className="group flex items-center justify-between p-6 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-crimson-depth/10 rounded-full text-crimson-depth">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-gray-900 leading-tight">{cert.title}</h3>
                <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">{cert.issuer}</p>
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-2 shrink-0">
              <div className="flex items-center gap-1.5 text-[10px] text-warm-sand font-bold uppercase">
                <Calendar size={12} />
                {cert.date}
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-crimson-depth text-white rounded font-bold uppercase tracking-tighter">
                {cert.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;