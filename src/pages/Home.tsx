import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Technologies from '../components/Technologies';
import Process from '../components/Process';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      {/* <Services /> */}
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Technologies />
      <Process />
      <Contact />
    </div>
  );
};

export default Home;