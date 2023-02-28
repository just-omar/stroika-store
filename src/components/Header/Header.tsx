import React from "react";
import Navbar from "../Navbar/Navbar";
import { StyledHeader } from "./Header.styles";

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
