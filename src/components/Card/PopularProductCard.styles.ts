import styled from "styled-components";

export const StyledPopularProductCard = styled.div`
  border: 1px solid #e8e9ea;
  width: 278px;
  height: 416px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 16px;
    font-size: 16px;
    line-height: 150%;
    width: 246px;
    height: 72px;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    color: #171b24;
    width: 246px;
    height: 28px;
    margin-bottom: 16px;
  }
  button {
    width: 246px;
    height: 48px;

    /* Main/FDF074 */
    border: none;
    background: #fcec41;
    span {
      font-weight: 500;
      font-size: 18px;
      line-height: 136%;
    }
  }
`;
