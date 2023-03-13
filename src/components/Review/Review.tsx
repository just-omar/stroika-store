import React from "react";
import { Top, Arrows, Bottom, ReviewCard } from "./Review.styles";

type Props = {
  personImg: string;
  person_name: string;
  text: string;
  date: string;
};

const Review = ({ personImg, person_name, text, date }: Props) => {
  return (
    <ReviewCard>
      <div className="top">
        <img src={`./main-page/review/${personImg}`} alt="" />
        <div className="name">{person_name}</div>
        <img className="quotes" src="./main-page/review/quotes.png" alt="" />
      </div>
      <div className="text">{text}</div>
      <div className="date">{date}</div>
    </ReviewCard>
  );
};

export default Review;
