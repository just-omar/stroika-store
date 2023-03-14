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
    background-color: #f6f6f6;
    padding: 80px 0;
  }

  /* margin-bottom: 20rem; */
`;
export const AboutCompany = styled.section`
  height: 456px;
  width: 1360px;
  background-image: url("./main-page/about-company-image.png");
  background-repeat: no-repeat;
  margin: 0 -100px;
  position: relative;
  margin-top: 40px;
  .info {
    width: 670px;

    color: #2f323a;
    position: absolute;
    top: 88px;
    left: 198px;
    h2 {
      font-weight: 600;
      font-size: 34px;
    }
    p {
      margin-top: 20px;
      font-weight: 400;
      font-size: 16px;
    }
  }
`;
