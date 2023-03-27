import React from "react";

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
import PlanCard from "./PlanCard";
const PlansContainer = () => {
  const { plans } = useSanityContext();
  const screenWidth = document.documentElement.clientWidth;
  return (
    <div>
      {" "}
      <div className="mt-10 mb-10">
        <hr />
        <div className="text-center mt-4">
          <h3 className="text-2xl text-orange-500">OUR PLANS</h3>
          <h3 className="text-3xl font-bold">GENERAL PLANS</h3>
        </div>
        <div className="flex justify-between flex-wrap mt-6">
          <Swiper
             slidesPerView={screenWidth<720?"1":"3"}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {plans.map((plan) => (
              <SwiperSlide key={plan._id}>
                <PlanCard cardDetails={plan} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PlansContainer;
