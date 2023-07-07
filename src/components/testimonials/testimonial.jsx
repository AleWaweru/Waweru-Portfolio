import React from 'react';
import './testimonial.css';

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import AVTR1 from '../../assets/image11.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const data = [
    {
      avatar: AVTR1,
      name: 'Alex Waweru',
      review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum adipisci sunt as',
    },

    {
      avatar: AVTR1,
      name: 'Alex Waweru',
      review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum adipisci sunt as',
    },

    {
      avatar: AVTR1,
      name: 'Alex Waweru',
      review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum adipisci sunt as',
    },

    {
      avatar: AVTR1,
      name: 'Alex Waweru',
      review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum adipisci sunt as',
    },

  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"

        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}

      >
        {
          data.map(({ avatar, name, review }, index) => (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </section>
  );
};

export default Testimonial;
