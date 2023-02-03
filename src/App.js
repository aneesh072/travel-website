import React from 'react';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Goal from './components/Goal';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Hero />
        <AboutUs />
        <Goal />
        <Featured />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
