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
  ::selection {
    background: ${(props) => props.theme.SelectionBackground};
    color: ${(props) => props.theme.VariablesColor}
  }
`;

/**
 * 가로가 넓을 때 네비바의 너비 (vw)
 */
export const navWidthVw = 25;
/**
 * 네비바의 최소 너비 (px)
 */
export const navMinWidthPx = 280;
/**
 * 네비바가 최소 너비로 변하기 시작하는는 화면 너비
 * navWidthVw, navMinWidthPx로 계산됨
 */
export const fixedMarginWidth = (navMinWidthPx / navWidthVw) * 100;
/**
 * 네비바를 숨기기 시작할 최소 화면 너비 (px)
 */
export const hideNavWidthPx = 720;
