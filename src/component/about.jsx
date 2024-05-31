import React from 'react';
import { Link } from 'react-router-dom';
import imag4 from './images/imag4.jpg';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <div className="bg-black p-4 sm:p-10">
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
            <div className="text-center py-10">
                <p className="text-gray-400 text-lg">Get to know me</p>
                <h1 className="text-3xl sm:text-5xl mt-4 mb-4 text-white">About Me</h1>
                <div className="w-1/6 sm:w-1/12 h-2 bg-green-500 mx-auto"></div>
            </div>
            <div className="flex flex-col sm:flex-row mt-10 text-white font-sans px-4 sm:px-16">
                <div className="w-full sm:w-1/3">
                    <img src={imag4} alt="About" className="w-full rounded-lg mx-auto mb-8 sm:mb-0" />
                </div>
                <div className="w-full sm:w-2/3 sm:ml-10">
                    <h3 className="text-2xl sm:text-4xl text-green-600 sm:pl-16">Who am I?</h3>
                    <h2 className="text-xl sm:text-3xl sm:pl-16 mt-4 sm:mt-16">I'm Florence Niyomukesha, a visual UX/UI Designer and Web Developer</h2>
                    <p className="text-base sm:text-xl text-gray-500 sm:pl-16 mt-4">I'm a software engineer who loves using code to solve problems and create new things. I'm good at working in teams and always looking to learn more cool stuff.</p>
                    <div className="text-base sm:text-xl text-gray-500 flex flex-wrap mt-8 sm:mt-16 sm:pl-16">
                        <p className="basis-1/2"><strong className='text-white'>Name:</strong> Florence Niyomukesha</p>
                        <p className="basis-1/2"><strong className='text-white'>Email:</strong> florenceniyomukesha@gmail.com</p>
                    </div>
                    <div className="text-base sm:text-xl text-gray-500 flex flex-wrap mt-8 sm:mt-16 sm:pl-16">
                        <p className="basis-1/2"><strong className='text-white'>Age:</strong> 21</p>
                        <p className="basis-1/2"><strong className='text-white'>From:</strong> Kigali, Rwanda</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-9 mt-8 sm:mt-16">
                        <a href="/images/FLORENCE CV.pdf" download className="inline-block bg-green-600 text-white text-xl sm:text-2xl rounded-full py-2 px-4 text-center mb-4 sm:mb-0 sm:ml-16">Download CV</a>
                        <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-10 text-2xl sm:text-3xl mt-4 sm:mt-0">
                            <FaTwitter />
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FaGithub />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
