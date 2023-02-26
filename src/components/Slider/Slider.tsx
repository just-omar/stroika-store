import React, { Children, cloneElement, useEffect, useState } from "react";
import { StyledSlider } from "./Slider.styles";
import leftArrow from "../../assets/slider_left_arrow.svg";

type Props = {
  children: React.ReactNode;
};

const SLIDE_WIDTH = 1360;

const Slider = ({ children }: Props) => {
  const [pages, setPages] = useState<any>([]);
  const [offset, setOffset] = useState(0);
  const handleLeftArrowClick = () => {
    console.log("left");
    setOffset((prev) => Math.min(prev + SLIDE_WIDTH, 0));
  };
  const handleRightArrowClick = () => {
    console.log("right");
    setOffset((prev) => {
      const newOffset = prev - SLIDE_WIDTH;
      const maxOffset = -(SLIDE_WIDTH * (pages.length - 1));
      console.log(newOffset, maxOffset);
      return Math.max(newOffset, maxOffset);
    });
  };
  useEffect(() => {
    setPages(
      Children.map(children, (child: any) => {
        return cloneElement(child, {
          style: {
            minWidth: "100%",
          },
        });
      })
    );
  }, []);
  return (
    <StyledSlider>
      <div className="main-container">
        <div className="window">
          <div
            className="all-pages-container"
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {pages}
          </div>
        </div>
        <div className="arrows">
          <button onClick={handleLeftArrowClick}>
            <img src="slider/slider_left_arrow.svg" alt="" />
          </button>
          <button onClick={handleRightArrowClick}>
            <img src="slider/slider_right_arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </StyledSlider>
  );
};

export default Slider;
