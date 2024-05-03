import React from 'react';
import BlogData from './BlogData';
import SelfCareBlogData from './SelfCareBlogData';
import AyurvedicInsomniaRemedies from './AyurvedicInsomniaRemedies';

const Blogs = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Ayurveda Tips</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <BlogData />
        <SelfCareBlogData />
        <AyurvedicInsomniaRemedies/>
      </div>
    </div>
  );
};

export default Blogs;