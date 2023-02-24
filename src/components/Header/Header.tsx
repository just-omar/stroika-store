import React from "react";
import Navbar from "../Navbar/Navbar";
import { StyledHeader } from "./Header.styles";
import special from "../../assets/special.jpg";
import { Container } from "../../GlobalStyle";

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Navbar />
      <Container>
        <img className="special_img" src={special} alt="" />
      </Container>
    </StyledHeader>
  );
};

export default Header;
