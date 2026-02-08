import React from 'react';

const Experience = () => {
  return (
    <section className="space-y-8">
      <h2 className="font-serif text-3xl text-crimson-depth text-center mb-8">Professional Journey</h2>

      <div className="relative border-l-2 border-warm-sand/30 ml-3 md:ml-6 space-y-10 pl-8 md:pl-10 pb-4">
        {/* Job 1 */}
        <div className="relative group">
          <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-crimson-depth shadow-sm"></div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 className="font-bold text-xl text-obsidian-black group-hover:text-crimson-depth transition-colors">Barista</h3>
            <span className="text-xs font-bold text-white bg-warm-sand px-2 py-1 rounded">2024 — 2025</span>
          </div>
          <p className="text-gray-500 text-sm italic mb-3">Starbucks Philippines</p>
          <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
            <li>• Optimized customer service workflows during peak hours, ensuring high accuracy in POS transactions.</li>
            <li>• Upheld strict quality control and safety standards in a fast-paced environment.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="relative group">
          <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-warm-sand shadow-sm"></div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 className="font-bold text-xl text-obsidian-black group-hover:text-crimson-depth transition-colors">Treasurer & Asst. Secretary</h3>
            <span className="text-xs font-bold text-white bg-warm-sand px-2 py-1 rounded">2017 — 2019</span>
          </div>
          <p className="text-gray-500 text-sm italic mb-3">Student Organizations</p>
          <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
            <li>• Managed annual budgets by tracking dues and event expenses with 100% transparency.</li>
            <li>• Digitized historical records to simplify the transition for future executive teams.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;