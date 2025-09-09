import React from 'react';
import { skillsData } from '../../data/skills';

const SkillBar = ({ skill }) => (
  <div className='skill-item'>
  <div className="flex justify-between items-center mb-2">
    <span className='flex items-center'>
      <span class={`w-3 h-3 ${skill.color} rounded-full mr-2`}></span>
      {skill.name}
    </span>
    <span class="text-sm text-gray-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className={`${skill.color} h-2 rounded-full skill-bar`}
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

const SkillCategory = ({ category }) => (
  <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${category.border} border-white/20 project-card`}>
    <div class="flex items-center mb-6">
      <div class={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center mr-4`}>
        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d={category.d} />
        </svg>
      </div>

      <h3 className={`text-xl font-bold mb-4 ${category.titleColor}`}>
        {category.title}
      </h3>
    </div>
    <div className="space-y-5">
      {category.skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <section className="section-content fade-in">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((category) => (
          <SkillCategory key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;