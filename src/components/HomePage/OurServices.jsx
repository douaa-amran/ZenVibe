import React from 'react';
import Card from './Card';
import { services } from '../../data/services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  autoplay:true,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false
};


const OurServices = () => (
  <div className=' pb-16 pt-1 bg-light-purple my-12' id='our-services'>
    <div className="mt-12 mx-12">
      <Slider {...settings}>
        {services.map((s, index) => (
          <div key={index} className="bg-beige h-72 text-dark-purple text-center p-6 rounded-xl">
            <Card image={s.image} description={s.description} service={s.service} />
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default OurServices;


