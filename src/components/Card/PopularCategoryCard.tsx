import React from "react";
import { StyledCategoryCard } from "./PopularCategoryCard.styles";

type Props = {
  name: string;
  imgName: string;
};

const PopularCategoryCard = ({ name, imgName }: Props) => {
  return (
    <StyledCategoryCard>
      <span>{name}</span>
      <img src={`main-page/category/${imgName}.png`} alt="" />
    </StyledCategoryCard>
  );
};

export default PopularCategoryCard;
