import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";

const Wrapper = styled.div`
  height: 100vh;

  header {
    position: fixed;
    width: 25vw;
    height: 100vh;
  }

  article {
    margin-left: 25vw;
    padding: 15px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

export default App;
