import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: 600;
    font-size: 34px;
    line-height: 130%;
  }
  margin-bottom: 20px;
`;

export const Arrows = styled.div`
  display: flex;
  gap: 12px;
  img {
    border: 1px solid #d1d1d3;
    padding: 14px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;

  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
`;
export const BottomWrapper = styled.div`
  position: relative;
  height: 365px;
  width: 100%;
  overflow: hidden;
`;
export const ReviewCard = styled.div`
  padding: 24px;
  width: 376px;
  background-color: #ffffff;

  .top {
    display: flex;
    align-items: center;
    position: relative;
    .name {
      margin-left: 12px;
    }
    .quotes {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .text {
    margin-top: 12px;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 24px;
  }
  .date {
    color: #8b8d92;
    font-size: 15px;
  }
`;
