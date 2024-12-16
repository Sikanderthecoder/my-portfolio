import React from 'react';

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'A full-stack MERN e-commerce application with user authentication, product management, and payment gateway integration.',
    link: '',
    github: '',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing my projects and skills, built with React and Tailwind CSS.',
    link: '',
    github: '',
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application using Socket.io, React, and Node.js with customizable chat rooms.',
    link: '',
    github: '',
  },
  {
    title: 'Task Manager',
    description: 'A task management app with a Kanban board interface, built using React, Redux, and MongoDB.',
    link: '',
    github: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  
               
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:trans  hover:scale-105 transition-transform duration-300"
                >
                  View Project
                </a>
                <a
                  href={project.github}
                  
                 
                  className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
 