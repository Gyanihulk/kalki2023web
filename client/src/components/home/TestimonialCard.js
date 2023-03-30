import React from "react";

const TestimonialCard = ({data: {image, name, text}}) => {
  return (
    <div>
      <div
        className="mb-5 offer-box bg-black w-72 h-96 rounded-xl flex flex-col items-center py-5"
      >
        <img src={image} alt="" className="w-32 h-32 rounded-full" />
        <h3 className="mt-4 font-semibold text-md px-2 pb-3">{name}</h3>
        <p className="font-light px-2 text-center">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
