import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white py-6">
        <div className="container mx-auto px-4">
        
          <p className="text-lg text-black text-center mb-2">
            We'd love to hear from you! Please use the form below to get in touch with us.
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Form</h2>
        <form className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg text-gray-600 mb-2">Name:</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-gray-600 mb-2">Email:</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg text-gray-600 mb-2">Message:</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"></textarea>
          </div>
          <button type="submit" className="w-full py-3 font-bold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-green-500 focus:border-green-500">
            Send Message
          </button>
        </form>
      </section>

      <footer className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600">Copyright © 2023 Sanjeevni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;