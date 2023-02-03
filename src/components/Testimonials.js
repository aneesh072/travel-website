import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { testimonials } from '../testimonnial';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 7000,
    cssEase: 'linear',
  };

  return (
    <div className="testimonials" id="testimonial">
      <div className="testimonials-title">
        <h1>Testimonial</h1>
      </div>

      <div className="testimonials-tiles">
        <Slider {...settings}>
          {testimonials.map((item) => (
            <div className="testimonials-card" key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.dogImg} alt="" />
              <p>"{item.description}"</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
