import React from "react";
import styled from "styled-components";
import { StyledStockCard } from "./StockCard.styles";

type Props = {
  discount: number;
  image: string;
  info: string;
  price: number;
  lineThroughPrice: number;
};

const Card = ({ discount, image, info, price, lineThroughPrice }: Props) => {
  return (
    <StyledStockCard>
      <div className="left">
        <div className="discount">
          <span>{`-${discount}%`}</span>
        </div>
        <img src={`main-page/stock/${image}`} alt="image" />
      </div>
      <div className="right">
        <p className="info">{info}</p>
        <p className="price">
          {price} ₽ <span>{lineThroughPrice} ₽</span>
        </p>
        <button>
          <span>В корзину</span>
        </button>
      </div>
    </StyledStockCard>
  );
};

export default Card;
