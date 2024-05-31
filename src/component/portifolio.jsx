import React from 'react';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import p4 from './images/p4.jpg';
import { Link } from 'react-router-dom';


const Portfolio = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-10">
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
      <div className="text-center py-20">
        <p className="text-gray-400 text-1xl">Showcasing some of my best work</p>
        <h1 className="text-5xl mt-4 mb-4">Portfolio</h1>
        <div className="w-1/12 h-2 bg-green-500 mx-auto"></div>
      </div>
      <div className="container mx-auto px-8">
        <nav className="flex justify-center space-x-16 py-8">
          <ul className="flex space-x-16">
            <li><a href="/all.html" className="text-3xl">All</a></li>
            <li><a href="/brand.html" className="text-3xl">Brand</a></li>
            <li><a href="/design.html" className="text-3xl">Design</a></li>
            <li><a href="/photos.html" className="text-3xl">Photos</a></li>
          </ul>
        </nav>
        <div className="flex flex-wrap m-10">
            <img src={p1} alt="Portfolio 1" className="w-1/4 p-4" />
            <img src={p2} alt="Portfolio 2" className="w-1/4 p-4" />
            <img src={p3} alt="Portfolio 3" className="w-1/4 p-4" />
            <img src={p4} alt="Portfolio 4" className="w-1/4 p-4" />
            <img src={p1} alt="Portfolio 1" className="w-1/4 p-4" />
            <img src={p3} alt="Portfolio 3" className="w-1/4 p-4" />
            <img src={p4} alt="Portfolio 4" className="w-1/4 p-4" />
            <img src={p1} alt="Portfolio 1" className="w-1/4 p-4" />
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
