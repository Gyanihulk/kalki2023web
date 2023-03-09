import React from "react";
import TestimonialCard from "./TestimonialCard";
import offerImg1 from "../../assets/images/home/offer-card/image-1.jpg";
import { useSanityContext } from "../../context/SanityContext";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TestimonialContainer = () => {
  const { testimonials } = useSanityContext();
  return (
    <div>
      <div className="mt-10 px-20 mb-6 testimonials">
        <hr />
        <div className="text-center mt-10">
          <h3 className="text-2xl text-orange-500">WHAT OUR TRAINEES SAYS</h3>
          <h3 className="text-3xl font-bold">TESTIMONIALS</h3>
          <div className="flex justify-between flex-wrap mt-6">
            <Swiper
              slidesPerView={1}
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {testimonials ? (
                testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial._id}>
                    <TestimonialCard
                      data={{
                        image: offerImg1,
                        name: testimonial.name,
                        text: testimonial.description,
                      }}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <></>
              )}
            </Swiper>
          </div>
        </div>
        <hr className="mt-10" />
      </div>
    </div>
  );
};

export default TestimonialContainer;
