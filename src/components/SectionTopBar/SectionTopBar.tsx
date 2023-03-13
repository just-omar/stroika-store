import React from "react";
import { StyledSectionTopBar } from "./SectionTopBar.styles";

type Props = {
  heading: string;
};

const SectionTopBar = ({ heading }: Props) => {
  return (
    <StyledSectionTopBar>
      <h2>{heading}</h2>
      <button>
        <span>
          Все{" "}
          {heading.includes("Популярные")
            ? heading.slice(11).toLowerCase()
            : heading.toLowerCase()}
        </span>
        <img src="main-page/stock/right_arrow.svg" alt="" />
      </button>
    </StyledSectionTopBar>
  );
};

export default SectionTopBar;
