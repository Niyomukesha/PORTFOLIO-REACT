import React from 'react';
import looog from './images/looog.jpg';
import background from './images/imag.jpg';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="bg-cover bg-center min-h-screen text-white" style={{ backgroundImage: `url(${background})` }}>
      <div className="container mx-auto p-4">
        <nav className="flex items-center justify-between flex-wrap">
          <img src={looog} alt="Logo" className="w-20 h-10" />
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 mt-4 md:mt-0">
            <Link to="/about" className="text-2xl"><li>About</li></Link>
            <Link to="/resume" className="text-2xl"><li>Resume</li></Link>
            <Link to="/protofolio" className="text-2xl"><li>Portfolio</li></Link>
            <Link to="/blog"  className="text-2xl"><li>Blog</li></Link>
            <Link to="/contact" className="text-2xl"><li>Contact</li></Link>
          </ul>
        </nav>
        <div className="text-center pt-24 md:pt-48">
          <h1 className="text-4xl md:text-6xl mb-4">Florence Niyomukesha</h1>
          <p className="text-2xl md:text-4xl text-white opacity-50">I'm a web developer</p>
        </div>
        <div className="flex justify-center space-x-6 md:space-x-10 mt-12 md:mt-48">
          <FaTwitter className="text-3xl md:text-4xl" />
          <FaFacebookF className="text-3xl md:text-4xl" />
          <FaLinkedinIn className="text-3xl md:text-4xl" />
          <FaGithub className="text-3xl md:text-4xl" />
          <FaInstagram className="text-3xl md:text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
