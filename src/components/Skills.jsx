import React from 'react';

const Skills = () => {
  const skills = [
    'Python (Foundational)', 
    'Microsoft Excel', 
    'SQL Logic', 
    'Google Workspace', 
    'Quantitative Analysis', 
    'Data Integrity', 
    'Technical Documentation',
    'Pandas',
    'Numpy',
    'Matplotlib',
    'Snowflake (Learning)',
    'Data Visualization',
    'Problem Solving',
    'Process Optimization',
    'Customer Service'
  ];

  return (
    <section className="space-y-6 mt-16">
      <h2 className="font-serif text-2xl text-crimson-depth text-center font-bold">Skills & Stack</h2>
      
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-soft-pearl border border-warm-sand text-xs font-bold uppercase tracking-wider text-obsidian-black rounded hover:bg-crimson-depth hover:text-white hover:border-crimson-depth transition-all cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;