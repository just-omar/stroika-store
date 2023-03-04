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
