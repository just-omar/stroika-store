import React, { useState } from "react";
import styled from "styled-components";
import { reviewsData } from "../../data/mainPage";
import { Container } from "../../GlobalStyle";
import Review from "../Review/Review";
import { Arrows, Bottom, BottomWrapper, Top } from "../Review/Review.styles";

type Props = {};

const SLIDE_WIDTH = 376 + 16; // ширина карточки и gap 16px
const reviews = reviewsData.map(
  ({ personImg, person_name, text, date }, idx) => (
    <Review
      personImg={personImg}
      person_name={person_name}
      text={text}
      date={date}
      key={idx}
    />
  )
);

const ReviewSlider = (props: Props) => {
  const [offset, setOffset] = useState(0);

  const onLeftClick = () => {
    setOffset((prev) => Math.min(prev + SLIDE_WIDTH, 0));
  };

  const onRightClick = () => {
    setOffset((prev) => {
      const newOffset = prev - SLIDE_WIDTH;
      const maxOffset = -(SLIDE_WIDTH * (reviews.length - 3)); // Потому что 3 карточки в слайде
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <section className="reviews">
      <Container>
        <Top>
          <span>Отзывы</span>
          <Arrows>
            <img
              onClick={onLeftClick}
              src="./main-page/slider/slider_left_arrow.svg"
              alt=""
            />
            <img
              onClick={onRightClick}
              src="./main-page/slider/slider_right_arrow.svg"
              alt=""
            />
          </Arrows>
        </Top>
      </Container>
      <Container>
        <BottomWrapper>
          <Bottom style={{ transform: `translateX(${offset}px)` }}>
            {reviews}
          </Bottom>
        </BottomWrapper>
      </Container>
    </section>
  );
};

export default ReviewSlider;
