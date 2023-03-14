import React from "react";
import { Container } from "../../GlobalStyle";
import { StyledFooter } from "./Footer.styles";

type Props = {};

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <Container>
        <div className="top-wrapper">
          <div className="left">
            <img src="./main-page/footer/logo.svg" alt="" />
            <div className="info">
              <img src="./main-page/footer/message-icon.svg" alt="" />
              <a href="#">info@stroykastore.ru</a>
            </div>

            <div className="location">
              <img src="./main-page/footer/location-icon.svg" alt="" />
              <a href="#">Москва, ул. Камушкина 10</a>
            </div>
          </div>

          <div className="right">
            <div className="col">
              <a href="#">Личный кабинет</a>
              <a href="#">Заказы</a>
              <a href="#">Избранное</a>
              <a href="#">Корзина</a>
            </div>
            <div className="col">
              <a href="#">Каталог</a>
              <a href="#">Акции</a>
              <a href="#">Бренды</a>
              <a href="#">Контакты</a>
            </div>
            <div className="col">
              <a href="#">Стать продавцом</a>
              <a href="#">Доставка</a>
              <a href="#">Возврат</a>
              <a href="#">Документация</a>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="bottom-wrapper">
          <span className="name">© СтройкаСтор</span>
          <span className="cards">
            <img src="./main-page/footer/visa.png" alt="" />
            <img src="./main-page/footer/mastercard.png" alt="" />
            <img src="./main-page/footer/maestro.png" alt="" />
            <img src="./main-page/footer/mir_card.png" alt="" />
          </span>
          <span>Cделано в KRUGLOV STUDIO</span>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
