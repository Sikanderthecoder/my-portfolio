import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className="bg-gradient-to-r from-blue-500 to-purple-500 py-10 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form
         
          className="bg-white rounded-lg shadow-lg p-8 text-black space-y-6"
        >
          <div>
            <label  className="block text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder='Type yor name here...'
              
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder='Type your e-mail'
             
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label  className="block text-lg font-semibold mb-2 " >
              Message
            </label>
            <textarea
           
             
           
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
