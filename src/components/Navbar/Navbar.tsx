import location_icon from "../../assets/header_location_icon.svg";
import logo from "../../assets/nav_logo.svg";
import catalog from "../../assets/nav_catalog.svg";
import nav_search_icon from "../../assets/nav_search_icon.svg";
import person_icon from "../../assets/nav_person_icon.svg";
import basket_icon from "../../assets/nav_basket_icon.svg";
import box_icon from "../../assets/nav_box_icon.svg";
import {
  NavBottom,
  NavMiddle,
  NavTop,
  StyledNavbar,
} from "../Navbar/Navbar.styles";
import { Container } from "../../GlobalStyle";
import styled from "styled-components";

const Line = styled.div`
  height: 1px;
  background-color: #e8e9ea;
  width: 100%;
`;

type Props = {};

const Navbar = (props: Props) => {
  return (
    <StyledNavbar>
      <div className="banner-background" />
      <Container>
        <NavTop>
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
        </NavTop>

        <NavMiddle>
          <img src={logo} alt="" />
          <div className="right">
            <button className="catalog">
              <img src={catalog} alt="" />
              <p>Каталог</p>
            </button>
            <div className="search">
              <input type="text" />
              <img src={nav_search_icon} alt="" />
            </div>
            <div className="right__box">
              <img src={person_icon} alt="person" />
              <p>Профиль</p>
            </div>
            <div className="right__box">
              <img src={box_icon} alt="" />
              <p>Заказы</p>
            </div>
            <div className="right__box">
              <img src={basket_icon} alt="" />
              <p>Корзина</p>
            </div>
          </div>
        </NavMiddle>
      </Container>
      <Line />
      <Container>
        <NavBottom>
          <ul>
            <li>
              <a href="#">Акции</a>
            </li>
            <li>
              <a href="#">Строительные материалы</a>
            </li>
            <li>
              <a href="#">Керамическая плитка</a>
            </li>
            <li>
              <a href="#">Краски</a>
            </li>
            <li>
              <a href="#">Сантехника</a>
            </li>
            <li>
              <a href="#">Напольные покрытия</a>
            </li>
            <li>
              <a href="#">Инструменты</a>
            </li>
            <li>
              <a href="#">Обои</a>
            </li>
            <li>
              <a href="#">Окна</a>
            </li>
          </ul>
        </NavBottom>
      </Container>
      <Line />
    </StyledNavbar>
  );
};

export default Navbar;
