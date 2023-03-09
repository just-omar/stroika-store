import styled from "styled-components";

export const StyledMain = styled.main`
  * {
    /* border: 1px solid black; */
  }
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 80px;
  .section-bottom {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .popular-brands {
    .brand {
      width: 180px;
      height: 124px;
      border: 1px solid #e8e9ea;
    }
  }
`;
