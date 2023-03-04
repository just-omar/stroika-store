import React from "react";
import { StyledPopularCategoryCard } from "./PopularCategoryCard.styles";

type Props = {
  name: string;
  imgName: string;
};

const PopularCategoryCard = ({ name, imgName }: Props) => {
  return (
    <StyledPopularCategoryCard>
      <span>{name}</span>
      <img src={`main-page/category/${imgName}.png`} alt="" />
    </StyledPopularCategoryCard>
  );
};

export default PopularCategoryCard;
