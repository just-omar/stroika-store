import React from "react";
import Navbar from "../Navbar/Navbar";
import { StyledHeader } from "./Header.styles";
import special from "../../assets/special.jpg";
import { Container } from "../../GlobalStyle";
import Slider from "../Slider/Slider";

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Navbar />
      <Container>
        <div className="slider">
          <Slider>
            <div className="item item-1">item 1</div>
            <div className="item item-2">item 2</div>
            <div className="item item-3">item 3</div>
          </Slider>
          {/* <img className="special_img" src={special} alt="" /> */}
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
