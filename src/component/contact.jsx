import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, subject, message });
    };

    return (
        <div className="bg-black text-white font-sans min-h-screen p-10">
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
            <div className="text-center py-16">
                <p className="text-gray-300 ">Feel free to contact me anytime</p>
                <h1 className="text-5xl text-white">Get in Touch</h1>
                <div className="w-1/12 h-2 bg-green-500 mx-auto mt-4"></div>
            </div>

            <div className="flex px-24">
                <form onSubmit={handleSubmit} className="m-24">
                    <h3 className="text-3xl text-white mb-5">Message me</h3>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-xl bg-gray-800 mb-2 border-none p-1 text-white w-full"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-xl bg-gray-800 mb-2 border-none p-1 text-white w-full"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="text-xl bg-gray-800 mb-2 border-none p-1 text-white w-full"
                    />
                    <textarea
                        cols="0"
                        rows="5"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="text-xl bg-gray-800 mb-2 border-none p-1 text-white w-full"
                    ></textarea>
                    <input
                        type="submit"
                        value="Send Message"
                        className="text-xl mb-2 border-none p-2 text-white rounded-full bg-green-500 cursor-pointer"
                    />
                </form>

                <div className="text-gray-400 mt-[6rem]">
                <h3 className="text-3xl text-white mb-200 mt-200">Contact Info</h3>
                    <div className="text-1xl mt-3 ">
                        Always available for freelance work if the right project comes along. Feel free to contact me!
                    </div>
                    <div className="text-green-600 mt-24">
                        <i className="fa-sharp fa-solid fa-phone mb-36 text-4xl"></i>
                        <div className="absolute top-[27rem]  bg-black px-10">
                            <div className="text-white text-2xl mt-5">Name</div>
                            <span className="text-1xl">Florence Niyomukesha</span>
                            <div className="text-white text-2xl mt-5">Location</div>
                            <span className="text-1xl">4155 Kigali, Rwanda</span>
                            <div className="text-white text-2xl mt-5">Call me</div>
                            <span className="text-1xl">0787300479</span>
                            <div className="text-white text-2xl mt-5">Email Me</div>
                            <span className="text-1xl">florenceniyomukesha@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center space-x-8 mt-[33rem]">
          <FaTwitter className="text-2xl" />
          <FaFacebookF className="text-2xl" />
          <FaLinkedinIn className="text-2xl" />
          <FaGithub className="text-2xl" />
          <FaInstagram className="text-2xl" />
        </div>
            </div>
        </div>
    );
};

export default ContactForm;
