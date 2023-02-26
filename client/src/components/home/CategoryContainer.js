import React from "react";
import CategoryCard from "./CategoryCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const CategoryContainer = ({ categories }) => {
  return (
    <div className="service-section uppercase text-center mt-8">
      <h4 className="text-2xl text-orange-500">our services</h4>
      <h4 className="text-3xl font-bold">what we can offer</h4>
      <div className="service-offer grid sm:grid-cols-1 md:grid-cols-2 place-items-center mt-6 gap-y-8 md:mx-10">
        <Swiper
          slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          type:'progressbar'
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
          {categories.map((category) => (
            
              <CategoryCard key={categories._id} cardDetails={category} />
           
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryContainer;