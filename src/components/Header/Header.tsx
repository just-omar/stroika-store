import React from "react";
import Navbar from "../Navbar/Navbar";
import { StyledHeader } from "./Header.styles";
import special from "../../assets/special.jpg";
import { Container } from "../../GlobalStyle";
import Slider from "../Slider/Slider";

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Navbar />
      <Container>
        <Slider>
          <div className="item item-1">
            <div className="info">
              <h1>Специальные предложения</h1>
              <p>
                на строительные материалы
                <br /> и товары для ремонта
              </p>
              <button>
                <span>Подробнее</span>
              </button>
            </div>
          </div>
          <div className="item item-2">
            <div className="info">
              <h1>Распродажа инструментов</h1>
              <p>
                «СтройкаСтор» стремится сделать условия покупки максимально
                выгодными для каждого покупателя, поэтому на сайте регулярно
                появляются товары со скидкой
              </p>
              <button>
                <span>Подробнее</span>
              </button>
            </div>
          </div>
        </Slider>
      </Container>
    </StyledHeader>
  );
};

export default Header;
