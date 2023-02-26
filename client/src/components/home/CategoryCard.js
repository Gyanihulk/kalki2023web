import React from "react";
import { SwiperSlide } from "swiper/react";
import { urlFor } from "../../lib/sanity";

const CategoryCard = ({cardDetails}) => {
  return (
    <SwiperSlide>

    <div
      className="offer-box bg-black w-10/12 h-80 rounded-xl 
      duration-500 hover:scale-105"
      >
      <img src={urlFor(cardDetails.mainImage)} alt="" className="w-full h-4/5 rounded-t-lg" />
      <h3 className="mt-2 font-semibold text-md px-2">
        {cardDetails.title}
      </h3>
    </div>
      </SwiperSlide>
  );
};

export default CategoryCard;
