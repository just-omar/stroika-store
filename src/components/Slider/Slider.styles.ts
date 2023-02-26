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
    /* flex-grow: 1; */
    /* text-align: center; */
    /* border: 5px solid black; */
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
  .item-1 {
    background: url("slider/slider_1.jpg");
  }
  .item-2 {
    background: url("slider/slider_2.jpg");
  }
  .item-3 {
    background-color: green;
  }
`;
