import styled from "styled-components";
import Card from "./components/Card/Card";

import Slider from "./components/Slider/Slider";
import { Container } from "./GlobalStyle";
import { stockCardData } from "./data/mainPage";
import { StyledMain } from "./App.styles";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const cards = stockCardData.map(
    ({ discount, image, info, price, lineThroughPrice }) => (
      <Card
        discount={discount}
        image={image}
        info={info}
        price={price}
        lineThroughPrice={lineThroughPrice}
      />
    )
  );
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Container>
        <StyledMain>
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
          <section className="stock">
            <div className="stock__top">
              <h2>Акции</h2>
              <button>
                <span>Все акции</span>
                <img src="stock/right_arrow.svg" alt="" />
              </button>
            </div>
            <div className="stock__bottom">{cards}</div>
          </section>
          <section className="popular-categories"></section>
          <section className="popular-products"></section>
          <section className="popular-brands"></section>
        </StyledMain>
      </Container>
    </div>
  );
}

export default App;
