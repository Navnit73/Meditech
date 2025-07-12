import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import CaseStudy from './pages/CaseStudy';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import HipaaCompliance from './pages/HipaaCompliance';
import Security from './pages/Security';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/hipaa-compliance" element={<HipaaCompliance />} />
          <Route path="/security" element={<Security />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;