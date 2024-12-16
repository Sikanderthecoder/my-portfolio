import React from 'react';
import { FaCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-blue-500 text-6xl mb-4 animate-bounce" />,
    title: 'Web Development',
    description: 'Building responsive and dynamic web applications using modern technologies like React, Tailwind CSS, and Node.js.',
  },
  {
    icon: <FaMobileAlt className="text-green-500 text-6xl mb-4 animate-pulse" />,
    title: 'Mobile Optimization',
    description: 'Creating mobile-friendly designs that ensure seamless user experience across all devices.',
  },
  {
    icon: <FaDatabase className="text-purple-500 text-6xl mb-4 animate-spin" />,
    title: 'Backend Development',
    description: 'Designing scalable backend systems with robust APIs and efficient database management using MongoDB and Express.',
  },
];

const Services = () => {
  return (
    <section id='services' className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div>{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
