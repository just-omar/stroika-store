import styled from "styled-components";

export const StyledMain = styled.main`
  * {
    /* border: 1px solid black; */
  }
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
