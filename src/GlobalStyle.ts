import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${(props) => props.theme.Background};
    line-height: 1.2;
    overflow-x: hidden;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;
