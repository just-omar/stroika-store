import styled from "styled-components";

export const StyledMain = styled.main`
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
  .reviews {
    margin-bottom: 20rem;
    background-color: #f6f6f6;
    padding: 80px 0;
    position: relative;
  }
`;
