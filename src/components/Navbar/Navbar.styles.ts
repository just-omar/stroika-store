import styled from "styled-components";

export const StyledNavbar = styled.nav`
  .banner-background {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 42px;
    background-color: #f6f6f6;
  }
`;

export const NavTop = styled.div`
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    gap: 10.5px;
  }
  .right {
    &__list {
      list-style-type: none;
      display: flex;
      gap: 24px;
    }
  }
`;

export const NavMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  .catalog {
    width: 144px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: #fcec41;
    height: 48px;
    border: none;
    p {
      font-size: 18px;
    }
  }
  .right {
    display: flex;
    .search {
      position: relative;
      input {
        height: 48px;
        width: 444px;
        border-radius: 0px;
        margin: 0 16px;
        background-color: #f6f6f6;
        border: none;
        border-bottom: 1px solid #d1d1d3;
      }
      img {
        position: absolute;
        right: 32px;
        top: 12px;
      }
    }
    &__box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        margin-bottom: 2px;
      }
      p {
        text-align: center;
        font-size: 15px;
        min-width: 82px;
      }
    }
  }
`;

export const NavBottom = styled.div`
  margin: 10px 0;
  ul {
    list-style-type: none;
    display: flex;
    gap: 30px;
    a {
      text-decoration: none;
      font-size: 16px;
      line-height: 24px;
      color: #454950;
    }
  }
`;
