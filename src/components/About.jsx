import React from 'react';
import immg from '../images/portfolioimg2.jpg'

const About = () => {
  return (
    <section id='about' className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center">
        {/* Img Section */}
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src={immg} 
            alt="About Me"
            className="rounded-full shadow-lg w-64 h-64 object-cover"
          />
        </div>

        {/* Cntnt Section */}
        <div className="md:w-2/3 md:pl-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 mb-6">
            Hi! I'm a Full stack developer with a passion for creating dynamic, user-friendly web applications. I specialize in building responsive and efficient solutions using MongoDB, Express, React, and Node.js. With a strong foundation in both front-end and back-end development, I aim to deliver high-quality products that solve real-world problems.
          </p>
          <p className="text-lg text-gray-600">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and learning about the latest trends in web development. Let's connect and create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
