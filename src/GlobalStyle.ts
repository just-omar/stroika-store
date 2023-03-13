import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Manrope', sans-serif;
    }
   
`;

export const Container = styled.div`
  max-width: calc(1440px - 2 * 140px);
  margin: 0 auto;
  /* border: 1px solid black; */
  /* position: relative; */
`;
