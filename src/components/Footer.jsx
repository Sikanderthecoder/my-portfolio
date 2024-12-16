import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Zulqarnain..</h3>
            <p className="text-gray-300">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">

           <ul className='flex space-x-6 cursor-pointer'>
            <li>
              Github
            </li>
            <li>
              YouTube
            </li>
            <li>
             Facebook
            </li>
            <li>
             Instagram
            </li>
           </ul>
            
          
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zulqarnain... All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;