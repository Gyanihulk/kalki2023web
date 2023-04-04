import React from "react";
import CategoryCard from "./CategoryCard";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSanityContext } from "../../context/SanityContext";
const CategoryContainer = () => {
  const {categories}=useSanityContext()
  const screenWidth = document.documentElement.clientWidth;

  return (<>
  
    <div className="mb-10 uppercase text-center mt-8 ">
      <h4 className="text-2xl text-orange-500">our services</h4>
      <h4 className="text-3xl font-bold">Book Slot for </h4>
      <h4 className="test">Book Slot for </h4>
      <div className="flex justify-between flex-wrap mt-6 w-full">
        
      <Swiper
      slidesPerView={screenWidth<720?"1":"3"}
           cssMode={true}
           navigation={true}
           pagination={true}
           mousewheel={true}
           keyboard={true}
           modules={[Navigation, Pagination, Mousewheel, Keyboard]}
           className="swiper"
        >
          {categories.map((category) => (
             <SwiperSlide key={category._id}>

              <CategoryCard cardDetails={category} />
             </SwiperSlide>
           
          ))}
        </Swiper>
      </div>
    </div>


  </>
  );
};

export default CategoryContainer;
