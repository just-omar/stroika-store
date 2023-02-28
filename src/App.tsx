import styled from "styled-components";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import { Container } from "./GlobalStyle";

const StyledMain = styled.main`
  /* * {
    border: 1px solid black;
  } */
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 80px;
  .stock {
    /* height: 496px; */
    /* border: 1px solid black; */

    &__top {
      display: flex;
      justify-content: space-between;
      padding: 16px 0;
      /* border: 1px solid black; */

      h2 {
        font-size: 34px;
        line-height: 44.2px;
      }
      button {
        background: #ffffff;
        border: 1px solid #d1d1d3;
        padding: 12px 16px 12px 24px;
        display: flex;
        align-items: center;
        gap: 8px;
        span {
          font-size: 18px;
          color: #171b24;
        }
      }
    }
    &__bottom {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
  }
  .popular-categories {
    height: 440px;
  }
  .popular-products {
    height: 1344px;
  }
  .popular-brands {
    height: 328px;
  }
`;

function App() {
  return (
    <div className="App">
      <Header />
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
            <div className="stock__bottom">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
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
