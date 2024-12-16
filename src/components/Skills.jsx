import React from 'react';

const skills = [
  { name: 'HTML', icon: '🔤' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🌱' },
  { name: 'Express', icon: '🚀' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Git', icon: '🔧' },
  { name: 'Redux', icon: '🔄' },
];

const Skill = () => {
  return (
    
    <section id='skills' className="bg-gradient-to-r from-purple-500 to-blue-500 py-10 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg p-5 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <span className="text-4xl mb-3">{skill.icon}</span>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Skill;
