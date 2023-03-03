import styled from "styled-components";

export const StyledSlider = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: center;
  /* border: 3px dashed green; */
  * {
    /* border: 2px solid magenta;
    padding: 5px; */
  }
  .main-container {
    position: relative;

    width: 1360px;
    height: 420px;
    margin: 0 -100px;
    .arrows {
      position: absolute;
      right: 100px;
      bottom: 40px;
      display: flex;
      gap: 8px;
      button {
        height: 52px;
        width: 52px;
        border-radius: 0px;
        padding: 14px;
        cursor: pointer;
        border: 1px solid #d1d1d3;
      }
    }
    .window {
      height: 100%;
      width: 100%;
      /* overflow: scroll; */
      overflow: hidden;
      .all-pages-container {
        height: 100%;
        display: flex;

        transition: translate;
        transition-property: transform;
        transition-duration: 300ms;
        transition-timing-function: ease-in-out;
      }
    }
  }
  .item {
    font-size: 40px;
    user-select: none;

    .info {
      /* border: 3px solid black; */
      * {
        /* border: 1px solid black; */
      }
      height: 340px;
      width: 570px;
      margin-left: 100px;
      margin-top: 40px;
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      h1 {
        font-size: 48px;
        line-height: 58px;
      }
      p {
        font-size: 19px;
        /* word-wrap: break-word;
        white-space: normal; */
        font-weight: 400;
        line-height: 140%;
        color: #454950;
      }
      button {
        padding: 12px 24px;
        border: none;
        background: #fcec41;
        span {
          font-size: 18px;
        }
      }
    }
  }
  .item-1 {
    background: url("main-page/slider/slider_1.jpg");
  }
  .item-2 {
    background: url("main-page/slider/slider_2.jpg");
  }
  .item-3 {
    background-color: green;
  }
`;
