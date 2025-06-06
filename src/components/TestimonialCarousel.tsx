
import React from 'react';
import Slider from 'react-slick';
import { MdStar } from 'react-icons/md';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from '../data';

const TestimonialCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-primary transition-colors cursor-pointer"></div>
    ),
    dotsClass: "slick-dots flex justify-center space-x-2 mt-8"
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <MdStar key={i} className="h-6 w-6 text-yellow-400" />
                ))}
              </div>
              <blockquote className="font-body text-lg text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-heading font-semibold text-xl text-slate mb-1">
                  {testimonial.name}
                </p>
                <p className="font-body text-gray-500">
                  {testimonial.relation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;