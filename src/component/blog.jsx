import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from './images/blog-1.png';
import blog2 from './images/blog-2.png';
import blog3 from './images/blog-3.png';
import blog4 from './images/blog-4.png';
import blog5 from './images/blog-5.png';
import blog6 from './images/blog-6.png';


const Blog = () => {
  const blogs = [
    { img: blog1, date: '11 Dec, 20', title: 'Top tools for Photographers', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.' },
    { img: blog2, date: '12 Aug, 20', title: 'Take a tour of my office', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.' },
    { img: blog3, date: '4 Feb, 20', title: 'How I became a web designer', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.' },
    { img: blog4, date: '11 Dec, 19', title: 'How to improve work experience', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.' },
    { img: blog5, date: '15 Nov, 20', title: 'How to work from home', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.' },
    { img: blog6, date: '8 Aug, 19', title: 'How to enjoy your business trip', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
     <div className="text-green-500">
  <nav>
    <Link
      to="/"
      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
    >
      Go back to Home
    </Link>
  </nav>
</div>
      <div className="text-center mb-12">
        <p className="text-gray-400">Check out my latest blog posts</p>
        <h1 className="text-4xl mb-2">My Blog</h1>
        <span className="block bg-green-500 h-1 w-24 mx-auto"></span>
      </div>
      <div className="flex flex-wrap justify-center">
        {blogs.map((blog, index) => (
          <div key={index} className="m-4 w-full md:w-1/3 lg:w-1/4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="relative mb-4">
                <img src={blog.img} alt={`Blog ${index + 1}`} className="w-full rounded-lg" />
                <span className="absolute top-4 left-4 bg-green-500 text-black px-2 py-1 rounded">{blog.date}</span>
              </div>
              <h2 className="text-xl mb-2">{blog.title}</h2>
              <p className="text-gray-400">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
