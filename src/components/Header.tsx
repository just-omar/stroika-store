import React from "react";
import location_icon from "../assets/header_location_icon.svg";
import styled from "styled-components";

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <div className="banner">
        <div className="left">
          <img src={location_icon} height={20} alt="" />
          <p>Москва</p>
        </div>
        <div className="right">
          <ul className="right__list">
            <li>Бренды</li>
            <li>Доставка</li>
            <li>Возврат</li>
            <li>Документация</li>
            <li>Контакты</li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  * {
    /* border: 1px solid black; */
  }
  .banner {
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f6f6f6;
  }
  .left {
    display: flex;
    align-items: center;
    gap: 10.5px;
  }
  .right {
    &__list {
      list-style-type: none;
      display: flex;
      gap: 24px;
    }
  }
`;
