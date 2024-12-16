import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll'
import logo from '../images/fullstack.png'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center py-2">
      <img src={logo} alt="logo" className="w-16 h-16 rounded-full" />
      
        <div className="text-2xl font-bold">MyPortfolio</div>

        <nav className="hidden md:flex space-x-6">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="hover:text-blue-400 cursor-pointer"
      >
        Home
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="hover:text-blue-400 cursor-pointer"
      >
        About Me
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        className="hover:text-blue-400 cursor-pointer"
      >
        My Skills
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="hover:text-blue-400 cursor-pointer"
      >
        Contact
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="hover:text-blue-400 cursor-pointer"
      >
        Projects
      </Link>
      <Link
        to="services"
        smooth={true}
        duration={500}
        className="hover:text-blue-400 cursor-pointer"
      >
        Services
      </Link>
    </nav>

    
        <button className="md:hidden text-2xl" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>






      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
          <div className="text-xl font-bold">Menu</div>
          <button onClick={toggleSidebar} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-5">
  <Link
    to="home"
    smooth={true}
    duration={500}
    className="hover:text-blue-400 cursor-pointer"

  >
    Home
  </Link>
  <Link
    to="about"
    smooth={true}
    duration={500}
    className="hover:text-blue-400 cursor-pointer"
   
  >
    About Me
  </Link>
  <Link
    to="skills"
    smooth={true}
    duration={500}
    className="hover:text-blue-400 cursor-pointer"
    
  >
    My Skills
  </Link>
  <Link
    to="contact"
    smooth={true}
    duration={500}
    className="hover:text-blue-400 cursor-pointer"
   
  >
    Contact
  </Link>
  <Link
    to="projects"
    smooth={true}
    duration={500}
    className="hover:text-blue-400 cursor-pointer"
 
  >
    Projects
  </Link>
  <Link
    to="services"
    smooth={true}
    duration={500}
    className="hover:text-blue-400 cursor-pointer"
    
  >
    Services
  </Link>
</nav>

    
      </div>
    </header>
  );
};

export default Nav;
