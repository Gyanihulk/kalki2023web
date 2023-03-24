import React from "react";
import { urlFor } from "../../lib/sanity";
import { Link } from "react-router-dom";

const CategoryCard = ({ cardDetails }) => {
  return (
    <Link to={`/offer/${cardDetails._id}`}>
      <div
        className="= bg-black w-full h-75 rounded-xl 
      duration-500 hover:scale-105"
      >
        <img
          src={urlFor(cardDetails.mainImage).width(200).height(200).url()}
          alt=""
          className="object-none object-center w-full  rounded-t-lg place-items-center"
        />
        <h2 className="pt-2 pb-2 mt-2 font-semibold text-md px-2">{cardDetails.title}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
