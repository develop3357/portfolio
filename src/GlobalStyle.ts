import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: sans-serif;
    background-color: ${(props) => props.theme.Background};
    color: ${(props) => props.theme.WhiteBlackColor};
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
