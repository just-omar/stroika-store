import React from "react";
import { StyledPopularProductCard } from "./PopularProductCard.styles";

type Props = {
  image: string;
  product: string;
  price: string;
};

const PopularProductCard = ({ image, product, price }: Props) => {
  return (
    <StyledPopularProductCard>
      <img src={`main-page/product/${image}.png`} alt="" />
      <p>{product}</p>
      <span>{price}</span>
      <button>
        <span>В корзину</span>
      </button>
    </StyledPopularProductCard>
  );
};

export default PopularProductCard;
