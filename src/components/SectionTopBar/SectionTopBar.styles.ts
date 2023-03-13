import styled from "styled-components";

export const StyledSectionTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  h2 {
    font-size: 34px;
    line-height: 44.2px;
  }
  button {
    background: #ffffff;
    border: 1px solid #d1d1d3;
    padding: 12px 16px 12px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      font-size: 18px;
      color: #171b24;
    }
  }
`;
