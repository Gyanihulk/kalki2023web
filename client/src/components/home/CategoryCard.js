import React from "react";
import { urlFor } from "../../lib/sanity";
import { Link } from "react-router-dom";

const CategoryCard = ({ cardDetails }) => {
  return (
    <Link to={`/offer/${cardDetails._id}`}>
      <div
        className="grid mt-8 place-items-center offer-box bg-black w-10/12 h-80 rounded-xl 
      duration-500 hover:scale-105"
      >
        <img
          src={urlFor(cardDetails.mainImage)}
          alt=""
          className="w-full h-4/5 rounded-t-lg"
        />
        <h3 className="mt-2 font-semibold text-md px-2">{cardDetails.title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
