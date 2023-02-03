import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-detail">
        <h1>Lets leave together to the wonderland</h1>
        <button>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Lets Talk
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
