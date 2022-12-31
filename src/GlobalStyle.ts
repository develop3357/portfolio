import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url(https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/fira_code.min.css);

  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Fira Code', sans-serif;
    background-color: ${(props) => props.theme.Background};
    color: ${(props) => props.theme.WhiteBlackColor};
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.LinksColor};
  }
`;
