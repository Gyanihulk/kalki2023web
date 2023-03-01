import React from "react";
import CategoryCard from "./CategoryCard";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const CategoryContainer = ({ categories }) => {
  return (<>
  
    <div className="service-section uppercase text-center mt-8 ">
      <h4 className="text-2xl text-orange-500">our services</h4>
      <h4 className="text-3xl font-bold">what we can offer</h4>
      <div className="h-auto service-offer grid place-items-center">
      <Swiper
      slidesPerView={2}
           cssMode={true}
           navigation={true}
           pagination={true}
           mousewheel={true}
           keyboard={true}
           modules={[Navigation, Pagination, Mousewheel, Keyboard]}
           className="mySwiper"
        >
          {categories.map((category) => (
             <SwiperSlide>

              <CategoryCard key={categories._id} cardDetails={category} />
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
