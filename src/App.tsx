import StockCard from "./components/Card/StockCard";

import Slider from "./components/Slider/Slider";
import { Container } from "./GlobalStyle";
import {
  popularCategories,
  popularProducts,
  stockCardData,
} from "./data/mainPage";
import { StyledMain } from "./App.styles";
import Navbar from "./components/Navbar/Navbar";
import SectionTopBar from "./components/SectionTopBar/SectionTopBar";
import PopularCategoryCard from "./components/Card/PopularCategoryCard";
import PopularProductCard from "./components/Card/PopularProductCard";
import Reviews from "./components/Reviews/Reviews";

function App() {
  const stockCards = stockCardData.map(
    ({ discount, image, info, price, lineThroughPrice }, idx) => (
      <StockCard
        key={idx}
        discount={discount}
        image={image}
        info={info}
        price={price}
        lineThroughPrice={lineThroughPrice}
      />
    )
  );
  const categoryCards = popularCategories.map(({ image, name }, idx) => (
    <PopularCategoryCard key={idx} name={name} imgName={image} />
  ));
  const productCards = popularProducts.map(({ img, name, price }, idx) => (
    <PopularProductCard key={idx} image={img} product={name} price={price} />
  ));
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
            <SectionTopBar heading={"Акции"} />
            <div className="section-bottom">{stockCards}</div>
          </section>
          <section className="popular-categories">
            <SectionTopBar heading={"Популярные категории"} />
            <div className="section-bottom">{categoryCards}</div>
          </section>
          <section className="popular-products">
            <SectionTopBar heading={"Популярные продукты"} />
            <div className="section-bottom">{productCards}</div>
          </section>
          <section className="popular-brands">
            <div className="section-bottom"></div>
          </section>
          <section className="reviews">
            <Reviews />
          </section>
        </StyledMain>
      </Container>
    </div>
  );
}

export default App;
