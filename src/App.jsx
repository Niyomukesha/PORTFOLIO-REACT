
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './component/landingpage';
import Blog from './component/blog';
import Portfolio from './component/portifolio';
import Resume from './component/resume'; 
import ContactForm from './component/contact';
import About from './component/about';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<ContactForm/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/protofolio" element={<Portfolio/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/about" element={<About/>} />
     
      </Routes>
      </Router>
  );
};

export default App;
