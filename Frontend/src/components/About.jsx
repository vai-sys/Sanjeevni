import React from 'react';

const TeamMember = ({ name, expertise, bio }) => (
  <div className="w-full md:w-1/3 p-4">
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-gray-600">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-lg text-gray-600 mb-4">{expertise}</p>
        <p className="text-lg text-gray-600">{bio}</p>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">About Sanjeevni</h1>
          <p className="text-lg text-gray-600 text-center mb-8">Discover the story behind Sanjeevni and our commitment to authentic Ayurvedic wellness.</p>
        </div>
      </header>

      <section className="container mx-auto px-4 py-5">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="flex flex-wrap">
          <TeamMember
            name="Vaishnavi Thorat"
            expertise="Web Development, Database Management"
            bio="I am pursuing a degree in Computer Science and Business Systems. I enjoy solving complex problems and optimizing system performance."
          />
          <TeamMember
            name="Yashini Pardeshi"
            expertise="Web Development, Database Management"
            bio="I am pursuing a degree in Computer Science and Business Systems. I am passionate about creating intuitive and visually appealing web applications."
          />
          <TeamMember
            name="Samrudhi Bachhav"
            expertise="Web Development, API Integration"
            bio="I am pursuing a degree in Computer Science and Business Systems. I am passionate about creating intuitive and engaging web experiences."
          />
        </div>
      </section>

  

      <footer className="bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-black-600">Copyright © 2023 Sanjeevni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;

