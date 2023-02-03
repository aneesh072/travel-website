import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { featuredDestination } from '../destination';

const Featured = () => {
  const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 3007,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 2024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 652,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="featured">
      <div className="featured-title">
        <h1>Featured Destinations</h1>
      </div>
      <div className="featured-tiles">
        <Slider {...settings}>
          {featuredDestination.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-top">
                <img src={item.linkImg} alt={item.title} />
              </div>
              <div className="card-bottom">
                <h1>{item.title}</h1>
                <span className="category">{item.category}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
