import styled from "styled-components";
import NameCard from "../components/NameCard";
import NameCardModel from "../models/NameCardModel";

const Article = styled.article`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Introduce() {
  return (
    <Article>
      <NameCard nameCard={NameCardModel} />
    </Article>
  );
}

export default Introduce;
