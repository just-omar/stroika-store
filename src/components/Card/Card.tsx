import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  width: 572px;
  border: 1px solid #e8e9ea;
  * {
    /* border: 1px solid black; */
  }
  .left {
    position: relative;
    .discount {
      position: absolute;
      left: 16px;
      top: 16px;
      border: 2px solid #fbe303;
      background-color: white;
      padding: 4px 8px;
      span {
        font-size: 15px;
        color: #171b24;
      }
    }
    img {
      width: 278px;
      height: 208px;
    }
  }

  .right {
    width: 294px;
    padding: 16px;
    .info {
      color: #2f323a;
      height: 72px;
    }
    .price {
      margin-top: 12px;
      margin-bottom: 16px;
      font-weight: 700;
      font-size: 20px;
      line-height: 140%;
      span {
        margin-left: 8px;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        text-decoration: line-through;
      }
    }
    button {
      width: 262px;
      height: 48px;

      /* Main/FDF074 */

      background: #fcec41;
      span {
        font-weight: 500;
        font-size: 18px;
        line-height: 136%;
      }
    }
  }
`;

type Props = {};

const Card = (props: Props) => {
  return (
    <StyledCard>
      <div className="left">
        <div className="discount">
          <span>-25%</span>
        </div>
        <img src="stock/Image_1.png" alt="" />
      </div>
      <div className="right">
        <p className="info">
          Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)
        </p>
        <p className="price">
          449 ₽ <span>499 ₽</span>
        </p>
        <button>
          <span>В корзину</span>
        </button>
      </div>
    </StyledCard>
  );
};

export default Card;