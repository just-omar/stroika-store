import StockCard from "./components/Card/StockCard";

import Slider from "./components/Slider/Slider";
import { Container } from "./GlobalStyle";
import {
  popularBrandImages,
  popularCategories,
  popularProducts,
  reviewsData,
  stockCardData,
} from "./data/mainPage";
import { StyledMain } from "./App.styles";
import Navbar from "./components/Navbar/Navbar";
import SectionTopBar from "./components/SectionTopBar/SectionTopBar";
import PopularCategoryCard from "./components/Card/PopularCategoryCard";
import PopularProductCard from "./components/Card/PopularProductCard";
import Review from "./components/Review/Review";
import {
  Arrows,
  Bottom,
  BottomWrapper,
  Top,
} from "./components/Review/Review.styles";
import ReviewSlider from "./components/Slider/ReviewSlider";

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
  const brands = popularBrandImages.map((v, idx) => (
    <img key={idx} className="brand" src={`main-page/brand/${v}`}></img>
  ));

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <StyledMain>
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
          <section>
            <SectionTopBar heading={"Акции"} />
            <div className="section-bottom">{stockCards}</div>
          </section>
          <section>
            <SectionTopBar heading={"Популярные категории"} />
            <div className="section-bottom">{categoryCards}</div>
          </section>
          <section>
            <SectionTopBar heading={"Популярные продукты"} />
            <div className="section-bottom">{productCards}</div>
          </section>
          <section className="popular-brands">
            <SectionTopBar heading={"Популярные бренды"} />
            <div className="section-bottom">{brands}</div>
          </section>
        </Container>

        <ReviewSlider />
      </StyledMain>
    </div>
  );
}

export default App;
