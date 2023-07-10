import React from "react";
import "./testimonial.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AVTR1 from "../../assets/image11.jpg";
import AVTR2 from "../../assets/image7.jpg";
import AVTR3 from "../../assets/image1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "Joseph Peter",
      review:
        "I am thrilled to provide a testimonial for Alex Waweru, an outstanding web developer and coding partner. Throughout our collaboration, Alex consistently demonstrated a deep understanding of web development, impressing me with his exceptional JavaScript skills and remarkable talent for page styling. His collaborative nature and ability to work seamlessly within a team make him a valuable asset. Furthermore, Alex's unwavering dedication to delivering high-quality results sets him apart as an exceptional developer. It has been a privilege to work with Alex, and I have no doubt that he will continue to excel in his future endeavors.",
    },

    {
      avatar: AVTR2,
      name: "Mary Johns",
      review:
        " Alex Waweru is a phenomenal web developer and coding partner who consistently showcases strong web development knowledge, impressive JavaScript skills, and exceptional page styling talent. With a deeply collaborative approach, Alex seamlessly integrates with any team, contributing valuable insights and fostering a cooperative environment. His unwavering dedication to delivering high-quality results reflects his meticulous attention to detail and a commitment to excellence. Overall, Alex's remarkable skills and collaborative nature make him an exceptional developer who would undoubtedly be an asset to any project or team.",

    },

    {
      avatar: AVTR3,
      name: "Ali Muhamud",
      review:
        " I had the privilege of studying alongside Alex at Microverse, and I can confidently say that he is an exceptional software developer. Alex's mastery of React and JavaScript is truly impressive, and his ability to handle intricate problems with ease continuously amazed our team. His solid grasp of web development principles and dedication to best practices made him an indispensable asset in our projects. Additionally, Alex's collaborative spirit and willingness to support others made our learning journey all the more enjoyable. I wholeheartedly recommend Alex to any organization in need of a talented and passionate software developer.",
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
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client_name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
