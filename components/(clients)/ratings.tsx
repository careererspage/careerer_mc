import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

interface IRating {
  rating: number | null;
}

const Ratings: React.FC<IRating> = ({ rating }) => {
  if (rating === null) {
    return <div>No rating available</div>; // Handle the case when rating is null
  }
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <AiFillStar
          key={i}
          size={20}
          color="#fac011"
          className="sm:mr-2 mr-1 h-4 w-4 cursor-pointer"
        />
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <BsStarHalf
          key={i}
          size={17}
          color="#f6ba00"
          className="sm:mr-2 mr-1 h-4 w-4 cursor-pointer"
        />
      );
    } else {
      stars.push(
        <AiOutlineStar
          key={i}
          size={20}
          color="#f6ba00"
          className="sm:mr-2 mr-1 h-4 w-4 cursor-pointer"
        />
      );
    }
  }
  return <div className="flex"> {stars}</div>;
};

export default Ratings;
