import { Outlet, ScrollRestoration } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import {
  navWidthVw,
  navMinWidthPx,
  fixedMarginWidth,
  hideNavWidthPx,
} from "./GlobalStyle";

const Wrapper = styled.div`
  header {
    position: fixed;
    width: ${navWidthVw}vw;
    min-width: ${navMinWidthPx}px;
    min-height: 100vh;
  }

  article {
    margin-left: ${navWidthVw}vw;
    min-height: 100vh;
  }

  // 좁은 사이즈: 네비바 폭 고정
  @media screen and (max-width: ${fixedMarginWidth}px) {
    article {
      margin-left: ${navMinWidthPx}px;
    }
  }

  // 더 좁은 사이즈: 네비바 없어짐
  @media screen and (max-width: ${hideNavWidthPx}px) {
    header {
      left: ${-navMinWidthPx}px;
    }

    article {
      margin-left: 0;
      padding-top: 64px;
      min-height: calc(100vh - 64px);
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </Wrapper>
  );
}

export default App;
