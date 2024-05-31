import React from 'react';
import { Link } from 'react-router-dom';


const Resume = () => {
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
      <div className="text-center py-10">
        <p className="text-gray-400 text-1xl">Check out my Resume</p>
        <h1 className="text-5xl mt-4 mb-4">Resume</h1>
        <div className="w-1/12 h-2 bg-green-500 mx-auto"></div>
      </div>
      <div className="flex flex-col space-y-10">
        <div className="section">
          <h2 className="text-green-500 text-3xl border-b-2 border-white pb-2 w-1/2">Education</h2>
          <p className="text-2xl"><strong>University of Rwanda</strong></p>
          <p className="text-xl">Bachelor of Science in Computer Science</p>
          <p className="text-xl">Graduated: not yet</p>
        </div>
        <div className="section">
          <h2 className="text-green-500 text-3xl border-b-2 border-white pb-2 w-1/2">Experience</h2>
          <p className="text-2xl"><strong>Software Developer</strong></p>
          <p className="text-xl">ABC Tech Solutions</p>
          <p className="text-xl">June 2020 - Present</p>
          <ul className="list-disc ml-5">
            <li className="text-xl">Developed web applications using HTML, CSS, JavaScript, and Node.js.</li>
            <li className="text-xl">Collaborated with team members to deliver projects on time.</li>
            <li className="text-xl">Participated in code reviews and testing phases of the development lifecycle.</li>
          </ul>
        </div>
        <div className="section">
          <h2 className="text-green-500 text-3xl border-b-2 border-white pb-2 w-1/2">Skills</h2>
          <p className="text-xl">JavaScript, HTML/CSS, Node.js, React.js</p>
          <p className="text-xl">Git, Agile Methodologies, RESTful APIs</p>
        </div>
        <div className="section">
          <h2 className="text-green-500 text-3xl border-b-2 border-white pb-2 w-1/2">Contact</h2>
          <p className="text-xl">Florence NIYOMUKESHA</p>
          <p className="text-xl">Email: florenceniyomukesha@gmail.com</p>
          <p className="text-xl">Phone: +250787300479</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
