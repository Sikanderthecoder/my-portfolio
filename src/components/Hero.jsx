

import React from 'react';
import img from '../images/sikander.jpg';

const Hero = () => {
  return (
    <section id="home" className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center">
        {/* Content Area */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            I'm a MERN stack developer passionate about building beautiful and functional web applications.
          </p>
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Explore My Work
          </a>
        </div>

        {/* Image Area */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={img}
            alt="Hero"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
