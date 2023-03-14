import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: #2f323a;
  color: white;
  display: flex;
  flex-direction: column;

  .top-wrapper {
    padding: 40px 0;
    display: flex;
    gap: 152px;

    .left {
      display: flex;
      flex-direction: column;
    }
    .right {
      min-width: 768px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .col {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
    }

    img {
      margin-right: 10px;
    }

    .info {
      display: flex;
      align-items: center;
      margin-top: 23px;
      margin-bottom: 16px;
    }
    .location {
      display: flex;
      align-items: center;
    }

    a {
      display: block;
      color: #e8e9ea;
      text-decoration: none;
    }
  }
  .line {
    height: 1px;
    background: #5d6066;
  }
  .bottom-wrapper {
    margin-top: 16px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #d1d1d3;
    }
    .name {
      min-width: 278px;
    }
    .cards {
      img {
        vertical-align: middle;
      }
      img:not(:last-child) {
        margin-right: 16px;
      }
    }
  }
`;
