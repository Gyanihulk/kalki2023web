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
  return (<>
  
    <div className="px-20 mb-10 uppercase text-center mt-8 ">
      <h4 className="text-2xl text-orange-500">our services</h4>
      <h4 className="text-3xl font-bold">what we can offer</h4>
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
          {categories.map((category) => (
             <SwiperSlide key={categories._id}>

              <CategoryCard  cardDetails={category} />
             </SwiperSlide>
           
          ))}
        </Swiper>
      </div>
      
      <div className="service-offer grid sm:grid-cols-1 md:grid-cols-2 place-items-center mt-6 gap-y-8 md:mx-10 content-center">
        
      </div>
    </div>


  </>
  );
};

export default CategoryContainer;
